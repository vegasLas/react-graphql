import React from 'react'
import './Login.scss'


const Login = ({ setIsAuth }) => {
    return (
        <div className="login">
            <h1>
                Authorization
            </h1>
            <form onSubmit={() => setIsAuth()} className='login__body'>
                <input required placeholder="login" />
                <input required placeholder="password" />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login