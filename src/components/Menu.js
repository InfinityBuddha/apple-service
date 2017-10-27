import React, { Component } from 'react';
import s from './Menu.css'
import CloseIcon from '../img/icons/CloseIcon'

class Menu extends Component {
    render () {
        return (
            <nav className={this.props.visibility ? s.menu : s.hidden}>
                <CloseIcon className={s.closeIcon} onClick={this.props.toggleMenu}/>
                <div className={s.wrapper}>
                    <div className={s.itemGroup}>
                        <h3 className={s.title}>Ремонт</h3>
                        <ul className={s.list}>
                            <li className={s.item}><a href="#">iPhone</a></li>
                            <li className={s.item}><a href="#">iPad</a></li>
                            <li className={s.item}><a href="#">Samsung</a></li>
                            <li className={s.item}><a href="#">Другое устройство</a></li>
                            <li className={s.item}><a href="#">Macbook</a></li>
                            <li className={s.item}><a href="#">iMac</a></li>
                        </ul>
                    </div>
                    <div className={s.itemGroup}>
                        <h3 className={s.title}>Продажа</h3>
                        <ul className={s.list}>
                            <li className={s.item}><a href="#">iPhone</a></li>
                            <li className={s.item}><a href="#">Дисплеи</a></li>
                        </ul>
                    </div>
                    <div className={s.itemGroup}>
                        <ul className={s.list}>
                            <h3 className={s.title}>Контакты</h3>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Menu;
