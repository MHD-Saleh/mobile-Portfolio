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
    link: "https://play.google.com/store/apps/details?id=net.future_gym",
  },
  {
    id: 2,
    title: "MedSync App",
    img: MedSyncApp,
    desc: "Introducing our comprehensive medical app to streamline your healthcare needs. Locate doctors, labs, and pharmacies, schedule appointments, and access prescriptions securely. Use our blood donation service and find emergency ambulance assistance. Join as an ambulance driver or participate in blood donation drives. Download now to take control of your health journey.",
    link: "https://play.google.com/store/apps/details?id=com.asml.dose.medsync.www.medsync",
  },
  {
    id: 3,
    title: "EduCar",
    img: EduCar,
    desc: "Created EduCar, an innovative app for teaching driving lessons, enabling online payments, tracking progress, and managing lesson reservations. Facilitated user-friendly interfaces for both students and teachers to enhance the learning experience. Implemented secure transaction systems and real-time progress tracking to ensure effective and transparent communication. Streamlined scheduling and management processes, boosting overall efficiency and user satisfaction.",
    link: "https://www.behance.net/gallery/200015329/EduCar-(Android-IOS)",
  },
  {
    id: 4,
    title: "Dr Calories",
    img: DrCalories,
    desc: "Developed Dr. Calories, a comprehensive app for designing personalized calorie plans and tracking body change progress. Enabled users to request and customize diet plans, explore kitchen options, and receive water intake reminders. Integrated progress visualization tools and push notifications to enhance user engagement and adherence to health goals. Designed with a focus on user experience, driving positive health outcomes and consistent app usage.",
    link: "https://www.behance.net/gallery/200016009/Dr-Calories",
  },
  {
    id: 5,
    title: "Jad Universal",
    img: JadUniversal,
    desc: "Developed a dynamic e-commerce app integrated with WordPress WooCommerce for seamless product management and Firebase for real-time push notifications. Enhanced user engagement through instant updates and streamlined backend processes for efficient inventory control. Implemented secure payment gateways and responsive design for an optimal shopping experience across devices. Contributed to increased sales and user retention.",
    link: "https://www.behance.net/gallery/200017203/Jad-Universal",
  },
  {
    id: 6,
    title: "E-Clinic Doctor",
    img: E_Clinic_Doctor,
    desc: "E-Clinic (Doctor): Developed a robust app for doctors to manage consultation requests, both private and public, and respond to patient inquiries in real-time. Implemented features for posting educational content, answering anonymous questions, and conducting live chats. Enabled doctors to prescribe medications based on consultation requests, streamlining communication and patient care.",
    link: "https://www.behance.net/gallery/200018277/E-Clinic",
  },

  {
    id: 7,
    title: "E-Menu",
    img: E_Menu,
    desc: "Developed E-Menu, an innovative app that enhances dining experiences by scanning QR codes to identify table numbers and restaurant names. Displayed a list of dishes with user reviews, allowed custom notes for orders, and tracked the remaining time for meal delivery. Implemented a points system for redeeming meals or drinks and a recommendation system for personalized dish suggestions. Enhanced customer engagement and streamlined the ordering process for restaurants.",
    link: "https://www.behance.net/gallery/144695145/E-Menu",
  },
  {
    id: 8,
    title: "E-Clinic Patient",
    img: E_Clinic_Patient,
    desc: "E-Clinic (Patient): Created a user-friendly app for patients to request consultations, search for doctors, and view medical posts. Integrated real-time chat for direct communication with doctors and allowed patients to receive prescribed medications within the app. Enhanced patient engagement through interactive Q&A and personalized medical advice.",
    link: "https://www.behance.net/gallery/200018277/E-Clinic",
  },
  {
    id: 9,
    title: "Smart Home",
    img: SmartHome,
    desc: "Developed Smart Home, an advanced app using Arduino with Bluetooth communication to control home automation features. Enabled users to turn lights and air conditioners on/off, manage door operations, and receive notifications upon detecting movement. Integrated various smart home functionalities to enhance convenience, security, and energy efficiency. Designed with intuitive controls and real-time alerts to ensure a seamless user experience.",
    link: "https://www.behance.net/gallery/145216659/smart-Home-Aplication?tracking_source=project_owner_other_projects",
  },
];

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
            <button onClick={() => window.open(item.link, "_blank")}>
              See Demo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
