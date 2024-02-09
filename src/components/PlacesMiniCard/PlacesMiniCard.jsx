import { Link } from 'react-router-dom';
import './PlacesMiniCard.css'
import { BASE_URL_SERVER } from '../../constants/server.constants';

const PlacesMiniCard = (props) => {
    console.log(props.id);
    return (
        <Link to={`/vacation/${props.id}`} className="places-mini-card">
                <img className='nature-imaged' src={`${BASE_URL_SERVER}${props.image}`} width="100" height="110" alt="nature" />
                <div className="mini-card-text">
                    <p className='places-mini-card-name'>{props.name}</p> 
                </div>
        </Link>
    );
}

export default PlacesMiniCard;