import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Feedback from "./Feedback";
import Header from "../../Header";
import Footer from "../../Footer";

function Home() {
  return (
    <div>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Feedback />
      <Footer />
    </div>
  );
}
export default Home;
