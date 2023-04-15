import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons";
import ProfileImage from "../../assets/profile.png";
const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width:1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      <div className=" z-10 mt-16 md:mt-32 flex justify-between md:flex-row-reverse flex-col items-center ">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
          >
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[15rem] md:max-w-[20rem]
              bg-gradient-rainbow rounded-t-full "
              src={ProfileImage}
            />
          </div>
        ) : (
          <div className="border-blue border-2 hover:saturate-200 transition duration-500 w-[20rem] rounded-t-full bg-gradient-rainbow scale-[85%]">
            <img
              alt="profile"
              className=" z-10 w-full  max-w-[400px] md:max-w-[600px] "
              src={ProfileImage}
            />
          </div>
        )}
        <div className="z-30 basis-[40%] mt-12 md:mt-32 sm:basis-[50%] md:basis-[48%] ">
          {/* HEADINGS */}
          <motion.div
            className=""
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="text-6xl   font-playfair z-10 text-center md:text-start">
              HI i am
              <span
                className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
                before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
              >
                Utkarsh
              </span>
            </div>

            <div className="mt-10 mb-7 text-sm text-center md:text-start ">
              <h3 className="text-base font-sans text-white font-medium     ">
                Fullstack WebDeveloper , Designer ,Web3 Enthusiast
              </h3>
              {/* <h1 className="text-4xl font-extrabold text-slate-300 mt-3">
                Hi, I am Utkarsh
              </h1> */}
              <div className="text-base font-semibold  text-gray-400 mt-3">
                I am a Sophomore at SRMIST KTR.
                <span className="underline decoration-gray-900 foxt-bold text-white">
                  Smart india hackathon 2022 winner , 15+ Hackathon wins
                </span>
                I am passionate about
                <span className="underline decoration-red-400 foxt-bold text-white">
                  Open Source
                </span>
                and
                <span className="underline decoration-pink-500 font-bold text-white">
                  Web Development
                </span>
                currently learning to build scalable web-apps I am proficient in
                building neat User Interfaces and can get along with full stack
                projects . My Favorite tech Stack is
                <span className="underline decoration-green-500 font-bold text-white">
                  MERN
                </span>
                <span className="text-green-300"> MongoDB</span>,
                <span className="text-red-600">ExpressJS</span>,
                <span className="text-indigo-500">ReactJS</span>,
                <span className="text-green-600">NodeJS</span>
              </div>
            </div>
          </motion.div>
          {/* cta */}
          <motion.div
            className="flex mt-5 justify-center md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500">
              <a
                href="https://drive.google.com/file/d/1bxMRyMmuB7NpLXuAhlbAtLk80am7SCVd/view?usp=share_link"
                rel="noreferrer"
                target="_blank"
              >
                Resume
              </a>
            </div>
            <div
              className="rounded-r-sm  bg-gradient-rainblue py-0.5 pr-0.5"
              href="contact"
            >
              <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center font-playfair px-10">
                <a
                  href="https://api.whatsapp.com/send?phone=6200402119
"
                  rel="noreferrer"
                  target="_blank"
                >
                  Let's Talk
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <SocialMediaIcons />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
