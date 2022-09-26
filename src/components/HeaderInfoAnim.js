import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { data } from "../data";

const headerInfo = {
  hidden: {
    width: "0%",
  },
  visible: {
    width: "80%",
    transition: {
      delay: 1,
      duration: 0.5,
      when: "beforeChildren",
    },
  },
};
const mainText = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
    },
  },
};
const tagText = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
    },
  },
};
const button = {
  hidden: {
    opacity: 0,
    x: "-50%",
    y: "50%",
  },
  visible: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 1,
    },
  },
};

const icons = {
  hidden: {
    opacity: 0,
    y: "-50%",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const text = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.2,
    },
  },
};

const HeaderInfoAnim = ({ activeIndex1, activeIndex2, activeIndex3 }) => {
  return (
    <section>
      <AnimatePresence>
        {activeIndex1 && (
          <motion.div
            exit={{ opacity: 0 }}
            variants={headerInfo}
            initial="hidden"
            animate="visible"
            className="header-info section-center"
            style={{ zIndex: "50", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <div className="header-info-text">
              <motion.h1 variants={mainText}>vizer impex</motion.h1>
              <motion.h2 variants={tagText}>best choice best quality</motion.h2>
            </div>
            <motion.button
              variants={button}
              type="button"
              className="header-btn"
            >
              who we are?
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {activeIndex2 && (
          <motion.div
            exit={{ opacity: 0 }}
            variants={headerInfo}
            initial="hidden"
            animate="visible"
            className="header-info section-center"
            style={{ zIndex: "50", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <div className="header-info-text">
              <motion.h2
                variants={mainText}
                style={{ marginBottom: "1rem", fontSize: "2rem" }}
              >
                who we are?
              </motion.h2>
              <motion.h2
                variants={tagText}
                style={{ width: "60%", margin: "0 auto", color: "white" }}
              >
                Manufacturer and Exporters of Pakistan, dealing in apparel
                Sports/Fashion-Wear & Martial-Arts-Wear
              </motion.h2>
            </div>
            <motion.button
              variants={button}
              type="button"
              className="header-btn"
            >
              What We Do?
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {activeIndex3 && (
          <motion.div
            exit={{ opacity: 0 }}
            variants={headerInfo}
            initial="hidden"
            animate="visible"
            className="header-info section-center"
            style={{ zIndex: "50", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <div className="header-info-text">
              <motion.h2
                variants={mainText}
                style={{
                  marginBottom: "3rem",
                  fontSize: "2rem",
                }}
              >
                our process
              </motion.h2>
            </div>
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              style={{ width: "80%" }}
              className="header-icon-layout"
            >
              {data.map((item) => (
                <motion.div
                  variants={container}
                  style={{ textAlign: "center", marginBottom: "3rem" }}
                >
                  <motion.div
                    variants={icons}
                    style={{ width: "40%", margin: "0 auto" }}
                  >
                    <img
                      src={item.icon}
                      alt=""
                      style={{ width: "100%", height: "100%" }}
                      className="header-icon"
                    />
                  </motion.div>
                  <motion.h3
                    variants={text}
                    style={{
                      color: "white",
                      textTransform: "uppercase",
                      marginTop: "1rem",
                    }}
                  >
                    {item.title}
                  </motion.h3>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              variants={button}
              type="button"
              className="header-btn"
            >
              Looking to chat?
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeaderInfoAnim;
