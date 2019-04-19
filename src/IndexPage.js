import React, { Component } from 'react';
import FixedHeader from "./components/FixedHeader";
import IndexInfo from "./components/IndexInfo";
import Footer from "./components/Footer";
import './CSS/IndexPage.css';


class IndexPage extends Component {
    render() {
        return (
            <div>
                <FixedHeader />
                <IndexInfo />
                <Footer />
            </div>
        );
    }
}


export default IndexPage;