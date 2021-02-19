import React, { useState } from 'react'
import './LoginForm.css';

function LoginForm(props) {
    const user = Object.keys({ ...props.user })

    const [details, setDetails] = useState({ name: '', email: '', password: '' })

    //const cls = [classes.LoginForm]

    let isInvalid = () => {
        if (props.error !== "") {
            return true
        }

    }

    const submitHandler = e => {
        e.preventDefault()
        props.login(details)
    }

    const capitalizeFirstLetter = string => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <form className='LoginForm' onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {isInvalid() ? (<div className='error'>{props.error}</div>) : ""}

                {user.map((elem, index) => {
                    return (
                        <div key={index} className="form-group">
                            <label htmlFor={elem}>{capitalizeFirstLetter(elem)}: </label>
                            <input type={(elem === 'password') ? elem : 'text'}
                                name={elem}
                                id={elem}
                                onChange={(elem === 'name')
                                    ? (e) => setDetails({ ...details, name: e.target.value })
                                    : (elem === 'email')
                                        ? (e) => setDetails({ ...details, email: e.target.value })
                                        : (e) => setDetails({ ...details, password: e.target.value })}
                                value={details.elem}
                            />
                        </div>
                    )
                })}

                < input type="submit" value="Login" />
            </div>
        </form >
    )
}

export default LoginForm