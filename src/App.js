import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Protected from "./features/auth/components/Protected";
// import { fetchItemsByUserIdAsync } from "./features/cart/cartAPI";
import { fetchItemsByUserIdAsync } from "./features/cart/cartSlice";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import ProjectDetailPage from "./pages/ProductDetailPage";
import SignupPage from "./pages/SignupPage";
import * as React from "react";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { selectLoggedInUser } from "./features/auth/authSlice";
import { useEffect } from "react";
import PageNotFound from "./pages/404";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import UserOrders from "./features/user/components/UserOrders";
import UserOrdersPage from "./pages/UserOrderPages";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Home></Home>
      </Protected>
    ),
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/cart",
    element: (
      <Protected>
        <CartPage></CartPage>
      </Protected>
    ),
  },
  {
    path: "/checkout",
    element: (
      <Protected>
        <Checkout></Checkout>
      </Protected>
    ),
  },
  {
    path: "/product-detail/:id",
    element: (
      <Protected>
        <ProjectDetailPage></ProjectDetailPage>
      </Protected>
    ),
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
  {
    path: "order-success/:id",
    element: <OrderSuccessPage></OrderSuccessPage>,
  },
  {
    path: "orders",
    element: <UserOrdersPage></UserOrdersPage>,
    // TODO: We will add page later right now using component directly
  },
]);

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  useEffect(() => {
    if (user) {
      dispatch(fetchItemsByUserIdAsync(user.id));
    }
  }, [dispatch, user]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
