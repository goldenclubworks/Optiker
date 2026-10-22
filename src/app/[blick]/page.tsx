import { notFound, permanentRedirect } from "next/navigation";
import { blickPages } from "@/content/blick";
export function generateStaticParams(){return Object.keys(blickPages).map(blick=>({blick}));}
export default async function Page({params}:{params:Promise<{blick:string}>}) {
 const {blick}=await params;
 if(!Object.hasOwn(blickPages,blick))notFound();
 permanentRedirect(`/#${blick==='ruckblick'?'geschichte':blick}`);
}
