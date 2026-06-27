'use client'

import Image from 'next/image'
import { Quote } from 'lucide-react'
import { MotionDiv } from '@/components/motion'
import { Reveal } from '@/components/reveal'

export function Founder() {
  return (
    <section className="bg-gradient-to-b from-slate-50 via-orange-50 to-orange-100 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <Reveal className="flex justify-center">
        <MotionDiv
          hover
          delay={0.08}
          className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(220px,320px)_1fr] items-center gap-6 overflow-hidden rounded-[2.5rem] border border-orange-100 bg-white/95 p-5 shadow-[0_30px_90px_-40px_rgba(15,23,42,0.18)] sm:p-8"
        >
          <div className="relative mx-auto w-full max-w-[320px] overflow-hidden rounded-[2rem] bg-slate-900/5 ring-1 ring-slate-200/80">
            <Image
              src="/founder.png"
              alt="Mr Kenny Bongwe, Founder of BlueSky Financial Services"
              width={480}
              height={560}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="text-center text-sm sm:text-base lg:text-left">
            <span className="inline-flex items-center justify-center rounded-full bg-orange-100 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.35em] text-orange-700 shadow-sm ring-1 ring-orange-100">
              Meet Our Founder
            </span>
            <Quote className="mx-auto mt-6 h-10 w-10 text-orange-400 lg:mx-0" aria-hidden="true" />
            <blockquote className="mx-auto mt-5 max-w-none text-base font-semibold leading-7 text-slate-900 sm:text-lg lg:text-xl lg:mx-0">
              “At BlueSky Financial Services, we believe everyone deserves access to fair, responsible financial assistance when they need it most. Our commitment is to provide transparent lending solutions with professionalism, integrity and respect."
            </blockquote>
            <div className="mt-7">
              <p className="text-base font-semibold text-slate-950">Mr Kenny Bongwe</p>
              <p className="mt-1 text-sm uppercase tracking-[0.24em] text-orange-700">Founder, BlueSky Financial Services</p>
            </div>
          </div>
        </MotionDiv>
      </Reveal>
    </section>
  )
}
