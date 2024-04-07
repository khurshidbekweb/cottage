
import { Link } from 'react-router-dom';
import './PlacesCard.css'
import { IMG_BASE_URL } from '../../constants/img.constants';
const PlacesCard = (props) => {
    return (
        <Link to={`/vacation/${props.id}`} className='places-card'>
            <img className='nature-img' src={`${IMG_BASE_URL}${props.img}`} width='255' height='355' alt="nature" />
            <p className='oswald places-card-name'>{props.name}</p>
        </Link>
    );
}

export default PlacesCard;