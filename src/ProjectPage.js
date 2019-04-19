import React, { Component } from 'react';
import FixedHeader from "./components/FixedHeader";
import ProjectInfo from "./components/ProjectInfo";
import Footer from "./components/Footer";
import './CSS/ProjectPage.css';



const navStyle = {
    marginTop: '60px',
    background: '#b9eff2',
    height: '100px'
};

const ProjectTop = () => {
    return (
        <nav style={navStyle}>
        </nav>
    )
};


class ProjectPage extends Component {
    render() {
        return (
            <div>
                <FixedHeader />
                <ProjectTop />
                <ProjectInfo />
                <Footer />
            </div>
        );
    }
}


export default ProjectPage;