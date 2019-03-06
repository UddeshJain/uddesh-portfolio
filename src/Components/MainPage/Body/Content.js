import React, { Component } from 'react';
import { Responsive } from 'semantic-ui-react';
import './Name.css';
import './Background.scss';
import idea from '../../../Images/idea.svg';
import websvg from '../../../Images/web.svg';

class Name extends Component {
    render() {
        return (
            <div>
                <div className='background'>
                    <div className="bg-container">
                        <svg className="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340">
                            <circle cx="170" cy="170" r="160" stroke="#E2007C" />
                            <circle cx="170" cy="170" r="135" stroke="#404041" />
                            <circle cx="170" cy="170" r="110" stroke="#E2007C" />
                            <circle cx="170" cy="170" r="85" stroke="#404041" />
                        </svg>
                    </div>
                </div>
                <div className='intro'>
                    <div className="typewriter">
                        <h1>Hi, I'm <span>Uddesh.</span></h1>
                    </div>
                    <img src={idea} alt='idea' className='idea' />
                </div>
                <div className='intro-text'>
                    <p>I'm<br />A &nbsp;<span>&lt;/ Web Developer &gt;</span>&nbsp;<br />
                        From India.<br />I love the thought that creativity<br />
                        can solve any problem, and so, <br />
                        I create, break and fix things, wrangle with code and design stuff.
                    </p>
                </div>
                <Responsive minWidth={768}>
                    <img className='websvg' src={websvg} alt='web' />
                </Responsive>
            </div>
        );
    }
}

export default Name;