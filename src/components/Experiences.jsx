import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Experiences = () => {
  return (
    <>
      <section
        id="experiences"
        className=" md:flex-col md:justify-between md:items-start gap-16 md:h-full py-10 mt-10 justify-center "
      >
        <motion.div
          className=""
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h2
            className=" bg-yellow-200 font-bold text-8xl  w-full text-start "
            style={{ textShadow: "#ec4899 0px 7px " }}
          >
            Experiences
          </h2>
        </motion.div>
      </section>
    </>
  );
};

export default Experiences;
