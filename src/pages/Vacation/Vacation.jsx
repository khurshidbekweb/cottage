
import Footer from '../../components/Footer/Footer';
import MiniNaw from '../../components/MiniNaw/MiniNaw';
import Navbar from '../../components/Navbar/Navbar';

function Vacation() {
  return (
    <>
       <Navbar/>
        <div className='container'>
            <div className="favorite">
                <h2 className='favorite-header'>Бурчумулла</h2>

                <div className='favorite-cards'>
                    {/* <FavCard img={Dacha2} name='Дача GTA' location='Ташкетская область, Акташ' sum1='Цена За День: 2,000,000 uzs' sum2='Цена За Выходной День: 3,000,000 uzs' btn='Подробное' />

                    <FavCard img={Dacha4} name='Дача GTA' location='Ташкетская область, Акташ' sum1='Цена За День: 2,000,000 uzs' sum2='Цена За Выходной День: 3,000,000 uzs' btn='Подробное' />

                    <FavCard img={Dacha6} name='Дача GTA' location='Ташкетская область, Акташ' sum1='Цена За День: 2,000,000 uzs' sum2='Цена За Выходной День: 3,000,000 uzs' btn='Подробное' /> */}
                </div>
            </div>
        </div>
        <MiniNaw/>
        <Footer/>
    </>
  )
}

export default Vacation