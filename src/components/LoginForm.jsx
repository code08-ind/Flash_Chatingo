import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = {
            'Project-ID': "6dbd3e0e-403a-49a1-90c6-c3e313180b99",
            'User-Name': username,
            'User-Secret': password
        }

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
        } catch (error) {
            setError('OOPS! Incorrect Credentials.')
        }
    }

    return (
        <>
            <div className="wrapper">
                <div className="form">
                    <h1 className="title">
                        <img src="https://i.ibb.co/K695337/Flash-Chatingo.png" height="100px" width="100px" alt="Flash Chatingo" /> Flash Chatingo
                    </h1>
                    <form action="" onSubmit={handleSubmit}>
                        <input type="text" value={username} placeholder="Enter Your Username" className="input" required onChange={(e) => { setUsername(e.target.value) }} />
                        <input type="password" value={password} placeholder="Enter Your Password" className="input" required onChange={(e) => { setPassword(e.target.value) }} />
                        <div align="center">
                            <button type="submit" className="button">
                                <span>Start Chatting</span>
                            </button>
                        </div>
                        <h2 className="error">{error}</h2>
                    </form>
                    <h5 className="copy">Created By @ Aryan Garg &copy; 2021</h5>
                </div>
            </div>
        </>
    );
}

export default LoginForm;
