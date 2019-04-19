import React, { Component } from 'react';
import FixedHeader from "./components/FixedHeader";
import ProfileTop from "./components/ProfileTop";
import ProfileInfo from "./components/ProfileInfo";
import Footer from "./components/Footer";
import './CSS/ProfilePage.css';

class ProfilePageOther extends Component {
    constructor(props) {
        super(props);
        this.otherUser = true;
    }

    render() {
        return (
            <div>
                <FixedHeader />
                <ProfileTop />
                <ProfileInfo otherUser={this.otherUser} />
                <Footer />
            </div>
        );
    }
}

export default ProfilePageOther;