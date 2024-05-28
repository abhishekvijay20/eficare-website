const AboutUS = () => {
  return (
    <div id="aboutUs" className="self-stretch bg-white overflow-hidden flex flex-row py-[100px] px-[50px] items-center justify-start gap-[40px] md:flex-col md:pl-[30px] md:pr-[30px] md:box-border sm:pl-[30px] sm:pr-[30px] sm:box-border">
      <img
        className="w-[434px] h-auto object-cover md:w-96 md:h-auto sm:w-[234px] sm:h-auto"
        alt=""
        src="/illustration2.svg"
      />
      <div
        className="px-[20px] flex-1 flex flex-row items-start justify-start md:flex-[unset] md:self-stretch"
      >
        <div className="flex-1 relative leading-[132.5%] sm:text-[17px]">
          <p className="[margin-block-start:0] [margin-block-end:5px]">
            At Eficare, we are passionate about connecting talent with
            opportunity. As a leading recruitment consultancy, we have been
            instrumental in shaping the careers of countless professionals and
            helping organizations build dynamic and thriving teams.
          </p>
          <p className="[margin-block-start:0] [margin-block-end:5px]">
            &nbsp;
          </p>
          <p className="m-0">
            Whether you're an employer seeking top talent or a job seeker
            looking for your next career move, Eficare is here to support you.
            Together, let's unlock the potential within you and your
            organization, and embark on a journey of success. Contact us today
            to explore the possibilities!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
