import React, { Component } from 'react'
import classes from './Auth.module.css'
import Button from '../../components/UserInterface/Button/Button'

export default class Auth extends Component {
    loginHandler = () => {

    }

    registerHandler = () => {

    }

    submitHandler = (event) => {
        event.preventDefault()
    }

    render() {

        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Sign-In</h1>

                    <form onSubmit={this.submitHandler} className={classes.AuthForm}>
                        <input type="text" />
                        <input type="text" />

                        <Button type='success'
                            onClick={this.loginHandler}
                        >Login</Button>
                        <Button type='primary'
                            onClick={this.registerHandler}
                        >Register</Button>
                    </form>

                </div>
            </div>
        )
    }
}
