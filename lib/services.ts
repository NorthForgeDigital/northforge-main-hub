import {
  Bot,
  BriefcaseBusiness,
  CalendarCheck,
  FileText,
  Funnel,
  Globe2,
  Image,
  LayoutDashboard,
  Palette,
  Play,
  Search,
  Share2,
  Sparkles,
  Video,
} from "lucide-react"

export type Service = {
  slug: string
  title: string
  shortDescription: string
  description: string
  outcomes: string[]
  startingAt?: string
  timeline: string
  icon: typeof FileText
}

export const services: Service[] = [
  {
    slug: "resume-writing",
    title: "Resume Writing",
    shortDescription: "Truthful, ATS-aware resumes and application materials shaped around your target role.",
    description: "We organize your real experience into a clear professional story and prepare role-aligned application documents without overstating credentials.",
    outcomes: ["ATS-aware resume", "Role-aligned positioning", "Editable final copy"],
    startingAt: "US$75",
    timeline: "2–4 business days",
    icon: FileText,
  },
  {
    slug: "youtube-thumbnail-design",
    title: "YouTube Thumbnail Design",
    shortDescription: "Clear, brand-aligned thumbnails designed to earn attention without misleading viewers.",
    description: "We turn your topic, audience and channel identity into thumbnail concepts built for fast recognition across desktop and mobile.",
    outcomes: ["Thumbnail concepts", "Platform-ready exports", "Consistent visual direction"],
    startingAt: "US$35",
    timeline: "1–3 business days",
    icon: Image,
  },
  {
    slug: "youtube-management",
    title: "YouTube Management",
    shortDescription: "Structured publishing, optimization and content operations for sustainable channel growth.",
    description: "We help organize the recurring work behind a channel—from content planning and upload coordination to metadata and performance documentation.",
    outcomes: ["Publishing workflow", "Content calendar", "Optimization checklist"],
    startingAt: "US$250/month",
    timeline: "Monthly engagement",
    icon: Play,
  },
  {
    slug: "social-media-management-support",
    title: "Social Media Management & Support",
    shortDescription: "Organized content support, scheduling and community workflows across priority platforms.",
    description: "We build a manageable social media rhythm around your goals, capacity and brand voice instead of chasing every platform at once.",
    outcomes: ["Content schedule", "Publishing support", "Engagement workflow"],
    startingAt: "US$200/month",
    timeline: "Monthly engagement",
    icon: Share2,
  },
  {
    slug: "research-support",
    title: "Research Support",
    shortDescription: "Decision-ready market, competitor, vendor and topic research with cited sources.",
    description: "We collect, organize and summarize relevant information so you can make faster decisions with a transparent research trail.",
    outcomes: ["Research brief", "Source register", "Actionable summary"],
    startingAt: "US$95",
    timeline: "2–5 business days",
    icon: Search,
  },
  {
    slug: "administrative-support",
    title: "Administrative Support",
    shortDescription: "Reliable documentation, coordination and back-office support for busy operators.",
    description: "We reduce operational clutter through structured records, calendars, follow-ups, document preparation and task coordination.",
    outcomes: ["Organized records", "Task coordination", "Document support"],
    startingAt: "US$10/hour",
    timeline: "Project or recurring",
    icon: CalendarCheck,
  },
  {
    slug: "virtual-assistance",
    title: "Virtual Assistance",
    shortDescription: "Flexible remote support for recurring business, customer and coordination tasks.",
    description: "We define a clear support scope, recurring responsibilities and reporting rhythm so virtual assistance remains accountable and useful.",
    outcomes: ["Defined task scope", "Recurring support", "Progress reporting"],
    startingAt: "US$10/hour",
    timeline: "Weekly or monthly",
    icon: BriefcaseBusiness,
  },
  {
    slug: "content-strategy-assistance",
    title: "Content Strategy & Assistance",
    shortDescription: "Practical content systems connecting audience needs, business goals and production capacity.",
    description: "We shape content pillars, formats and workflows that your team can realistically maintain and measure.",
    outcomes: ["Content pillars", "Editorial roadmap", "Production workflow"],
    startingAt: "US$150",
    timeline: "3–7 business days",
    icon: Sparkles,
  },
  {
    slug: "business-systems-setup",
    title: "Business Systems Setup",
    shortDescription: "Simple operational systems for tasks, leads, files, handoffs and recurring work.",
    description: "We map scattered processes and turn them into documented, usable systems with clear ownership and next actions.",
    outcomes: ["Workflow map", "Operating templates", "Handoff documentation"],
    startingAt: "US$250",
    timeline: "4–10 business days",
    icon: LayoutDashboard,
  },
  {
    slug: "website-development",
    title: "Website Development",
    shortDescription: "Responsive websites and landing pages structured around clarity, trust and conversion.",
    description: "We plan, write and build focused digital experiences that guide visitors toward the right next step.",
    outcomes: ["Responsive website", "Conversion-focused structure", "Launch checklist"],
    startingAt: "US$500",
    timeline: "7–21 business days",
    icon: Globe2,
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    shortDescription: "Consistent digital graphics for campaigns, presentations, social media and operations.",
    description: "We translate your message and brand direction into clear visual assets sized for their intended use.",
    outcomes: ["Brand-aligned designs", "Platform-ready files", "Editable source when scoped"],
    startingAt: "US$45",
    timeline: "2–5 business days",
    icon: Palette,
  },
  {
    slug: "automation-ai-setup",
    title: "Automation & AI Setup",
    shortDescription: "Human-reviewed automations that reduce repetitive work without losing accountability.",
    description: "We identify safe automation opportunities, configure practical workflows and document how people remain in control.",
    outcomes: ["Automation map", "Configured workflow", "Usage and handoff guide"],
    startingAt: "US$300",
    timeline: "5–14 business days",
    icon: Bot,
  },
  {
    slug: "lead-booking-funnel-systems",
    title: "Lead & Booking Funnel Systems",
    shortDescription: "Qualified inquiry, booking and follow-up systems built with the FORGE™ method.",
    description: "We connect your message, qualification, intake, follow-up and handoff so promising interest becomes an organized sales conversation.",
    outcomes: ["Funnel journey", "Qualification flow", "CRM-ready lead handoff"],
    startingAt: "US$600 pilot",
    timeline: "10–14 business days",
    icon: Funnel,
  },
  {
    slug: "custom-project",
    title: "Custom Project / Not Sure Yet",
    shortDescription: "A structured starting point for needs that span services or require initial clarification.",
    description: "Tell us the outcome you need. We will screen the request, identify the most suitable service path and explain whether NorthForge is a fit.",
    outcomes: ["Initial classification", "Recommended next step", "Scope decision"],
    timeline: "Response within 1–2 business days",
    icon: Video,
  },
]

export function getService(slug: string) {
  return services.find((service) => service.slug === slug)
}
