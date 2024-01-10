import "./MiniNaw.css"
import Home from '../../assets/images/home.svg'
import Like from '../../assets/images/like.svg'
import Plus from '../../assets/images/plus.svg'
import User from '../../assets/images/user.svg'
import { Link } from "react-router-dom"

const MiniNaw = () => {
    return (
        <div className="wrap-nav">
            <div className="mini-naw">
                <Link to='/'>
                    <img src={Home} width="24" height='24.98' alt="home" />
                </Link>

                <Link to='/favorite'>
                    <img src={Like} width="31.96" height='25.47' alt="like" />
                </Link>

                <Link to='/add'>
                    <img src={Plus} width="32" height='32' alt="plus" />
                </Link>

                <Link to='/user'>
                    <img src={User} width="28" height='28' alt="user" />
                </Link>
            </div>
        </div>
     );
}

export default MiniNaw;