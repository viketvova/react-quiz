import React, { Component } from 'react'
import classes from './Drawer.module.css'
import Backblack from '../../UserInterface/Backblack/Backblack'
import { NavLink } from 'react-router-dom'

const links = [
    'Home', 'Quiz', 'About'
]

class Drawer extends Component {

    renderLinks = () => {
        return links.map((elem, index) => {
            return (<li key={index}>
                <NavLink to={`/${elem.toLowerCase()}`}>{elem}</NavLink>
            </li>)
        })
    }

    render() {
        const cls = [classes.Drawer]

        if (!this.props.isOpen) {
            console.log(cls)
            cls.push(classes.close)
        }

        return (
            <>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
                { this.props.isOpen ? <Backblack onClick={this.props.onClose} /> : null}
            </>
        )
    }
}

export default Drawer