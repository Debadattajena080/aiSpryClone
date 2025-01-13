import React from "react";
import BannerSection from "./BannerSection";
import Achievements from "./Achievements";
import ConnectWithUs from "./ConnectWithUs";
import DemoForm from "../home/DemoForm";

import ScrollToTopButton from "../utility/ScrollToTopBtn";
// import { scrollToTop } from "../utility/ScrolToTop";
import ProjectList from "./ProjectList";

const InnovationIndex = () => {
  return (
    <div className="mb-12">
      <BannerSection />
      <ProjectList />
      <Achievements />
      <ConnectWithUs />
      <DemoForm />
      <ScrollToTopButton />
    </div>
  );
};

export default InnovationIndex;
