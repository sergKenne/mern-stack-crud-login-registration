import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const FormBanner = () => {
    const location = useLocation();
    const pathname = location.pathname.split('/')[1];

  return (
      <div className="form__banner">
          
          <div className="form__banner-inner">
              <Link className='form__banner-logo' to="/">Logo</Link>
              <Link
                  className={
                      pathname === 'login' ? 'form__banner-link activ' : 'form__banner-link'
                  }
                  to="/login">
                  Login
              </Link>
              <Link
                  className={
                      pathname === 'register' ? 'form__banner-link activ' : 'form__banner-link'
                  }
                  to="/register">
                  Register
              </Link>
          </div>
      </div>
  );
}

export default FormBanner