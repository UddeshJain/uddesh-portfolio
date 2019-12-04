import React, { Component } from 'react';
import './Skills.css';
import Header from '../MainPage/Header/Header';
import HtmlPp from '../../Images/html.png';
import ReactPp from '../../Images/react.png';
import NodePp from '../../Images/node.png';
import jsPp from '../../Images/js.png';
import PythonPp from '../../Images/python.png';
import GithubPp from '../../Images/github.png';


class Skills extends Component {
    render() {
        return (
            <div className="skills-container">
                <Header />
                <section className="wrapper">
                    <div className="card" data-effect="zoom">
                        <figure  className="card__image">
                            <img src="https://images.theconversation.com/files/195198/original/file-20171117-7588-1rai1rs.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip" alt="Short description" />
                        </figure>
                        <div className="card__header">
                            <figure className="card__profile">
                                <img src={HtmlPp} alt="Short description"/>
                            </figure>
                        </div>
                            <div className="card__body">
                                <h3 className="card__name">HTML & CSS</h3>
                                <p className="card__job">main components of Web Development</p>
                            <p className="card__bio">&lt;h1&gt; Hello World &lt;/h1&gt;</p>
                            </div>
                    </div>


                    <div className="card" data-effect="zoom">
                        <figure className="card__image">
                            <img src="https://images.theconversation.com/files/195198/original/file-20171117-7588-1rai1rs.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip" alt="Short description" />
                        </figure>
                        <div className="card__header">
                            <figure className="card__profile">
                                <img src={ReactPp} alt="Short description" />
                            </figure>
                        </div>
                        <div className="card__body">
                            <h3 className="card__name">React.js</h3>
                            <p className="card__job">A JavaScript Framework</p>
                            <p className="card__bio">React is a FrontEnd Framework based on JavaScript</p>
                        </div>
                        <div className="card__footer">
                            <p className=""></p>
                        </div>
                    </div>

                    <div className="card" data-effect="zoom">
                        <figure className="card__image">
                            <img src="https://images.theconversation.com/files/195198/original/file-20171117-7588-1rai1rs.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip" alt="Short description" />
                        </figure>
                        <div className="card__header">
                            <figure className="card__profile">
                                <img src={NodePp} alt="Short description" />
                            </figure>
                        </div>
                        <div className="card__body">
                            <h3 className="card__name">Node.js</h3>
                            <p className="card__job">A JavaScript's runtime environment</p>
                            <p className="card__bio">Nodejs uses chromes V8 engine to execute the code outside the browsers.</p>
                        </div>
                        <div className="card__footer">
                            <p className=""></p>
                        </div>
                    </div>

                    <div className="card" data-effect="zoom">
                        <figure className="card__image">
                            <img src="https://images.theconversation.com/files/195198/original/file-20171117-7588-1rai1rs.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip" alt="Short description" />
                        </figure>
                        <div className="card__header">
                            <figure className="card__profile">
                                <img src={jsPp} alt="Short description" />
                            </figure>
                        </div>
                        <div className="card__body">
                            <h3 className="card__name">JavaScript</h3>
                            <p className="card__job">A Scripting language</p>
                            <p className="card__bio">Fastest growing and most loved language among programmers.</p>
                        </div>
                        <div className="card__footer">
                            <p className=""></p>
                        </div>
                    </div>

                    <div className="card" data-effect="zoom">
                        <figure className="card__image">
                            <img src="https://images.theconversation.com/files/195198/original/file-20171117-7588-1rai1rs.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip" alt="Short description" />
                        </figure>
                        <div className="card__header">
                            <figure className="card__profile">
                                <img src={PythonPp} alt="Short description" />
                            </figure>
                        </div>
                        <div className="card__body">
                            <h3 className="card__name">Python3</h3>
                            <p className="card__job">A simple but poweful languege</p>
                            <p className="card__bio">print('Hello World !')</p>
                        </div>
                        <div className="card__footer">
                            <p className=""></p>
                        </div>
                    </div>

                    <div className="card" data-effect="zoom">
                        <figure className="card__image">
                            <img src="https://images.theconversation.com/files/195198/original/file-20171117-7588-1rai1rs.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip" alt="Short description" />
                        </figure>
                        <div className="card__header">
                            <figure className="card__profile">
                                <img src={GithubPp} alt="Short description" />
                            </figure>
                        </div>
                        <div className="card__body">
                            <h3 className="card__name">Git & GitHub</h3>
                            <p className="card__job">Version control system.</p>
                            <p className="card__bio">Git and Github is local and remote repos for managing the code.</p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Skills;