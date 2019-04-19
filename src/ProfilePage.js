import React, { Component } from 'react';
import FixedHeader from "./components/FixedHeader";
import ProfileTop from "./components/ProfileTop";
import ProfileInfo from "./components/ProfileInfo";
import Footer from "./components/Footer";
import './CSS/ProfilePage.css';

class ProfilePage extends Component {
    render() {
        return (
            <div>
                <FixedHeader />
                <ProfileTop />
                <ProfileInfo />
                <Footer />
            </div>
        );
    }
}

export default ProfilePage;