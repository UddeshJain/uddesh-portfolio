import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Responsive } from 'semantic-ui-react';
import './Header.css';
import logo from '../../../Images/logo.png';


class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toggled: false
        }
        this.handleClick = this.handleClick
    }
    handleClick = () => {
        let toggled = this.state.toggled
        this.setState({toggled: !toggled})
    }
    render() {
        const { toggled } = this.state
        return (
            <div>
                <Responsive minWidth={768}>
                    <div className='sidebar'>
                        <img src={logo} alt='logo' className='sidebar-logo' height='60px' width='40px' />
                        <div class="container">
                            <div class="link">
                                <div class="text">HOME</div>
                            </div>
                            <div class="link">
                                <div class="text">ABOUT</div>
                            </div>
                            <div class="link">
                                <div class="text">SKILLS</div>
                            </div>
                            <div class="link">
                                <div class="text">PROJECTS</div>
                            </div>
                            <div class="link">
                                <div class="text">CONTACT</div>
                            </div>
                            </div>
                        </div>
                    </Responsive>
                

                    <Responsive maxWidth={767}>
                        <div className='header'>
                        <img src={logo} alt='logo' className='header-logo' height='60px' width='40px' />
                            <div className='container-nav-icon'>
                                <div id="nav-icon" onClick={this.handleClick} className={this.state.toggled ? 'open' : ''}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>   
                        </div>
                        {/* <Transition visible={true} animation='scale' duration={500}> */}
                    {toggled ? (
                            <div class="header-container">
                                <div class="header-link">
                                    <Link to='/'><div class="text">HOME</div></Link>
                                </div>
                                <div class="header-link">
                                    <div class="text">ABOUT</div>
                                </div>
                                <div class="header-link">
                                    <div class="text">SKILLS</div>
                                </div>
                                <div class="header-link">
                                    <div class="text">PROJECTS</div>
                                </div>
                                <div class="header-link">
                                    <div class="text">CONTACT</div>
                                </div>
                            </div>
                        ) : ''}
                            
                        {/* </Transition> */}
                    </Responsive>
                </div>
        );
    }
}

export default Header;