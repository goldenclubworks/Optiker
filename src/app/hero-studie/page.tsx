import { Header } from "@/components/site/Header";
import { CinematicHero } from "@/components/hero/CinematicHero";

export const metadata={robots:{index:false,follow:false}};
export default async function HeroStudiePage({searchParams}:{searchParams:Promise<{render?:string;view?:string}>}) {
  const params=await searchParams;
  const capture=params.render==='1';
  const initialView=Math.min(2,Math.max(0,Number(params.view)||0));
  return <>{!capture&&<Header />}<main id="main-content"><CinematicHero initialView={initialView} capture={capture}/></main></>;
}
