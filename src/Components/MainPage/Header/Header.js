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
                        <div className="container">
                            <div className="link">
                                <Link to='/' style={{textDecoration: 'none'}}><div className="text">HOME</div></Link>
                            </div>
                            <div className="link">
                                <Link to='/about' style={{ textDecoration: 'none' }}><div className="text">ABOUT</div></Link>
                            </div>
                            <div className="link">
                                <Link to='/skills' style={{ textDecoration: 'none' }}><div className="text">SKILLS</div></Link>
                            </div>
                            <div className="link">
                                <Link to='/projects' style={{ textDecoration: 'none' }} ><div className="text">PROJECTS</div></Link>
                            </div>
                            <div className="link">
                                <Link to='/contact' style={{ textDecoration: 'none' }} ><div className="text">CONTACT</div></Link>
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
                        
                    {toggled ? (
                            <div className="header-container">
                                <div className="header-link">
                                    <Link to='/contact' style={{ textDecoration: 'none' }} ><div className="text">CONTACT</div></Link>
                                </div>
                                <div className="header-link">
                                    <Link to='/projects' style={{ textDecoration: 'none' }} ><div className="text">PROJECTS</div></Link>
                                </div>
                                <div className="header-link">
                                    <Link to='/skills' style={{ textDecoration: 'none' }}><div className="text">SKILLS</div></Link>
                                </div>
                                <div className="header-link">
                                    <Link to='/about' style={{ textDecoration: 'none' }} ><div className="text" style={{textDecoration: 'none'}}>ABOUT</div></Link>
                                </div>
                                <div className="header-link">
                                    <Link to='/' style={{ textDecoration: 'none' }} ><div className="text">HOME</div></Link>
                                </div>
                            </div>
                        ) : ''}
                    </Responsive>
                </div>
        );
    }
}

export default Header;