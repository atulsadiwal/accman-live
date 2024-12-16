import Courses from '@/components/Courses';
import Footer from '@/components/Footer';
import JoinUsSection from '@/components/JoinUsSection';
import MainSection from '@/components/MainSection';
import NavBar from '@/components/NavBar';
import NewsAndArticles from '@/components/NewsAndArticles';
import TopCard from '@/components/TopCard';
import WhyChooseUs from '@/components/WhyChooseUs';
import React from 'react';

const HomePage = () => {
    return (
        <>
            <NavBar />
            <MainSection />
            <TopCard />
            <JoinUsSection />
            <WhyChooseUs />
            <Courses />
            <NewsAndArticles />
            <Footer />
        </>
    );
}

export default HomePage;
