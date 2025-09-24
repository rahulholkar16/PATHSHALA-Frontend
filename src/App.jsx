import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import AuthPage from "./pages/AuthPage";
import CoursesPage from "./pages/CoursesPage";
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<AuthPage />} />
        <Route path='/courses' element={<CoursesPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}