import * as THREE from "three";
import { createEyewearModel, MODEL_PASS } from "./model";

export type HeroScene = { setView: (progress: number, immediate?: boolean) => void; setPointer: (x: number,y: number) => void; setVisible: (visible: boolean) => void; dispose: () => void };
export const HERO_VIEWS = [
  { camera: [5.4, 3.7, 11.5], target: [0,.05,-1.2] },
  { camera: [1.3, .7, 8.4], target: [.25,.12,-.1] },
  { camera: [5.3, 1.5, 6.2], target: [1.8,.4,0] },
];

export async function createHeroScene(host: HTMLElement, onReady: () => void, initialView=0): Promise<HeroScene> {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color("#e9e2d6");
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.18;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.VSMShadowMap;
  renderer.shadowMap.autoUpdate=false;renderer.shadowMap.needsUpdate=true;
  renderer.info.autoReset=false;
  renderer.domElement.setAttribute("aria-hidden", "true");
  renderer.domElement.dataset.stage = String(MODEL_PASS);
  host.appendChild(renderer.domElement);
  const camera = new THREE.PerspectiveCamera(32, 1, .05, 80);
  const loader=new THREE.TextureLoader();
  const shopTextures:THREE.Texture[]=[];
  const loaded=await Promise.allSettled(['/images/schorcht/start03.jpg','/images/schorcht/start05.jpg'].map(url=>loader.loadAsync(url)));
  for(const result of loaded)if(result.status==='fulfilled')shopTextures.push(result.value);
  if(loaded.some(result=>result.status==='rejected')){shopTextures.forEach(texture=>texture.dispose());renderer.dispose();renderer.domElement.remove();throw new Error('Hero reflection texture unavailable');}
  shopTextures.forEach(texture=>{texture.colorSpace=THREE.SRGBColorSpace;texture.anisotropy=Math.min(4,renderer.capabilities.getMaxAnisotropy());});
  const model = createEyewearModel(shopTextures);
  let modelTriangles=0;model.root.traverse(object=>{if(object instanceof THREE.Mesh)modelTriangles+=(object.geometry.index?.count||object.geometry.getAttribute('position').count)/3;});
  renderer.domElement.dataset.modelTriangles=String(modelTriangles);
  model.root.rotation.set(-.05,-.08,-.2); scene.add(model.root);
  const studio=new THREE.Scene();studio.background=new THREE.Color('#a6a094');
  function lightCard(w:number,h:number,color:string,energy:number,position:[number,number,number]) {const material=new THREE.MeshBasicMaterial({color:new THREE.Color(color).multiplyScalar(energy),side:THREE.DoubleSide});const card=new THREE.Mesh(new THREE.PlaneGeometry(w,h),material);card.position.set(...position);card.lookAt(0,0,0);studio.add(card);}
  lightCard(8,4,'#fff6e9',4,[-3,5,4]);lightCard(1,8,'#ffffff',4,[4,1,3]);lightCard(7,2,'#dbb5bc',2,[0,1,-4]);
  const pmrem=new THREE.PMREMGenerator(renderer);const environment=pmrem.fromScene(studio,.035);scene.environment=environment.texture;pmrem.dispose();
  studio.traverse(object=>{if(object instanceof THREE.Mesh){object.geometry.dispose();(object.material as THREE.Material).dispose();}});
  const key = new THREE.DirectionalLight("#fff5e5", 2); key.position.set(-3,6,5); key.castShadow = true; key.shadow.mapSize.set(1024,1024); key.shadow.camera.left=-8;key.shadow.camera.right=8;key.shadow.camera.top=8;key.shadow.camera.bottom=-8;
  key.shadow.bias=-.0005;key.shadow.normalBias=.02;key.shadow.camera.near=.5;key.shadow.camera.far=25;
  key.shadow.radius=5;key.shadow.blurSamples=8;
  scene.add(key); scene.add(new THREE.HemisphereLight("#ffffff", "#716358", .6));
  const rimLight=new THREE.DirectionalLight('#c35c6c',1.8);rimLight.position.set(2,2,-4);scene.add(rimLight);
  const edgeLight=new THREE.DirectionalLight('#fff9e8',1.1);edgeLight.position.set(5,1,2);scene.add(edgeLight);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(100,100), new THREE.ShadowMaterial({ color: "#655345", opacity: .2 }));
  floor.rotation.x = -Math.PI/2; floor.position.y=-1.55;floor.receiveShadow=true; scene.add(floor);
  let width = 1, height = 1, view = initialView, destination = initialView, visible = true, disposed = false, raf = 0, lastTime=0, renderCount=0, ready=false;
  let pointerX = 0, pointerY = 0;
  const target = new THREE.Vector3();
  const observer = new ResizeObserver(([entry]) => {
    width=entry.contentRect.width; height=entry.contentRect.height;
    if(width<1||height<1)return;
    const compact=width<=800;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio,compact?1.25:1.5));
    renderer.setSize(width,height);
    // Match the cover composition of the desktop and mobile fallback pictures.
    const sourceWidth=compact?390:1440,sourceHeight=compact?360:1000;
    const cover=Math.max(width/sourceWidth,height/sourceHeight);
    camera.zoom=cover*sourceHeight/height;
    camera.setViewOffset(width,height,compact?0:-sourceWidth*.035*cover,compact?0:-sourceHeight*.015*cover,width,height);
    wake();
  });
  observer.observe(host);
  function wake(){if(!raf&&!disposed&&visible)raf=requestAnimationFrame(draw);}
  function draw(time:number) {
    raf=0;
    if(disposed||!visible)return;
    const delta=Math.min(50,lastTime?time-lastTime:16.7);lastTime=time;
    if(visible) {
      view += (destination-view)*(1-Math.exp(-delta*.009));
      if(Math.abs(view-destination)<.001)view=destination;
      const index = Math.min(1,Math.floor(view)); const t = view-index;
      const a=HERO_VIEWS[index],b=HERO_VIEWS[index+1];
      camera.position.set(THREE.MathUtils.lerp(a.camera[0],b.camera[0],t),THREE.MathUtils.lerp(a.camera[1],b.camera[1],t),THREE.MathUtils.lerp(a.camera[2],b.camera[2],t));
      target.set(THREE.MathUtils.lerp(a.target[0],b.target[0],t),THREE.MathUtils.lerp(a.target[1],b.target[1],t),THREE.MathUtils.lerp(a.target[2],b.target[2],t));
      if(width<=800)camera.position.sub(target).multiplyScalar(.9).add(target);
      camera.lookAt(target);
      const rotationY=-.08+pointerX*.1,rotationX=-.05+pointerY*.055;
      model.root.rotation.y=THREE.MathUtils.lerp(model.root.rotation.y,rotationY,.18);model.root.rotation.x=THREE.MathUtils.lerp(model.root.rotation.x,rotationX,.18);
      model.setReflection(.12+Math.max(0,1-Math.abs(view-1))*.2);
      renderer.info.reset();
      const started=performance.now();
      renderer.render(scene,camera);
      if(!ready){ready=true;onReady();}
      Object.assign(renderer.domElement.dataset,{calls:String(renderer.info.render.calls),triangles:String(renderer.info.render.triangles),frames:String(++renderCount),renderMs:(performance.now()-started).toFixed(1)});
      if(Math.abs(view-destination)>.001||Math.abs(model.root.rotation.y-rotationY)>.0001||Math.abs(model.root.rotation.x-rotationX)>.0001)wake();
    }
  }
  wake();
  return {
    setView(progress, immediate=false){const next=THREE.MathUtils.clamp(progress,0,2);if(next===destination&&!immediate)return;destination=next;if(immediate)view=destination;wake();},
    setPointer(x,y){pointerX=x;pointerY=y;wake();},
    setVisible(value){visible=value;lastTime=0;if(value)wake();else {cancelAnimationFrame(raf);raf=0;}},
    dispose(){disposed=true;cancelAnimationFrame(raf);observer.disconnect();model.dispose();shopTextures.forEach(texture=>texture.dispose());environment.dispose();key.shadow.map?.dispose();floor.geometry.dispose();(floor.material as THREE.Material).dispose();renderer.dispose();renderer.domElement.remove();},
  };
}
