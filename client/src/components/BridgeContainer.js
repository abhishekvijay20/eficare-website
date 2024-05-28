import React from "react";
import { useNavigate } from "react-router-dom";

const BridgeContainer = () => {
  const navigate = useNavigate();

  const jobSeekerClick = () => {
    navigate("/job-seeker");
  };

  const employerClick = () => {
    navigate("/employer");
  };
  return (
    <div id="home" className="self-stretch bg-whitesmoke overflow-hidden flex flex-row py-[53px] px-[50px] items-center justify-center gap-[98px] text-left text-46xl text-black font-averia-libre md:flex-col sm:p-[35px] sm:box-border">
      <div className="flex-1 flex flex-col items-start justify-start gap-[53px] md:items-center md:justify-center md:flex-[unset] md:self-stretch">
        <i className="relative font-bold md:text-center sm:text-36xl">
          <p className="m-0">{`Your Bridging Ally `}</p>
          <p className="m-0">{`in Purpose & Progress`}</p>
        </i>
        <div className="relative text-lg font-outfit md:text-center sm:text-mini">
          <p className="[margin-block-start:0] [margin-block-end:6px]">{`Eficare consultancy connects exceptional talent with the right opportunities, `}</p>
          <p className="m-0">
            empowering individuals to thrive and businesses to excel.
          </p>
        </div>
        <div className="w-[365px] flex flex-row items-start justify-start gap-[28px] sm:flex-col sm:items-center sm:justify-center">
          <button
            onClick={jobSeekerClick}
            className="cursor-pointer [border:none] p-0 bg-skyblue-100 relative rounded-mini w-[172px] h-[69px] hover:bg-skyblue-200"
          >
            <div className="absolute top-[18px] left-[18px] text-6xl font-medium font-outfit text-white text-left">
              Job Seeker?
            </div>
          </button>
          <button
            onClick={employerClick}
            className="cursor-pointer [border:none] p-0 bg-darkslategray relative rounded-mini w-[165px] h-[69px] hover:bg-gray"
          >
            <div className="absolute top-[18px] left-[22px] text-6xl font-medium font-outfit text-white text-left">
              Employer?
            </div>
          </button>
        </div>
      </div>

      <div className="w-[538px] flex flex-row items-center justify-center">
        <img
          className="relative w-[518.56px] h-[518.98px] lg:w-[478px] lg:h-[478px] md:w-[380px] md:h-[380px] sm:w-[300px] sm:h-[300px]"
          alt=""
          src="/illustration1.svg"
        />
      </div>
    </div>
  );
};

export default BridgeContainer;
