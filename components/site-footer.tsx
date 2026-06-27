import { Mail, MessageCircle, ShieldCheck } from 'lucide-react'
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
                {COMPANY.legalName} is a registered South African credit provider committed to responsible, transparent and affordable short-term lending.
              </span>
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-background/15 bg-background/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-background/90">
                <ShieldCheck className="h-3.5 w-3.5 text-orange-400" aria-hidden="true" />
                NCA compliant
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-background/15 bg-background/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-background/90">
                <span className="h-3.5 w-3.5 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-[10px]">NCR</span>
                Registered credit provider
              </span>
            </div>
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
            <ul className="mt-4 space-y-3 text-sm text-background/60">
              <li className="font-medium text-background/80">NCR: {COMPANY.ncr}</li>
              <li className="font-medium text-background/80">SACRRA: {COMPANY.sacrra}</li>
              <li className="font-medium text-background/80">Reg: {COMPANY.reg}</li>
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

        <div className="mt-10 border-t border-background/15 pt-6 lg:flex lg:items-start lg:justify-between lg:gap-6">
          <p className="max-w-2xl text-xs leading-relaxed text-background/50">
            Loans are issued after affordability checks. BlueSky Financial Services promotes responsible lending under the National Credit Act.
          </p>
          <div className="mt-4 space-y-2 text-xs text-background/50 lg:mt-0">
            <p>© {new Date().getFullYear()} BlueSky Financial Services (Pty) Ltd. All rights reserved.</p>
            <p>
              Website designed, developed and maintained by{' '}
              <span className="font-semibold text-background">LowveldHub</span>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
