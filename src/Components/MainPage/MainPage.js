import React, { Component } from 'react';
import Content from './Body/Content'
import Header from './Header/Header';
import './mainPage.css';


class MainPage extends Component {
    render() {
        return (
            <div className='main-page-container'>
                <Header />
                <Content />
            </div>
        );
    }
}

export default MainPage;