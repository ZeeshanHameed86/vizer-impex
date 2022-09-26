import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const titleAnim = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Title = ({ title }) => {
  const [anim, setAnim] = useState();
  const { ref, inView } = useInView();

  useEffect(() => {
    setAnim(inView);
  }, [inView]);

  return (
    <motion.div
      variants={titleAnim}
      animate={anim ? "visible" : "hidden"}
      transition={{
        delay: 0.2,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="title"
      ref={ref}
    >
      <h1>{title}</h1>
      <div className="underline"></div>
    </motion.div>
  );
};

export default Title;
