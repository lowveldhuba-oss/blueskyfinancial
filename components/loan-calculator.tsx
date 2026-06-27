'use client'

import { useMemo, useState } from 'react'
import { Calculator } from 'lucide-react'
import { calculateLoan } from '@/lib/loan'
import { COMPANY, formatRand, waLink } from '@/lib/site'
import { LinkButton } from '@/components/link-button'
import { cn } from '@/lib/utils'

const AMOUNT_PRESETS = [500, 1000, 2000, 4000, 6000, 8000]

export function LoanCalculator({ className }: { className?: string }) {
  const [amount, setAmount] = useState(2000)
  const months = 1

  const result = useMemo(() => calculateLoan(amount, months), [amount])

  const pct =
    ((amount - COMPANY.loanMin) / (COMPANY.loanMax - COMPANY.loanMin)) * 100

  const waMessage = `Hi BlueSky, I'd like to apply for a loan of ${formatRand(
    amount,
  )} over 1 month. My estimated monthly repayment is ${formatRand(
    result.monthly,
  )}.`

  return (
    <div
      className={cn(
        'w-full rounded-3xl border border-border bg-card/70 sm:bg-card/95 p-5 shadow-soft-lg backdrop-blur sm:p-6',
        className,
      )}
    >
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Calculator className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <h2 className="font-heading text-lg font-bold text-foreground">
            Loan Calculator
          </h2>
          <p className="text-xs text-muted-foreground">
            Estimate your repayment before you apply.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-[1.7fr_minmax(260px,1fr)]">
        <div>
          <div className="mb-5">
            <div className="mb-2 flex items-center justify-between">
              <label htmlFor="loan-amount" className="text-sm font-semibold text-foreground">
                1. Loan Amount
              </label>
              <span className="rounded-lg bg-secondary px-3 py-1 font-heading text-base font-bold text-primary">
                {formatRand(amount)}
              </span>
            </div>
            <input
              id="loan-amount"
              type="range"
              className="bs-range w-full"
              min={COMPANY.loanMin}
              max={COMPANY.loanMax}
              step={50}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              style={{
                background: `linear-gradient(to right, var(--primary) ${pct}%, var(--secondary) ${pct}%)`,
              }}
            />
            <div className="mt-1 flex justify-between text-xs text-muted-foreground">
              <span>{formatRand(COMPANY.loanMin)}</span>
              <span>{formatRand(COMPANY.loanMax)}</span>
            </div>
            <div className="mt-3 grid grid-cols-6 gap-1.5">
              {AMOUNT_PRESETS.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setAmount(preset)}
                  className={cn(
                    'rounded-lg border py-1.5 text-xs font-semibold transition-colors',
                    amount === preset
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border bg-background text-foreground/70 hover:border-primary/40',
                  )}
                >
                  {preset >= 1000 ? `R${preset / 1000}k` : `R${preset}`}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-primary p-4 text-center text-primary-foreground">
          <p className="text-xs font-medium uppercase tracking-wide text-primary-foreground/80">
            Estimated Monthly Repayment
          </p>
          <p className="font-heading text-4xl font-extrabold tabular-nums">
            {formatRand(result.monthly)}
          </p>
          <p className="text-[11px] leading-6 text-primary-foreground/80">
            1 month · 5% per month simple interest · Representative APR (simple annualisation) 60% · Estimate includes interest, monthly service fee, initiation fee and credit life cover
          </p>
        </div>
      </div>

      <LinkButton
        external
        href={waLink(waMessage)}
        size="lg"
        className="h-11 w-full rounded-full bg-accent text-base font-semibold text-accent-foreground hover:bg-accent/90"
      >
        Apply for This Loan
      </LinkButton>
      <p className="mt-3 text-center text-[11px] leading-relaxed text-muted-foreground">
        Estimate includes interest, monthly service fee and a once-off
        initiation fee. NCR compliant. Final amount subject to affordability
        assessment.
      </p>
    </div>
  )
}

