'use client'

import { Diamond, Gift, MessageCircle } from 'lucide-react'
import { MotionDiv } from '@/components/motion'
import { Reveal } from '@/components/reveal'
import { LinkButton } from '@/components/link-button'
import { waLink } from '@/lib/site'

const TIERS = [
  { range: 'R250 - R550', reward: 'R20' },
  { range: 'R600 - R950', reward: 'R50' },
  { range: 'R1,000 - R1,950', reward: 'R80' },
  { range: 'R2,000 & above', reward: 'R100' },
]

export function Referral() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <Reveal className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-sky-100/70 bg-gradient-to-br from-white via-slate-50 to-sky-50/70 p-6 shadow-[0_30px_90px_-40px_rgba(15,23,42,0.18)] sm:p-10">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-100/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-orange-700 ring-1 ring-orange-100">
              <Gift className="h-3.5 w-3.5 text-orange-700" aria-hidden="true" />
              Refer & Earn Rewards
            </span>
            <h2 className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-sky-900 sm:text-5xl">
              Refer a friend, earn up to R100.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-slate-950">
              Refer someone you trust and earn a reward once their loan is approved.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-950">
              Cash rewards are paid once the referred loan is approved and funded.
            </p>
            <LinkButton
              external
              size="lg"
              href={waLink(
                'Hi BlueSky Financial Services, I would like to refer a friend. Here are the referral program details: Refer a friend, earn cash rewards. When their loan is approved and disbursed, you can earn R20 for R250 - R550, R50 for R600 - R950, R80 for R1,000 - R1,950, and R100 for R2,000 and above. Please share full details with them.'
              )}
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-orange-500 px-6 text-sm font-semibold text-white shadow-xl shadow-orange-500/20 transition duration-300 hover:bg-orange-400"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Refer on WhatsApp
            </LinkButton>
            <p className="mt-4 text-sm text-slate-500">
              Fast reward payment after loan approval.
            </p>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {TIERS.map((tier, i) => (
              <li key={tier.range}>
                <MotionDiv hover delay={i * 0.05} className="rounded-[2rem] border border-slate-200/80 bg-white p-4 shadow-[0_18px_40px_-22px_rgba(15,23,42,0.12)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_48px_-18px_rgba(15,23,42,0.16)]">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold tracking-tight text-slate-950">{tier.range}</p>
                      <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-orange-600">
                        On approved loan
                      </p>
                    </div>
                    <div className="rounded-full bg-sky-50 px-3 py-1.5 text-xs font-semibold text-sky-700 ring-1 ring-sky-100">
                      {tier.reward}
                    </div>
                  </div>
                </MotionDiv>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}
