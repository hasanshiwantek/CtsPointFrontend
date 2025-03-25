import { productData } from "@/data/productData";
import ArrowCarousel from "../common/ArrowCarousel";

export default function ProductPage() {
  return <ArrowCarousel title="New Products" items={productData} />;
}
