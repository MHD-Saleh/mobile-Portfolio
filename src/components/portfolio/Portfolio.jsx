import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import FutureGym from "/Projects/FutureGym.png";
import MedSyncApp from "/Projects/MedSyncApp.png";
import SmartHome from "/Projects/SmartHome.png";
import E_Menu from "/Projects/E_Menu.png";
import E_Clinic_Patient from "/Projects/E_Clinic_Patient.png";
import JadUniversal from "/Projects/JadUniversal.png";
import DrCalories from "/Projects/DrCalories.png";
import E_Clinic_Doctor from "/Projects/E_Clinic_Doctor.png";
import EduCar from "/Projects/EduCar.png";

const items = [
  {
    id: 1,
    title: "Future Gym",
    img: FutureGym,
    desc: "Provides mathematical fitness content, diverse training programs, and gym/trainer comparisons. Coaches can showcase their expertise and find job opportunities. Sports clubs can manage operations, market products, and handle trainer and subscriber management. Offers a one-month trial of the premium Diamond package.",
    link: "",
  },
  {
    id: 2,
    title: "MedSync App",
    img: MedSyncApp,
    desc: "Introducing our comprehensive medical app to streamline your healthcare needs. Locate doctors, labs, and pharmacies, schedule appointments, and access prescriptions securely. Use our blood donation service and find emergency ambulance assistance. Join as an ambulance driver or participate in blood donation drives. Download now to take control of your health journey.",
    link: "",
  },
  {
    id: 3,
    title: "Smart Home",
    img: SmartHome,
    desc: "Introducing our comprehensive medical app to streamline your healthcare needs. Locate doctors, labs, and pharmacies, schedule appointments, and access prescriptions securely. Use our blood donation service and find emergency ambulance assistance. Join as an ambulance driver or participate in blood donation drives. Download now to take control of your health journey.",
    link: "",
  },
  {
    id: 4,
    title: "E-Menu",
    img: E_Menu,
    desc: "Introducing our comprehensive medical app to streamline your healthcare needs. Locate doctors, labs, and pharmacies, schedule appointments, and access prescriptions securely. Use our blood donation service and find emergency ambulance assistance. Join as an ambulance driver or participate in blood donation drives. Download now to take control of your health journey.",
    link: "",
  },
  {
    id: 5,
    title: "E-Clinic Patient",
    img: E_Clinic_Patient,
    desc: "Introducing our comprehensive medical app to streamline your healthcare needs. Locate doctors, labs, and pharmacies, schedule appointments, and access prescriptions securely. Use our blood donation service and find emergency ambulance assistance. Join as an ambulance driver or participate in blood donation drives. Download now to take control of your health journey.",
    link: "",
  },
  {
    id: 6,
    title: "Dr Calories",
    img: DrCalories,
    desc: "Introducing our comprehensive medical app to streamline your healthcare needs. Locate doctors, labs, and pharmacies, schedule appointments, and access prescriptions securely. Use our blood donation service and find emergency ambulance assistance. Join as an ambulance driver or participate in blood donation drives. Download now to take control of your health journey.",
    link: "",
  },
  {
    id: 7,
    title: "E-Clinic Doctor",
    img: E_Clinic_Doctor,
    desc: "Introducing our comprehensive medical app to streamline your healthcare needs. Locate doctors, labs, and pharmacies, schedule appointments, and access prescriptions securely. Use our blood donation service and find emergency ambulance assistance. Join as an ambulance driver or participate in blood donation drives. Download now to take control of your health journey.",
    link: "",
  },
  {
    id: 8,
    title: "EduCar",
    img: EduCar,
    desc: "Introducing our comprehensive medical app to streamline your healthcare needs. Locate doctors, labs, and pharmacies, schedule appointments, and access prescriptions securely. Use our blood donation service and find emergency ambulance assistance. Join as an ambulance driver or participate in blood donation drives. Download now to take control of your health journey.",
    link: "",
  },
  {
    id: 9,
    title: "Jad Universal",
    img: JadUniversal,
    desc: "Introducing our comprehensive medical app to streamline your healthcare needs. Locate doctors, labs, and pharmacies, schedule appointments, and access prescriptions securely. Use our blood donation service and find emergency ambulance assistance. Join as an ambulance driver or participate in blood donation drives. Download now to take control of your health journey.",
    link: "",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
