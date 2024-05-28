import Header from "../components/Header";
import BridgeContainer from "../components/BridgeContainer";
import FooterContainer from "../components/FooterContainer";
import AboutUS from "../components/AboutUs";
import Industries from "../components/Industries";
import CareerAdvice from "../components/CareerAdvice";
import Copyright from "../components/Copyright";

const EficareHome = () => {
  return (
    <div className="relative w-full flex flex-col items-start justify-start text-justify text-xl text-black font-outfit">
      <Header />
      <BridgeContainer />
      <AboutUS />
      <Industries />
      <CareerAdvice />
      <FooterContainer />
      <Copyright />
    </div>
  );
};

export default EficareHome;
