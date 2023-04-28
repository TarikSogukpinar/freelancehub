import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./styles.module.css";

export default function Section({
  sectionNumber,
  title,
  icon,
  description,
  buttonName,
}) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const variants = {
    hidden: {
      x: sectionNumber % 2 === 0 ? "-100vw" : "100vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };
  const scrollHandle = (e) => {
    console.log(e.target.value);
  };
  return (
    <div
      className={`${styles.section} ${
        styles[`section--${sectionNumber}`]
      } section--${sectionNumber}`}
      ref={ref}
      id={`section-${sectionNumber}`}
      onScroll={(e) => scrollHandle(e)}
    >
      {inView && (
        <motion.div
          className={styles.content}
          variants={variants}
          initial="hidden"
          animate="visible"
        >
          <p
            className={`${styles.title} hp-title leading-none md:leading-normal text-2xl md:text-6xl p-0 m-0`}
          >
            {title}
          </p>
          <div
            className={` ${
              styles[`icon--${sectionNumber}`]
            } flex flex-col justify-center items-center`}
          >
            <div className="text-6xl ">{icon}</div>{" "}
            <div
              className={` ${
                styles[`section-button-${sectionNumber}`]
              } p-5 text-white font-bold cursor-pointer`}
            >
              {buttonName}
            </div>
          </div>
          <div className="flex justify-center items-center flex-col md:flex-row">
            <div className={`${styles.description} h-full`}>
              <p className="leading-none text-2xl md:text-4xl md:leading-relaxed w-3/4">
                {description}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
