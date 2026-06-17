// // app/api/contact/route.ts
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req: Request) {
//   const body = await req.json();
//   const { name, email, company, selectedBudgets, message } = body;

//   const result = await resend.emails.send({
//     from: "onboarding@resend.dev",
//     to: "hemant.inkhub@gmail.com",
//     subject: `New inquiry from ${name}`,
//     html: `
//       <p><b>Name:</b> ${name}</p>
//       <p><b>Email:</b> ${email}</p>
//       <p><b>Company:</b> ${company}</p>
//  <p><b>Budget:</b> ${selectedBudgets.join(", ")}</p>
//       <p><b>Message:</b> ${message}</p>
//     `,
//   });
//   if (result.error) {
//     return Response.json({ success: false }, { status: 500 });
//   }

//   return Response.json({ success: true });
// }
