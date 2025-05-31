// // import React from "react";
// import LandingPage from "./landing";
// import FAQSection from "./faq";
// import TestimonialPage from "./testemonial";
// import DeltaCourseProgress from "./footer";
// import BlogSection from "./blog";
// import ExerciseSuggestions from "../components/ExerciseSuggestions";
// import ChatWithCounselor from "../components/chatcounselor";
// import ScheduleCall from "../components/VideoCall";

// function Home() {
//   return (
//     <>
//       <LandingPage />
//       <FAQSection />
//       <ChatWithCounselor />

//       {/* 👇 New Chat with Sahayak Bot Box */}
//       <div className="flex justify-center mt-8">
//         <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm text-center">
//           <h3 className="text-xl font-semibold mb-2 text-gray-800">Need Someone to Talk To?</h3>
//           <p className="text-gray-600 mb-4">Start a conversation with the Sahayak Bot. It's always here to listen.</p>
//           <button
//             onClick={() => window.location.href = '/chatbot'}
//             className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
//           >
//             Chat with Sahayak Bot 🤖
//           </button>
//         </div>
//       </div>

//       {/* You can uncomment these as needed */}
//       {/* <ScheduleCall/> */}
//       {/* <ExerciseSuggestions /> */}
//       <TestimonialPage />
//       <BlogSection />
//       <DeltaCourseProgress />
//     </>
//   );
// }

// export default Home;
import React from "react";
import LandingPage from "./landing";
import FAQSection from "./faq";
import TestimonialPage from "./testemonial";
import DeltaCourseProgress from "./footer";
import BlogSection from "./blog";
import ExerciseSuggestions from "../components/ExerciseSuggestions";
import ChatWithCounselor from "../components/chatcounselor";
import ScheduleCall from "../components/VideoCall";

function Home() {
  return (
    <>
      <LandingPage />
      <FAQSection />
    
      {/* 👇 New Chat with Sahayak Bot Box */}
      <div className="flex justify-center mt-8">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm text-center">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Need Someone to Talk To?</h3>
          <p className="text-gray-600 mb-4">Start a conversation with the Sahayak Bot. It's always there to listen you.</p>
          <button
            onClick={() => window.location.href = '/chatbot'}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
          >
            Chat with Sahayak Bot 🤖
          </button>
        </div>
      </div>

      {/* You can uncomment these as needed */}
      {/* <ScheduleCall/> */}
      {/* <ExerciseSuggestions /> */}
      <TestimonialPage />
      <BlogSection />
      <DeltaCourseProgress />
    </>
  );
}

export default Home;
