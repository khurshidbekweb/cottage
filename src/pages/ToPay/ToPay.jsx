import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./ToPay.css";
import { Link } from "react-router-dom";

const ToPay = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="to-pay">
          <h2 className="to-pay-header">Оповещение</h2>

          <div className="to-pay-card">
            <p className="to-pay-day">Сегодня</p>
            <p className="to-pay-user">Здравствуйте уважаемый Umidjon!</p>
            <p className="to-pay-hour">Получено в: 21:40</p>
            <p className="to-pay-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              posuere nunc amet scelerisque rhoncus cras nascetur aliquam. A
              donec viverra elit consectetur egestas fringilla mattis diam diam.
              Felis id mauris, egestas consectetur sapien amet. Egestas enim
              nulla felis vel vitae. Massa commodo id ultrices nunc duis sit mi
              lectus vestibulum. Auctor accumsan, sem hendrerit eget accumsan.
              Nulla mi vulputate etiam et fames volutpat. Gravida turpis lacus,
              venenatis, risus suspendisse morbi eros consectetur convallis.
              Nunc aliquam dictum donec nec lobortis. Etiam ligula neque, at
              dolor. Pellentesque risus, tortor consectetur sit pharetra nec,
              sagittis, nec aliquet. Aliquam sapien, id cursus leo, in donec
              tellus rutrum. Diam aliquam tellus orci justo mi non cursus.
              Montes, tellus massa suspendisse nibh aliquam lorem egestas. Nulla
              ut facilisi nulla non et in. Dictum ut tincidunt tempus lacinia
              massa pellentesque. Quam varius in at nibh et vulputate ut
              penatibus. Lorem suscipit et enim pulvinar non. Posuere
              scelerisque et leo, adipiscing cras. Ut a ut ac odio ac, et diam
              cras et. Adipiscing ut elementum enim sagittis, id dignissim. Ut
              cursus vel sagittis ipsum. Massa eu eget condimentum proin.
              Vestibulum nec aliquam lectus viverra sollicitudin ultricies
              suspendisse aliquet enim. Morbi ullamcorper.
            </p>

            <div className="to-pay-btns">
            <Link className="to-pay-btn" to='/pay-detail'>Подробное</Link>
            <button className="to-pay-delete">Удалить</button>
            </div>
          </div>

          <div className="to-pay-card">
            <p className="to-pay-day">Вчера</p>
            <p className="to-pay-user">Здравствуйте уважаемый Umidjon!</p>
            <p className="to-pay-hour">Получено в: 21:40</p>
            <p className="to-pay-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              posuere nunc amet scelerisque rhoncus cras nascetur aliquam. A
              donec viverra elit consectetur egestas fringilla mattis diam diam.
              Felis id mauris, egestas consectetur sapien amet. Egestas enim
              nulla felis vel vitae. Massa commodo id ultrices nunc duis sit mi
              lectus vestibulum. Auctor accumsan, sem hendrerit eget accumsan.
              Nulla mi vulputate etiam et fames volutpat. Gravida turpis lacus,
              venenatis, risus suspendisse morbi eros consectetur convallis.
              Nunc aliquam dictum donec nec lobortis. Etiam ligula neque, at
              dolor. Pellentesque risus, tortor consectetur sit pharetra nec,
              sagittis, nec aliquet. Aliquam sapien, id cursus leo, in donec
              tellus rutrum. Diam aliquam tellus orci justo mi non cursus.
              Montes, tellus massa suspendisse nibh aliquam lorem egestas. Nulla
              ut facilisi nulla non et in. Dictum ut tincidunt tempus lacinia
              massa pellentesque. Quam varius in at nibh et vulputate ut
              penatibus. Lorem suscipit et enim pulvinar non. Posuere
              scelerisque et leo, adipiscing cras. Ut a ut ac odio ac, et diam
              cras et. Adipiscing ut elementum enim sagittis, id dignissim. Ut
              cursus vel sagittis ipsum. Massa eu eget condimentum proin.
              Vestibulum nec aliquam lectus viverra sollicitudin ultricies
              suspendisse aliquet enim. Morbi ullamcorper.
            </p>

            <div className="to-pay-btns">
            <Link className="to-pay-btn" to='/pay-detail'>Подробное</Link>
            <button className="to-pay-delete">Удалить</button>
            </div>
          </div>

          <div className="to-pay-card">
            <p className="to-pay-day">11.11.2022</p>
            <p className="to-pay-user">Здравствуйте уважаемый Umidjon!</p>
            <p className="to-pay-hour">Получено в: 21:40</p>
            <p className="to-pay-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              posuere nunc amet scelerisque rhoncus cras nascetur aliquam. A
              donec viverra elit consectetur egestas fringilla mattis diam diam.
              Felis id mauris, egestas consectetur sapien amet. Egestas enim
              nulla felis vel vitae. Massa commodo id ultrices nunc duis sit mi
              lectus vestibulum. Auctor accumsan, sem hendrerit eget accumsan.
              Nulla mi vulputate etiam et fames volutpat. Gravida turpis lacus,
              venenatis, risus suspendisse morbi eros consectetur convallis.
              Nunc aliquam dictum donec nec lobortis. Etiam ligula neque, at
              dolor. Pellentesque risus, tortor consectetur sit pharetra nec,
              sagittis, nec aliquet. Aliquam sapien, id cursus leo, in donec
              tellus rutrum. Diam aliquam tellus orci justo mi non cursus.
              Montes, tellus massa suspendisse nibh aliquam lorem egestas. Nulla
              ut facilisi nulla non et in. Dictum ut tincidunt tempus lacinia
              massa pellentesque. Quam varius in at nibh et vulputate ut
              penatibus. Lorem suscipit et enim pulvinar non. Posuere
              scelerisque et leo, adipiscing cras. Ut a ut ac odio ac, et diam
              cras et. Adipiscing ut elementum enim sagittis, id dignissim. Ut
              cursus vel sagittis ipsum. Massa eu eget condimentum proin.
              Vestibulum nec aliquam lectus viverra sollicitudin ultricies
              suspendisse aliquet enim. Morbi ullamcorper.
            </p>

            <div className="to-pay-btns">
            <Link className="to-pay-btn" to='/pay-detail'>Подробное</Link>
            <button className="to-pay-delete">Удалить</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ToPay;
