import CommonCategorySection from "../common/CommonCategorySection";
import { processorData } from "@/data/productData";

const processorCategories = [
  "Boards",
  "Miscellaneous",
  "Processor",
  "VRM",

];

export default function ProcessorPage() {
  return (
    <CommonCategorySection
      title="Processors"
      viewMoreLink="/processors"
      categories={processorCategories}
      bannerImage="https://cdn11.bigcommerce.com/s-wb5rkphzy3/images/stencil/original/image-manager/processor-banner.jpg"
      shopNowTitle="Processor"
      shopNowLink="/processors"
      shopNowImage="https://cdn11.bigcommerce.com/s-wb5rkphzy3/images/stencil/original/image-manager/2.jpg"
      productData={processorData}
    />
  );
}
