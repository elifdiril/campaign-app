import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function LoginPage({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [alert, setAlert] = useState(false);
    const [visible, setVisible] = useState(true);

    const handleSubmit = async e => {
        e.preventDefault();

        const token = await loginUser({
            username,
            password
        });
        if (username === token.userName)
            setToken(token);
        else {
            setAlert(true)
            setVisible(true)
        }

    }


    const onDismiss = () => setVisible(false);

    return (
        <div className="login-wrapper">
            {alert &&
                <Alert color="danger" isOpen={visible} toggle={onDismiss}>
                    Wrong username or password!
                </Alert>
            }
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

LoginPage.propTypes = {
    setToken: PropTypes.func.isRequired
};