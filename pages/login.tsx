import React from 'react';
import Router from 'next/router'
import axios from 'axios';

const LoginPage = () => {
  
  const handleLogin = async () => {
    try {
        const response = await axios.post('https://web-api.dev.grind.co.uk/v1/auth/login', {
          email: "shane+frontendtechtest@ivodigital.com",
          password: "password"
        });
        console.log(response.data)
        if (response.data.token) {
          localStorage.setItem('token', response.data.token)
          Router.push('/subscriptions')
        } else {
          console.log("Login failure")
        }
    } catch (err) {
        console.error(err);
    }
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
