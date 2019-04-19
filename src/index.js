import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import './CSS/index.css';
import * as serviceWorker from './serviceWorker';
import ProfilePage from "./ProfilePage";
import ProfilePageOther from "./ProfilePageOther";
import ProjectPage from "./ProjectPage";
import RegisterPage from "./RegisterPage";
import IndexPage from "./IndexPage";
import './fonts/iransans-fonts/fonts.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Home() {
    return <IndexPage />;
}

function Project() {
    return <ProjectPage />;
}

function User() {
    return <ProfilePage />;
}

function UserOther() {
    return <ProfilePageOther />;
}

function Register() {
    return <RegisterPage />;
}



ReactDOM.render(    <Router>
    <div>
        <Route exact path="/" component={Home} />
        <Route path="/project" component={Project} />
        <Route exact path="/user" component={User} />
        <Route path="/user-other" component={UserOther} />
        <Route path="/register" component={Register} />
                        {/*<ProfilePage />*/}
                        {/*<ProjectPage />*/}
                        {/*<RegisterPage />*/}
                        {/*<IndexPage />*/}
    </div>
</Router>
                , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
