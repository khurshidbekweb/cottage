import "./Dacha.css";
import DachaCard from "../DachaCards/DachaCard";
import DachaMiniCard from "../DachaMiniCard/DachaMiniCard";
import { ALL_DATA } from "../../Query/get_all";

const Dacha = () => {
  const cottage = ALL_DATA.useCottage();
  return (
    <div className="container">
      <div className="dacha">
        <h2 className="dacha-top">Рекомендуемые</h2>

        <div className="dacha-cards">
          {cottage.data?.length &&
            cottage.data
              .filter((el) => el.cottageStatus === "confirmed")
              .map((e) => {
                return <DachaCard key={e.id} cottage={e} btn="Подробное" />;
          })}

          {cottage.data?.length &&
            cottage.data
              .filter((el) => el.cottageStatus === "confirmed")
              .map((e) => {
                return <DachaMiniCard key={e.id} cottage={e} />;
              })}
        </div>
      </div>
    </div>
  );
};

export default Dacha;
