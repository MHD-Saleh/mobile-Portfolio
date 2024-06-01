import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import UIUX from "/icons/ui.png";
import CrossPlatform from "/icons/cross-platform.png";
import Api from "/icons/api.png";
import idea from "/icons/idea.png";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1 style={{ display: "flex" }}>
            <SpringWord label="Unique" withStyle Bold />
            <SpringWord label="Ideas" withStyle />
          </h1>
        </div>
        <div className="title">
          <h1 style={{ display: "flex" }}>
            <SpringWord label="For Your" withStyle />
            <SpringWord label="Business." Bold />
          </h1>
          <SpringWord label="WHAT I DO?" isButton />
        </div>
      </motion.div>
      <div className="section">
        {data.map((item) => (
          <ServicesCard key={item.id} element={item} />
        ))}
      </div>
    </motion.div>
  );
};

export default Services;

const ServicesCard = ({ element }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      // whileHover={{ y: -20, cursor: "pointer" }}
      transition={{ duration: 1, delay: element.id * 0.5 }}
      className="card"
    >
      <div className="cardd">
        <img src={element.icon} className="imageStyle" />
        <h2 className="title">{element.title}</h2>
      </div>
      <p className="body">{element.body}</p>
    </motion.div>
  );
};

const SpringWord = ({ label, isButton, withStyle, Bold }) => {
  if (isButton) {
    return (
      <motion.button
        style={{
          cursor: "pointer",
          fontWeight: Bold ? "bold" : null,
        }}
        whileHover={{ color: isButton ? "white" : "orange", scale: 1.1 }}
        transition={{ type: "spring", stiffness: 500 }}
      >
        {label}
      </motion.button>
    );
  }
  return (
    <motion.div
      style={
        withStyle
          ? {
              cursor: "pointer",
              marginInline: "20px",
              fontWeight: Bold ? "bold" : null,
            }
          : { fontWeight: Bold ? "bold" : null, cursor: "pointer" }
      }
      whileHover={{ color: isButton ? "white" : "orange", scale: 1.1 }}
      transition={{ type: "spring", stiffness: 500 }}
    >
      {label}
    </motion.div>
  );
};

const data = [
  {
    id: 1,
    title: "Cross-Platform Development:",
    body: "Proficient in developing mobile apps across iOS and Android using frameworks like React Native or Flutter, ensuring native-like performance and user experience.",
    icon: UIUX,
  },
  {
    id: 2,
    title: "UI/UX Design Integration:",
    body: "Skilled at integrating captivating UI designs with smooth UX into mobile apps, ensuring consistency across devices.",
    icon: CrossPlatform,
  },
  {
    id: 3,
    title: "API Integration and Data Management:",
    body: "Expertise in integrating APIs into mobile apps for data retrieval, storage, and real-time updates, ensuring optimal performance.",
    icon: Api,
  },
  {
    id: 4,
    title: "Problem Solving and Debugging:",
    body: "Adept at troubleshooting and resolving technical issues and bugs within mobile apps, enhancing user satisfaction.",
    icon: idea,
  },
];
