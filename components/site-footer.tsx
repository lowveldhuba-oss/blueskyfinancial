import { Mail, MessageCircle } from 'lucide-react'
import { Logo } from '@/components/logo'
import { COMPANY, NAV_LINKS, waLink, DEFAULT_WA_MESSAGE } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="bg-foreground px-4 py-12 text-background sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-background/60">
              <span className="font-semibold text-background">
                {COMPANY.legalName} is a registered South African credit provider committed to providing responsible, transparent and affordable short-term lending solutions.
              </span>
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={waLink(DEFAULT_WA_MESSAGE)}
                target="_blank"
                rel="noopener"
                aria-label="Chat with us on WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white transition-opacity hover:opacity-90"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                aria-label="Email BlueSky Financial Services"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-background">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/60 transition-colors hover:text-background"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-background">
              Legal &amp; Compliance
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-background/60">
              <li>NCR: {COMPANY.ncr}</li>
              <li>SACRRA: {COMPANY.sacrra}</li>
              <li>Reg: {COMPANY.reg}</li>
              <li>
                <a href="/privacy-policy" className="transition-colors hover:text-background">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-and-conditions" className="transition-colors hover:text-background">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-background/15 pt-6">
          <p className="text-xs leading-relaxed text-background/50">
            Loans are granted subject to affordability assessments and credit
            profile. BlueSky Financial Services promotes responsible lending in
            accordance with the National Credit Act No. 34 of 2005.
          </p>
          <p className="mt-4 text-xs text-background/50">
            © {new Date().getFullYear()} BlueSky Financial Services (Pty) Ltd.
            All rights reserved.
          </p>
          <p className="mt-4 text-xs leading-relaxed text-background/50">
            Website designed, developed and maintained by{' '}
            <span className="font-semibold text-background">LowveldHub</span>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}
