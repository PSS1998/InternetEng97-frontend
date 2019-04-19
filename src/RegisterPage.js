import React, { Component } from 'react';
import FixedHeader from "./components/FixedHeader";
import RegisterInfo from "./components/RegisterInfo";
import Footer from "./components/Footer";
import './CSS/RegisterPage.css';


class RegisterPage extends Component {
    render() {
        return (
            <div>
                <FixedHeader />
                <RegisterInfo />
                <Footer />
            </div>
        );
    }
}


export default RegisterPage;