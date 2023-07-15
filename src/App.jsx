import React from "react";
import { useState, useEffect } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./components/Navbar";
import DotGroup from "./components/DotGroup";
import Landing from "./components/Landing";
import LineBreak from "./components/LineBreak";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
const App = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px");
  const [isTopOfPage, setTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setTopOfPage(true);
      if (window.scrollY !== 0) setTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className=" w-5/6 mx-auto md:h-full">
        {isAboveMediumScreen && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineBreak />
      <div className=" w-5/6 mx-auto md:h-full">
        <Skills />
        <Experiences/>
      </div>
    </div>
  );
};

export default App;
