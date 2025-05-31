import React from "react";

import CustomChart from "./Chart.jsx";
import WellnessPage from "./Bodypage.jsx";
import Head from "./Head.jsx";
import QuoteGrid from "./quotes.jsx";
import ChatWithCounselor from "./chatcounselor.jsx";
import ExerciseSuggestionsPage from "./ExerciseSuggestions.jsx";
import ScheduleSession from "./VideoCall.jsx";
//import RelaxingMusicPage from "./sONGS.JSX";
// page2.jsx
function Page2() {
  return (
    <>
     
      <Head />
       <CustomChart />
      <ScheduleSession />
     
      <WellnessPage />
       <ExerciseSuggestionsPage />
       {/* <ChatWithCounselor /> */}
      {/* //<RelaxingMusicPage /> */}
      <QuoteGrid />
    </>
  );
}

export default Page2;

