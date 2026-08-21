import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Website Terms | NorthForge Digital Solutions",
  description: "Website use and project-engagement terms for NorthForge Digital Solutions.",
}

export default function TermsPage() { return <LegalPage eyebrow="Legal" title="Website Terms"><section><h2>Informational website</h2><p>The website describes NorthForge Digital Solutions and the services it offers. Website information, inquiry responses and indicative pricing do not create a contract or guarantee project acceptance.</p></section><section><h2>Project agreements</h2><p>Work begins only after the contracting parties approve a written scope, price, schedule, responsibilities and payment terms. The legal identity of the service provider will be stated in the project agreement and payment documentation. Third-party fees, taxes and currency conversion may be treated separately.</p></section><section><h2>Acceptable use</h2><p>You must not misuse the website, attempt unauthorized access, submit unlawful or deceptive material, interfere with availability, impersonate another person or use automated means contrary to published instructions or applicable law.</p></section><section><h2>Limitations</h2><p>NorthForge aims to keep information accurate and systems available but does not promise uninterrupted operation or a specific business result. Mandatory rights under applicable law are not excluded.</p></section></LegalPage> }
