import React, { Component } from 'react';
import FixedHeader from "./components/FixedHeader";
import LoginInfo from "./components/LoginInfo";
import Footer from "./components/Footer";
import './CSS/LoginPage.css';


class LoginPage extends Component {
    render() {
        return (
            <div>
                <FixedHeader />
                <LoginInfo />
                <Footer />
            </div>
        );
    }
}


export default LoginPage;