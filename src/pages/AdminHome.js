import AdminProductList from "../features/admin/components/AdminProductList";
import Navbar from "../features/navbar/Navbar";
import Footer from "../features/common/Footer";

const AdminHome = () => {
  return (
    <div>
      <Navbar>
        <AdminProductList></AdminProductList>
      </Navbar>
      <Footer></Footer>
    </div>
  );
};

export default AdminHome;
