import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Intellectual Property Notice | NorthForge Digital Solutions",
  description: "Copyright, permissions and claimed-mark information for NorthForge Digital Solutions materials.",
}

export default function IpPage() { return <LegalPage eyebrow="Legal" title="Intellectual Property Notice"><section><h2>Rights notice</h2><p>© 2026 NorthForge Digital Solutions. All rights reserved. NorthForge Digital Solutions™, FORGE™ and FIT-7™ are claimed marks. Use of the ™ symbol identifies a claimed mark and does not represent completed trademark registration.</p></section><section><h2>Protected materials</h2><p>Original website copy, source code, graphics, assessments, documentation, templates and published materials may be protected by copyright and other applicable rights. General ideas and facts are not claimed beyond the protection allowed by law.</p></section><section><h2>Permission</h2><p>Except where permitted by law, NorthForge materials may not be reproduced, republished, distributed, scraped or sold without prior written permission. Linking to a public page does not transfer ownership.</p></section><section><h2>Reporting concerns</h2><p>Rights holders and users may contact NorthForge with a precise description and supporting evidence concerning suspected infringement.</p></section></LegalPage> }
