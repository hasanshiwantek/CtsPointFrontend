import LeftMenuBar from "./LeftMenuBar";
import HeroSectionMiddle from "./HeroSectionMiddle";
import HeroSectionRight from "./HeroSectionRight";
import ProductCaraousel from "../productsSection/ProductCaraousel";
import FeatureProducts from "../productsSection/FeatureProducts";
import CategoryFilter from "../productsSection/CategoryFilter";
import MotherboardPage from "../motherboard/MotherboardPage";
import ProcessorPage from "../processors/ProcessorPage";
import PcAndServerPage from "../pcAndServer/PcAndServerPage";
import TopProducts from "../productsSection/TopProducts";
import ReviewSection from "../productsSection/ReviewSection";
import BlogGrid from "../blog/BlogGrid";

const HeroSection = () => {
  return (
    <main>
      <div className="flex flex-col justify-center items-center mx-auto my-auto lg:px-20 md:px-10 sm:px-5 px-2">
        <div className="flex justify-center border-t border-gray-200">
          <LeftMenuBar />
          <HeroSectionMiddle />
          <HeroSectionRight />
        </div>
        <div data-aos="fade-up">
          <CategoryFilter />
        </div>
        <div data-aos="zoom-in">
          <ProductCaraousel />
        </div>
        <div data-aos="fade-up" data-aos-delay="100">
          <FeatureProducts />
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <MotherboardPage />
        </div>
        <div data-aos="fade-up" data-aos-delay="250">
          <ProcessorPage />
        </div>
        <div data-aos="fade-up" data-aos-delay="300">
          <PcAndServerPage />
        </div>
        <div data-aos="fade-up" data-aos-delay="350">
          <TopProducts />
        </div>
        <ReviewSection />
      </div>

      <div data-aos="fade-up" data-aos-delay="35  0">
        <BlogGrid />
      </div>
    </main>
  );
};

export default HeroSection;
