import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Privacy Notice | NorthForge Digital Solutions",
  description: "How NorthForge Digital Solutions handles information submitted through its website and project communications.",
}
export default function PrivacyPage() { return <LegalPage eyebrow="Legal" title="Privacy Notice"><section><h2>Information we collect</h2><p>NorthForge may collect contact, organization, project, budget, timeline, source and communication information that you voluntarily submit. We aim to collect only what is reasonably necessary to assess and service a request.</p></section><section><h2>Why we use it</h2><p>Information may be used to verify inquiries, assess fit, prepare scopes and proposals, communicate about a request, maintain business records, prevent abuse and meet legal obligations.</p></section><section><h2>Sharing, retention and security</h2><p>Information is not sold. It may be processed by authorized service providers needed for hosting, email, forms, scheduling, CRM, payments or delivery. Access is limited by role, and records should be retained only as long as necessary for the stated purpose or legal requirements.</p></section><section><h2>Your choices</h2><p>You may ask about, correct or request deletion of personal information, subject to identity verification and lawful retention requirements. A monitored privacy-contact address will be published before expanded data collection begins.</p></section></LegalPage> }
