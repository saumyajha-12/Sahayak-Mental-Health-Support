import React from "react";
import LandingPage from "./landing";
import FAQSection from "./faq";
import TestimonialPage from "./testemonial";
import DeltaCourseProgress from "./footer";
import BlogSection from "./blog";
// import ExerciseSuggestion from "../components/ExerciseSuggestions";
import ExerciseSuggestions from "../components/ExerciseSuggestions";
import ChatWithCounselor from "../components/chatcounselor";
import ScheduleCall from "../components/VideoCall";


function Home() {
  return (
    <>
      <LandingPage />
      <FAQSection />
      {/* <ChatWithCounselor/>
      <ScheduleCall/>
      <ExerciseSuggestions /> */}
      <TestimonialPage />
      <BlogSection />
      <DeltaCourseProgress />
    </>
  );
}

export default Home;
