import { LoanCalculator } from '@/components/loan-calculator'

export function LoanCalculatorSection() {
  return (
    <section id="calculator" className="bg-background/0 py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <LoanCalculator />
      </div>
    </section>
  )
}
