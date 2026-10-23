"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import type { HeroScene } from "@/lib/eyewear/scene";

const views = [
  { name: "Nähe", image: "macro", caption: "Der Unterschied liegt im Detail." },
  { name: "Im Glas", image: "reflection", caption: "Ein ganzer Ort. In einem Augenblick." },
  { name: "Perspektive", image: "perspective", caption: "Für Ihren ganz eigenen Blick." },
];

export function CinematicHero({initialView=0,capture=false}:{initialView?:number;capture?:boolean}) {
  const sequence=useRef<HTMLDivElement>(null);
  const hero=useRef<HTMLElement>(null);
  const canvasHost=useRef<HTMLDivElement>(null);
  const scene=useRef<HeroScene|null>(null);
  const [active,setActive]=useState(initialView);
  const [ready,setReady]=useState(false);
  const [failed,setFailed]=useState(false);
  const [reduced,setReduced]=useState<boolean|null>(null);
  useEffect(()=>{
    const media=window.matchMedia('(prefers-reduced-motion: reduce)');
    const update=()=>setReduced(media.matches);
    update();media.addEventListener('change',update);
    return()=>media.removeEventListener('change',update);
  },[]);
  useEffect(()=>{
    if(!canvasHost.current||reduced===null)return;
    setReady(false);setFailed(false);
    const mobile=window.matchMedia('(max-width: 800px)').matches;
    const start=capture?initialView:mobile||reduced?2:initialView;
    setActive(start);
    if(reduced&&!capture)return;
    let cancelled=false;
    const host=canvasHost.current;
    const showFallback=()=>{setFailed(true);setReady(false);scene.current?.setVisible(false);};
    import('@/lib/eyewear/scene').then(({createHeroScene})=>{
      if(cancelled)return null;
      return createHeroScene(host,()=>{if(!cancelled)setReady(true);},start);
    }).then(instance=>{
      if(!instance)return;
      if(cancelled)instance.dispose();else {scene.current=instance;host.querySelector('canvas')?.addEventListener('webglcontextlost',showFallback);const bounds=host.getBoundingClientRect();instance.setVisible(!document.hidden&&bounds.bottom>0&&bounds.top<window.innerHeight);}
    }).catch(()=>{if(!cancelled)showFallback();});
    const observer=new IntersectionObserver(([entry])=>scene.current?.setVisible(entry.isIntersecting&&!document.hidden),{threshold:0});
    if(hero.current)observer.observe(hero.current);
    const visibility=()=>scene.current?.setVisible(!document.hidden&&!!hero.current&&hero.current.getBoundingClientRect().bottom>0);
    document.addEventListener('visibilitychange',visibility);
    return()=>{cancelled=true;observer.disconnect();document.removeEventListener('visibilitychange',visibility);host.querySelector('canvas')?.removeEventListener('webglcontextlost',showFallback);scene.current?.dispose();scene.current=null;};
  },[reduced,initialView,capture]);
  useEffect(()=>{
    if(capture||reduced!==false)return;
    let frame=0;
    const update=()=>{
      frame=0;
      if(window.innerWidth<=800||!sequence.current||!hero.current)return;
      const header=document.querySelector('header')?.getBoundingClientRect().height||96;
      const travel=sequence.current.offsetHeight-hero.current.offsetHeight;
      if(travel<=0)return;
      const progress=Math.min(2,Math.max(0,(header-sequence.current.getBoundingClientRect().top)/travel*2));
      scene.current?.setView(progress);
      setActive(Math.round(progress));
    };
    const scroll=()=>{if(!frame)frame=requestAnimationFrame(update);};
    window.addEventListener('scroll',scroll,{passive:true});window.addEventListener('resize',scroll);
    return()=>{window.removeEventListener('scroll',scroll);window.removeEventListener('resize',scroll);cancelAnimationFrame(frame);};
  },[capture,reduced]);
  function selectView(index:number){setActive(index);scene.current?.setView(index,!!reduced);}
  return <div className={`hero-sequence ${capture?'is-capture':''}`} ref={sequence} data-static={!!reduced||failed}>
    <section ref={hero} className={`cinematic-hero ${capture?'hero-capture':''}`} id="ueberblick" aria-label="Optik Schorcht – Sehen erleben">
      {!capture&&<picture className="hero-poster"><source media="(max-width:800px)" srcSet={`/images/hero/${views[active].image}-mobile.webp`}/>{/* Native picture selects the correct pre-rendered WebGL composition. */}<img src={`/images/hero/${views[active].image}.webp`} width="1440" height="1000" alt="" fetchPriority="high" /></picture>}
      <div ref={canvasHost} className={`hero-canvas ${ready&&!failed?'is-ready':''}`} onPointerMove={event=>{if(event.pointerType==='touch')return;const box=event.currentTarget.getBoundingClientRect();scene.current?.setPointer((event.clientX-box.left)/box.width-.5,(event.clientY-box.top)/box.height-.5);}} onPointerLeave={()=>scene.current?.setPointer(0,0)}/>
      <div className="hero-shade" aria-hidden="true"/>
      <div className="site-shell cinematic-content">
        <div className="hero-topline"><span>Ein eigener Stil.<br/>Ein neuer Blick.</span><span>Unabhängige Augenoptik<br/>Dresden. Seit 1936.</span></div>
        <h1><span className="hero-title-first">Sehen.</span><span className="hero-title-last">erleben.</span></h1>
        <div className="hero-invitation"><p>Für Ihre Augen.<br/>Und für alles, was Sie ausmacht.</p><Link href="/#termin" className="hero-booking">Zeit für Ihren Blick <span><ArrowUpRight size={19}/></span></Link></div>
      </div>
      <div className="site-shell hero-bottom-bar"><Link href="/#einblick" className="hero-explore"><ArrowDown size={16}/><span>Schorcht entdecken</span></Link><div className="hero-view-controls" aria-label="Perspektive der Brille wählen">{views.map((view,i)=><button key={view.name} onClick={()=>selectView(i)} aria-pressed={active===i}><span>0{i+1}</span>{view.name}</button>)}</div><span className="hero-scene-caption">{views[active].caption}</span></div>
    </section>
  </div>;
}
