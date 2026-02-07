import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { contact, openingHours, locationCta } from "@/content/site";

export function LocationCTA() {
    // Get today's hours
    const days = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
    const today = days[new Date().getDay()];
    const todayHours = openingHours.find((h) => h.day === today);

    return (
        <section className="section-padding">
            <div className="container-premium">
                <Card className="overflow-hidden border-border/40 bg-gradient-to-br from-background to-muted/50">
                    <CardContent className="p-0">
                        <div className="grid lg:grid-cols-2">
                            {/* Content */}
                            <div className="flex flex-col justify-center p-8 md:p-12">
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                    {locationCta.headline}
                                </h2>
                                <p className="mt-4 text-lg text-muted-foreground">
                                    {locationCta.subline}
                                </p>

                                {/* Info Items */}
                                <div className="mt-8 space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-brand/10">
                                            <MapPin className="h-5 w-5 text-red-brand" />
                                        </div>
                                        <div>
                                            <p className="font-medium">Adresse</p>
                                            <p className="text-muted-foreground">
                                                {contact.address.full}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-brand/10">
                                            <Phone className="h-5 w-5 text-red-brand" />
                                        </div>
                                        <div>
                                            <p className="font-medium">Telefon</p>
                                            <p className="text-muted-foreground">
                                                {contact.phoneDisplay}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-brand/10">
                                            <Clock className="h-5 w-5 text-red-brand" />
                                        </div>
                                        <div>
                                            <p className="font-medium">Heute geöffnet</p>
                                            <p className="text-muted-foreground">
                                                {todayHours?.hours || "—"}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* CTAs */}
                                <div className="mt-8 flex flex-wrap gap-3">
                                    <Button asChild>
                                        <Link href="/termin">Termin anfragen</Link>
                                    </Button>
                                    <Button variant="outline" asChild>
                                        <Link
                                            href={contact.googleMapsUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="gap-2"
                                        >
                                            <MapPin className="h-4 w-4" />
                                            Route planen
                                        </Link>
                                    </Button>
                                    <Button variant="outline" asChild>
                                        <Link href={`tel:${contact.phone}`} className="gap-2">
                                            <Phone className="h-4 w-4" />
                                            Anrufen
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="relative min-h-[300px] bg-muted lg:min-h-[400px]">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center p-8">
                                        <MapPin className="mx-auto h-12 w-12 text-muted-foreground/40" />
                                        <p className="mt-4 text-sm text-muted-foreground">
                                            Karte wird geladen...
                                        </p>
                                        <Button variant="link" asChild className="mt-2">
                                            <Link
                                                href={contact.googleMapsUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                In Google Maps öffnen
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
