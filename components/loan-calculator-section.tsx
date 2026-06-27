import { LoanCalculator } from '@/components/loan-calculator'

export function LoanCalculatorSection() {
  return (
    <section id="calculator" className="bg-background/0 py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-3 text-center font-heading text-2xl font-extrabold">
          Estimate your loan in seconds
        </h2>
        <p className="mx-auto mb-6 max-w-2xl text-center text-sm leading-relaxed text-slate-600">
          Based on a 30-day loan, this calculator shows the total amount repayable before you apply.
        </p>
        <LoanCalculator />
      </div>
    </section>
  )
}
