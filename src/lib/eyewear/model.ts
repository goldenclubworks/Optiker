import * as THREE from "three";
import { mergeVertices } from "three/addons/utils/BufferGeometryUtils.js";

export const MODEL_PASS: number = 7;
export type EyewearModel = { root: THREE.Group; materials: THREE.Material[]; setReflection: (strength:number) => void; dispose: () => void };

export function frameContour(width: number, height: number, radius: number) {
  const x = -width / 2, y = -height / 2;
  const shape = new THREE.Shape();
  shape.moveTo(x + radius, y);
  shape.lineTo(x + width - radius, y);
  shape.quadraticCurveTo(x + width, y, x + width, y + radius);
  shape.lineTo(x + width, y + height - radius);
  shape.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  shape.lineTo(x + radius, y + height);
  shape.quadraticCurveTo(x, y + height, x, y + height - radius);
  shape.lineTo(x, y + radius);
  shape.quadraticCurveTo(x, y, x + radius, y);
  return shape;
}

/** Sweep a softly rectangular acetate section along a temple centerline. */
function templeGeometry(side: number, inset = false) {
  const path = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0,0,0),new THREE.Vector3(side*.11,.01,-.7),
    new THREE.Vector3(side*.16,-.04,-2.3),new THREE.Vector3(side*.08,-.22,-3.7),
    new THREE.Vector3(-side*.12,-.67,-4.28),
  ]);
  const section = frameContour(inset ? .055 : .19, inset ? .08 : .3, inset ? .02 : .055).getPoints(3);
  const points: number[] = [], indices: number[] = [], uvs: number[] = [];
  const n=section.length, steps=48;
  for(let i=0;i<=steps;i++) {
    const t=i/steps,p=path.getPoint(t),taper=1-.25*t;
    for(const q of section) { points.push(p.x+q.x*taper,p.y+q.y*taper,p.z);uvs.push(t,q.y); }
  }
  for(let i=0;i<steps;i++)for(let j=0;j<n-1;j++) {const a=i*n+j,b=a+n;indices.push(a,b,a+1,b,b+1,a+1);}
  for(const end of [0,steps*n])for(let j=1;j<n-2;j++)indices.push(end,end+j,end+j+1);
  const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(points,3));geometry.setAttribute('uv',new THREE.Float32BufferAttribute(uvs,2));geometry.setIndex(indices);geometry.computeVertexNormals();return geometry;
}

function ringGeometry(w: number,h: number,holeW: number,holeH: number,depth: number,bevel = .055) {
  const shape=frameContour(w,h,.38);
  const holeRadius=w-holeW<.1 ? .38-(w-holeW)/2 : .3;
  shape.holes.push(new THREE.Path(frameContour(holeW,holeH,holeRadius).getPoints(32).reverse()));
  const geometry=new THREE.ExtrudeGeometry(shape,{depth,bevelEnabled:bevel>0,bevelSize:bevel,bevelThickness:bevel,bevelSegments:4,curveSegments:24,steps:1});
  geometry.translate(0,0,-depth/2);
  // Weld bevel strips before smoothing so macro highlights do not expose facet seams.
  geometry.deleteAttribute('normal');geometry.deleteAttribute('uv');
  const smooth=mergeVertices(geometry,.00001);geometry.dispose();smooth.computeVertexNormals();
  const position=smooth.getAttribute('position'),uv:number[]=[];
  for(let i=0;i<position.count;i++)uv.push(position.getX(i)/w+.5,position.getY(i)/h+.5);
  smooth.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));return smooth;
}

function lensGeometry() {
  const contour=frameContour(2.17,1.45,.31).getSpacedPoints(64).slice(0,64);
  const positions:number[]=[],uvs:number[]=[],indices:number[]=[];
  const rings=12,n=contour.length;
  for(let face=0;face<2;face++) {
    const offset=positions.length/3;
    positions.push(0,0,face===0?.18:.125);uvs.push(.5,.5);
    for(let r=1;r<=rings;r++)for(const q of contour) {
      const x=q.x*r/rings,y=q.y*r/rings;
      const curvature=.075*(1-(x/1.15)**2*.5-(y/.8)**2*.5);
      positions.push(x,y,.105+curvature-face*.055);uvs.push(x/2.17+.5,y/1.45+.5);
    }
    for(let j=0;j<n;j++) {const a=offset+1+j,b=offset+1+(j+1)%n;indices.push(...(face===0?[offset,a,b]:[offset,b,a]));}
    for(let r=0;r<rings-1;r++)for(let j=0;j<n;j++) {const a=offset+1+r*n+j,b=offset+1+r*n+(j+1)%n,c=a+n,d=b+n;indices.push(...(face===0?[a,c,b,b,c,d]:[a,b,c,b,d,c]));}
  }
  const back=1+rings*n;
  for(let j=0;j<n;j++){const a=1+(rings-1)*n+j,b=1+(rings-1)*n+(j+1)%n;indices.push(a,b,a+back,b,b+back,a+back);}
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uvs,2));g.setIndex(indices);g.computeVertexNormals();return g;
}

