import "./App.css";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import View from "./pages/View/View";
import Filter from "./pages/Filter/Filter";
import User from "./pages/User/User";
import Tarif from "./pages/Tarif/Tarif";
import Pay from "./pages/Pay/Pay";
import ToPay from "./pages/ToPay/ToPay";
import PayDetail from "./pages/PayDetail/PayDetail";
import Favorite from "./pages/Favorite/Favorite";
import Add from "./pages/Add/Add";
import AddNew from "./pages/AddNew/AddNew";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Protected from "./components/Protected";
import Vacation from "./pages/Vacation/Vacation";
import Announcoment from "./pages/Announcement/Announcoment";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { LanguageContext } from "./helper/languageContext";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import Services from "./pages/Services/Services";
import Profil from "./pages/Profil/Profil";
// import Swiper './'

function App() {
  if (!localStorage.getItem("language")) localStorage.setItem("language", "uz");

  const [languageChange, setLanguageChange] = useState(
    localStorage.getItem("language")
  );
  const queryClient = useQueryClient();
  const toggleLanguage = (e) => {
    e.preventDefault();
    localStorage.setItem("language", e.target.value);
    setLanguageChange(e.target.value);
    queryClient.invalidateQueries({ type: "all" });
  };

  return (
    <div className="App">
      <AuthContextProvider>
        <LanguageContext.Provider value={{ languageChange, toggleLanguage }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route
              path="/contact"
              element={
                <Protected>
                  <Contact />
                </Protected>
              }
            />
            <Route
              path="/filter"
              element={
                <Protected>
                  <Filter />
                </Protected>
              }
            />
            <Route
              path="/view/:id"
              element={
                <Protected>
                  <View />
                </Protected>
              }
            />
            <Route
              path="/profil"
              element={
                <Protected>
                  <Profil />
                </Protected>
              }
            />
            <Route
              path="/user"
              element={
                <Protected>
                  <User />
                </Protected>
              }
            />
            <Route
              path="/tarif"
              element={
                <Protected>
                  <Tarif />
                </Protected>
              }
            />
            <Route
              path="/pay"
              element={
                <Protected>
                  <Pay />
                </Protected>
              }
            />
            <Route
              path="/to-pay"
              element={
                <Protected>
                  <ToPay />
                </Protected>
              }
            />
            <Route
              path="/pay-detail"
              element={
                <Protected>
                  <PayDetail />
                </Protected>
              }
            />
            <Route
              path="/favorite"
              element={
                <Protected>
                  <Favorite />
                </Protected>
              }
            />
            <Route
              path="/add"
              element={
                <Protected>
                  <Add />
                </Protected>
              }
            />
            <Route
              path="/add-new"
              element={
                <Protected>
                  <AddNew />
                </Protected>
              }
            />
            <Route
              path="/vacation/:id"
              element={
                <Protected>
                  <Vacation />
                </Protected>
              }
            />
            <Route
              path="/announcement"
              element={
                <Protected>
                  <Announcoment />
                </Protected>
              }
            />
            <Route path="/services" element={<Services />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </LanguageContext.Provider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
