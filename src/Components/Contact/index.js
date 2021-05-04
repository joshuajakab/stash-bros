import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer';
import CKEditor from 'ckeditor4-react';
import './styles.css';


const Contact = props => {

    const [name, setName] = useState('');
    const [contactInfo, setContactInfo] = useState('');
    const [message, setMessage] = useState('');

    const handleMessageSubmit = () => {

    }

    return (
        <div className='contact-container'>
            <Header />
            <div className='contact'>

                <h1>Hit Us Up!</h1>
                <h3>Send us a message with any booking inquiries, questions or results to paternity tests. We will get back to you immediately, unless we don't.</h3>
                <form onSubmit={handleMessageSubmit}>
                    <h2>Your Name:</h2>
                    <input className='contact-input' type='text'></input>
                    <h2>Your Email:</h2>
                    <input className='contact-input' type='text'></input>
                    <h2>Message:</h2>
                    <CKEditor
                        onChange={evt => setMessage(evt.editor.getData())}
                    />
                </form>

            </div>
            <Footer />
        </div>
    )
};

export default Contact;
