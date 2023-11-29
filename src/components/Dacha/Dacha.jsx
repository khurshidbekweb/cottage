import "./Dacha.css"
import Dacha1 from "../../assets/images/dacha1.png"
import Dacha2 from "../../assets/images/dacha2.png"
import Dacha3 from "../../assets/images/dacha3.png"
import Dacha4 from "../../assets/images/dacha4.png"
import Dacha5 from "../../assets/images/dacha5.png"
import Dacha6 from "../../assets/images/dacha6.png"
import Like from "../../assets/images/heart.svg"
import DisLike from "../../assets/images/dark-heart.svg"
import DachaCard from "../DachaCards/DachaCard"
import DachaMiniCard from "../DachaMiniCard/DachaMiniCard"
import MiniDacha1 from "../../assets/images/mini-dacha1.png"
import MiniDacha2 from "../../assets/images/mini-dacha2.png"
import MiniDacha3 from "../../assets/images/mini-dacha3.png"
import MiniDacha4 from "../../assets/images/mini-dacha4.png"
import MiniRed from "../../assets/images/mini-red.svg"
import MiniDark from "../../assets/images/mini-dark.svg"

const Dacha = () => {
    return (
        <div className="container">
            <div className="dacha">
                <h2 className="dacha-top">Рекомендуемые</h2>

                <div className="dacha-cards">
                    <DachaCard img={Dacha1} like={DisLike} name='Дача GTA' location='Ташкетская область, Акташ' sum1='Цена За День: 2,000,000 uzs' sum2='Цена За Выходной День: 3,000,000 uzs' btn='Подробное' />

                    <DachaCard img={Dacha2} like={Like} name='Дача GTA' location='Ташкетская область, Акташ' sum1='Цена За День: 2,000,000 uzs' sum2='Цена За Выходной День: 3,000,000 uzs' btn='Подробное' />

                    <DachaCard img={Dacha3} like={DisLike} name='Дача GTA' location='Ташкетская область, Акташ' sum1='Цена За День: 2,000,000 uzs' sum2='Цена За Выходной День: 3,000,000 uzs' btn='Подробное' />

                    <DachaCard img={Dacha4} like={Like} name='Дача GTA' location='Ташкетская область, Акташ' sum1='Цена За День: 2,000,000 uzs' sum2='Цена За Выходной День: 3,000,000 uzs' btn='Подробное' />

                    <DachaCard img={Dacha5} like={DisLike} name='Дача GTA' location='Ташкетская область, Акташ' sum1='Цена За День: 2,000,000 uzs' sum2='Цена За Выходной День: 3,000,000 uzs' btn='Подробное' />

                    <DachaCard img={Dacha6} like={Like} name='Дача GTA' location='Ташкетская область, Акташ' sum1='Цена За День: 2,000,000 uzs' sum2='Цена За Выходной День: 3,000,000 uzs' btn='Подробное' />



                    <DachaMiniCard img={MiniDacha1} like={MiniRed} name='Дача GTA' location='Ташкетская область, Акташ' sum1='Цена За День: 2,000,000 uzs' sum2='Цена За Выходной День: 3,000,000 uzs' btn='Подробное'  />

                    <DachaMiniCard img={MiniDacha2} like={MiniRed} name='Дача GTA' location='Ташкетская область, Акташ' sum1='Цена За День: 2,000,000 uzs' sum2='Цена За Выходной День: 3,000,000 uzs' btn='Подробное'  />

                    <DachaMiniCard img={MiniDacha3} like={MiniDark} name='Дача GTA' location='Ташкетская область, Акташ' sum1='Цена За День: 2,000,000 uzs' sum2='Цена За Выходной День: 3,000,000 uzs' btn='Подробное'  />

                    <DachaMiniCard img={MiniDacha4} like={MiniDark} name='Дача GTA' location='Ташкетская область, Акташ' sum1='Цена За День: 2,000,000 uzs' sum2='Цена За Выходной День: 3,000,000 uzs' btn='Подробное'  />
                </div>
            </div>
        </div>
    );
}

export default Dacha;