import "./Dacha.css";
import DachaCard from "../DachaCards/DachaCard";
import DachaMiniCard from "../DachaMiniCard/DachaMiniCard";
import MiniDacha1 from "../../assets/images/mini-dacha1.png";
import MiniDacha2 from "../../assets/images/mini-dacha2.png";
import MiniDacha3 from "../../assets/images/mini-dacha3.png";
import MiniDacha4 from "../../assets/images/mini-dacha4.png";
import MiniRed from "../../assets/images/mini-red.svg";
import MiniDark from "../../assets/images/mini-dark.svg";
import { useQuery } from "@tanstack/react-query";
import { cottageUtils } from "../../utils/cottage.utils";

const Dacha = () => {
  const cottage = useQuery({
    queryKey: ["cottages"],
    queryFn: cottageUtils.getCottage,
  });
  return (
    <div className="container">
      <div className="dacha">
        <h2 className="dacha-top">Рекомендуемые</h2>

        <div className="dacha-cards">
          {cottage.data?.length &&
            cottage.data.filter(el=> el.cottageStatus==="confirmed").map((e) => {
              return (
                <DachaCard
                  key={e.id}
                  cottage={e}
                  btn="Подробное"
                />
              );
            })}

          {/* <DachaCard img={Dacha2} like={Like} name='Дача GTA' location='Ташкетская область, Акташ' sum1='Цена За День: 2,000,000 uzs' sum2='Цена За Выходной День: 3,000,000 uzs' btn='Подробное' />

                    <DachaCard img={Dacha3} like={DisLike} name='Дача GTA' location='Ташкетская область, Акташ' sum1='Цена За День: 2,000,000 uzs' sum2='Цена За Выходной День: 3,000,000 uzs' btn='Подробное' />

                    <DachaCard img={Dacha4} like={Like} name='Дача GTA' location='Ташкетская область, Акташ' sum1='Цена За День: 2,000,000 uzs' sum2='Цена За Выходной День: 3,000,000 uzs' btn='Подробное' />

                    <DachaCard img={Dacha5} like={DisLike} name='Дача GTA' location='Ташкетская область, Акташ' sum1='Цена За День: 2,000,000 uzs' sum2='Цена За Выходной День: 3,000,000 uzs' btn='Подробное' />

                    <DachaCard img={Dacha6} like={Like} name='Дача GTA' location='Ташкетская область, Акташ' sum1='Цена За День: 2,000,000 uzs' sum2='Цена За Выходной День: 3,000,000 uzs' btn='Подробное' /> */}

          <DachaMiniCard
            img={MiniDacha1}
            like={MiniRed}
            name="Дача GTA"
            location="Ташкетская область, Акташ"
            sum1="Цена За День: 2,000,000 uzs"
            sum2="Цена За Выходной День: 3,000,000 uzs"
            btn="Подробное"
          />

          <DachaMiniCard
            img={MiniDacha2}
            like={MiniRed}
            name="Дача GTA"
            location="Ташкетская область, Акташ"
            sum1="Цена За День: 2,000,000 uzs"
            sum2="Цена За Выходной День: 3,000,000 uzs"
            btn="Подробное"
          />

          <DachaMiniCard
            img={MiniDacha3}
            like={MiniDark}
            name="Дача GTA"
            location="Ташкетская область, Акташ"
            sum1="Цена За День: 2,000,000 uzs"
            sum2="Цена За Выходной День: 3,000,000 uzs"
            btn="Подробное"
          />

          <DachaMiniCard
            img={MiniDacha4}
            like={MiniDark}
            name="Дача GTA"
            location="Ташкетская область, Акташ"
            sum1="Цена За День: 2,000,000 uzs"
            sum2="Цена За Выходной День: 3,000,000 uzs"
            btn="Подробное"
          />
        </div>
      </div>
    </div>
  );
};

export default Dacha;
