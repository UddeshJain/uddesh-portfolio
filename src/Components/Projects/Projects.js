import React, { Component } from 'react';
import './Projects.scss';
import Header from '../MainPage/Header/Header';
import Burger from '../../Images/burger.png';
import Weather from '../../Images/weather.png';
import Bot from '../../Images/bot.png'
import DevChat from '../../Images/devchat.png'



class Projects extends Component {

    openBurgerBuilder() {
        const url = 'https://react-burger-store-24abd.firebaseapp.com/';
        window.open(url, '_blank');
    }

    openWeatherApp() {
        const url = 'https://weather-app-8827.firebaseapp.com';
        window.open(url, '_blank');
    }

    openDiscordBot() {
        const url = 'https://discordapp.com/oauth2/authorize?&client_id=560817962291036161&scope=bot&permissions=8';
        window.open(url, '_blank');
    }

    openDevChat() {
        const url = 'https://github.com/UddeshJain/realtime-chat-app';
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

                    <div className="slide-container">
                        <div className="project-wrapper">
                            <div className="clash-card barbarian">
                                <div className="clash-card__image clash-card__image--barbarian">
                                    <img src={Bot} alt="Weather" />
                                </div>
                                <div className="clash-card__unit-name">Discord Bot</div>
                                <div className="clash-card__unit-description">
                                    Discord bot shows the weather condition. Just use <i><strong>#w &lt;city Name&gt;</strong></i>, But invite it to your server.
                                </div>

                                <div className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
                                    <button onClick={this.openDiscordBot}>Demo</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slide-container">
                        <div className="project-wrapper">
                            <div className="clash-card barbarian">
                                <div className="clash-card__image clash-card__image--barbarian">
                                    <img src={DevChat} alt="Weather" />
                                </div>
                                <div className="clash-card__unit-name">Dev Chat</div>
                                <div className="clash-card__unit-description">
                                    DevChat is a web app made with react where people can chat and discuss problem about <strong>technology</strong>
                                </div>

                                <div className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
                                    <button onClick={this.openDevChat}>Demo</button>
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