import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import AuthPage from "./pages/AuthPage";
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<AuthPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}