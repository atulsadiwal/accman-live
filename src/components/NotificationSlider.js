"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const NotificationSlider = () => {
    const notifications = [
        "Value Added Course: Essential oils and their application in Fragrance and Flavour Industry (July-Dec 2024)",
        "Admissions Open: PGDM and MBA Programs 2024-2025",
        "Upcoming Workshop: Leadership and Soft Skills Training - Aug 2024",
    ];

    return (
        <div className="w-60">
            <h2 className="text-center text-gray-700 text-xs font-semibold mb-1">Notifications
            </h2>
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                className="w-full"
            >
                {notifications.map((notification, index) => (
                    <SwiperSlide key={index}>
                        <p className="text-center cursor-grab text-xs">{notification}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default NotificationSlider;
