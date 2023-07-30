import React from "react";
import { Banner, Header, FreeTrial, Gallery } from "../components/index";
function Landing() {
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <FreeTrial />
      <Gallery />
    </React.Fragment>
  );
}

export default Landing;
