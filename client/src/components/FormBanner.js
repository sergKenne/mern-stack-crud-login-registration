import React from 'react'
import { Link } from 'react-router-dom'
const FormBanner = () => {
  return (
      <div className="form__banner">
          <div className="form__banner-inner">
              <Link className="form__banner-link" to="/login">
                  Login
              </Link>
              <Link className="form__banner-link" to="/login">
                  Register
              </Link>
          </div>
      </div>
  );
}

export default FormBanner