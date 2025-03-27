import EmailTemplate from "@/components/sub/EmailTemplate"
import { EmailRequest } from "@/models/EmailRequest"
import { NextRequest } from "next/server"
import { Resend } from "resend"

const resendApiKey = process.env.RESEND_API_KEY
const fromEmail = process.env.FROM_EMAIL
const toEmail = process.env.TO_EMAIL

export async function POST(req: NextRequest) {
  const emailReq: EmailRequest = await req.json()

  try {
    if (!resendApiKey || !fromEmail || !toEmail) {
      throw new Error("Missing environment variables")
    }

    if (!emailReq.sender || !emailReq.subject || !emailReq.message) {
      return Response.json(
        { error: "Missing required fields." },
        { status: 400 }
      )
    }

    const resend = new Resend(resendApiKey)
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: emailReq.subject,
      react: <EmailTemplate emailReq={emailReq} />,
    })

    if (error) {
      return Response.json({ error: error.message }, { status: 400 })
    }

    return Response.json({ message: "Message sent." })
  } catch (error) {
    console.error("Error:", (error as Error).message)
    return Response.json(
      { error: "Internal Server Error, message could not be sent." },
      { status: 500 }
    )
  }
}
