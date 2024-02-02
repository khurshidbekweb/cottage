import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import './Favorite.css'
import DachaCard from '../../components/DachaCards/DachaCard';
import DachaMiniCard from '../../components/DachaMiniCard/DachaMiniCard';
import { ALL_DATA } from '../../Query/get_all';
import MiniNaw from '../../components/MiniNaw/MiniNaw';

const Favorite = () => {
    const cottage = ALL_DATA.useCottage()
    return (
     <>
        <Navbar/>
        <div className="container">
            <div className="favorite">
                <h2 className='favorite-header'>Избранные</h2>

                <div className='favorite-cards'>
                { 
                    cottage.data?.length && cottage.data.filter(e => e.isLiked === true).map(e => {
                        return <DachaCard key={e.id} cottage={e} 
                        btn="Подробное"/>
                    })
                }
                {cottage.data?.length && cottage.data.filter(e => e.isLiked === true).map(e => {
                        return <DachaMiniCard  
                            key={e.id}
                            cottage={e} />
                    })}
                </div>
            </div>
        </div>
        <MiniNaw/>
        <Footer/>
    </> );
}

export default Favorite;