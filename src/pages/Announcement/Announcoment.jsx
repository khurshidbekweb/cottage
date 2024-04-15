import { Helmet } from "react-helmet-async";
import { ALL_DATA } from "../../Query/get_all";
import BreacdCrumbs from "../../components/BreadCrumbs/BreacdCrumbs";
import DachaCard from "../../components/DachaCards/DachaCard";
import DachaMiniCard from "../../components/DachaMiniCard/DachaMiniCard";
import MiniNaw from "../../components/MiniNaw/MiniNaw";
import './Announcoment.css'



function Announcoment() {
  const userCottage = ALL_DATA.useCottageUserId();
  return (
    <>    
            <Helmet>
                  <title>Announcoment</title>
                  <meta name="description" content="Announcoment page" />
                  <link rel="canonical" href="/announcoment" />
                </Helmet>
      <div className="announcoment">
        <BreacdCrumbs/>
        <div className="container">
          <div className="dacha">
            {userCottage.data && userCottage.data.length ? (
              <>

                <h2 className="dacha-top">Мои объявлении</h2>
                <div className="dacha-cards">
                  {userCottage.data?.length &&
                    userCottage.data.map((e) => {
                      console.log(e);
                      return (
                        <DachaCard key={e.id} cottage={e} btn="Подробное" />
                      );
                    })}

                  {userCottage.data?.length &&
                    userCottage.data.map((e) => {
                      return <DachaMiniCard key={e.id} cottage={e} />;
                    })}
                </div>
              </>
            ) : (
              <>
                <h2 className="dacha-top">Мои объявлении</h2>
                <p className="text-danger">Hozircha siz e'lon bermagansiz</p>
              </>
            )}
          </div>
        </div>
      </div>
      <MiniNaw />
    </>
  );
}

export default Announcoment;
