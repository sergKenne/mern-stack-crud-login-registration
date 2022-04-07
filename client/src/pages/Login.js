import React from 'react'
import FormBanner from '../components/FormBanner';
import FormLogin from '../components/FormLogin';

const Login = () => {
  return (
      <div className="form__wrapper">
          <div className="form__content">
              <FormBanner />
              <FormLogin />
          </div>
      </div>
  );
}

export default Login