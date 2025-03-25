import CommonCategorySection from "../common/CommonCategorySection";
import { pcAndServerData } from "@/data/productData";

const pcServerCategories = [
  "Desktops",
  "Laptops",
  "Notebook",
  "POS System",
  "Server",
  "Software",
  "Workstations",
];

export default function PcAndServerPage() {
  return (
    <CommonCategorySection
      title="PC  & Servers"
      viewMoreLink="/pc-servers"
      categories={pcServerCategories}
      bannerImage="https://cdn11.bigcommerce.com/s-wb5rkphzy3/images/stencil/original/image-manager/server-banner.jpg"
      shopNowTitle="PC Servers"
      shopNowLink="/pc-servers"
      shopNowImage="https://cdn11.bigcommerce.com/s-wb5rkphzy3/images/stencil/original/image-manager/5.jpg"
      productData={pcAndServerData}
    />
  );
}
