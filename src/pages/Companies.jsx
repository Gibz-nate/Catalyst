// import React from 'react';
import { amd, apple, cisco, dji, huawei, nvidia, tesla, safaricom } from '../assets/logos'

export default function CompaniesWorkedWith() {
  const companies = [
    { name: 'AMD', logo:amd },
    { name: 'APPLE', logo: apple },
    { name: 'CISCO Corp', logo: cisco },
    { name: 'DJI', logo: dji },
    { name: 'HUAWEI', logo: huawei },
    { name: 'NVIDIA', logo: nvidia },
    { name: 'TESLA', logo: tesla },
    { name: 'SAFARICOM', logo: safaricom },
  ];

  return (
    <section className="py-16 overflow-hidden bg-slate-800 rounded-b-lg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-4">Companies We&apos;ve Worked With</h2>
        <p className="text-xl text-center text-white  mb-12">
          Trusted by industry leaders worldwide
        </p>
        <div className="relative">
          <div className="flex animate-scroll">
            {[...companies, ...companies].map((company, index) => (
              <div key={`${company.name}-${index}`} className="flex-shrink-0 mx-8">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="h-12 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}