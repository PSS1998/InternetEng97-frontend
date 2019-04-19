import React, { Component } from 'react';
import '../CSS/ProfileTop.css';

class ProfileTop extends Component {
    render() {
        return (
            <nav className="mynav nav-profile">
                <svg className="nav-profile-svg">
                    <polygon className="svg-light" points="0,35 300,35 300,0 25,0"></polygon>
                    <polygon className="svg-dark" points="10,35 300,35 300,0 35,0"></polygon>
                </svg>
            </nav>
        );
    }
}

export default ProfileTop;