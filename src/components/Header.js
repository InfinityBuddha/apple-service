import React, {Component} from 'react'
import head from '../styles/blocks/header.css'
import Menu from './Menu.js'
import HamburgerIcon from '../img/icons/HamburgerIcon'

import menu from './Menu.css'


class Header extends Component {
    constructor() {
        super();

        this.state = {
            visibility: false
        }
    }

    toggleMenu = () => {
        const body = document.getElementsByTagName('body')[0]
        if (body.classList.contains(menu.openedMenu)) {
            body.classList.remove(menu.openedMenu)
        } else {
            body.classList.add(menu.openedMenu)
        }

        this.setState({visibility: !this.state.visibility})
    }

    render() {
        return (
            <div className={head.wrapper}>
                <header className={head.header}>
                    <div className={head.container}>
                        <div className={head.contacts__tablet}>
                            <div className={head.city}>г. Руза</div>
                            <a href="tel:8(800)-200-00-56" className={head.phone}>8 800 200 00 56</a>
                        </div>
                        <div className={head.contacts__tablet}>
                            <div className={head.city}>г. Можайск</div>
                            <a href="tel:8(800)-200-00-56" className={head.phone}>8 800 200 00 56</a>
                        </div>
                        <div className={head.contacts}>
                            <a href="tel:8(800)-200-00-56" className={head.phone}>8 800 200 00 56</a>
                            <div className={head.schedule}>10:00 - 18:00</div>
                        </div>
                        <HamburgerIcon className={head.hamburger}
                                       onClick={this.toggleMenu}/>

                        <Menu visibility={this.state.visibility}
                              toggleMenu={this.toggleMenu}
                        />
                    </div>
                </header>

            </div>
        );
    }
}

export default Header