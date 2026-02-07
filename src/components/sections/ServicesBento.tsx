import Link from "next/link";
import { Eye, Sparkles, CircleDot, Gem, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/content/site";
import { cn } from "@/lib/utils";

const iconMap = {
    Eye,
    Sparkles,
    CircleDot,
    Gem,
} as const;

export function ServicesBento() {
    return (
        <section className="section-padding">
            <div className="container-premium">
                {/* Section Header */}
                <div className="mb-12 max-w-2xl md:mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Unsere Leistungen
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Von der präzisen Messung bis zur perfekten Anpassung – alles unter
                        einem Dach.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => {
                        const Icon = iconMap[service.icon as keyof typeof iconMap];
                        const isLarge = index === 0;

                        return (
                            <Link
                                key={service.id}
                                href={service.href}
                                className={cn(
                                    "group",
                                    isLarge && "sm:col-span-2 lg:col-span-1 lg:row-span-2"
                                )}
                            >
                                <Card
                                    className={cn(
                                        "h-full border-border/40 transition-all duration-300",
                                        "hover:border-border hover:shadow-lg hover:-translate-y-0.5",
                                        isLarge && "bg-primary text-primary-foreground"
                                    )}
                                >
                                    <CardContent
                                        className={cn(
                                            "flex h-full flex-col p-6",
                                            isLarge && "justify-between min-h-[300px] lg:min-h-full"
                                        )}
                                    >
                                        <div>
                                            <div
                                                className={cn(
                                                    "mb-4 flex h-12 w-12 items-center justify-center rounded-xl",
                                                    isLarge ? "bg-white/10" : "bg-red-brand/10"
                                                )}
                                            >
                                                <Icon
                                                    className={cn(
                                                        "h-6 w-6",
                                                        isLarge ? "text-white" : "text-red-brand"
                                                    )}
                                                />
                                            </div>
                                            <h3
                                                className={cn(
                                                    "text-xl font-semibold",
                                                    isLarge && "text-2xl"
                                                )}
                                            >
                                                {service.title}
                                            </h3>
                                            <p
                                                className={cn(
                                                    "mt-2 text-muted-foreground",
                                                    isLarge && "text-primary-foreground/80"
                                                )}
                                            >
                                                {service.shortDescription}
                                            </p>
                                        </div>
                                        <div
                                            className={cn(
                                                "mt-6 flex items-center gap-2 text-sm font-medium",
                                                isLarge
                                                    ? "text-white/80"
                                                    : "text-muted-foreground group-hover:text-foreground"
                                            )}
                                        >
                                            <span>Mehr erfahren</span>
                                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
