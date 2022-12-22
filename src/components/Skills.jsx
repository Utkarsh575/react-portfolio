import { useEffect, useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import axios from "axios";
import LineBreak from "./LineBreak";

const Skills = () => {
  const isAboveSmallScreens = useMediaQuery("(min-width:768px)");
  const [quote, setQuote] = useState("");
  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => setQuote(data.slip.advice));
  }, []);
  return (
    <section
      id="skills"
      className="md:flex-col md:justify-between md:items-start gap-16 md:h-full py-10 mt-10 justify-center "
    >
      <div className="flex flex-col text-2xl md:text-4xl font-playfair mb-5 ">
        My Skills
        <LineBreak width={"md:w-32 w-24"} />
      </div>
      <h1 className="text-center bg-clip-text  bg-[url('../src/assets/brush.png') text-transparent text-7xl font-bold font-sans">
        My Expertise{" "}
      </h1>
      {isAboveSmallScreens ? (
        <div className="mt-10 items-center flex flex-row justify-start">
          <div className="w-[33%] flex justify-center h-[20rem] text-center  items-start border-2 border-grey py-5 ]">
            <p>hi</p>
          </div>
          <div className="w-[33%] flex justify-center h-[20rem] text-center  items-start border-2 border-grey py-5">
            <p>hi</p>
          </div>
          <div className="w-[33%] flex justify-center h-[20rem] text-center  items-start border-2 border-grey py-5">
            <p>hi</p>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </section>
  );
};

export default Skills;
