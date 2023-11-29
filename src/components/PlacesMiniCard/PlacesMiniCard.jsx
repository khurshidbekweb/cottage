import './PlacesMiniCard.css'

const PlacesMiniCard = (props) => {
    return (
        <div className="places-mini-card">
            <p className='places-mini-card-name'>{props.name}</p>
            <p className='places-mini-card-text'>{props.text}</p>
            <img className='nature-image' src={props.image} width="235" height="350" alt="nature" />
        </div>
    );
}

export default PlacesMiniCard;