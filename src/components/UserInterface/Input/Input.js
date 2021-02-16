import React from 'react'
import classes from './Input.module.css'

function Input(props) {
    const inputType = props.type || 'text'
    const cls = [classes.Input]
    const htmlFor = `${inputType}-${Math.random()}`
    console.log(props.errorMessage)
    // if (true) {
    //     cls.push(classes.invalid)
    // }
    let isInvalid = () => {
        if (props.errorMessage) {
            cls.push(classes.invalid)
        }
    }

    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input
                type={inputType}
                id={htmlFor}
                value={props.value}
                onChange={props.inChange}
            />
            { isInvalid()
                ? <span>{props.errorMessage || 'Try again'}</span>
                : null
            }

        </div>
    )
}

export default Input