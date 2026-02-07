import { NextResponse } from "next/server";
import { z } from "zod";

const formSchema = z.object({
    name: z.string().min(2),
    phone: z.string().min(6),
    email: z.string().email().optional().or(z.literal("")),
    days: z.array(z.string()).min(1),
    timeSlot: z.string().min(1),
    concern: z.string().min(1),
    message: z.string().optional(),
});

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const data = formSchema.parse(body);

        // TODO: Implement actual email sending here
        // Options: nodemailer, SendGrid, Resend, etc.

        // For now, just log the submission
        console.log("=== NEUE TERMINANFRAGE ===");
        console.log("Name:", data.name);
        console.log("Telefon:", data.phone);
        console.log("E-Mail:", data.email || "Nicht angegeben");
        console.log("Wunschtage:", data.days.join(", "));
        console.log("Tageszeit:", data.timeSlot);
        console.log("Anliegen:", data.concern);
        console.log("Nachricht:", data.message || "Keine");
        console.log("==========================");

        return NextResponse.json(
            { success: true, message: "Terminanfrage erfolgreich empfangen" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Terminanfrage Fehler:", error);

        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { success: false, message: "Ungültige Formulardaten", errors: error.issues },
                { status: 400 }
            );
        }

        return NextResponse.json(
            { success: false, message: "Serverfehler" },
            { status: 500 }
        );
    }
}
