import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer';
import './styles.css';
import { fetchBiosStart } from '../../redux/Bios/bios.actions';
import './styles.css'

const mapState = ({ bioData }) => ({
    bio: bioData.bio
})

const Bio = props => {

    const history = useHistory();
    const dispatch = useDispatch();
    const { bio } = useSelector(mapState);
    const { bioArray } = bio;
    

    useEffect(() => {
        
        dispatch(
            fetchBiosStart({})
        )
        

    }, []);
    if (!Array.isArray(bioArray)) return null;

    const chooseBio = () => {
        const randomBio = bioArray[Math.floor(Math.random()*bioArray.length)];
        return randomBio.bio
    } 

    const selectedBio = chooseBio()

   

    return (
        <div className='bio-container'>
            <Header />
            <div className='band-pic'></div>
            <div className='bio'>
                
                    <div className='bio-text' dangerouslySetInnerHTML={{__html: selectedBio}}  />
                    
                
            </div>
            <Footer />
        </div>
    )
};

export default Bio;
