import React from 'react';
import classes from './login.module.css';

const Login = () => {
  return (
    <div>
      <h1>Login</h1>

      <button className='global-btn'>Login Button</button>
      <button className={ classes.loginBtn }>Local Login Button</button>
    </div>
  )
}

export default Login;