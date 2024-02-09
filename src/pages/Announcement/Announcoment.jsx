import { ALL_DATA } from "../../Query/get_all";
import DachaCard from "../../components/DachaCards/DachaCard";
import DachaMiniCard from "../../components/DachaMiniCard/DachaMiniCard";
import Footer from "../../components/Footer/Footer";
import MiniNaw from "../../components/MiniNaw/MiniNaw";
import Navbar from "../../components/Navbar/Navbar";

function Announcoment() {
  const userCottage = ALL_DATA.useCottageUserId();
  console.log(userCottage?.data);
  return (
    <>
      <Navbar />
      <div className="announcoment">
        <div className="container">
          <div className="announcoment_inner">
            <div className="container">
              <div className="dacha">
                <h2 className="dacha-top">Мои объявлении</h2>
                <div className="dacha-cards">
                  {userCottage.data?.length &&
                    userCottage.data
                      .map((e) => {
                        return (
                          <DachaCard key={e.id} cottage={e} btn="Подробное" />
                        );
                      })}

                  {userCottage.data?.length &&
                    userCottage.data
                      .filter((el) => el.cottageStatus === "confirmed")
                      .map((e) => {
                        return <DachaMiniCard key={e.id} cottage={e} />;
                      })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MiniNaw />
      <Footer />
    </>
  );
}

export default Announcoment;
