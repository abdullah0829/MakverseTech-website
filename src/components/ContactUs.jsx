import React, { useState } from 'react';
import { PhoneIcon, MailIcon, ArrowRight, ChevronRight } from 'lucide-react';
import contact from '../assets/contact.jpg'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <section id='contactUs' className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-10 text-center">
                    <p className="text-slate-600 mb-4">
                        Didn't find what you're looking for?
                    </p>

                    <button className="group inline-flex items-center gap-2 px-6 py-3 tracking-wide bg-[#005dc6] text-white font-bold rounded-full overflow-hidden">

                        {/* Text */}
                        <span className="transition-transform duration-300 group-hover:translate-x-6">
                            Contact our team
                        </span>

                        {/* Icon */}
                        <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-38" />

                    </button>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative">

                    {/* LEFT SIDE */}
                    <div className="space-y-8">

                        {/* IMAGE */}
                        <div className="rounded-2xl h-[300px]">
                            <img
                                src={contact}
                                alt="Team member"
                                className="w-full h-full rounded-2xl object-cover"
                            />
                        </div>

                        {/* TEXT */}
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-blue-600">
                                Talk to Our Team:
                            </h2>

                            <p className="text-gray-700 text-base leading-relaxed">
                                Connect with our experts today to get personalized guidance and solutions tailored to your business needs.
                            </p>

                            {/* CONTACT INFO */}
                            <div className="space-y-3 pt-4">

                                <div className="flex items-center gap-3">
                                    <PhoneIcon className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                    <a href="tel:+17816675321" className="text-gray-700 hover:text-blue-600 transition">
                                        +92 3193211400
                                    </a>
                                </div>

                                <div className="flex items-center gap-3">
                                    <PhoneIcon className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                    <a href="tel:+201237447307" className="text-gray-700 hover:text-blue-600 transition">
                                        0319-3211400
                                    </a>
                                </div>

                                <div className="flex items-center gap-3">
                                    <MailIcon className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                    <a href="mailto:info@techmatter.co" className="text-gray-700 hover:text-blue-600 transition">
                                        info@MakverseGlobal.com
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE - FORM */}
                    <div className="bg-gray-900 rounded-2xl p-6 sm:p-10 md:p-14 space-y-6">

                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold text-white">
                                Get a Free Consultation
                            </h2>

                            <p className="text-gray-300 text-sm">
                                Drop your contact details into the form, and we'll reach out to you!
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">

                            {/* NAME */}
                            <div className="grid md:grid-cols-2 gap-4 sm:grid-cols-1">
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 sm:py-3 rounded-full bg-white text-gray-700 placeholder-gray-500 focus:outline-none"
                                    required
                                />

                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 sm:py-3 rounded-full bg-white text-gray-700 placeholder-gray-500 focus:outline-none"
                                    required
                                />
                            </div>

                            {/* PHONE + EMAIL */}
                            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 sm:py-3 rounded-full bg-white text-gray-700 placeholder-gray-500 focus:outline-none"
                                />

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 sm:py-3 rounded-full bg-white text-gray-700 placeholder-gray-500 focus:outline-none"
                                    required
                                />
                            </div>

                            {/* MESSAGE */}
                            <textarea
                                name="message"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                className="w-full px-4 py-2 sm:py-3 rounded-2xl bg-white text-gray-700 placeholder-gray-500 focus:outline-none resize-none"
                            ></textarea>

                            {/* BUTTON */}
                            <div className="pt-4">
                                <button type='submit' className="relative text-white flex items-center w-34 gap-3 px-5 py-3 bg-[#005dc6] rounded-full overflow-hidden group">
                                    <ArrowRight className='w-5 h-5 group-hover:translate-x-18 transition-transform duration-300' />
                                    <span className="relative z-10 text-white font-bold tracking-wide group-hover:-translate-x-6 transition-transform duration-300">
                                        Submit
                                    </span>
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}