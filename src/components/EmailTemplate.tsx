import { EmailRequest } from "../models/EmailRequest"

interface EmailTemplateProps {
  emailReq: EmailRequest
}

export default function EmailTemplate({ emailReq }: EmailTemplateProps) {
  return (
    <div>
      <h2>Message depuis le site CodeByGaetan</h2>
      <p>Envoyé par : {emailReq.sender}</p>
      <p>Sujet : {emailReq.subject}</p>
      <p>{emailReq.message}</p>
    </div>
  )
}
