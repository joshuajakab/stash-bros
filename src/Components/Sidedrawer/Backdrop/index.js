import React from 'react';
import './styles.css'



const backdrop = props => (
    <div className='backdrop' onClick={props.click}/>
);

export default backdrop;