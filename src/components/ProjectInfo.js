import React, { Component } from 'react';
import imgProject from '../img/dokhtar.jpg';
import '../CSS/ProjectInfo.css';

class ProjectInfo extends Component {
    render() {
        return (
            <section className="section">
                <main className="main">
                    <div className="main-top">
                        <span className="main-top-right">
                            <img className="prj-img" src={imgProject} alt="profile" width="220px" height="220px"/>
                        </span>
                        <span className="main-top-left">
                            <h1 className="prj-name">پروژه طراحی سایت جاب‌اونجا</h1>
                            <i className="far fa-clock aw-icon aw-grey "></i>
                            <p className="aw-text aw-grey">زمان باقی مانده: </p>
                            <p class="aw-text-det aw-grey">۱۷ دقیقه و ۲۵ ثانیه</p><br />
                            <i className="fa fa-dollar-sign aw-icon aw-blue"></i>
                            <p class="aw-text aw-blue">بودجه: ۲۵۰۰ تومان</p><br />
                            <h3 className="prj-bio-title">توضیحات</h3>
                            <p className="prj-bio">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
                        </span>
                    </div>
                    <div className="main-skills">
                        <h3 className="prj-skills-title">مهارت‌های لازم:</h3>
                        <div className="prj-skills">
                            <ul className="skills-list">
                                <li className="skill-block">
                                    <span className="skill-title">HTML</span>
                                    <span className="skill-point pb">5</span>
                                </li>
                                <li className="skill-block">
                                    <span className="skill-title">CSS</span>
                                    <span className="skill-point pb">3</span>
                                </li>
                                <li className="skill-block">
                                    <span className="skill-title">JavaScript</span>
                                    <span className="skill-point pb">16</span>
                                </li>
                                <li className="skill-block">
                                    <span className="skill-title">TypeScript</span>
                                    <span className="skill-point pb">2</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="main-bid">
                        <h3 className="bid-title">ثبت پیشنهاد</h3>
                        <div className="prj-bid">
                            <div className="bid-cont">
                                <input className="bid-input" type="number" placeholder="پیشنهاد خود را وارد کنید"/>
                                <p className="bid-unit">تومان</p>
                            </div>
                            <input className="bid-send" type="button" value="ارسال"/>
                        </div>
                    </div>
                </main>
            </section>
        );
    }
}

export default ProjectInfo;