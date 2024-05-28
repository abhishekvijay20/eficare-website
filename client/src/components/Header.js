import { useNavigate } from "react-router-dom";
import "../../src/global.css";
import React from "react";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logoClick = () => {
    navigate("/");
  };

  const homeClick = () => {
    navigate("/#home");
  };

  const aboutUsClick = () => {
    navigate("/#aboutUs");
  };

  const industriesClick = () => {
    navigate("/#industries");
  };

  const careerAdviceClick = () => {
    navigate("/#careerAdvice");
  };

  const contactUsClick = () => {
    navigate("/#contactUs");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("menu clicked ", isMenuOpen);
  };

  return (
    <div
      id="header"
      className="self-stretch bg-white overflow-hidden flex flex-col py-[11px] px-[35px] items-center justify-center text-left text-xl md:text-lg sm:text-mini text-dimgray font-outfit md:pl-[30px] md:pr-[30px] md:box-border sm:pl-5 sm:pr-5 sm:box-border"
    >
      <div className="self-stretch flex flex-row items-center justify-between">
        <img
          onClick={logoClick}
          className="relative w-[326px] h-[82px] lg:w-[217px] lg:h-[54px] sm:w-[163px] sm:h-[41px] cursor-pointer"
          alt="logo"
          src="/eficare full transparent.svg"
        />
        <div className="flex flex-row items-start justify-start gap-[54px]">
          <div className="flex flex-row items-start justify-start gap-[54px] md:hidden">
            <a
              href="#home"
              onClick={homeClick}
              className="[text-decoration:none] relative font-medium text-[inherit] hover:text-black hover:cursor-pointer"
            >
              Home
            </a>
            <a
              href="#aboutUs"
              onClick={aboutUsClick}
              className="[text-decoration:none] relative font-medium text-[inherit] hover:text-black hover:cursor-pointer"
            >
              About us
            </a>
            <a
              href="#industries"
              onClick={industriesClick}
              className="[text-decoration:none] relative font-medium text-[inherit] hover:text-black hover:cursor-pointer"
            >
              Industries
            </a>
            <a
              href="#careerAdvice"
              onClick={careerAdviceClick}
              className="[text-decoration:none] relative font-medium text-[inherit] hover:text-black hover:cursor-pointer"
            >
              Career Advice
            </a>
            <a
              href="#contactUs"
              onClick={contactUsClick}
              className="[text-decoration:none] relative font-medium text-[inherit] hover:text-black hover:cursor-pointer"
            >
              Contact us
            </a>
          </div>
        </div>

        <div className="flex flex-col items-end hidden md:flex">
        <button
          onClick={toggleMenu}
          className="cursor-pointer [border:none] py-[10px] bg-[transparent] overflow-hidden hidden flex-col items-center justify-items-end hover:cursor-pointer md:flex"
        >
          <img
            className="relative w-[19.3px] h-[15.44px]"
            alt=""
            src="/group.svg"
          />
        </button>

        {isMenuOpen && (
          <div className="flex flex-col items-start justify-start items-end gap-[10px]">
            <a
              href="#home"
              onClick={homeClick}
              className="[text-decoration:none] relative font-medium text-[inherit] hover:text-black hover:cursor-pointer"
            >
              Home
            </a>
            <a
              href="#aboutUs"
              onClick={aboutUsClick}
              className="[text-decoration:none] relative font-medium text-[inherit] hover:text-black hover:cursor-pointer"
            >
              About us
            </a>
            <a
              href="#industries"
              onClick={industriesClick}
              className="[text-decoration:none] relative font-medium text-[inherit] hover:text-black hover:cursor-pointer"
            >
              Industries
            </a>
            <a
              href="#careerAdvice"
              onClick={careerAdviceClick}
              className="[text-decoration:none] relative font-medium text-[inherit] hover:text-black hover:cursor-pointer"
            >
              Career Advice
            </a>
            <a
              href="#contactUs"
              onClick={contactUsClick}
              className="[text-decoration:none] relative font-medium text-[inherit] hover:text-black hover:cursor-pointer"
            >
              Contact us
            </a>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default Header;
