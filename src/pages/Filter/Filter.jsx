import "./Filter.css";
import Navbar from '../../components/Navbar/Navbar'
import Filters from '../../components/Filters/Filters'
import Footer from "../../components/Footer/Footer";
import FilterNav from "../../components/FilterNav/FilterNav";

const Filter = () => {
  return (
    <>
      <Navbar/>
      <Filters/>
      <FilterNav/>
      <Footer/>
    </>
  );
};

export default Filter;
