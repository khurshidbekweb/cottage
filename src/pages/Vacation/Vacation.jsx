<<<<<<< HEAD

import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import MiniNaw from '../../components/MiniNaw/MiniNaw';
import Navbar from '../../components/Navbar/Navbar';
import { ALL_DATA } from '../../Query/get_all';
import DachaCard from '../../components/DachaCards/DachaCard';
import DachaMiniCard from '../../components/DachaMiniCard/DachaMiniCard';
import './Vacation.css'
import BreacdCrumbs from '../../components/BreadCrumbs/BreacdCrumbs';

function Vacation() {
  const params = useParams()
  const cottages = ALL_DATA.useCottageByPlace(params?.id)
  const place = ALL_DATA.usePlace()
  const placeName = place?.data?.find(e => e.id === params?.id).name;
  console.log(cottages.data);
  
  if(!cottages.data?.x1length)
    return <div className='container'>
      <h2 className='favorite-header'>{placeName}</h2>
      <p className='text-danger mt-0'>Bu joylashuvda hali dacha yoq</p>
    </div>
  return (
    <>
        <div className='container'>
          <BreacdCrumbs/>
            <div className="favorite">
                <h2 className='favorite-header'>{placeName}</h2>                
                  <div className="place-card-sort-big">
                    {cottages?.data?.length && cottages.data.map(e => {
                      return <DachaCard key={e.id} cottage={e} btn="Подробное"/>
                    })}
                  </div>  
                  
                  <div className="place-card-mini-sort">
                    {cottages?.data?.length && cottages.data.map(e => {
                      return <DachaMiniCard key={e.id} cottage={e}/>
                    })}
                  </div>                
            </div>
        </div>
        <MiniNaw/>
=======
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import MiniNaw from "../../components/MiniNaw/MiniNaw";
import Navbar from "../../components/Navbar/Navbar";
import { ALL_DATA } from "../../Query/get_all";
import DachaCard from "../../components/DachaCards/DachaCard";
import DachaMiniCard from "../../components/DachaMiniCard/DachaMiniCard";
import "./Vacation.css";

function Vacation() {
  const params = useParams();

  const cottages = ALL_DATA.useCottageByPlace(params?.id);

  const place = ALL_DATA.usePlace();

  const placeName = place?.data?.find((e) => e.id === params?.id).name;

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="favorite">
          <h2 className="favorite-header">{placeName}</h2>

          <div className="place-card-sort-big">
            {cottages?.data?.length &&
              cottages.data.map((e) => {
                return <DachaCard key={e.id} cottage={e} btn="Подробное" />;
              })}
          </div>

          <div className="place-card-mini-sort">
            {cottages?.data?.length &&
              cottages.data.map((e) => {
                return <DachaMiniCard key={e.id} cottage={e} />;
              })}
          </div>
        </div>
      </div>
      <MiniNaw />
      <Footer />
>>>>>>> 27e83ccf05e28d84f540c9dd50bfdf72c0935380
    </>
  );
}

export default Vacation;
