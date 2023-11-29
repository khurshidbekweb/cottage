import Navbar from "../../components/Navbar/Navbar"
import Header from "../../components/Header/Header";
import MiniNaw from "../../components/MiniNaw/MiniNaw";
import Places from "../../components/Places/Places";
import Dacha from "../../components/Dacha/Dacha";
import Footer from "../../components/Footer/Footer"

const Home = () => {
    return (
        <>
        <Navbar />
        <Header />
        <MiniNaw />
        <Places />
        <Dacha />
        <Footer />
        </>
     );
}

export default Home;