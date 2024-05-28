import React from "react";
import { motion } from "framer-motion";

const IndustriesWeServe = () => {
  return (
    <div id="industries" className="self-stretch bg-whitesmoke overflow-hidden flex flex-col px-12 py-12 items-center justify-center gap-10 text-left text-lg text-black font-outfit md:py-9 md:px-8 sm:py-5 sm:px-4">
      <Segment1
        cards={[
          {
            title: "Crafting Success in Finance",
            description: "In the labyrinth of insurance and banking, we wield our expertise like master artisans, sculpting success stories with each placement. Our approach is not just about filling roles; it's about forging partnerships that drive growth and prosperity."
          },
          {
            title: "Soaring to New Heights in Pharma",
            description: "While our roots may lie in finance, our wingspan extends far beyond. Like a phoenix rising, we've embraced the challenges of the pharmaceutical industry, soaring to new heights of achievement and impact."
          },
          {
            title: "Crafting Excellence in Luxury Brands",
            description: "In the luxury brand sector, we understand the nuances of prestige and elegance. Our tailored approach ensures that we find the perfect fit for roles that demand the highest standards of excellence."
          }
        ]}
        imgSrc="/bfsi.svg"
        imgAlt="BFSI"
        reverse={false}
      />

      <Segment2
        cards={[
          {
            title: "Soaring to New Heights in Aviation",
            description: "From pilots to ground staff, we cater to the diverse needs of the aviation sector, ensuring each placement takes your business to new altitudes."
          },
          {
            title: "Unleashing Creative Solutions in IT",
            description: "At our core, we are innovators. From unconventional hiring strategies to out-of-the-box candidate searches, creativity pulses through our veins, ensuring that every placement is not just a match but a masterpiece in the tech world."
          },
          {
            title: "Crafting Excellence in Luxury Brands",
            description: "In the luxury brand sector, we understand the nuances of prestige and elegance. Our tailored approach ensures that we find the perfect fit for roles that demand the highest standards of excellence."
          }
        ]}
        imgSrc="/illustration10.svg"
        imgAlt="Pharma"
        reverse={true}
      />
    </div>
  );
};

const Segment1 = ({ cards, imgSrc, imgAlt}) => {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-1 gap-10 mx-[10px] items-center`}>
      <div className="flex flex-col gap-10 w-full">
        {cards.map((card, index) => (
          <IndustryCard key={index} title={card.title} description={card.description} />
        ))}
      </div>
      <img
        // className="md:w-1/2 h-auto object-cover mx-auto"
        className="w-full"
        alt={imgAlt}
        src={imgSrc}
      />
    </div>
  );
};

const Segment2 = ({ cards, imgSrc, imgAlt}) => {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-1 gap-10 items-center`}>
      <img
        className="w-full md:hidden"
        alt={imgAlt}
        src={imgSrc}
      />
      <div className="flex flex-col gap-10 w-full">
        {cards.map((card, index) => (
          <IndustryCard key={index} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
};

const IndustryCard = ({ title, description }) => {
  return (
    <motion.div 
      className="w-full max-w-xl p-5 bg-white rounded shadow-lg hover:shadow-xl transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
      style={{boxSizing:"border-box"}}
    >
      <div className="w-full flex flex-col items-start justify-start leading-[132.5%] sm:text-[17px]">
        <p className="font-bold text-xl">{title}</p>
        <p className="font-normal">{description}</p>
      </div>
    </motion.div>
  );
};

export default IndustriesWeServe;
