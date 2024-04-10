import { ALL_DATA } from "../../Query/get_all";
import DachaCard from "../../components/DachaCards/DachaCard";
import DachaMiniCard from "../../components/DachaMiniCard/DachaMiniCard";
import Footer from "../../components/Footer/Footer";
import MiniNaw from "../../components/MiniNaw/MiniNaw";
import Navbar from "../../components/Navbar/Navbar";
import './Announcoment.css'

function Announcoment() {
  const userCottage = ALL_DATA.useCottageUserId(); 
  return (
    <>
      <Navbar />
      <div className="announcoment">
          <div className="container">
            <div className="dacha">
              {userCottage.data && userCottage.data.length?<>
                <h2 className="dacha-top">Мои объявлении</h2>
                <div className="dacha-cards">
                  {userCottage.data?.length &&
                    userCottage.data
                      .map((e) => {
                        console.log(e);
                        return (
                          <DachaCard key={e.id} cottage={e} btn="Подробное" />
                        );
                      })}

                  {userCottage.data?.length &&
                    userCottage.data
                      .map((e) => {
                        return <DachaMiniCard key={e.id} cottage={e} />;
                      })}
                </div>
                </>
                :
                <>
              <h2 className="dacha-top">Мои объявлении</h2>
              <p className="text-danger" >Hozircha siz e'lon bermagansiz</p>
              </>}
            </div>
          </div>
      </div>
      <MiniNaw />
      <Footer />
    </>
  );
}

export default Announcoment;
