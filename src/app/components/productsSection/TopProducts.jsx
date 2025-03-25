import { topProdoductsData} from "@/data/productData";
import ArrowCarousel from "../common/ArrowCarousel";

export default function TopProducts() {
  return <ArrowCarousel title="Top Products" items={topProdoductsData} />;
}
