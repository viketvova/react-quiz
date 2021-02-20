import React from 'react'
import classes from './Button.module.css'


const Button = props => {
    console.log(props)
    const cls = [
        classes.Button,
        classes[props.type]
    ]


    return (
        (props.hide == true)
            ?
            <button
                onClick={props.onClick}
                className={cls.join(' ')}
                disabled={props.disabled}
            >

                {props.children}
            </button>
            :
            <><p style={{ position: 'absolute', bottom: '50px' }}>Email: {props.adminUser.email}</p>
                <p style={{ position: 'absolute', bottom: '30px' }}>Password: {props.adminUser.password}</p>
                <button
                    onClick={props.onClick}
                    className={cls.join(' ')}
                    disabled={props.disabled}
                >

                    {props.children}
                </button>
            </>
    )
}

export default Button