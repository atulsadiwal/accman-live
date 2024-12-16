"use client";

import Courses from "@/components/Courses";
import Footer from "@/components/Footer";
import JoinUsSection from "@/components/JoinUsSection";
import NewsAndArticles from "@/components/NewsAndArticles";

export default function Home() {
  return (
    <>
      <JoinUsSection />
      <Courses />
      <NewsAndArticles />
      <Footer />
    </>
  );
}