import Courses from '@/components/Courses';
import Footer from '@/components/Footer';
import JoinUsSection from '@/components/JoinUsSection';
import MainSection from '@/components/MainSection';
import NavBar from '@/components/NavBar';
import NewsAndArticles from '@/components/NewsAndArticles';
import Opportunities from '@/components/Opportunities';
import OurCampus from '@/components/OurCampus';
import TopCard from '@/components/TopCard';
import WeAreTheOne from '@/components/WeAreTheOne';
import WhyChooseUs from '@/components/WhyChooseUs';
import YourJourney from '@/components/YourJourney';
import React from 'react';

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
            <Footer />
        </>
    );
}

export default HomePage;
