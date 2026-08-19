import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HelpWidget } from "@/components/help-widget"

export function PageShell({ children }: { children: React.ReactNode }) {
  return <><Header /><main className="pt-16">{children}</main><Footer /><HelpWidget /></>
}
