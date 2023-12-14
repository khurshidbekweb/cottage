import { Link } from 'react-router-dom';
import './PlacesCard.css'

const PlacesCard = (props) => {
    return (
        <Link to='/vacation' className='places-card'>
            <p className='places-card-name'>{props.name}</p>
            <img className='nature-img' src={props.img} width='255' height='355' alt="nature" />
        </Link>
    );
}

export default PlacesCard;