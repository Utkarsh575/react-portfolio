import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import Marquee from "react-easy-marquee";
import axios from "axios";
import LineBreak from "./LineBreak";
import Line from "../../assets/line.png";
import c from "../../assets/c.svg";
import cpp from "../../assets/cpp.svg";
import css from "../../assets/css.svg";
import express from "../../assets/express.svg";
import tailwind from "../../assets/tailwind.svg";
import next from "../../assets/next.svg";
import javascript from "../../assets/javascript.svg";

import html from "../../assets/html.svg";
import linux from "../../assets/linux.svg";
import mongo from "../../assets/mongo.svg";
import node from "../../assets/node.svg";
import sass from "../../assets/sass.svg";
import typescript from "../../assets/typescript.svg";
import gatsby from "../../assets/gatsby.svg";
import redux from "../../assets/redux.svg";
import react from "../../assets/react.svg";
import git from "../../assets/git.svg";
import vercel from "../../assets/vercel.svg";
const SkillElem = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-red py-3 px-6 shadow-dark cursor-pointer absolute
text-light  "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.25 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};
const SkillList = () => {
  return (
    <>
      <h2
        className=" bg-yellow-200 font-bold text-8xl  w-full text-center "
        style={{ textShadow: "#ec4899 0px 7px " }}
      >
        Tech Stack
      </h2>
      <div className=" w-full h-screen relative flex items-center justify-center rounded-full bg-circular-Dark ">
        <motion.div
          className="flex items-center justify-center rounded-full font-bold bg-dark-grey text-light animate-pulse p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <SkillElem name="HTML" x="-25vw" y="2vw" />
        <SkillElem name="FramerMotion" x="-5vw" y="-10vw" />
        <SkillElem name="Javascript" x="20vw" y="6vw" />
        <SkillElem name="ReactJS" x="0vw" y="12vw" />
        <SkillElem name="NextJS" x="-20vw" y="-15vw" />
        <SkillElem name="MongoDB" x="15vw" y="-12vw" />
        <SkillElem name="Typescript" x="32vw" y="-5vw" />
        <SkillElem name="MySQL" x="0vw" y="-20vw" />
        <SkillElem name="Tailwind CSS" x="-25vw" y="18vw" />
        <SkillElem name="Bootstrap CSS" x="18vw" y="18vw" />
        <SkillElem name="ExpressJS" x="-35vw" y="-5vw" />
        <SkillElem name="MERN" x="0vw" y="24vw" />
      </div>
    </>
  );
};
const SkillMarque = () => {
  const skills = [
    react,
    next,
    node,
    redux,
    typescript,
    javascript,
    gatsby,
    express,
    mongo,
    tailwind,
    sass,
    html,
    css,
    git,
    vercel,
    linux,
    c,
    cpp,
  ].reverse();
  return (
    <Marquee
      className=""
      duration={6000}
      background=""
      height="10rem"
      width="100%"
      axis="X"
      align="center"
      pauseOnHover={true}
      reverse={true}
    >
      {/* <img className="w-[7rem] " src={cpp} alt="" />
<img className="w-[7rem] " src={react} alt="" />
<img className="w-[7rem] " src={redux} alt="" />
<img className="w-[7rem] " src={redux} alt="" /> */}
      {skills.map((e) => {
        return (
          <img className="w-[5rem] h-[5rem] mx-[3rem] " src={e} alt={e} />
        );
      })}
    </Marquee>
  );
};
const Skills = () => {
  const isAboveSmallScreens = useMediaQuery("(min-width:1060px)");
  const [quote, setQuote] = useState("");
  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => setQuote(data.slip.advice));
  }, []);
  return (
    <>
      <section
        id="skills"
        className=" md:flex-col md:justify-between md:items-start gap-16 md:h-full py-10 mt-10 justify-center "
      >
        <div className="flex flex-col text-2xl md:text-4xl font-playfair mb-5 ">
          My Skills
          <LineBreak width={"md:w-32 w-24"} />
        </div>

        <h1 className="text-center text-transparent bg-gradient-rainblue p-2  bg-clip-text text-4xl md:text-7xl font-bold font-sans">
          My Expertise{" "}
        </h1>
        {isAboveSmallScreens ? (
          <div className="mt-10 items-center flex flex-row  justify-start  ">
            <div className="basis-1/3 flex flex-col justify-center h-[20rem] text-center  items-start border-2 border-grey py-5   ">
              <div className="flex flex-row mx-5 gap-5 ">
                <img
                  className="invert"
                  src="https://img.icons8.com/ios/75/null/monitor--v1.png"
                />
                <h1 className="md:text-4xl font-sans font-bold text-left ">
                  <span className="underline  decoration-8 decoration-purple-500">
                    Software,
                  </span>{" "}
                  Development
                </h1>
              </div>
              <h3 className="justify-start flex mx-5 text-gray-500">
                {" "}
                &lt; h3 &gt;
              </h3>
              <div className="flex justify-start  p-2 mx-5">
                <img className="px-2" src={Line} alt="line" />
                <p className="font-mono">
                  Experienced in Data Structures and Algorithms with both
                  Functional and Object Oriented Programing using C C++
                  Javascript and TypeScript.
                </p>
              </div>
              <h3 className="justify-start flex mx-5 text-gray-500 ">
                {" "}
                &lt; h3 &gt;
              </h3>
            </div>
            <div className="basis-1/3 flex flex-col justify-center h-[20rem] text-center  items-start border-2 border-grey py-5  ">
              <div className="flex flex-row mx-5 gap-5 ">
                <img
                  className="invert"
                  src="https://img.icons8.com/ios-glyphs/75/null/react.png"
                />
                <h1 className="md:text-4xl font-sans font-bold text-left ">
                  <span className="underline  decoration-8 decoration-pink-500">
                    Frontend,
                  </span>{" "}
                  Development
                </h1>
              </div>
              <h3 className="justify-start flex mx-5 text-gray-500">
                {" "}
                &lt; h3 &gt;
              </h3>
              <div className="flex justify-start  p-2 mx-5">
                <img className="px-2" src={Line} alt="line" />
                <p className="font-mono">
                  Experienced in Developing Beautiful User Interfaces using
                  React js , Next js , Svelte js , Tailwind CSS , Material UI,
                  Post CSS and SASS like this one UwU.
                </p>
              </div>
              <h3 className="justify-start flex mx-5 text-gray-500 ">
                {" "}
                &lt; h3 &gt;
              </h3>
            </div>
            <div className="basis-1/3 flex flex-col justify-center h-[20rem] text-center  items-start border-2 border-grey py-5  ">
              <div className="flex flex-row mx-5 gap-5 ">
                <img
                  className="invert"
                  src="https://img.icons8.com/material-outlined/75/null/api-settings.png"
                />

                <h1 className="md:text-4xl font-sans font-bold text-left ">
                  <span className="underline  decoration-8 decoration-cyan-500">
                    Backend,
                  </span>{" "}
                  Development
                </h1>
              </div>
              <h3 className="justify-start flex mx-5 text-gray-500">
                {" "}
                &lt; h3 &gt;
              </h3>
              <div className="flex justify-start  p-2 mx-5">
                <img className="px-2" src={Line} alt="line" />
                <p className="font-mono">
                  Experienced in Developing Backend Architecture and RESTful
                  API's using Node Js ,and Express Js , MongoDB and MySql using
                  Javascript and Typescript.
                </p>
              </div>
              <h3 className="justify-start flex mx-5 text-gray-500 ">
                {" "}
                &lt; h3 &gt;
              </h3>
            </div>
          </div>
        ) : (
          <div className="mt-10 items-center flex xs:flex-row flex-col-reverse flex-wrap w-auto justify-start  ">
            <div className="xs:basis-1/2  flex flex-col  justify-center h-[20rem] text-center  items-start border-2 border-grey py-5   ">
              <div className="flex  flex-row mx-5  gap-5 ">
                <img
                  className="invert scale-75 "
                  src="https://img.icons8.com/material-outlined/75/null/api-settings.png"
                />

                <h1 className=" xs:text-xl mt-5 xs:mt-0 text-xl sm:text-3xl  md:text-4xl font-sans font-bold text-left ">
                  <span className="underline  decoration-8 decoration-purple-500">
                    Software,
                  </span>{" "}
                  Development
                </h1>
              </div>
              <h3 className="justify-start flex mx-5 text-gray-500">
                {" "}
                &lt; h3 &gt;
              </h3>
              <div className="flex justify-start  p-2 mx-5">
                <img className="px-2 sm:scale-75 " src={Line} alt="line" />
                <p className="  font-mono text-sm">
                  Experienced in Data Structures and Algorithms with both
                  Functional and Object Oriented Programing using C C++
                  Javascript and TypeScript.
                </p>
              </div>
              <h3 className="justify-start flex mx-5 text-gray-500  ">
                {" "}
                &lt; h3 &gt;
              </h3>
            </div>
            <div className="xs:basis-1/2  flex flex-col  justify-center h-[20rem] text-center  items-start border-2 border-grey py-5 ">
              <div className="flex  flex-row mx-5  gap-5 ">
                <img
                  className="invert scale-75 "
                  src="https://img.icons8.com/material-outlined/75/null/api-settings.png"
                />

                <h1 className=" xs:text-xl mt-5 xs:mt-0 text-xl sm:text-3xl  md:text-4xl font-sans font-bold text-left ">
                  <span className="underline  decoration-8 decoration-pink-500">
                    Frontend,
                  </span>{" "}
                  Development
                </h1>
              </div>
              <h3 className="justify-start flex mx-5 text-gray-500 ">
                {" "}
                &lt; h3 &gt;
              </h3>
              <div className="flex justify-start  p-2 mx-5">
                <img className="px-2 sm:scale-75 " src={Line} alt="line" />
                <p className="  font-mono text-sm">
                  Experienced in Developing Beautiful User Interfaces using
                  React js , Next js , Svelte js , Tailwind CSS , Material UI,
                  Post CSS and SASS like this one UwU.
                </p>
              </div>
              <h3 className="justify-start flex mx-5 text-gray-500 ">
                {" "}
                &lt; h3 &gt;
              </h3>
            </div>
            <div className="xs:basis-1/2  flex flex-col  justify-center h-[20rem] text-center  items-start border-2 border-grey py-5  ">
              <div className="flex  flex-row mx-5  gap-5 ">
                <img
                  className="invert scale-75 "
                  src="https://img.icons8.com/material-outlined/75/null/api-settings.png"
                />

                <h1 className=" xs:text-xl mt-5 xs:mt-0 text-xl sm:text-3xl  md:text-4xl font-sans font-bold text-left ">
                  <span className="underline  decoration-8 decoration-cyan-500">
                    Backend,
                  </span>{" "}
                  Development
                </h1>
              </div>
              <h3 className="justify-start flex mx-5 text-gray-500">
                {" "}
                &lt; h3 &gt;
              </h3>
              <div className="flex justify-start  p-2 mx-5">
                <img className="px-2 sm:scale-75" src={Line} alt="line" />
                <p className="  font-mono text-sm">
                  Experienced in Developing Backend Architecture and RESTful
                  API's using Node Js ,and Express Js , MongoDB and MySql using
                  Javascript and Typescript
                </p>
              </div>
              <h3 className="justify-start flex mx-5 text-gray-500  ">
                {" "}
                &lt; h3 &gt;
              </h3>
            </div>
            <div className="xs:basis-1/2  flex flex-col w-full justify-center h-[20rem] text-center  items-center border-2 border-grey py-5">
              <blockquote className="text-xl italic font-semibold text-white">
                <svg
                  aria-hidden="true"
                  className="w-10 h-10 text-gray-400 "
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <p>"{quote}"</p>
                <p> -Billumon</p>
              </blockquote>
            </div>
          </div>
        )}
      </section>
      <></>

      {isAboveSmallScreens ? <SkillList /> : <SkillMarque />}
    </>
  );
};

export default Skills;
