import React from 'react';
import Dacha from '../../components/Dacha/Dacha';
import BreacdCrumbs from '../../components/BreadCrumbs/BreacdCrumbs';

const ViewCottage = () => {
    return (<>
        <div className='container mb-3'>
            <BreacdCrumbs/>
        </div>
        <div className="mt-5">
        <Dacha/>
        </div>
        </>
    );
};

export default ViewCottage;