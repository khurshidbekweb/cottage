import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import MiniNaw from "../../components/MiniNaw/MiniNaw";
import Places from "../../components/Places/Places";
import Dacha from "../../components/Dacha/Dacha";
import Footer from "../../components/Footer/Footer";
import { ALL_DATA } from "../../Query/get_all";

const Home = () => {
  const userData = ALL_DATA.useSingleUser();
  if (userData?.data) localStorage.setItem("user", JSON.stringify(userData?.data));
  return (
    <>
      <Navbar />
      <MiniNaw />
      <Header />
      <Places />
      <Dacha />
      <Footer />
    </>
  );
};

export default Home;
