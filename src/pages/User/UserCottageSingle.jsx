import { useParams } from "react-router-dom";
import { ALL_DATA } from "../../Query/get_all";
import DachaCard from "../../components/DachaCards/DachaCard";
import DachaMiniCard from "../../components/DachaMiniCard/DachaMiniCard";
import './User.css'
import { IMG_BASE_URL } from "../../constants/img.constants";

const UserCottageSingle = () => {
    const params = useParams()
    const cottage =  ALL_DATA.useCottageAllUserId(params.id)
    const user = ALL_DATA.useSingleUser(params.id)
    console.log(user.data);
    return (
    <div className="container">
      <div className="dacha">
        <div className="user-info-wrap d-flex gap-3 shadow p-2 rounded-2">
            <img className="rounded-pill user-image" src={`${IMG_BASE_URL}${user.data?.image}`} alt="userImage" />
            <div className="oswald fw-bold  user-info">
                <h3>{user.data?.name}</h3>
                <p>+998{user.data?.phone}</p>
            </div>
        </div>
        <h2 className="dacha-top mt-4">User Cottage</h2>
        <div className="dacha-cards">
          {cottage.data?.length &&
            cottage.data
              .filter((el) => el.cottageStatus === "confirmed")
              .map((e) => {
                return <DachaCard key={e.id} cottage={e} />;
              })}

          {cottage.data?.length &&
            cottage.data
              .filter((el) => el.cottageStatus === "confirmed")
              .map((e) => {
                return <DachaMiniCard key={e.id} cottage={e} />;
              })}
        </div>
      </div>
    </div>
    );
};

export default UserCottageSingle;