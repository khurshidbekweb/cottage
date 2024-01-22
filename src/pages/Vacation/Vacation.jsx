
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import MiniNaw from '../../components/MiniNaw/MiniNaw';
import Navbar from '../../components/Navbar/Navbar';
import { ALL_DATA } from '../../Query/get_all';
import DachaCard from '../../components/DachaCards/DachaCard';
import DachaMiniCard from '../../components/DachaMiniCard/DachaMiniCard';

function Vacation() {
  const parmas = useParams()
  const cottage = ALL_DATA.useCottage()
  const place = ALL_DATA.usePlace()
  const sortPlace = cottage?.data.filter(e => e.place.id === parmas.id)
  const placeName = place?.data.find(e => e.id === parmas.id).name
  return (
    <>
       <Navbar/>
        <div className='container'>
            <div className="favorite">
                <h2 className='favorite-header'>{placeName}</h2>

                <div className='favorite-cards'> 
                  <div className="place-card-sort">
                    {sortPlace?.length && sortPlace.map(e => {
                      return <DachaCard key={e.id} cottage={e} btn="Подробное"/>
                    })}
                  </div>  
                  <div className="place-card-mini-sort">
                    {sortPlace?.length && sortPlace.map(e => {
                      return <DachaMiniCard key={e.id} cottage={e}/>
                    })}
                  </div>
                </div>
            </div>
        </div>
        <MiniNaw/>
        <Footer/>
    </>
  )
}

export default Vacation