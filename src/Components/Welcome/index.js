import React, { Component } from 'react';
import './styles.css';
import WelcomeImg from '../../images/welcome.svg';

const Welcome = props => {

    return(
        <div className='welcome-container'>
            <img src={WelcomeImg} alt='welcome' /> 
        </div>
    )
};

export default Welcome;


