import React from "react";
import CustomChart from "./Chart.jsx";
import WellnessPage from "./Bodypage.jsx";
import Head from "./Head.jsx";
import QuoteGrid from "./quotes.jsx";
//import RelaxingMusicPage from "./sONGS.JSX";
// page2.jsx
function Page2() {
  return (
    <>
      <Head/>
      <CustomChart />
      <WellnessPage />
      {/* //<RelaxingMusicPage /> */}
      <QuoteGrid />
    </>
  );
}

export default Page2;

