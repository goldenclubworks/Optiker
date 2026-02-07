"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Phone, MapPin, Mail, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { contact, appointmentOptions } from "@/content/site";
import { cn } from "@/lib/utils";

const formSchema = z.object({
    name: z.string().min(2, "Bitte gib deinen Namen ein"),
    phone: z.string().min(6, "Bitte gib deine Telefonnummer ein"),
    email: z.string().email("Ungültige E-Mail-Adresse").optional().or(z.literal("")),
    days: z.array(z.string()).min(1, "Bitte wähle mindestens einen Tag"),
    timeSlot: z.string().min(1, "Bitte wähle eine Tageszeit"),
    concern: z.string().min(1, "Bitte wähle ein Anliegen"),
    message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function TerminPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [selectedDays, setSelectedDays] = useState<string[]>([]);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            days: [],
            timeSlot: "",
            concern: "",
        },
    });

    const toggleDay = (day: string) => {
        const newDays = selectedDays.includes(day)
            ? selectedDays.filter((d) => d !== day)
            : [...selectedDays, day];
        setSelectedDays(newDays);
        setValue("days", newDays, { shouldValidate: true });
    };

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);

        try {
            // Send to API
            const response = await fetch("/api/termin", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setIsSuccess(true);
                toast.success("Danke! Wir melden uns zeitnah mit Terminvorschlägen.");
            } else {
                throw new Error("Submission failed");
            }
        } catch {
            // Fallback to mailto
            const subject = encodeURIComponent("Terminanfrage über Website");
            const body = encodeURIComponent(
                `Name: ${data.name}\n` +
                `Telefon: ${data.phone}\n` +
                `E-Mail: ${data.email || "Nicht angegeben"}\n` +
                `Wunschtage: ${data.days.join(", ")}\n` +
                `Tageszeit: ${data.timeSlot}\n` +
                `Anliegen: ${data.concern}\n` +
                `Nachricht: ${data.message || "Keine"}`
            );
            window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <>
                <Header />
                <main className="section-padding">
                    <div className="container-premium">
                        <div className="mx-auto max-w-xl text-center">
                            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                                <CheckCircle className="h-10 w-10 text-green-600" />
                            </div>
                            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                Vielen Dank!
                            </h1>
                            <p className="mt-4 text-lg text-muted-foreground">
                                Deine Anfrage ist bei uns eingegangen. Wir melden uns innerhalb
                                von 24 Stunden mit Terminvorschlägen.
                            </p>
                            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                                <Button asChild>
                                    <Link href="/">Zur Startseite</Link>
                                </Button>
                                <Button variant="outline" asChild>
                                    <Link href={`tel:${contact.phone}`} className="gap-2">
                                        <Phone className="h-4 w-4" />
                                        Direkt anrufen
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            <main>
                {/* Hero */}
                <section className="section-padding-sm bg-muted/30">
                    <div className="container-premium">
                        <div className="max-w-2xl">
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                                Termin anfragen
                            </h1>
                            <p className="mt-6 text-xl text-muted-foreground">
                                Füll das kurze Formular aus – wir melden uns zeitnah mit
                                Terminvorschlägen.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Form Section */}
                <section className="section-padding">
                    <div className="container-premium">
                        <div className="grid gap-12 lg:grid-cols-3">
                            {/* Form */}
                            <div className="lg:col-span-2">
                                <Card className="border-border/40">
                                    <CardContent className="p-6 md:p-8">
                                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                            {/* Name & Phone */}
                                            <div className="grid gap-6 sm:grid-cols-2">
                                                <div className="space-y-2">
                                                    <Label htmlFor="name">
                                                        Name <span className="text-red-brand">*</span>
                                                    </Label>
                                                    <Input
                                                        id="name"
                                                        placeholder="Dein Name"
                                                        {...register("name")}
                                                    />
                                                    {errors.name && (
                                                        <p className="text-sm text-red-brand">
                                                            {errors.name.message}
                                                        </p>
                                                    )}
                                                </div>

                                                <div className="space-y-2">
                                                    <Label htmlFor="phone">
                                                        Telefon <span className="text-red-brand">*</span>
                                                    </Label>
                                                    <Input
                                                        id="phone"
                                                        type="tel"
                                                        placeholder="Deine Telefonnummer"
                                                        {...register("phone")}
                                                    />
                                                    {errors.phone && (
                                                        <p className="text-sm text-red-brand">
                                                            {errors.phone.message}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Email */}
                                            <div className="space-y-2">
                                                <Label htmlFor="email">E-Mail (optional)</Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    placeholder="deine@email.de"
                                                    {...register("email")}
                                                />
                                                {errors.email && (
                                                    <p className="text-sm text-red-brand">
                                                        {errors.email.message}
                                                    </p>
                                                )}
                                            </div>

                                            {/* Days */}
                                            <div className="space-y-2">
                                                <Label>
                                                    Wunschtage <span className="text-red-brand">*</span>
                                                </Label>
                                                <div className="flex flex-wrap gap-2">
                                                    {appointmentOptions.days.map((day) => (
                                                        <button
                                                            key={day.value}
                                                            type="button"
                                                            onClick={() => toggleDay(day.value)}
                                                            className={cn(
                                                                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                                                                selectedDays.includes(day.value)
                                                                    ? "border-red-brand bg-red-brand/10 text-red-brand"
                                                                    : "border-border bg-background hover:border-red-brand/50"
                                                            )}
                                                        >
                                                            {day.label}
                                                        </button>
                                                    ))}
                                                </div>
                                                {errors.days && (
                                                    <p className="text-sm text-red-brand">
                                                        {errors.days.message}
                                                    </p>
                                                )}
                                            </div>

                                            {/* Time Slot & Concern */}
                                            <div className="grid gap-6 sm:grid-cols-2">
                                                <div className="space-y-2">
                                                    <Label>
                                                        Tageszeit <span className="text-red-brand">*</span>
                                                    </Label>
                                                    <Select
                                                        onValueChange={(value) =>
                                                            setValue("timeSlot", value, { shouldValidate: true })
                                                        }
                                                    >
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Auswählen..." />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            {appointmentOptions.timeSlots.map((slot) => (
                                                                <SelectItem key={slot.value} value={slot.value}>
                                                                    {slot.label}
                                                                </SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                    {errors.timeSlot && (
                                                        <p className="text-sm text-red-brand">
                                                            {errors.timeSlot.message}
                                                        </p>
                                                    )}
                                                </div>

                                                <div className="space-y-2">
                                                    <Label>
                                                        Anliegen <span className="text-red-brand">*</span>
                                                    </Label>
                                                    <Select
                                                        onValueChange={(value) =>
                                                            setValue("concern", value, { shouldValidate: true })
                                                        }
                                                    >
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Auswählen..." />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            {appointmentOptions.concerns.map((concern) => (
                                                                <SelectItem key={concern.value} value={concern.value}>
                                                                    {concern.label}
                                                                </SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                    {errors.concern && (
                                                        <p className="text-sm text-red-brand">
                                                            {errors.concern.message}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Message */}
                                            <div className="space-y-2">
                                                <Label htmlFor="message">Nachricht (optional)</Label>
                                                <Textarea
                                                    id="message"
                                                    placeholder="Gibt es etwas, das wir wissen sollten?"
                                                    rows={4}
                                                    {...register("message")}
                                                />
                                            </div>

                                            {/* Submit */}
                                            <Button
                                                type="submit"
                                                size="lg"
                                                className="w-full"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                        Wird gesendet...
                                                    </>
                                                ) : (
                                                    "Terminanfrage senden"
                                                )}
                                            </Button>
                                        </form>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Sidebar */}
                            <div className="space-y-6">
                                <Card className="border-border/40">
                                    <CardContent className="p-6">
                                        <h3 className="font-semibold">Lieber telefonieren?</h3>
                                        <p className="mt-2 text-sm text-muted-foreground">
                                            Ruf uns einfach an – wir beraten dich gern persönlich.
                                        </p>
                                        <Button variant="outline" asChild className="mt-4 w-full">
                                            <Link href={`tel:${contact.phone}`} className="gap-2">
                                                <Phone className="h-4 w-4" />
                                                {contact.phoneDisplay}
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>

                                <Card className="border-border/40">
                                    <CardContent className="p-6">
                                        <h3 className="font-semibold">Direkt vorbeikommen</h3>
                                        <p className="mt-2 text-sm text-muted-foreground">
                                            Du bist in der Nähe? Komm einfach vorbei – auch ohne
                                            Termin.
                                        </p>
                                        <div className="mt-4 space-y-2 text-sm">
                                            <div className="flex items-start gap-3">
                                                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-muted-foreground" />
                                                <span>{contact.address.full}</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <Mail className="h-4 w-4 mt-0.5 shrink-0 text-muted-foreground" />
                                                <span>{contact.email}</span>
                                            </div>
                                        </div>
                                        <Button variant="outline" asChild className="mt-4 w-full">
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
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
