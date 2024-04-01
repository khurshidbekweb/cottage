import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import MiniNaw from "../../components/MiniNaw/MiniNaw";
import Places from "../../components/Places/Places";
import Dacha from "../../components/Dacha/Dacha";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../Query/query-keys";
import { cottageUtils } from "../../utils/cottage.utils";
// import { createFileRoute } from '@tanstack/react-router'



const Home = ({language}) => {

  const {isLoading} = useQuery({
    queryKey: [QUERY_KEYS.cottages],
    queryFn: cottageUtils.getCottageTop,
    enabled: false
  })
  
  if(isLoading)
  return <Loader/>

  return (
    <>
      <Navbar />
      <MiniNaw />
      <Header language ={language} />
      <Places />
      <Dacha />
      <Footer />
    </>
  );
};


export default Home;
