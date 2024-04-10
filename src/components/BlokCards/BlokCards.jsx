import BlokCard from "../BlokCard/BlokCard";
import Dacha1 from "../../assets/images/dacha1.png";
import Dacha2 from "../../assets/images/dacha2.png";
import Dacha3 from "../../assets/images/dacha3.png";
import Dacha4 from "../../assets/images/dacha4.png";
import BedIcon from "../../assets/images/bed-icon.svg";
import HomeIcon from "../../assets/images/home-icon.svg";

import "./BlokCards.css";

const BlokCards = () => {
  return (
    <div className="blokcards">
      <BlokCard
        img={Dacha1}
        name="Дача GTA"
        location="Ташкетская область, Акташ"
        bed={BedIcon}
        home={HomeIcon}
        bedtext="Количество спален: 6"
        hometext="Территория: 200 м/кв"
        sum1="2,000,000"
        sum2="3,000,000"
        btn1="Подробное"
        btn2="Все удобства"
      />
      <BlokCard
        img={Dacha2}
        name="Дача GTA"
        location="Ташкетская область, Акташ"
        bed={BedIcon}
        home={HomeIcon}
        bedtext="Количество спален: 6"
        hometext="Территория: 200 м/кв"
        sum1="2,000,000"
        sum2="3,000,000"
        btn1="Подробное"
        btn2="Все удобства"
      />
      <BlokCard
        img={Dacha3}
        name="Дача GTA"
        location="Ташкетская область, Акташ"
        bed={BedIcon}
        home={HomeIcon}
        bedtext="Количество спален: 6"
        hometext="Территория: 200 м/кв"
        sum1="2,000,000"
        sum2="3,000,000"
        btn1="Подробное"
        btn2="Все удобства"
      />
      <BlokCard
        img={Dacha4}
        name="Дача GTA"
        location="Ташкетская область, Акташ"
        bed={BedIcon}
        home={HomeIcon}
        bedtext="Количество спален: 6"
        hometext="Территория: 200 м/кв"
        sum1="2,000,000"
        sum2="3,000,000"
        btn1="Подробное"
        btn2="Все удобства"
      />
    </div>
  );
};

export default BlokCards;
