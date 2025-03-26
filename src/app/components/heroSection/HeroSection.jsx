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
    <>
    <main className="overflow-x-hidden">
      <div className="flex flex-col justify-center items-center mx-auto my-auto  lg:px-20 md:px-10 sm:px-5 px-2">
        <div className={`flex justify-center  border-t-[1px] border-gray-200`}>
          <LeftMenuBar />
          <HeroSectionMiddle />
          <HeroSectionRight />
        </div>
        <CategoryFilter />
        <ProductCaraousel />
        <FeatureProducts />
        <MotherboardPage />
        <ProcessorPage/>
        <PcAndServerPage/>
        <TopProducts/>
        <ReviewSection/>
      </div>
        <BlogGrid/>
    </main>

    </>
  );
};

export default HeroSection;