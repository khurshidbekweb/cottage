import FavCard from '../../components/FavCard/FavCard';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Dacha2 from "../../assets/images/dacha2.png"
import Dacha4 from "../../assets/images/dacha4.png"
import Dacha6 from "../../assets/images/dacha6.png"
import './Favorite.css'

const Favorite = () => {
    return (
     <>
        <Navbar/>
        <div className="container">
            <div className="favorite">
                <h2 className='favorite-header'>Избранные</h2>

                <div className='favorite-cards'>
                    <FavCard img={Dacha2} name='Дача GTA' location='Ташкетская область, Акташ' sum1='Цена За День: 2,000,000 uzs' sum2='Цена За Выходной День: 3,000,000 uzs' btn='Подробное' />

                    <FavCard img={Dacha4} name='Дача GTA' location='Ташкетская область, Акташ' sum1='Цена За День: 2,000,000 uzs' sum2='Цена За Выходной День: 3,000,000 uzs' btn='Подробное' />

                    <FavCard img={Dacha6} name='Дача GTA' location='Ташкетская область, Акташ' sum1='Цена За День: 2,000,000 uzs' sum2='Цена За Выходной День: 3,000,000 uzs' btn='Подробное' />
                </div>
            </div>
        </div>
        <Footer/>
    </> );
}

export default Favorite;