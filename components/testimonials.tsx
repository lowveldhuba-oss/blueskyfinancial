"use client"

import Image from 'next/image'
import { Star } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const TESTIMONIALS = [
  {
    quote:
      'BlueSky helped me when I needed it most. The team made the process quick and friendly, and I walked out with a smile.',
    name: 'Sipho M.',
    place: 'Lydenburg',
    image: '/customer-1.png',
  },
  {
    quote:
      'WhatsApp made everything easy. I applied in minutes and had my loan approved the same day.',
    name: 'Nomsa K.',
    place: 'Lydenburg',
    image: '/customer-2.png',
  },
  {
    quote:
      'Clear fees, no surprises, and a staff member who explained everything carefully. I’m already telling friends about BlueSky.',
    name: 'Pieter L.',
    place: 'Lydenburg',
    image: '/customer-3.png',
  },
]

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 via-orange-100 to-orange-50 px-4 py-14 sm:px-6 lg:px-8 lg:py-20" aria-label="Customer testimonials">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.12),transparent_60%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-[radial-gradient(circle_at_bottom,rgba(249,115,22,0.08),transparent_60%)] blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading eyebrow="What Our Customers Say" title="Trusted by borrowers across Lydenburg" />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <article
              key={t.name}
              className={`flex flex-col justify-between overflow-hidden rounded-[2rem] border border-slate-200/70 bg-slate-50 p-6 shadow-[0_30px_90px_-40px_rgba(15,23,42,0.18)] transition duration-300 hover:-translate-y-1 ${
                i === 2 ? 'hidden lg:flex' : 'flex'
              }`}
            >
              <div>
                <div className="flex flex-col gap-3 text-orange-500">
                  <div className="flex items-center gap-1 text-orange-400">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} className="h-4 w-4 text-orange-400 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote className="mt-3 text-base leading-7 text-slate-900 sm:text-lg">
                    “{t.quote}”
                  </blockquote>
                </div>
              </div>

              <figcaption className="mt-8 flex items-center gap-4 border-t border-slate-200/70 pt-5">
                <Image src={t.image} alt={t.name} width={56} height={56} className="h-14 w-14 rounded-full object-cover" />
                <div>
                  <p className="text-base font-semibold text-slate-950">{t.name}</p>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">{t.place}</p>
                </div>
              </figcaption>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
