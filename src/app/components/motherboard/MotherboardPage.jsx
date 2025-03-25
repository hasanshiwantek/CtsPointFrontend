import CommonCategorySection from "../common/CommonCategorySection";
import { motherboardData } from "@/data/productData";

const motherboardCategories = [
  "Backplane Board",
  "Desktop Motherboards",
  "Laptop Motherboards",
  "Miscellaneous",
  "Motherboard Accessories",
  "Server Motherboards",
  "System Motherboards",
];

export default function MotherboardPage() {
  return (
    <CommonCategorySection
      title="Motherboards"
      viewMoreLink="/motherboards"
      categories={motherboardCategories}
      bannerImage="https://cdn11.bigcommerce.com/s-wb5rkphzy3/images/stencil/original/image-manager/motherboard-banner.jpg"
      shopNowTitle="Motherboard"
      shopNowLink="/motherboards"
      shopNowImage="https://cdn11.bigcommerce.com/s-wb5rkphzy3/images/stencil/original/image-manager/4.jpg"
      productData={motherboardData}
    />
  );
}
