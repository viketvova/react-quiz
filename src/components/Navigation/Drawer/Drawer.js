import React, { Component } from 'react'
import classes from './Drawer.module.css'
import Backblack from '../../UserInterface/Backblack/Backblack'
import { NavLink } from 'react-router-dom'

const links = [
    { to: '/', name: 'Список', exact: true },
    { to: '/auth', name: 'Авторизация', exact: false },
    { to: '/quiz-creator', name: 'Создать тест', exact: false },
]

class Drawer extends Component {

    renderLinks = () => {
        return links.map((elem, index) => {
            return (<li key={index}>
                <NavLink
                    to={elem.to}
                    exact={elem.exact}
                    activeClassName={classes.active}
                    onClick={this.props.onClose}
                >{elem.name}
                </NavLink>
            </li>)
        })
    }

    render() {
        const cls = [classes.Drawer]

        if (!this.props.isOpen) {
            // console.log(cls)
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