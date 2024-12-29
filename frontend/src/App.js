import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";
import { useSelector } from "react-redux";

const App = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route
              path="/admin/userlist"
              element={
                userInfo && userInfo.isAdmin ? (
                  <UserListScreen />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/admin/user/:id/edit"
              element={
                userInfo && userInfo.isAdmin ? (
                  <UserEditScreen />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/admin/productlist"
              element={
                userInfo && userInfo.isAdmin ? (
                  <ProductListScreen />
                ) : (
                  <Navigate to="/login" />
                )
              }
              exact
            />
            <Route
              path="/admin/productlist/:pageNumber"
              element={
                userInfo && userInfo.isAdmin ? (
                  <ProductListScreen />
                ) : (
                  <Navigate to="/login" />
                )
              }
              exact
            />
            <Route
              path="/admin/product/:id/edit"
              element={
                userInfo && userInfo.isAdmin ? (
                  <ProductEditScreen />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/admin/orderlist"
              element={
                userInfo && userInfo.isAdmin ? (
                  <OrderListScreen />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route path="/search/:keyword" element={<HomeScreen />} exact />
            <Route path="/page/:pageNumber" element={<HomeScreen />} exact />
            <Route
              path="/search/:keyword/page/:pageNumber"
              element={<HomeScreen />}
              exact
            />
            <Route
              path="/"
              element={userInfo ? <HomeScreen /> : <Navigate to="/login" />}
              exact
            />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart/:id?" element={<CartScreen />} />
            <Route
              path="/profile"
              element={userInfo ? <ProfileScreen /> : <Navigate to="/login" />}
            />
            <Route
              path="/shipping"
              element={userInfo ? <ShippingScreen /> : <Navigate to="/login" />}
            />
            <Route
              path="/payment"
              element={userInfo ? <PaymentScreen /> : <Navigate to="/login" />}
            />
            <Route
              path="/placeorder"
              element={
                userInfo ? <PlaceOrderScreen /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/order/:id"
              element={userInfo ? <OrderScreen /> : <Navigate to="/login" />}
            />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
