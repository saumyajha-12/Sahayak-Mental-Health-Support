import React from "react";
import LandingPage from "./landing";
import FAQSection from "./faq";
import TestimonialPage from "./testemonial";
import DeltaCourseProgress from "./footer";
import BlogSection from "./blog";
function Home() {
  return (
    <>
      <LandingPage />
      <FAQSection />
      <TestimonialPage />
      <BlogSection />
      <DeltaCourseProgress />
    </>
  );
}

export default Home;
