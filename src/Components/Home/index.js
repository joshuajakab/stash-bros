import React from 'react';
import Welcome from '../Welcome';
import Header from '../Header/Header';
import Footer from '../Footer';
import Background1 from '../../images/background1.jpg';
import './styles.css';

const Home = props => {

    return(
        <div className='homepage'>
        <Welcome />
        
        <Header />
            <div className='about'>
                <h3>
                The Super Stash Bros are a band out of Killington, VT. Their eclectic mix of genres has confused, dissapointed and annoyed listeners for years.
                </h3>
            </div>
            <div className='background-images'>

                <img className='main-img'src={Background1} alt='background1' />
                
                
            </div>

        <Footer />
        </div>
    )
};

export default Home;
