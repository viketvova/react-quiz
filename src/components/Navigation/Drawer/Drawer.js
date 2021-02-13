import React, { Component } from 'react'
import classes from './Drawer.module.css'
import Backblack from '../../UserInterface/Backblack/Backblack'

const links = [
    1, 2, 3
]

class Drawer extends Component {

    renderLinks = () => {
        return links.map((elem, index) => {
            return (<li key={index}>
                <a>Links {elem}</a>
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