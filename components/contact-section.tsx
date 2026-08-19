import Link from "next/link"

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-black text-white"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">
          Get in Touch
        </h2>

        <p className="text-zinc-400 mb-8 text-lg">
          While secure CRM intake is being finalized, email us directly with the service, outcome and timeline you need.
        </p>
        <Link href="mailto:hello.northforge@gmail.com?subject=NorthForge%20project%20inquiry" className="inline-flex rounded-xl bg-cyan-400 px-7 py-4 font-semibold text-black hover:bg-cyan-300">Email a Project Request</Link>
        <p className="mt-6 text-sm text-zinc-500">General contact: hello.northforge@gmail.com</p>
      </div>
    </section>
  )
}
