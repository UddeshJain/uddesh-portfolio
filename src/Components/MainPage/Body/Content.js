import React, { Component } from 'react';
import './Name.scss';

class Name extends Component {
    render() {
        return (
            <div>
                <div class="content">
                    <div class="content__container">
                        <p class="content__container__text">
                            Hello
                        </p>
                        <ul class="content__container__list">
                            <li class="content__container__list__item">world !</li>
                            <li class="content__container__list__item">bob !</li>
                            <li class="content__container__list__item">users !</li>
                            <li class="content__container__list__item">everybody !</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Name;