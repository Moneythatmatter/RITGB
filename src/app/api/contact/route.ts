import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    console.log("[contact] POST received");

    const body = await req.json();
    const { name, email, company, selectedBudgets, message } = body;
    console.log("[contact] body parsed:", {
      name,
      email,
      company,
      selectedBudgets,
      message,
    });

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.RESEND_TO_EMAIL;
    console.log("[contact] RESEND_TO_EMAIL:", toEmail);
    console.log("[contact] RESEND_API_KEY set:", !!apiKey);

    if (!apiKey) {
      console.error("[contact] Missing RESEND_API_KEY env var");
      return Response.json(
        { success: false, error: "Missing RESEND_API_KEY" },
        { status: 500 },
      );
    }

    if (!toEmail) {
      console.error("[contact] Missing RESEND_TO_EMAIL env var");
      return Response.json(
        { success: false, error: "Missing TO email" },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);

    console.log("[contact] Sending email via Resend...");
    const result = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: toEmail,
      subject: `New inquiry from ${name}`,
      html: `
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Company:</b> ${company}</p>
        <p><b>Budget:</b> ${selectedBudgets.join(", ")}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    console.log("[contact] Resend result:", JSON.stringify(result));

    if (result.error) {
      console.error("[contact] Resend error:", result.error);
      return Response.json(
        { success: false, error: result.error },
        { status: 500 },
      );
    }

    console.log("[contact] Email sent successfully, id:", result.data?.id);
    return Response.json({ success: true });
  } catch (err) {
    console.error("[contact] Unhandled exception:", err);
    return Response.json(
      {
        success: false,
        error: err instanceof Error ? err.message : String(err),
      },
      { status: 500 },
    );
  }
}
