import React from 'react'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { Shield, TrendingUp, Building2, Megaphone, Code, HeartPulse } from "lucide-react"

const servicesData = [
    {
        title: "Managed IT Solutions",
        desc: "End-to-end support to keep your systems secure, stable, and running smoothly.",
        btn: "ReadMore",
        icon: Shield,
    },
    {
        title: "Revenue Cycle Management",
        desc: "Our RCM services boost your cash flow and reduce claim denials.",
        btn: "ReadMore",
        icon: TrendingUp,
    },
    {
        title: "Enterprise IT",
        desc: "Enterprise IT solutions to improve your data security and operational efficiency.",
        btn: "ReadMore",
        icon: Building2,
    },
    {
        title: "Digital Marketing",
        desc: "Digital marketing services to establish a robust online presence and boost revenue.",
        btn: "ReadMore",
        icon: Megaphone,
    },
    {
        title: "Digital Product Development",
        desc: "Build high-performance software through expert engineering and user-centric design.",
        btn: "ReadMore",
        icon: Code,
    },
    {
        title: "Healthcare Technology Development",
        desc: "Secure and scalable solutions that improve operations and drive better outcomes.",
        btn: "ReadMore",
        icon: HeartPulse,
    },
]

const Services = () => {
    return (
        <section id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700'>
            <h1 className='text-2xl font-bold bg-blue-300 rounded-full px-3 py-1'>Our Services</h1>
            <Title title='Driving Smarter Growth Through Strategic Solutions' desc='Our solutions are carefully curated to not just keep businesses running but to help them move forward. By aligning strategy, technology, and execution, we help organizations operate smarter and grow faster.' />

            <div className='flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3'>
                {servicesData.map((service, index) => (
                    <ServiceCard key={index} service={service} index={index} />
                ))}
            </div>
        </section>
    )
}

export default Services
