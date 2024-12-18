import React from 'react';
import Courses from '@/components/Courses';
import Footer from '@/components/Footer';
import JoinUsSection from '@/components/JoinUsSection';
import MainSection from '@/components/MainSection';
import NavBar from '@/components/NavBar';
import NewsAndArticles from '@/components/NewsAndArticles';
import Opportunities from '@/components/Opportunities';
import OurCampus from '@/components/OurCampus';
import TopCard from '@/components/TopCard';
import UniversityEvents from '@/components/UniversityEvents';
import WeAreTheOne from '@/components/WeAreTheOne';
import WhyChooseUs from '@/components/WhyChooseUs';
import YourJourney from '@/components/YourJourney';

const HomePage = () => {
    return (
        <>
            <NavBar />
            <MainSection />
            <TopCard />
            <WhyChooseUs />
            <JoinUsSection />
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
