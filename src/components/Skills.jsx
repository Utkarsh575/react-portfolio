import { useEffect, useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import axios from "axios";
import LineBreak from "./LineBreak";

const Skills = () => {
  const isAboveSmallScreens = useMediaQuery("(min-width:1060px)");
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
      <h1 className="text-center bg-clip-text text-7xl font-bold font-sans">
        My Expertise{" "}
      </h1>
      {isAboveSmallScreens ? (
        <div className="mt-10 items-center flex flex-row  justify-start  ">
          <div className="basis-1/3 flex flex-col justify-center h-[20rem] text-center  items-start border-2 border-grey py-5 ">
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
              <img className="px-2" src="./src/assets/line.png" alt="line" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                architecto ipsa numquam autem magni aperiam totam quia facilis
                quisquam ratione.
              </p>
            </div>
            <h3 className="justify-start flex mx-5 text-gray-500 ">
              {" "}
              &lt; h3 &gt;
            </h3>
          </div>
          <div className="basis-1/3 flex flex-col justify-center h-[20rem] text-center  items-start border-2 border-grey py-5">
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
              <img className="px-2" src="./src/assets/line.png" alt="line" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                architecto ipsa numquam autem magni aperiam totam quia facilis
                quisquam ratione.
              </p>
            </div>
            <h3 className="justify-start flex mx-5 text-gray-500 ">
              {" "}
              &lt; h3 &gt;
            </h3>
          </div>
          <div className="basis-1/3 flex flex-col justify-center h-[20rem] text-center  items-start border-2 border-grey py-5">
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
              <img className="px-2" src="./src/assets/line.png" alt="line" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                architecto ipsa numquam autem magni aperiam totam quia facilis
                quisquam ratione.
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
          <div className="xs:basis-1/2  flex justify-center h-[20rem] text-center  items-start border-2 border-grey py-5 ]">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
              repellendus laudantium quisquam et porro hic soluta neque impedit
              ut aperiam!
            </p>
          </div>
          <div className="xs:basis-1/2  flex justify-center h-[20rem] text-center  items-start border-2 border-grey py-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              doloremque dolore nulla dicta modi rerum nobis ipsam debitis
              corrupti aperiam?
            </p>
          </div>
          <div className="xs:basis-1/2  flex justify-center h-[20rem] text-center  items-start border-2 border-grey py-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              doloremque dolore nulla dicta modi rerum nobis ipsam debitis
              corrupti aperiam?
            </p>
          </div>
          <div className="xs:basis-1/2  flex justify-center h-[20rem] text-center  items-center border-2 border-grey py-5">
            <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white">
              <svg
                aria-hidden="true"
                className="w-10 h-10 text-gray-400 dark:text-gray-600"
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
            </blockquote>
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;
