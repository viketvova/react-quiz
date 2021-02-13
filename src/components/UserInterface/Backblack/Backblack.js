import React from 'react'
import classes from './Backblack.module.css'


const Backblack = props => {
    return (
        <div className={classes.Backblack} onClick={props.onClick}></div>
    )
}

export default Backblack