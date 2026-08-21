"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { services } from "@/lib/services"

const field = "w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground outline-none focus:border-primary"

export function InquiryForm() {
  const params = useSearchParams()
  const selected = params.get("service") || "custom-project"
  const source = params.get("utm_source") || "website"
  const [inquiryId, setInquiryId] = useState("")
  const [previewComplete, setPreviewComplete] = useState(false)
  useEffect(() => {
    setInquiryId(`NF-${new Date().toISOString().slice(0, 10).replaceAll("-", "")}-${crypto.randomUUID().slice(0, 8).toUpperCase()}`)
  }, [])
  return (
    <form onSubmit={(event) => { event.preventDefault(); setPreviewComplete(true) }} className="grid gap-5 rounded-2xl border border-border bg-card p-5 sm:p-8">
      <input type="hidden" name="lead_source" value={source} />
      <input type="hidden" name="inquiry_id" value={inquiryId} />
      <input type="hidden" name="utm_medium" value={params.get("utm_medium") || "direct"} />
      <input type="hidden" name="utm_campaign" value={params.get("utm_campaign") || "none"} />
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm">Full name<input className={`${field} mt-2`} name="full_name" required autoComplete="name" /></label>
        <label className="text-sm">Company or professional name<input className={`${field} mt-2`} name="company" required /></label>
      </div>
      <label className="text-sm">Monitored email address<input className={`${field} mt-2`} type="email" name="email" required autoComplete="email" /><span className="mt-2 block text-xs text-muted-foreground">Business email preferred. We may request email verification before reviewing the project.</span></label>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm">Country and time zone<input className={`${field} mt-2`} name="country_timezone" required placeholder="e.g. Canada · Eastern Time" /></label>
        <label className="text-sm">WhatsApp number — optional<input className={`${field} mt-2`} name="whatsapp" type="tel" autoComplete="tel" placeholder="Include country code" /><span className="mt-2 block text-xs text-muted-foreground">Requested only when you want WhatsApp eligibility reviewed for an active project.</span></label>
      </div>
      <label className="text-sm">Preferred contact method<select className={`${field} mt-2`} name="preferred_contact" required defaultValue=""><option value="" disabled>Select one</option><option>Email — official written record</option><option>WhatsApp after kickoff — projects over 48 hours</option><option>Scheduled call — only if clarification is necessary</option></select></label>
      <label className="text-sm">Requested service<select className={`${field} mt-2`} name="service" defaultValue={selected}>{services.map((service) => <option key={service.slug} value={service.slug}>{service.title}</option>)}</select></label>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm">Estimated budget<select className={`${field} mt-2`} name="budget" required defaultValue=""><option value="" disabled>Select a range</option><option>Under US$100</option><option>US$100–299</option><option>US$300–599</option><option>US$600–999</option><option>US$1,000+</option><option>Need guidance</option></select></label>
        <label className="text-sm">Preferred start<select className={`${field} mt-2`} name="timeline" required defaultValue=""><option value="" disabled>Select timing</option><option>Within 7 days</option><option>Within 30 days</option><option>1–3 months</option><option>Exploring only</option></select></label>
      </div>
      <label className="text-sm">Are you authorized to approve this project?<select className={`${field} mt-2`} name="decision_authority" required defaultValue=""><option value="" disabled>Select one</option><option>Yes, I am the decision-maker</option><option>I share the decision</option><option>No, I am gathering information</option></select></label>
      <label className="text-sm">What outcome do you need?<textarea className={`${field} mt-2 min-h-36`} name="project_outcome" required minLength={40} placeholder="Describe the current situation, desired result and any deadline." /></label>
      <label className="flex items-start gap-3 text-sm text-muted-foreground"><input className="mt-1" type="checkbox" name="privacy_consent" required />I have read the <a className="text-primary underline" href="/privacy">Privacy Notice</a> and consent to NorthForge using this information to assess and respond to my request.</label>
      <label className="flex items-start gap-3 text-sm text-muted-foreground"><input className="mt-1" type="checkbox" name="communication_acknowledgment" required />I understand that email is the official record; the first 48 hours after kickoff may be reserved for setup, research and initial production; and WhatsApp or calls are used only when appropriate to the project.</label>
      <button className="rounded-xl bg-primary px-6 py-4 font-semibold text-primary-foreground hover:bg-primary/90" type="submit">Check request readiness</button>
      {previewComplete && <div role="status" className="rounded-xl border border-primary/30 bg-primary/5 p-4 text-sm"><strong className="text-foreground">Your request appears ready for review.</strong><p className="mt-2 font-mono text-xs text-primary">Preview inquiry ID: {inquiryId}</p><p className="mt-2 text-muted-foreground">This ID is generated in your browser for workflow testing and is not reserved or recorded. Secure submission will activate only after the NorthForge privacy contact, spreadsheet destination, field mapping and automated response workflow are verified.</p></div>}
      <p className="text-xs leading-5 text-muted-foreground">Preview mode: information entered here stays in your browser and is not submitted. Submission will not create a client relationship or guarantee acceptance when the secure intake system goes live.</p>
    </form>
  )
}
