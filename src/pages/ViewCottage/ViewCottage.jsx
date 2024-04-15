import React from 'react';
import Dacha from '../../components/Dacha/Dacha';
import BreacdCrumbs from '../../components/BreadCrumbs/BreacdCrumbs';

const ViewCottage = () => {
    return (
        <div className='container'>
            <BreacdCrumbs/>
            <Dacha/>
        </div>
    );
};

export default ViewCottage;