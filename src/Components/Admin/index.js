import CKEditor from 'ckeditor4-react';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../forms/Button';
import Header from '../Header/Header';
import { signOutUserStart } from '../../redux/User/user.actions';
import { useHistory } from 'react-router-dom';
import { addBioStart } from '../../redux/Bios/bios.actions';
import Footer from '../Footer';


const mapState = (state) => ({
    currentUser: state.user.currentUser,

});

const Admin = props => {

    const { currentUser } = useSelector(mapState);
    const [bio, setBio] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const signOut = () => {
        goBack();
        dispatch(signOutUserStart());


    };

    const goBack = () => {
        history.push('./admin')
    };

    const resetForm = () => {
        setBio('');
    };

    const handleBioSubmit = e => {
        e.preventDefault();
        
        dispatch(
            addBioStart({bio})
        );
        resetForm();
        console.log(bio)
    };




    return (
        <div className='admin-container'>
            <Header />
            <div className='add-bio'>
                <h2>Add a Bio</h2>
                <form onSubmit={handleBioSubmit}>
                    <CKEditor onChange={evt => setBio(evt.editor.getData())} />
                    <Button type='submit'>Submit</Button>
                </form>
            </div>
            <Footer />
        </div>
    )
};

export default Admin;
