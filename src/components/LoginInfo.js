import React, { Component } from 'react';
import job1 from '../img/job-1.jpg';
import job2 from '../img/job-2.jpg';
import job3 from '../img/job-3.jpg';
import job4 from '../img/job-4.jpg';
import job5 from '../img/job-5.jpg';
import '../CSS/LoginInfo.css';


class LoginInfo extends Component {
    render() {
        return (
            <nav className="mynav nav-register">
                <aside className="aside">
                    <h3 className="reg-title">وارد شوید</h3>
                    <form action="#">
                        <input className="reg-field" type="text" name="username" placeholder="نام کاربری"/>
                        <input className="reg-field" type="password" name="password" placeholder="رمز ورود"/>
                        <input className="reg-submit" type="submit" value="ورود"/>
                    </form>
                </aside>
                <aside className="slide">
                    <img src={job5} alt="Slide 5"/>
                    <img src={job4} alt="Slide 4"/>
                    <img src={job3} alt="Slide 3"/>
                    <img src={job2} alt="Slide 2"/>
                    <img src={job1} alt="Slide 1"/>
                </aside>
            </nav>
        );
    }
}


export default LoginInfo;