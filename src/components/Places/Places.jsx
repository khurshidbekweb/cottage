import "./Places.css";
import PlacesCard from "../PlacesCard/PlacesCard";
import Nature1 from '../../assets/images/nature1.png'
import Nature2 from '../../assets/images/nature2.png'
import Nature3 from '../../assets/images/nature3.png'
import Nature4 from '../../assets/images/nature4.png'
import Nature5 from '../../assets/images/nature5.png'
import Nature6 from '../../assets/images/nature6.png'
import Nature7 from '../../assets/images/nature7.png'
import NoNature from '../../assets/images/no-nature.png'
import PlacesMiniCard from "../PlacesMiniCard/PlacesMiniCard";
import Nature8 from '../../assets/images/nature8.png'
import Nature9 from '../../assets/images/nature9.png'
import Nature10 from '../../assets/images/nature10.png'
import Nature11 from '../../assets/images/nature11.png'
import Nature12 from '../../assets/images/nature12.png'
import Nature13 from '../../assets/images/nature13.png'
import Nature14 from '../../assets/images/nature14.png'

const Places = () => {
  return (
      <div className="container">
        <div className="places">
          <h2 className="places-top">Месты Отдыха</h2>

          <div className="places-cards">
            <PlacesCard name="Бурчумулла" img={Nature1}/>
            <PlacesCard name="Юсуфхона" img={Nature2}/>
            <PlacesCard name="Чимган" img={Nature3}/>
            <PlacesCard name="Чарвак" img={Nature4}/>
            <PlacesCard name="Хумсан" img={Nature5}/>
            <PlacesCard name="Акташ" img={Nature6}/>
            <PlacesCard name="Чирчик" img={Nature7}/>
            <PlacesCard name="Другии месты" img={NoNature}/>

            <PlacesMiniCard name="Бурчумулла" image={Nature8} text='Дачи, Рыбалки, Пикник'/>
            <PlacesMiniCard name="Юсуфхона" image={Nature9} text='Дачи, Рыбалки, Пикник'/>
            <PlacesMiniCard name="Чимган" image={Nature10} text='Дачи, Рыбалки, Пикник'/>
            <PlacesMiniCard name="Чарвак" image={Nature11} text='Дачи, Рыбалки, Пикник'/>
            <PlacesMiniCard name="Хумсан" image={Nature12} text='Дачи, Рыбалки, Пикник'/>
            <PlacesMiniCard name="Акташ" image={Nature13} text='Дачи, Рыбалки, Пикник'/>
            <PlacesMiniCard name="Чирчик" image={Nature14} text='Дачи, Рыбалки, Пикник'/>
            <PlacesMiniCard name="Другии месты" image={NoNature} text='Дачи, Рыбалки, Пикник'/>
          </div>

          <div className="places-circles">
            <div className="places-active"></div>
            <div className="places-circle"></div>
            <div className="places-circle"></div>
            <div className="places-circle"></div>
            <div className="places-circle"></div>
          </div>
        </div>
      </div>
  );
};

export default Places;
