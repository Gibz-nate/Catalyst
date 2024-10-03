import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    company: 'Tech Innovators Inc.',
    comment: 'This SaaS solution has revolutionized our workflow. Highly recommended!',
  },
  {
    id: 2,
    name: 'Jane Smith',
    company: 'Creative Designs Co.',
    comment: "The customer support is outstanding. They're always there when you need them.",
  },
  {
    id: 3,
    name: 'Mike Johnson',
    company: 'Data Analysts Ltd.',
    comment: 'The analytics features are top-notch. Helped us make data-driven decisions.',
  },
  {
    id: 4,
    name: 'Emily Brown',
    company: 'StartUp Ventures',
    comment: 'As a startup, this tool has been invaluable;just like having an extra team member.',
  },
  {
    id: 5,
    name: 'Alex Lee',
    company: 'Global Solutions Corp.',
    comment: 'The scalability of this platform is impressive;grown with our company seamlessly.',
  },
];

export default function ScrollingTestimonials() {
  return (
    <section className="py-16  overflow-hidden ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
        <div className="relative">
          <motion.div
            className="flex space-x-6"
            animate={{
              x: [0, -100 * testimonials.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="w-80 flex-shrink-0 bg-slate-200 p-6 rounded-lg shadow-md"
              >
                <p className="text-gray-600 mb-4">{testimonial.comment}</p>
                <div className="font-semibold text-gray-600">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.company}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}