import React, { Component } from 'react';
import job1 from '../img/job-1.jpg';
import job2 from '../img/job-2.jpg';
import job3 from '../img/job-3.jpg';
import job4 from '../img/job-4.jpg';
import job5 from '../img/job-5.jpg';
import '../CSS/RegisterInfo.css';


class RegisterInfo extends Component {
    render() {
        return (
            <nav className="mynav nav-register">
                <aside className="aside">
                    <h3 className="reg-title">ثبت نام کنید</h3>
                    <form action="#">
                        <input className="reg-field" type="text" name="fname" placeholder="نام"/>
                        <input className="reg-field" type="text" name="lname" placeholder="نام خانوادگی"/>
                        <input className="reg-field" type="text" name="username" placeholder="نام کاربری"/>
                        <input className="reg-field" type="password" name="password" placeholder="رمز ورود"/>
                        <input className="reg-field" type="password" name="passrepeat" placeholder="تکرار رمز ورود"/>
                        <input className="reg-field" type="text" name="jobtitle" placeholder="عنوان شغلی"/>
                        <input className="reg-field" type="text" name="profileimage" placeholder="لینک عکس پروفایل"/>
                        <input className="reg-field" type="text" name="bio" placeholder="زندگینامه"/>
                        <input className="reg-submit" type="submit" value="ثبت نام"/>
                    </form>
                    <span className="reg-already">
                        <p className="reg-already-text">قبلا ثبت نام کرده اید؟</p>
                        <a href="#"><p className="reg-already-link">وارد شوید</p></a>
                    </span>
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


export default RegisterInfo;