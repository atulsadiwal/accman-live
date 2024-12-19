'use client'

import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Brain, Users, Microscope } from 'lucide-react'
import PlacementGlimpses from '@/components/PlacementGlimpses'
import Testimonials from '@/components/Testimonials'
import Alumini from '@/components/Alumini'
import AboutSection from '@/components/AboutSection'
import FAQ from '@/components/FAQ'

const features = [
    {
        icon: <Brain className="w-12 h-12 text-blue-600 group-hover:text-white transition-colors duration-300 ease-in-out" />,
        title: "Innovative Learning Programs",
        description: "Explore cutting-edge courses designed for future leaders."
    },
    {
        icon: <Users className="w-12 h-12 text-blue-600 group-hover:text-white transition-colors duration-300 ease-in-out" />,
        title: "Exceptional Career Support",
        description: "Comprehensive guidance for your career aspirations."
    },
    {
        icon: <Microscope className="w-12 h-12 text-blue-600 group-hover:text-white transition-colors duration-300 ease-in-out" />,
        title: "Advanced Research Facilities",
        description: "State-of-the-art labs for hands-on learning and innovation."
    },
    {
        icon: <Microscope className="w-12 h-12 text-blue-600 group-hover:text-white transition-colors duration-300 ease-in-out" />,
        title: "Advanced Research Facilities",
        description: "State-of-the-art labs for hands-on learning and innovation."
    },
]

export default function PGDM() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [slidesPerView, setSlidesPerView] = useState(3)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setSlidesPerView(1)
            } else if (window.innerWidth < 1024) {
                setSlidesPerView(2)
            } else {
                setSlidesPerView(3)
            }
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const totalSlides = features.length

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, [totalSlides])

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
    }, [totalSlides])

    return (
        <>
            <section className='bg-gray-50'>
                <div className='relative flex flex-col md:flex-row items-center justify-between mx-auto px-4 py-12'>
                    <div className='text-left mb-8 md:mb-0 w-5/12 pl-5'>
                        <div className='border-t-8 border-gray-800 w-full mt-4'></div>
                        <h2 className='text-6xl md:text-8xl font-bold uppercase text-gray-800'>
                            PGDM Programs
                        </h2>
                        <div className='border-t-8 border-gray-800 w-full mt-4'></div>
                    </div>

                    <div className='relative w-9/12'>
                        <img
                            src='/image/pgdm/pgdm-bg.jpg'
                            alt='Students'
                            className='rounded-lg shadow-md'
                        />
                        <div className='absolute -bottom-24 right-10 mt-5'>
                            <img
                                src='/image/pgdm/pgdm-1.webp'
                                alt='Mechanic'
                                className='w-64 h-64 rounded-lg shadow-lg'
                            />
                        </div>
                    </div>
                    <div className='absolute -bottom-24 left-20'>
                        <img
                            src='/image/pgdm/pgdm-2.webp'
                            alt='Welding'
                            className='w-64 h-64 rounded-lg shadow-lg'
                        />
                    </div>
                </div>
            </section>

            <AboutSection />

            <Alumini />

            <PlacementGlimpses />

            <Testimonials />

            <section className='max-w-6xl mx-auto px-3 mt-16 py-10'>
                <div className='text-center'>
                    <h3 className='text-4xl'>Why PGDM</h3>
                    <p className='text-lg'>
                        Business Analytics, though it has been there for decades in various forms supporting business decisions, has become a watchword in the market since 2010. Recent advancements in Data Science and Big Data technology enabled Business Analytics in crunching huge amount of data to provide valuable Data-Driven Business Insights. Quick Google Search will reveal a plethora of articles, blogs and publications quoting Business Analytics as the Next Big Thing in Business world, the sexiest job in 21st Century and so on.
                    </p>
                </div>

                <div className="mt-10">
                    <div className="px-4 py-12">
                        <div className="relative">
                            <div className="flex items-center justify-between">
                                <button
                                    onClick={prevSlide}
                                    className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50"
                                    aria-label="Previous slide"
                                >
                                    <ChevronLeft className="w-6 h-6 text-gray-600" />
                                </button>

                                <div className="flex overflow-hidden w-full">
                                    <div
                                        className="flex transition-transform duration-500 ease-in-out"
                                        style={{
                                            transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)`,
                                            width: `${features.length * (100 / slidesPerView)}%`,
                                        }}
                                    >
                                        {features.map((feature, index) => (
                                            <div
                                                key={index}
                                                className={`px-3 ${slidesPerView === 1 ? 'w-full' : slidesPerView === 2 ? 'w-1/2' : 'w-1/3'}`}
                                                style={{ flex: `0 0 ${100 / slidesPerView}%` }}
                                            >
                                                <div className="p-6 rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px] bg-white">
                                                    <div className="mb-4 flex justify-center">{feature.icon}</div>
                                                    <h3 className="text-xl font-semibold text-blue-600 mb-2">{feature.title}</h3>
                                                    <p className="text-gray-600">{feature.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    onClick={nextSlide}
                                    className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50"
                                    aria-label="Next slide"
                                >
                                    <ChevronRight className="w-6 h-6 text-gray-600" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FAQ />
        </>
    )
}
