import { Link, useLocation } from 'react-router-dom';
import './BreadCrumbs.css'

const BreacdCrumbs = () => {

    const location = useLocation()
    const currentLink = []
    const curmbs = location.pathname.split('/').filter((curmb)=>curmb !== "").map(curmb => {
        currentLink.push(`/${curmb}`)
                console.log(currentLink);
            if(currentLink[1]==="/view" || currentLink[1]==='/vacation'){
                currentLink.pop()
                console.log(currentLink, "pop");
                return <div className='crumb' key={curmb}>
                            <Link to={currentLink.join('')}>{curmb}</Link>
                        </div>
            }else{            
            return (
                <div className='crumb' key={curmb}>
                    <Link to={currentLink.join('')}>{curmb}</Link>
                </div>
            )}  
        })
    return (
        <div className='breadcrumbs'>  {curmbs}  </div>
    );
};

export default BreacdCrumbs;