import React, { Component } from 'react';
import Content from './Body/Content'
import Header from './Header/Header';


class MainPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Content />
            </div>
        );
    }
}

export default MainPage;