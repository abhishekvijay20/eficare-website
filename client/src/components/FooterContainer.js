const FooterContainer = () => {
  return (
    <div
      id="contactUs"
      className="self-stretch bg-darkslategray overflow-hidden flex flex-row py-[60px] px-24 items-center justify-center gap-[104px] text-left text-xl text-white font-outfit md:py-[60px] md:px-10 md:box-border sm:flex-col ex1:flex-col"
    >
      <div className="flex-1 flex flex-row items-start justify-start sm:flex-[unset] sm:self-stretch ex1:flex-[unset] ex1:self-stretch">
        <div className="flex-1 relative lg:text-lg md:text-mini sm:text-center">
          <p className="[margin-block-start:0] [margin-block-end:12px]">
            Phone: (+91) 8511140111
          </p>
          <p className="m-0">{`E-mail: info@eficare.net `}</p>
        </div>
      </div>
      <div className="w-[216px] flex flex-row items-start justify-start gap-[20px] md:w-[216px]">
        <a href="https://www.linkedin.com/in/eficare-consultanancy-9a4a141b2/" target="_blank" className="cursor-pointer [border:none] p-0.5 bg-[transparent] flex-1 overflow-hidden flex flex-row items-start justify-start hover:animate-[1s_ease_0s_infinite_normal_none_jello-horizontal] hover:opacity-[1]">
          <img
            className="relative w-[53.89px] h-[53.89px]"
            alt="linkedIn"
            src="/vector.svg"
          />
        </a>
        <a href="" target="_blank" className="cursor-pointer [border:none] p-1 bg-[transparent] flex-1 overflow-hidden flex flex-row items-start justify-start hover:animate-[1s_ease_0s_infinite_normal_none_jello-horizontal] hover:opacity-[1]">
          <img
            className="relative w-[51.63px] h-[51.64px]"
            alt="facebook"
            src="/vector1.svg"
          />
        </a>
        <a href="mailto:info@eficare.net" target="_blank" className="cursor-pointer [border:none] p-px bg-[transparent] flex-1 overflow-hidden flex flex-row items-start justify-start hover:animate-[1s_ease_0s_infinite_normal_none_jello-horizontal] hover:opacity-[1]">
          <img
            className="relative w-[53.76px] h-[53.76px]"
            alt="mail"
            src="/vector2.svg"
          />
        </a>
      </div>
    </div>
  );
};

export default FooterContainer;
