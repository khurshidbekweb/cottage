import "./App.css";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import SignIn from "./pages/SignIn/SignIn";
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
import { Routes, Route, useLocation } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Protected from "./components/Protected";
import Vacation from "./pages/Vacation/Vacation";
import Announcoment from "./pages/Announcement/Announcoment";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { LanguageContext } from "./helper/languageContext";
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import Services from "./pages/Services/Services";
import Profil from "./pages/Profil/Profil";
import ViewCottage from "./pages/ViewCottage/ViewCottage";
import VacationPage from "./pages/Vacation/VacationPage";
import UserCottageSingle from "./pages/User/UserCottageSingle";

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

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <div className="App">
      <AuthContextProvider>
        <LanguageContext.Provider value={{ languageChange, toggleLanguage }}>
          {/* <BrowserRouter> */}
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/' element={<Home />}>
                <Route path="home/contact" element={<Contact />} />
                <Route path="home/favorite" element={<Protected><Favorite /></Protected>}/>
                <Route path="home/profile/user" element={<User />} />
                <Route path="home/filter" element={<Protected><Filter /></Protected>}/>
                <Route path="home/profile" element={<Protected><Profil /></Protected>}/>
                <Route path="home/profile/add" element={<Protected><Add /></Protected>}/>
                <Route path="home/profile/services" element={<Services />} />
                <Route path="home/profile/add-new" element={<Protected><AddNew /></Protected>}/>
                <Route path="home/profile/announcement" element={<Protected><Announcoment /></Protected>} />
                <Route path="home/view/:id" element={<Protected><View /></Protected>}/>
                <Route path="home/view" element={<ViewCottage/>}/>
                <Route path="home/view/cottage/:id" element={<UserCottageSingle/>}/>
                <Route path="home/vacation/:id" element={<Protected><Vacation /></Protected>}/>
                <Route path="home/vacation" element={<Protected><VacationPage /></Protected>}/></Route>
              <Route path="/sign-in" element={<SignIn />} />           
            
            <Route
              path="/tarif"
              element={
                <Protected> <Tarif />
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
            
                   
            
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          {/* </BrowserRouter> */}
        </LanguageContext.Provider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
