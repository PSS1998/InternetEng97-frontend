import React, { Component } from 'react';
import logo from '../logo/logo v1.png';
import '../CSS/FixedHeader.css';

class FixedHeader extends Component {
    render() {
        return (
            <div className="FixedHeader">
                <header className="header">
              <span className="header-span">
                  <a className="header-logo" href="#">
                      <img src={logo} alt="JobUnja" width="auto" height="60px"/>
                  </a>
                  <div className="header-left">
                      <a className="header_link" href="http://localhost:3000/user">حساب کاربری</a>
                      <a className="header_link" href="#">خروج</a>
                  </div>
              </span>
                </header>
            </div>
        );
    }
}

export default FixedHeader;