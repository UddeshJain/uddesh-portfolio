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
                <section class="wrapper">
                    <div class="card" data-effect="zoom">
                        <figure  class="card__image">
                            <img src="https://c1.staticflickr.com/4/3935/32253842574_d3d449ab86_c.jpg" alt="Short description" />
                        </figure>
                        <div class="card__header">
                            <figure class="card__profile">
                                <img src={HtmlPp} alt="Short description"/>
                            </figure>
                        </div>
                            <div class="card__body">
                                <h3 class="card__name">HTML & CSS</h3>
                                <p class="card__job">main components of Web Development</p>
                            <p class="card__bio">&lt;h1&gt; Hello World &lt;/h1&gt;</p>
                            </div>
                    </div>


                    <div class="card" data-effect="zoom">
                        <figure class="card__image">
                            <img src="https://c1.staticflickr.com/4/3935/32253842574_d3d449ab86_c.jpg" alt="Short description" />
                        </figure>
                        <div class="card__header">
                            <figure class="card__profile">
                                <img src={ReactPp} alt="Short description" />
                            </figure>
                        </div>
                        <div class="card__body">
                            <h3 class="card__name">React.js</h3>
                            <p class="card__job">A JavaScript Framework</p>
                            <p class="card__bio">React is a FrontEnd Framework based on JavaScript</p>
                        </div>
                        <div class="card__footer">
                            <p class=""></p>
                        </div>
                    </div>

                    <div class="card" data-effect="zoom">
                        <figure class="card__image">
                            <img src="https://c1.staticflickr.com/4/3935/32253842574_d3d449ab86_c.jpg" alt="Short description" />
                        </figure>
                        <div class="card__header">
                            <figure class="card__profile">
                                <img src={NodePp} alt="Short description" />
                            </figure>
                        </div>
                        <div class="card__body">
                            <h3 class="card__name">Node.js</h3>
                            <p class="card__job">A JavaScript's runtime environment</p>
                            <p class="card__bio">Nodejs uses chromes V8 engine to execute the code outside the browsers.</p>
                        </div>
                        <div class="card__footer">
                            <p class=""></p>
                        </div>
                    </div>

                    <div class="card" data-effect="zoom">
                        <figure class="card__image">
                            <img src="https://c1.staticflickr.com/4/3935/32253842574_d3d449ab86_c.jpg" alt="Short description" />
                        </figure>
                        <div class="card__header">
                            <figure class="card__profile">
                                <img src={jsPp} alt="Short description" />
                            </figure>
                        </div>
                        <div class="card__body">
                            <h3 class="card__name">JavaScript</h3>
                            <p class="card__job">A Scripting language</p>
                            <p class="card__bio">Fastest growing and most loved language among programmers.</p>
                        </div>
                        <div class="card__footer">
                            <p class=""></p>
                        </div>
                    </div>

                    <div class="card" data-effect="zoom">
                        <figure class="card__image">
                            <img src="https://c1.staticflickr.com/4/3935/32253842574_d3d449ab86_c.jpg" alt="Short description" />
                        </figure>
                        <div class="card__header">
                            <figure class="card__profile">
                                <img src={PythonPp} alt="Short description" />
                            </figure>
                        </div>
                        <div class="card__body">
                            <h3 class="card__name">Python3</h3>
                            <p class="card__job">A simple but poweful languege</p>
                            <p class="card__bio">print('Hello World !')</p>
                        </div>
                        <div class="card__footer">
                            <p class=""></p>
                        </div>
                    </div>

                    <div class="card" data-effect="zoom">
                        <figure class="card__image">
                            <img src="https://c1.staticflickr.com/4/3935/32253842574_d3d449ab86_c.jpg" alt="Short description" />
                        </figure>
                        <div class="card__header">
                            <figure class="card__profile">
                                <img src={GithubPp} alt="Short description" />
                            </figure>
                        </div>
                        <div class="card__body">
                            <h3 class="card__name">Git & GitHub</h3>
                            <p class="card__job">Version control system.</p>
                            <p class="card__bio">Git and Github is local and remote repos for managing the code.</p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Skills;