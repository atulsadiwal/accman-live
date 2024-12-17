import Courses from '@/components/Courses';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import HorizontalComponent from '@/components/HorizontalComponent';
import JoinUsSection from '@/components/JoinUsSection';
import KnowledgeComponent from '@/components/KnowledgeComponent';
import MainSection from '@/components/MainSection';
import NavBar from '@/components/NavBar';
import NewsAndArticles from '@/components/NewsAndArticles';
import Opportunities from '@/components/Opportunities';
import OurCampus from '@/components/OurCampus';
import TopCard from '@/components/TopCard';
import University from '@/components/University';
import UniversityEvents from '@/components/UniversityEvents';
import WeAreTheOne from '@/components/WeAreTheOne';
import WhyChoose from '@/components/WhyChoose';
import WhyChooseUs from '@/components/WhyChooseUs';
import YourJourney from '@/components/YourJourney';
import React, { useState } from 'react';

const HomePage = () => {
    return (
        <>
            <NavBar />
            <MainSection />
            <TopCard />
            <JoinUsSection />
            <WhyChooseUs />
            <YourJourney />
            <OurCampus />
            <Courses />
            <Opportunities />
            <NewsAndArticles />
            <WeAreTheOne />
            <UniversityEvents />
            <Footer />
        </>
    );
}

export default HomePage;
