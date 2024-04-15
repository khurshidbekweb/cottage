import "./Filter.css";
import Navbar from '../../components/Navbar/Navbar'
import Filters from '../../components/Filters/Filters'
import Footer from "../../components/Footer/Footer";
import FilterNav from "../../components/FilterNav/FilterNav";
import MiniNaw from "../../components/MiniNaw/MiniNaw";
import BreacdCrumbs from "../../components/BreadCrumbs/BreacdCrumbs";

const Filter = () => {
  <BreacdCrumbs/>
  return (
    <>
      <Navbar/>
      <Filters/>
      <FilterNav/>
      <MiniNaw/>
      <Footer/>
    </>
  );
};

export default Filter;
