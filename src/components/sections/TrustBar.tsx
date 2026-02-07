import { trustFeatures } from "@/content/site";

export function TrustBar() {
    return (
        <section className="relative border-y border-border/40 py-6 overflow-hidden bg-background">
            <div className="flex w-full overflow-hidden">
                {/* Infinite Scrolling Marquee */}
                <div className="flex animate-marquee whitespace-nowrap">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex items-center">
                            {trustFeatures.map((feature, index) => (
                                <div key={index} className="flex items-center px-4 md:px-8 lg:px-16">
                                    <span className="text-[10px] md:text-xs font-bold tracking-[0.15em] md:tracking-[0.2em] uppercase text-muted-foreground mr-2 md:mr-4">
                                        (0{index + 1})
                                    </span>
                                    <span className="text-sm md:text-xl lg:text-3xl font-light tracking-tight italic text-foreground opacity-80 hover:opacity-100 hover:text-red-brand transition-colors cursor-default">
                                        {feature.title}
                                    </span>
                                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-red-brand/50 ml-4 md:ml-8 lg:ml-16" />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Overlay Gradients for smooth fade out */}
            <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </section>
    );
}
