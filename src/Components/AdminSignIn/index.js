import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { emailSignInStart } from '../../redux/User/user.actions';
import Button from '../forms/Button';
import FormInput from '../forms/FormInput';

const mapState = ({ user }) => ({
    currentUser: user.currentUser
});

const AdminSignIn = props => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector(mapState);
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (currentUser) {
            resetForm();
            history.push('/admin-page');
        }
    }, [currentUser])

    const resetForm = () => {
        setEmail('');
        setPassword('');
    }

    const handleSubmit = async e => {
        e.preventDefault();
        dispatch(
            emailSignInStart({ email, password })
        )
    }

    return (
        <div className='sign-in-page'>

            <div className='sign-in-container'>
                <form onSubmit={handleSubmit}>
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        placeholder='Email'
                        handleChange={e => setEmail(e.target.value)}
                    />

                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        placeholder='Password'
                        handleChange={e => setPassword(e.target.value)}
                    />
                    <Button type='submit'>Sign In</Button>
                </form>
            </div>
        </div>
    )
};

export default AdminSignIn;
