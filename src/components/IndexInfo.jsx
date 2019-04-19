import React, { Component } from 'react';
import axios from 'axios';
import imgProfile1 from '../img/profile-1.jpg';
import imgProfile2 from '../img/profile-2.jpg';
import imgProfile3 from '../img/profile-3.jpg';
import imgProject from '../img/dokhtar.jpg';
import '../CSS/IndexInfo.css';



class IndexInfo extends Component {
    state = {
        posts: [],
        isLoading: true,
        errors: null
    };
    getPosts() {
        axios.get("http://localhost:8080/project")
            .then(response => {
                this.setState({
                    posts: response.data,
                    isLoading: false
                });
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    componentDidMount() {
        this.getPosts();
    }

    render() {
        const { isLoading, posts } = this.state;
        return (
            <div>
                <nav className="mynav nav-project">
                    <h1 className="nav-header">جاب اونجا خوب است!</h1>
                    <p className="nav-text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیکی است. چاپگرها و متون بلکه روزنامه و مجله در</p>
                    <div className="search-container">
                        <form action="">
                            <input type="text" placeholder="جستجو در جاب اونجا" name="search"/>
                            <button type="submit">جستجو</button>
                        </form>
                    </div>
                </nav>
                <div className="container">
                    <div className="col span_2_of_3">
                        <div>
                            {!isLoading ? (
                                posts.map(post => {
                                    console.log(post);
                                    const { Description, Skills, Deadline, Title, ImageURL, Budget, ID } = post;
                                    var SkillArray = [];
                                    for (var key in Skills) {
                                        if (Skills.hasOwnProperty(key)) {
                                            SkillArray.push(key)
                                        }
                                    }
                                    const skillDiv = SkillArray.map(skillName => {
                                        return(
                                            <p className="post-skill" key={skillName}>{skillName}</p>
                                        );
                                    });
                                    return (
                                        <a href="http://localhost:3000/project"><div className="blog-post" key={ID}>
                                            <img className="post-image" src={ImageURL} alt="img"/>
                                            <h1 className="blog-title">{Title}</h1>
                                            <h2 className="date">زمان باقی مانده: {Deadline}</h2>
                                            <p className="blog-content">{Description}</p>
                                            <p className="post-budget">بودجه: {Budget} تومان</p>
                                            <div className="blog-post-skill">
                                                <p className="post-skill-text">مهارت ها: </p>
                                                {skillDiv}
                                            </div>
                                        </div></a>
                                    );
                                })
                            ) : (
                                <p>Loading...</p>
                            )}
                        </div>
                    </div>
                    <aside className="col span_1_of_3">
                        <div className="side-post-search">
                            <form action="">
                                <input type="text" placeholder="جستجو نام کاربر" name="search"/>
                            </form>
                        </div>
                        <a href="http://localhost:3000/user"><div className="side-post">
                            <img className="side-image" src={imgProfile1} alt="img"/>
                            <div className="side-content-div">
                                <p className="side-content">صادق حائری</p>
                                <p className="side-content">گیک</p>
                            </div>
                        </div></a>
                        <a href="http://localhost:3000/user"><div className="side-post">
                            <img className="side-image" src={imgProfile2} alt="img"/>
                            <div className="side-content-div">
                                <p className="side-content">محمدرضا کیانی</p>
                                <p className="side-content">چیف تی ای</p>
                            </div>
                        </div></a>
                        <a href="http://localhost:3000/user"><div className="side-post">
                            <img className="side-image" src={imgProfile3} alt="img"/>
                            <div className="side-content-div">
                                <p className="side-content">آبتین باطنی</p>
                                <p className="side-content">توسعه دهنده فرانت اند</p>
                            </div>
                        </div></a>
                    </aside>
                </div>
            </div>
        );
    }
}


export default IndexInfo;