import Navbar from "../features/navbar/Navbar";
import ProductDetail from "../features/product/components/ProductDetail";
import Footer from "../features/common/Footer";

export default function ProjectDetailPage() {
  return (
    <div>
      <Navbar>
        <ProductDetail></ProductDetail>
      </Navbar>
      <Footer></Footer>
    </div>
  );
}
