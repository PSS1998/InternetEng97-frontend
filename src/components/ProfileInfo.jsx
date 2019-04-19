import React, { Component } from 'react';
import imgProfile from '../img/jooj.jpg';
import '../CSS/ProfileInfo.css';

class ProfileInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        // this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <section className="section">
                <img className="section-image" src={imgProfile} alt="profile" width="220px" height="220px"/>
                <h1 className="section-name">محمدرضا کیانی</h1>
                <p className="section-job-title">اعلی حضرت</p>
                <p className="section-bio">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                    طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط
                    فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در
                    شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت
                    بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در
                    این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد
                    وزمان</p>
                <span className="section-add-skill">
                    <h3>مهارت‌ها:</h3>
                    <div className="add-skill-block">
                        <form onSubmit={this.handleSubmit}>
                            <label>
                        <select value={this.state.value} className="add-skill-list" onChange={this.handleChange}>
                            <option value="select">--انتخاب مهارت--</option>
                            <option value="skill">Android</option>
                            <option value="skill">C</option>
                            <option value="skill">C++</option>
                            <option value="skill">CSS</option>
                            <option value="skill">Django</option>
                            <option value="skill">HTML</option>
                            <option value="skill">Java</option>
                            <option value="skill">Javascript</option>
                            <option value="skill">Linux</option>
                            <option value="skill">MySQL</option>
                            <option value="skill">Node.js</option>
                            <option value="skill">Photoshop</option>
                            <option value="skill">PHP</option>
                            <option value="skill">Python</option>
                            <option value="skill">React</option>
                            <option value="skill">SEO</option>
                            <option value="skill">SQL</option>
                        </select>
                                </label>
                        <input className="add-skill-btn" type="button" value="افزودن مهارت"/>
                        </form>
                    </div>
                </span>
                <div className="section-skills">
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
                            <span className="skill-point pr">-</span>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default ProfileInfo;