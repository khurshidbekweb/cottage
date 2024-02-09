
import { Link } from 'react-router-dom';
import './PlacesCard.css'
import { IMG_BASE_URL } from '../../constants/img.constants';
const PlacesCard = (props) => {
    console.log(props.id);
    return (
        <Link to={`/vacation/${props.id}`} className='places-card'>
            <p className='places-card-name'>{props.name}</p>
            <img className='nature-img' src={`${IMG_BASE_URL}${props.img}`} width='255' height='355' alt="nature" />
        </Link>
    );
}

export default PlacesCard;