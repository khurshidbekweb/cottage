import './LineCards.css'
import LineCard from '../LineCard/LineCard';
import Dacha1 from '../../assets/images/dacha1.png'
import Dacha2 from '../../assets/images/dacha2.png'
import Dacha3 from '../../assets/images/dacha3.png'
import Dacha4 from '../../assets/images/dacha4.png'
import BedIcon from '../../assets/images/bed-icon.svg'
import HomeIcon from '../../assets/images/home-icon.svg'

const LineCards = () => {
    return (
        <div className="linecards">
            <LineCard img={Dacha1} name='Дача GTA' location='Ташкетская область, Акташ' bed={BedIcon} home={HomeIcon} bedtext='Количество спален: 6' hometext='Территория: 200 м/кв' sum1='2,000,000' sum2='3,000,000' btn1='Подробное' btn2='Все удобства' />
            <LineCard img={Dacha2} name='Дача GTA' location='Ташкетская область, Акташ' bed={BedIcon} home={HomeIcon} bedtext='Количество спален: 6' hometext='Территория: 200 м/кв' sum1='2,000,000' sum2='3,000,000' btn1='Подробное' btn2='Все удобства' />
            <LineCard img={Dacha3} name='Дача GTA' location='Ташкетская область, Акташ' bed={BedIcon} home={HomeIcon} bedtext='Количество спален: 6' hometext='Территория: 200 м/кв' sum1='2,000,000' sum2='3,000,000' btn1='Подробное' btn2='Все удобства' />
            <LineCard img={Dacha4} name='Дача GTA' location='Ташкетская область, Акташ' bed={BedIcon} home={HomeIcon} bedtext='Количество спален: 6' hometext='Территория: 200 м/кв' sum1='2,000,000' sum2='3,000,000' btn1='Подробное' btn2='Все удобства' />
        </div>
    );
}

export default LineCards;