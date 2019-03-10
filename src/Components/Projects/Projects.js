import React, { Component } from 'react';
import './Projects.scss';
import Header from '../MainPage/Header/Header';
import Burger from '../../Images/burger.png';
import Weather from '../../Images/weather.png';



class Projects extends Component {

    openBurgerBuilder() {
        const url = 'https://react-burger-store-24abd.firebaseapp.com/';
        window.open(url, '_blank');
    }

    openWeatherApp() {
        const url = 'https://weather-app-8827.firebaseapp.com';
        window.open(url, '_blank');
    }

    render() {
        return (
            <div className='project-container'>
                <Header />
                <div className='project-card'>
                    <div className="slide-container">
                        <div className="project-wrapper">
                            <div className="clash-card barbarian">
                                <div className="clash-card__image clash-card__image--barbarian">
                                    <img src={Burger} alt="Burger" />
                                </div>
                                <div className="clash-card__unit-name">Burger Bulder</div>
                                <div className="clash-card__unit-description">
                                    Burger Builder is a WebApp which allows users to add different ingredients and place the order.
                                </div>

                                <div className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
                                    <button onClick={this.openBurgerBuilder}>Demo</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slide-container">
                        <div className="project-wrapper">
                            <div className="clash-card barbarian">
                                <div className="clash-card__image clash-card__image--barbarian">
                                    <img src={Weather} alt="Weather" />
                                </div>
                                <div className="clash-card__unit-name">Weather Finder</div>
                                <div className="clash-card__unit-description">
                                    Weather Finder is a WebApp to know the weather of many cities across the world.
                                </div>

                                <div className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
                                    <button onClick={this.openWeatherApp}>Demo</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;