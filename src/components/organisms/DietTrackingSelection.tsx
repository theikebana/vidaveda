"use client";

import React from 'react';
import { ArrowRight, Target, Plus, Users, MessageSquare, BarChart3, Stethoscope, PenTool } from 'lucide-react';

const DietTrackingSelection = () => {
    const cards = [
        {
            title: "Create Diet Plan",
            desc: "Build your own custom meal plan based on your preferences, goals, and dietary restrictions",
            features: [
                { icon: <Target size={18} />, text: "Custom macro targets" },
                { icon: <Plus size={18} />, text: "Add your favorite foods" }
            ],
            cta: "Start Creating",
            primary: true,
            icon: <PenTool className="text-[#134e27]" size={32} />
        },
        {
            title: "Consult a Dietician",
            desc: "Get professional guidance from certified dietitians for personalized nutrition advice.",
            features: [
                { icon: <Users size={18} />, text: "Certified professionals" },
                { icon: <MessageSquare size={18} />, text: "1-on-1 consultation" }
            ],
            cta: "Book Consultation",
            primary: false,
            icon: <Stethoscope className="text-white" size={32} />,
            offset: true // <-- flag to add margin-top
        },
        {
            title: "Progress & Reports",
            desc: "Track your diet progress with detailed reports and analytics to monitor your health journey.",
            features: [
                { icon: <Users size={18} />, text: "Weekly & monthly reports" },
                { icon: <MessageSquare size={18} />, text: "Progress analytics" }
            ],
            cta: "View Report",
            primary: false,
            icon: <BarChart3 className="text-white" size={32} />
        }
    ];

    return (
        <section className="py-20 px-6 bg-white">
            {/* Header */}
            <div className="flex flex-col gap-2 items-center text-center sm:mt-14 mb-14 lg:mb-20">
                <p className="text-base sm:text-lg text-[#7a4e2d] font-satisfy">
                    Select
                </p>
                <h2 className="text-xl sm:text-3xl lg:text-[40px] font-unbounded font-light text-[#14532d] leading-tight max-w-[90%] sm:max-w-3xl">
                    what you looking for
                </h2>
            </div>
            {/* Cards Container */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`relative flex flex-col items-center ${card.offset ? 'mt-[120px]' : ''}`} // <-- center card offset
                    >

                        {/* Decorative Crown for Primary Card */}
                        {card.primary && (
                            <div className="flex gap-1 mb-2">
                                <div className="w-2 h-6 bg-[#134e27] rounded-full -rotate-12 translate-y-2"></div>
                                <div className="w-2 h-8 bg-[#134e27] rounded-full"></div>
                                <div className="w-2 h-6 bg-[#134e27] rounded-full rotate-12 translate-y-2"></div>
                            </div>
                        )}

                        {/* Main Card Body */}
                        <div className={`
              w-full rounded-[1000px] px-10 py-16 flex flex-col items-center max-w-[360px] text-center transition-transform hover:scale-103
              ${card.primary ? 'bg-[#134e27] text-white' : 'bg-[#f8f9f8] text-[#0a3d2e]'}
            `}>
                            {/* Icon Circle */}
                            <div className={`
                w-20 h-20 rounded-full flex items-center justify-center mb-10
                ${card.primary ? 'bg-white' : 'bg-[#a67c37]'}
              `}>
                                {card.icon}
                            </div>

                            {/* Text Content */}
                            <h3 className={`text-lg font-light font-unbounded mb-4 ${card.primary ? 'text-white' : 'text-[#134e27]'}`}>
                                {card.title}
                            </h3>

                            <div className="space-y-4 text-center">
                                <p className={`leading-snug font-light px-4 ${card.primary ? 'text-[gray-100]' : 'text-gray-800'}`}>
                                    {card.desc}
                                </p>

                                {/* Feature List */}
                                <div className="space-y-2 mb-10 w-full flex flex-col items-center px-6">
                                    {card.features.map((feat, i) => (
                                        <div key={i} className="flex items-center gap-3 font-light">
                                            <span className={card.primary ? 'text-white' : 'text-[#134e27]'}>{feat.icon}</span>
                                            <span>{feat.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA */}
                            <button className="flex flex-col items-center gap-4 group cursor-pointer">
                                <span className={`text-lg font-light font-unbounded ${card.primary ? 'text-white' : 'text-black'}`}>
                                    {card.cta}
                                </span>
                                <div className={`
                  p-2 rounded-full transition-colors
                  ${card.primary ? 'bg-transparent text-white' : 'bg-transparent text-black'}
                `}>
                                    <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DietTrackingSelection;
