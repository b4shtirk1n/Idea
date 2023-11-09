import Home from "../pages/home";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Reg from "../pages/reg";
import Header from "../components/header";
import "../styles/style.css";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="reg" element={<Reg />} />
      </Routes>
    </>
  );
}
