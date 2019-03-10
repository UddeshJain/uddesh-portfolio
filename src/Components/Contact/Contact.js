import React, { Component } from 'react';
import { Responsive, Segment } from 'semantic-ui-react';
import './Contact.css';
import Header from '../MainPage/Header/Header';
import Laptop from '../../Images/laptop.png';
import Chat from '../../Images/chat.png';
import Phone from '../../Images/phone.png';
import Mail from '../../Images/mail.png';
import Fb from '../../Images/facebook.png';
import Instagram from '../../Images/instagram.png';
import Linkedin from '../../Images/linkedin.png';
import Github from '../../Images/github.png';
import Twitter from '../../Images/twitter.png';

class Contact extends Component {
    state = {
        isToggled: false,
    }
    
    toggleClass = () => {
        let isToggled = this.state.isToggled;
        this.setState({isToggled: !isToggled})
    }

    render() {
        return (
            <div className='contact'>
                <Header />
                <div className='contact-container'>
                    <h1>Say Hello,</h1>
                    <p>If you wanna work with me <br />or if you'd just like to say <br />"Hello", feel free to get in touch</p>
                    <img src={Mail} alt='mail' className='mail-id' />
                    <span>jainuddesh35@gmail.com</span>
                    <div className='social-link'>
                        <a href='https://github.com/UddeshJain' target='blank'>
                            <img src={Github} alt='github' className='img' />
                        </a>
                        <a href='https://www.linkedin.com/in/uddesh-jain-7270b9146/' target='blank'>
                            <img src={Linkedin} alt='linkedin' className='img' />
                        </a>
                        <a href='https://twitter.com/Uddesh_' target='blank'>
                            <img src={Twitter} alt='dev-community' className='img' />
                        </a>
                        <a href='https://www.facebook.com/uddesh.jain.5' target='blank'>
                            <img src={Fb} alt='Facebook' className='img' />
                        </a>
                        <a href='https://www.instagram.com/_error_machine_/?hl=en' target='blank'>
                            <img src={Instagram} alt='instagram' className='img' />
                        </a>
                    </div>
                    </div>
                    
                    <Responsive as={Segment} minWidth={768}>
                        <div className='contact-image'>
                            <img src={Mail} alt='mail' className='mail-icon'/>
                            <img src={Chat} alt='chat' className='chat-icon'/>
                            <img src={Phone} alt='phone' className='phone-icon'/>
                            <img src={Laptop} alt='laptop' className='laptop-icon' />
                        </div>
                    </Responsive>
            </div>
        );
    }
}

export default Contact;