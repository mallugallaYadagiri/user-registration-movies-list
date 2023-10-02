import SignupPage from "./components/SignupPage";
import LoginPage from "./components/LoginPage";
import CompanyInfoPage from "./components/CompanyInfoPage";
import MoviesListPage from "./components/MoviesListPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-blue-600 h-full">
        <Routes>
          <Route path="/" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/movies" element={<MoviesListPage />} />
          <Route path="/company" element={<CompanyInfoPage />} />
          <Route path="/mainpage" element={<MainPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