export function createEyewearModel(shopTextures:THREE.Texture[]=[]): EyewearModel {
  const root = new THREE.Group();
  root.name = "schorcht-eyewear";
  const material = new THREE.MeshPhysicalMaterial({ color: '#342a28', roughness: .12, metalness: 0, transmission:.2,thickness:.28,ior:1.48,clearcoat:1,clearcoatRoughness:.07,envMapIntensity:1.2 });
  const bordeaux=new THREE.MeshPhysicalMaterial({color:'#642838',roughness:.2,transmission:.16,thickness:.2,ior:1.48,clearcoat:1,clearcoatRoughness:.14});
  const metal=new THREE.MeshStandardMaterial({color:'#bcb6a6',metalness:1,roughness:.23,envMapIntensity:1.4});
  const lensMaterial=new THREE.MeshPhysicalMaterial({color:'#ecf0e8',roughness:.035,metalness:0,transmission:1,thickness:.055,ior:1.51,envMapIntensity:.8});
  const materials: THREE.Material[] = [material,bordeaux,metal,lensMaterial];
  // Independent, deterministic channels: faint acetate lamination, polish and micro normal.
  // These describe new polished material, rather than baking photographic lighting into albedo.
  const textures:THREE.Texture[]=[];
  function surfaceMap(kind:'color'|'roughness'|'normal') {
    const size=128,data=new Uint8Array(size*size*4);
    for(let y=0;y<size;y++)for(let x=0;x<size;x++) {
      const i=(y*size+x)*4;
      const noise=((Math.sin(x*127.1+y*311.7+(kind==='normal'?74:12))*43758.5453)%1+1)%1;
      if(kind==='color') {const v=246+Math.sin(y*.14+Math.sin(x*.03)*2)*5;data[i]=v;data[i+1]=v;data[i+2]=v-1;}
      else if(kind==='roughness') {const v=235+noise*17;data[i]=v;data[i+1]=v;data[i+2]=v;}
      else {data[i]=127+noise*2;data[i+1]=127+Math.sin(y*1.7+x*.2);data[i+2]=255;}
      data[i+3]=255;
    }
    const texture=new THREE.DataTexture(data,size,size,THREE.RGBAFormat);texture.wrapS=texture.wrapT=THREE.RepeatWrapping;texture.repeat.set(2,2);texture.magFilter=THREE.LinearFilter;texture.minFilter=THREE.LinearMipmapLinearFilter;texture.generateMipmaps=true;texture.needsUpdate=true;textures.push(texture);return texture;
  }
  const albedo=surfaceMap('color'),roughness=surfaceMap('roughness'),normal=surfaceMap('normal');albedo.colorSpace=THREE.SRGBColorSpace;
  for(const acetate of [material,bordeaux]) {acetate.map=albedo;acetate.roughnessMap=roughness;acetate.normalMap=normal;acetate.normalScale.set(.045,.045);}
  metal.roughnessMap=roughness;metal.normalMap=normal;metal.normalScale.set(.035,.015);
  const slotMaterial=new THREE.MeshStandardMaterial({color:'#302f2d',roughness:.35,metalness:.8});materials.push(slotMaterial);
  const nodes: Record<string, THREE.Object3D> = {};
  const meshes: Record<string, THREE.Mesh> = {};
  const reflectionMaterials:THREE.ShaderMaterial[]=[];

  function part(name: string, geometry: THREE.BufferGeometry, mat: THREE.Material = material, parent: THREE.Object3D = root) {
    const pivot = new THREE.Group(); pivot.name = name;
    const mesh = new THREE.Mesh(geometry, mat); mesh.name = name + "-mesh";
    mesh.castShadow = true; mesh.receiveShadow = true;
    pivot.add(mesh); parent.add(pivot); nodes[name] = pivot; meshes[name] = mesh;
    return pivot;
  }

  for (const side of [-1, 1]) {
    const name = side < 0 ? "left" : "right";
    const geometry = ringGeometry(2.65,1.9,2.14,1.42,.17);
    const rim = part("rim-" + name, geometry); rim.position.x = side * 1.5;
    const accent=part('rim-inlay-'+name,ringGeometry(2.53,1.78,2.505,1.755,.008,.005),metal);accent.position.set(side*1.5,0,.155);
    const backing=part('rim-inner-'+name,ringGeometry(2.64,1.89,2.14,1.42,.04,.025),bordeaux);backing.position.set(side*1.5,0,-.115);
    const lens=part('lens-'+name,lensGeometry(),lensMaterial);lens.position.x=side*1.5;lens.children[0].castShadow=false;
    if(shopTextures.length) {
      const reflection=new THREE.ShaderMaterial({
        transparent:true,depthWrite:false,side:THREE.FrontSide,
        uniforms:{shop:{value:shopTextures[side<0?0:1]},strength:{value:.38}},
        vertexShader:`varying vec2 vUv; varying vec3 vNormalWorld; varying vec3 vPositionWorld;
          void main(){vUv=uv;vNormalWorld=normalize(mat3(modelMatrix)*normal);vec4 world=modelMatrix*vec4(position,1.0);vPositionWorld=world.xyz;gl_Position=projectionMatrix*viewMatrix*world;}`,
        fragmentShader:`uniform sampler2D shop;uniform float strength;varying vec2 vUv;varying vec3 vNormalWorld;varying vec3 vPositionWorld;
          void main(){
            vec3 n=normalize(vNormalWorld);vec3 eye=normalize(cameraPosition-vPositionWorld);
            float fresnel=pow(1.0-abs(dot(n,eye)),2.5);
            vec2 p=vUv-.5;vec2 uv=vec2(1.0-vUv.x,vUv.y)+p*dot(p,p)*.23+n.xy*.09+eye.xy*.075;
            uv=clamp(uv,.015,.985);
            vec3 photo=texture2D(shop,uv).rgb;
            float luma=dot(photo,vec3(.2126,.7152,.0722));photo=mix(vec3(luma),photo,.74);
            float diagonal=vUv.y+vUv.x*.21;
            float glint=exp(-pow((diagonal-.91)/.025,2.0))*.52+exp(-pow((diagonal-.98)/.006,2.0))*.4;
            vec3 color=mix(photo,vec3(.98,.96,.9),glint);
            float alpha=clamp(strength+fresnel*.32+glint*.22,0.0,.66);
            gl_FragColor=vec4(color,alpha);
            #include <tonemapping_fragment>
            #include <colorspace_fragment>
          }`,
      });reflectionMaterials.push(reflection);materials.push(reflection);
      const layer=part('reflection-'+name,lensGeometry(),reflection);layer.position.set(side*1.5,0,.004);const mesh=layer.children[0] as THREE.Mesh;mesh.castShadow=false;mesh.receiveShadow=false;mesh.renderOrder=3;
    }
    for(const x of [-.065,.065]) {const rivet=part('rivet-'+name+'-'+x,new THREE.SphereGeometry(.035,12,8),metal);rivet.scale.set(1,.7,.3);rivet.position.set(side*2.65+x,.61,.151);}
  }
  const bridgeCurve = new THREE.QuadraticBezierCurve3(new THREE.Vector3(-.32,.37,0), new THREE.Vector3(0,.57,.06), new THREE.Vector3(.32,.37,0));
  part("bridge", new THREE.TubeGeometry(bridgeCurve, 24, .115, 12, false));
  for(const side of [-1,1]) {
    const name=side<0?'left':'right';
    const hinge=new THREE.Group();hinge.name='hinge-'+name;hinge.position.set(side*2.78,.56,-.08);root.add(hinge);nodes[hinge.name]=hinge;
    part('hinge-plate-'+name,new THREE.BoxGeometry(.18,.25,.38),metal,hinge);
    const barrel=part('hinge-barrel-'+name,new THREE.CylinderGeometry(.095,.095,.29,16),metal,hinge);barrel.position.z=-.22;
    const temple=part('temple-'+name,templeGeometry(side),bordeaux,hinge);temple.position.z=-.3;
    const core=part('core-'+name,templeGeometry(side,true),metal,hinge);core.position.z=-.3;
    for(const y of [-.13,.13]) {const screw=part('screw-'+name+'-'+y,new THREE.CylinderGeometry(.047,.047,.027,16),metal,hinge);screw.position.set(0,y,-.22);const slot=part('screw-slot-'+name+'-'+y,new THREE.BoxGeometry(.055,.003,.009),slotMaterial,hinge);slot.position.set(0,y+Math.sign(y)*.014,-.22);slot.rotation.y=.4;}
  }
  root.userData.sculptRuntime = {
    nodes,meshes,
    sockets:{'left-hinge':{node:'hinge-left',position:[-2.78,.56,-.08],axis:[0,1,0]},'right-hinge':{node:'hinge-right',position:[2.78,.56,-.08],axis:[0,1,0]},bridge:{node:'bridge',position:[0,.45,0]}},
    colliders:{root:{type:'box',size:[5.85,2,4.5]},'rim-left':{type:'box',size:[2.76,2.01,.3]},'rim-right':{type:'box',size:[2.76,2.01,.3]},'temple-left':{type:'capsule',radius:.16,length:4.4},'temple-right':{type:'capsule',radius:.16,length:4.4}},
    destructionGroups:{front:['rim-left','rim-right','bridge'],leftArm:['hinge-left','temple-left','core-left'],rightArm:['hinge-right','temple-right','core-right'],optics:['lens-left','lens-right']},
    setTempleFold:(angle:number)=>{nodes['hinge-left'].rotation.y=-angle;nodes['hinge-right'].rotation.y=angle;},
  };
  root.userData.stage = MODEL_PASS;
  return { root, materials, setReflection(strength){reflectionMaterials.forEach(mat=>mat.uniforms.strength.value=strength);},dispose() { root.traverse(object => { if (object instanceof THREE.Mesh) object.geometry.dispose(); }); materials.forEach(mat => mat.dispose());textures.forEach(texture=>texture.dispose()); } };
}
