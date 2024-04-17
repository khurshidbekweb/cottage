import { useParams } from "react-router-dom";
import MiniNaw from "../../components/MiniNaw/MiniNaw";
import { ALL_DATA } from "../../Query/get_all";
import DachaCard from "../../components/DachaCards/DachaCard";
import DachaMiniCard from "../../components/DachaMiniCard/DachaMiniCard";
import "./Vacation.css";
import { Helmet } from "react-helmet-async";
import BreacdCrumbs from '../../components/BreadCrumbs/BreacdCrumbs';
import Places from "../../components/Places/Places";

function Vacation() {
  const params = useParams()
  const cottages = ALL_DATA.useCottageByPlace(params?.id)
  const place = ALL_DATA.usePlace()
  const placeName = place?.data?.find(e => e.id === params?.id).name;
  console.log(cottages.data);
  
  if(!cottages.data?.length)
    return <div className='container'>
            <BreacdCrumbs/>
            <h2 className='favorite-header'>{placeName}</h2>
            <p className='text-danger mt-0'>Bu joylashuvda hali dacha yoq</p>
          </div>

  return (
    <>
      <Helmet>
        <title>Vacation</title>
        <meta name="description" content="cottage places" />
        <link rel="canonical" href="/vacation" />
      </Helmet>
      <div className="container">
      <BreacdCrumbs/>
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
        <MiniNaw/>
        </div>
    </>
  );
}

export default Vacation;
