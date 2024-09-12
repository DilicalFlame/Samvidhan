import React from "react";
import NavBar from "../components/NavBar";
import Markdown from "../utils/MdRender";
import ControlledCarousel from "../components/Carousel";

function LandingPage() {
  return (
    <>
    <header>
      <NavBar />
      <ControlledCarousel />
    </header>
    <div className="container">
      <div className="content">
        <Markdown filename="markdown/LandingPage.md" />
      </div>
    </div>
      <footer>
        <p>© 2024 - LTS, By Team Codeine</p>
      </footer>
    </>
  );
}

export default LandingPage;
