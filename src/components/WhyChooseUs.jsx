import { Target, Settings, ShieldCheck, Headset } from "lucide-react"

export default function WhyChooseUs() {
  const timelineItems = [
    {
      id: 1,
      title: "Strategy-Led Solutions",
      description: "Every solution is built with clear goals, measurable outcomes, and long-term performance in mind.",
      icon: Target,
    },
    {
      id: 2,
      title: "Engineered for Reliability",
      description: "Our infrastructure and digital systems are designed to support daily operations without compromise.",
      icon: Settings,
    },
    {
      id: 3,
      title: "Protection You Can Rely On",
      description: "From cybersecurity to compliance standards, we prioritize data security at every level.",
      icon: ShieldCheck,
    },
    {
      id: 4,
      title: "Support That Stays With You",
      description: "Our team remains actively involved to make sure your technology continues to perform as your business grows.",
      icon: Headset,
    }
  ];

  return (
    <section id="whyChooseUs" className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left Column */}
          <div className="flex flex-col justify-start pt-0 lg:pt-8">
            <div className="mb-6">
              <h1 className='text-2xl text-gray-700 font-semibold bg-blue-300 rounded-full px-3 py-1 w-fit'>Why Choose Us</h1>
            </div>

            <h2 className="text-4xl text-gray-700 sm:text-5xl font-bold mb-6 leading-tight">
              The MakverseTech Advantage
            </h2>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Get enterprise-grade technology backed by deep domain expertise,
              precision-driven execution, and scalable infrastructure, engineered
              to accelerate performance and position your organization ahead of
              the curve.
            </p>

            <button className="inline-flex w-fit items-center gap-3 bg-[#005dc6] hover:bg-[#2d7edc] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
              Let's Talk
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </div>

          {/* Right Column - Timeline */}
          <div className="relative pt-0 lg:pt-8">

            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-slate-300 to-slate-200 hidden sm:block"></div>

            <div className="space-y-8 sm:space-y-12">
              {timelineItems.map((item) => (
                <div
                  key={item.id}
                  className="relative pl-0 sm:pl-28 group"
                >
                  {/* Icon Circle */}
                  <div className="absolute left-0 top-2 w-12 h-12 bg-white border-2 border-slate-300 rounded-full flex items-center justify-center transition-all duration-300 hover:border-[#005dc6] hover:shadow-md hover:scale-110">
                    {item.icon && (
                      <item.icon className="w-5 h-5 text-[#005dc6] transition-transform duration-300 group-hover:scale-110" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div className=" relative bg-white rounded-lg p-6 pl-16 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-gray-700 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}