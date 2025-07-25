import React from "react";
import Navbar from "../components/Navbar";

import services from "../assets/images/services.png";
import { Link } from "react-router-dom";
import {CircleArrowRight } from "lucide-react";
import backgroundVideo from "../assets/videos/background.mp4";
import FeaturesSection from "../components/FeatureSection/FeaturesSection";
import AppSection from "../components/Appdownload/AppSection.jsx";
import ServiceCarousel from "../components/ServiceCenterSection/ServiceCarousel";
import StatsSection from "../components/statssection/StatsSection";
import FooterUpMain from "../components/footer/FooterUpMain.jsx";
import FooterDown from "../components/footer/FooterDown.jsx";


const SectionCard = ({ title, to, img }) => {
  return (
    <div className="flex gap-4 items-center justify-around p-4 border rounded-lg shadow-sm backdrop-blur hover:shadow-lg transition-shadow duration-300 m-4 h-40 w-full max-w-md text-white">
      <img src={img} alt={title} className="w-20 h-20 object-contain " />
      <div className=" h-full pt-7">
        <h2 className="text-2xl text-white font-bold">{title}</h2>
       <p className="text-gray-600"> hello on car</p>
      </div>
      <Link to={to} className="text-blue-500 hover:underline">
          <CircleArrowRight size={40}/>
        </Link>

    </div>
  );
};

// const Home = () => {
//   return (
//     <div>
//     <div
//       className="min-h-screen w-full bg-cover bg-center"
//       style={{ backgroundImage: `url(${backgroundImage})` }}
//     >
//       <Navbar />
//       <div className="flex flex-col items-start justify-center min-h-screen p-10 bg-opacity-50">
//         <SectionCard title="Auto Parts" to="/auto-parts" img={autoParts} />
//         <SectionCard title="Services" to="/services" img={services} />
//       </div>
//     </div>

//     <div>
//         <h1 className="text-4xl font-bold text-center mt-10"> 2nd page</h1>
//         <p className="text-center text-lg mt-4"></p>
//     </div>
    
//     </div>
//   );
// };

const Home = () => {
  return (
    <div>
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={backgroundVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay for darkening if needed */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />
      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
          <div className="flex flex-col items-start justify-center min-h-screen p-10 bg-opacity-50">
         <SectionCard title="Auto Parts" to="/auto-parts"  />
         <SectionCard title="Services" to="/services" img={services} />
       </div>

      </div>

    </div>

      <ServiceCarousel service="Popular Service Centers"/>
      <ServiceCarousel service="Featured Services"/>
      <FeaturesSection />
      <StatsSection />
      
      <AppSection />
      <FooterUpMain />
      <FooterDown />
      

    </div>
  );
};

export default Home;