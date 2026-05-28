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

        <p className="text-zinc-400 mb-12 text-lg">
          Have a project in mind? Send us a message and let's build something powerful together.
        </p>

        <form
          action="https://formsubmit.co/hello.northforge@gmail.com"
          method="POST"
          className="space-y-6 text-left"
        >
          <input
            type="hidden"
            name="_captcha"
            value="false"
          />

          <input
            type="hidden"
            name="_subject"
            value="New NorthForge Lead"
          />

          <input
            type="hidden"
            name="_template"
            value="table"
          />

          <div>
            <label className="block mb-2 text-sm text-zinc-400">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              required
              className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-cyan-400 outline-none"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-zinc-400">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              required
              className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-cyan-400 outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-zinc-400">
              Service Needed
            </label>

            <select
              name="service"
              className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-cyan-400 outline-none"
            >
              <option>YouTube Management</option>
              <option>Branding</option>
              <option>Content Systems</option>
              <option>Automation</option>
              <option>Web Design</option>
              <option>General Inquiry</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm text-zinc-400">
              Message
            </label>

            <textarea
              name="message"
              rows={6}
              required
              className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-cyan-400 outline-none"
              placeholder="Tell us about your project..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-400 hover:bg-cyan-300 text-black font-semibold py-4 rounded-xl transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}