// import React, {useRef, useState, useEffect} from 'react'
// import {bg} from '../assets/images'

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-primary/5 to-background">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Streamline Your Workflow
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Boost productivity and collaboration with our all-in-one project management solution. Start your free trial today!
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-gray-800 text-white hover:bg-slate-700 h-11 px-8">
                Start Free Trial
              </button>
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-gray-500 hover:text-accent-foreground h-11 px-8">
                Watch Demo
              </button>
            </div>
            <p className="text-xs text-muted-foreground">
              No credit card required. 14-day free trial.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://www.unistellar.com/wp-content/uploads/2023/08/BlackHoleSimNASA.jpeg"
              alt="Product screenshot"
              className="w-full max-w-[550px] aspect-square object-cover rounded-xl overflow-hidden"
            />
          </div>
        </div>
      </div>
    </section>
  )
}