import Link from "next/link"

export default function ContactSection() {
  return (
    <section
      id="talk-to-us"
      className="py-24 px-6 bg-black text-white"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">
          Talk to Us
        </h2>

        <p className="text-zinc-400 mb-8 text-lg">
          Tell us what you need in writing. Email remains the official record for inquiries, scope decisions, approvals and project updates.
        </p>
        <Link href="mailto:hello.northforge@gmail.com?subject=NorthForge%20project%20inquiry" className="inline-flex rounded-xl bg-cyan-400 px-7 py-4 font-semibold text-black hover:bg-cyan-300">Email a Project Request</Link>
        <p className="mt-6 text-sm text-zinc-500">General contact: hello.northforge@gmail.com</p>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-zinc-500">WhatsApp is optional and may be opened after kickoff for active projects expected to run longer than 48 hours. Calls are scheduled only when clarification cannot be handled efficiently in writing.</p>
      </div>
    </section>
  )
}
