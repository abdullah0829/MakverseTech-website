import React, { useState } from 'react'

const ServiceCard = ({ service, index }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const Icon = service.icon
    return (
    <div className='relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 shadow-2xl shadow-gray-100'>

        <div
            className='pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-[300px] h-[300px] absolute z-0 transition-opacity duration-500 mix-blend-lighten opacity-70'
            style={{ top: position.y - 150, left: position.x - 150 }}
        />

        <div className='flex flex-col items-start gap-4 p-8 hover:p-7.5 hover:m-0.5 transition-all rounded-[10px] bg-white z-10 relative'>


            {/* ICON */}
            <div className="bg-blue-100 p-3 rounded-full">
                <Icon className="w-6 h-6 text-blue-600" />
            </div>

            <div className='w-fit h-50 bg-sky-200 rounded-2xl p-4 flex items-'>
            {/* TEXT */}
            <div>
                <h3 className='font-bold text-2xl'>{service.title}</h3>
                <p className='text-md mt-4'>{service.desc}</p>
            </div>
            </div>

        </div>

    </div>
)
}

export default ServiceCard
