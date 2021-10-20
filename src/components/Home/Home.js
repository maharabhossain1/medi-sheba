import React from "react";
import EndBanner from "./EndBanner/EndBanner";
import MidSection from "./MidSection/MidSection";
import Services from "./Services/Services";
import TopBanner from "./TopBanner/TopBanner";

export default function Home() {
  return (
    <div>
      <TopBanner />
      <MidSection />
      <Services />
      <EndBanner />
    </div>
  );
}
