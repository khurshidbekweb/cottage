import { Link, useLocation } from 'react-router-dom';
import './BreadCrumbs.css'

const BreacdCrumbs = () => {

    const location = useLocation()
    console.log(location);
    const currentLink = []
    const curmbs = location.pathname.split('/').filter((curmb)=>curmb !== "").map(curmb => {
            currentLink.push(`/${curmb}`)
            return (
                <div className='crumb' key={curmb}>
                    <Link to={currentLink.join('')}>{curmb}</Link>
                </div>
            )
            })
    return (
        <div className='breadcrumbs'>  {curmbs}  </div>
    );
};

export default BreacdCrumbs;