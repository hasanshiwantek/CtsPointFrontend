import CommonCarousel from "../common/CommonCaraousel";
import { featureProductsData } from "@/data/productData";

export default function FeatureProducts() {
  return (
    <CommonCarousel title="Feature Products" items={featureProductsData} />
  );
}
