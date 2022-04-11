import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {

    const {username} = JSON.parse(localStorage.getItem("user")) 


    const logout = () => {
        localStorage.removeItem("token")
        window.location.reload();
    }

  return (
      <div className="header">
          <div className="container">
              <div className="header__inner">
                  <span ><Link className='header__logo' to="/">Logo</Link> </span> 
                  <h1 className="header__title">Task Manager</h1>
                  <div className='header__right'>
                      <div className="header__right-user">
                          <i className="fa-solid fa-circle-user"></i>
                          <span>{ username }</span>
                      </div>
                      <div className="header__right-logout" onClick={logout}>
                           <span>Logout</span>
                           <i className="fa-solid fa-right-from-bracket"></i>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Header