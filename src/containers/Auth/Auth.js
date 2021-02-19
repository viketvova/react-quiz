import React, { useState } from 'react';
import classes from './Auth.module.css';
//import Button from '../../components/UserInterface/Button/Button';
import LoginForm from '../../components/UserInterface/Input/LoginForm';


function Auth() {
    const adminUser = {
        email: 'admin@admin.com',
        password: 'admin123'
    }

    const [user, setUser] = useState({ name: '', email: '', password: '' })
    const [error, setError] = useState('')


    const login = (details) => {

        if (details.email === adminUser.email && details.password === adminUser.password) {
            setUser({
                name: details.name,
                email: details.email
            });
        } else {

            setError('Password or email is wrong')
        }

    }

    const logout = () => {
        setUser({ name: '', email: '', password: '' });
    }



    return (
        <div className={classes.Auth}>
            {(user.email !== "") ? (
                <div className="welcome">
                    <h2>Welcome, <span>{user.name}</span></h2>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                    <LoginForm
                        login={login}
                        error={error}
                        user={user}
                    />
                )
            }

        </div>
    )
}

export default Auth