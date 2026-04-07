import React, { useState } from 'react';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "What industries do MakverseTech serve?",
            answer: "Makverse primarily serves healthcare organizations while also supporting growing enterprises that require advanced digital product development and managed IT solutions. We specialize in helping organizations modernize their technology infrastructure and digital capabilities."
        },
        {
            question: "What types of technology solutions do you provide?",
            answer: "We provide comprehensive technology solutions including custom software development, cloud infrastructure, managed IT services, digital transformation consulting, and enterprise application development. Our expertise spans healthcare IT, financial systems, and enterprise solutions."
        },
        {
            question: "Do you provide end-to-end project management?",
            answer: "Yes, we offer complete project management services from initial planning through deployment and ongoing support. Our team handles requirements gathering, architecture design, development, testing, and production deployment to ensure successful project delivery."
        },
        {
            question: "How does MakverseTech ensure data security and compliance?",
            answer: "We implement industry-leading security practices including HIPAA compliance for healthcare clients, data encryption, regular security audits, and comprehensive access controls. Our infrastructure meets SOC 2 standards and we maintain strict compliance with regulatory requirements."
        },
        {
            question: "Can MakverseTech support long-term technology growth?",
            answer: "Absolutely. We provide scalable solutions designed to grow with your organization. Our approach includes flexible architecture, cloud-native technologies, and strategic consulting to ensure your technology foundation supports future expansion and evolving business needs."
        }
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
            {/* Background decorative elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-20"></div>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto px-6 py-20">
                {/* Header */}
                <div className="text-center mb-16">

                    <h1 className="text-2xl font-semibold mb-3 text-gray-700 bg-blue-300 rounded-full py-1 px-6 inline-block">
                        FAQ's
                    </h1>

                    <h1 className="text-5xl md:text-6xl font-bold text-gray-700 mb-6 tracking-tight">
                        Frequently Asked
                        <br />
                        <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                            Questions
                        </span>
                    </h1>

                    <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
                        Find answers to common questions about our services, approach, and how we support your technology goals.
                    </p>

                </div>

                {/* FAQ Accordion */}
                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="group"
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full text-left bg-white rounded-xl px-6 py-5 transition-all duration-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <span className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                                        {faq.question}
                                    </span>
                                    <div
                                        className={`flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center transition-all duration-300 ${openIndex === index
                                            ? 'bg-blue-600 rotate-180'
                                            : 'group-hover:bg-blue-100'
                                            }`}
                                    >
                                        <svg
                                            className={`w-4 h-4 transition-colors duration-300 ${openIndex === index ? 'text-white' : 'text-blue-600'
                                                }`}
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2.5"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                                        </svg>
                                    </div>
                                </div>
                            </button>

                            {/* Answer - Animated height collapse */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                    }`}
                            >
                                <div className="px-6 py-4 text-slate-600 leading-relaxed bg-blue-50 mx-px rounded-b-xl">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer CTA */}
                <div className="mt-16 text-center">
                    <p className="text-slate-600 mb-4">
                        Didn't find what you're looking for?
                    </p>
                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        Contact our team
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}