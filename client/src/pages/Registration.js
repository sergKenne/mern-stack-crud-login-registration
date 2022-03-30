import React from 'react';
import FormBanner from '../components/FormBanner';
import FormRegister from '../components/FormRegister';

const Registration = () => {
    

    return (
        <div className='form__wrapper'>
            <div className='form__content'>
                <FormBanner />
                <FormRegister />
            </div>
        </div>
    );
};

export default Registration;
