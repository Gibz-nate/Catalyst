import { RiRocketLine, RiBarChartBoxLine, RiTeamLine, RiLockPasswordLine, RiCustomerService2Line, RiCloudLine } from 'react-icons/ri'

export default function ServicesPage() {
  const services = [
    {
      title: "Rapid Deployment",
      description: "Get your project up and running in no time with our streamlined deployment process.",
      icon: <RiRocketLine className="w-12 h-12 text-primary" />,
    },
    {
      title: "Advanced Analytics",
      description: "Gain valuable insights with our powerful analytics tools and visualizations.",
      icon: <RiBarChartBoxLine className="w-12 h-12 text-primary" />,
    },
    {
      title: "Team Collaboration",
      description: "Enhance your team's productivity with our robust collaboration features.",
      icon: <RiTeamLine className="w-12 h-12 text-primary" />,
    },
    {
      title: "Enterprise-grade Security",
      description: "Protect your data with our state-of-the-art security measures and encryption.",
      icon: <RiLockPasswordLine className="w-12 h-12 text-primary" />,
    },
    {
      title: "24/7 Customer Support",
      description: "Get help whenever you need it with our round-the-clock customer support team.",
      icon: <RiCustomerService2Line className="w-12 h-12 text-primary" />,
    },
    {
      title: "Scalable Cloud Infrastructure",
      description: "Grow your business worry-free with our scalable and reliable cloud infrastructure.",
      icon: <RiCloudLine className="w-12 h-12 text-primary" />,
    },
  ]

  return (
    <div className=" min-h-screen rounded-t-lg bg-slate-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  ">
          {services.map((service, index) => (
            <div key={index} className="bg-card rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center mb-4  border-cyan-300">
                {service.icon}
              </div>
              <h2 className="text-xl font-semibold text-center mb-2">{service.title}</h2>
              <p className="text-muted-foreground text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}