import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserLayout } from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import { Toaster } from "sonner";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CollectionPage from "./pages/CollectionPage";
import ProductDetails from "./components/Products/ProductDetails";
import CheckOut from "./components/Cart/CheckOut";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";
import MyOrdersPage from "./pages/MyOrdersPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="login" index element={<Login />} />
            <Route path="register" index element={<Register />} />
            <Route path="profile" index element={<Profile />} />
            <Route
              path="collections/:collection"
              index
              element={<CollectionPage />}
            />
            <Route path="product/:id" index element={<ProductDetails />} />
            <Route path="checkout" index element={<CheckOut />} />
            <Route
              path="order-confirmation"
              index
              element={<OrderConfirmationPage />}
            />
            <Route path="my-orders" element={<MyOrdersPage />} />
            <Route path="order/:id" index element={<OrderDetailsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
//
