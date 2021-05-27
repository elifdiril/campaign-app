import { useState } from 'react';

export default function useToken() {
    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        const userName = localStorage.getItem("userName");
        const password = localStorage.getItem("password");

        const userToken = JSON.parse(tokenString);
        console.log(userToken);
        if (userToken !== null && userToken.userName === 'elif') {
            return userToken?.token

        }
        else
            return null
    };

    const [token, setToken] = useState(getToken());




    const saveToken = userToken => {
        localStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken.token);
    };

    return {
        setToken: saveToken,
        token
    }
}