import Banner from "./Banner";
import EstateService from "./EstateService";
import NewsLetter from "./NewsLetter";
import RealEstateSection from "./RealEstateSection";
import Testimonials from "./Testimonials";
import UniqueHome from "./UniqueHome";

const Home = () => {
  return (
    <div>
      <Banner />
      <RealEstateSection />
      {/* <LogoList /> */}
      <EstateService />
      <UniqueHome />
      <Testimonials />
      {/* <Blogs /> */}
      <NewsLetter />
    </div>
  );
};

export default Home;
