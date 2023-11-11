import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Reg from "../pages/reg";
import Header from "../components/header";
import Account from "../pages/account";
import Search from "../pages/search";
import "../styles/style.css";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="reg" element={<Reg />} />
        <Route path="account" element={<Account />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </>
  );
}
