import React, {Component} from 'react';
import s from './Menu.css'
import CloseIcon from '../img/icons/CloseIcon'
import cx from 'classnames'

class Menu extends Component {
    constructor() {
        super()
        this.state = {
            active: ''
        }
    }

   handleOutsideClick = (event) => {
        const item = document.querySelector(`.${s.active}`)
        if (item) {
            if (!item.contains(event.target)) {
                this.setState({
                    active: ''
                })
                document.removeEventListener('click', this.handleOutsideClick);
            }
        }
    }

    setActiveMenu = (event) => {
        const target = event.target
        this.setState({active: target.textContent})
        document.addEventListener('click', this.handleOutsideClick);
    }

    render() {
        return (
            <nav className={this.props.visibility ? s.menu : s.hidden}>
                <CloseIcon className={s.closeIcon} onClick={this.props.toggleMenu}/>
                <div className={s.wrapper}>
                    <div className={cx(`${s.itemGroup} ${this.state.active === 'Ремонт' ? `${s.active}` : ''}`)}>
                        <h3 className={s.title} onClick={this.setActiveMenu}>Ремонт</h3>
                        <ul className={cx(`${s.list} ${this.state.active === 'Ремонт' ? `${s.active}` : ''}`)}>
                            <li className={s.item}><a href="#">iPhone</a></li>
                            <li className={s.item}><a href="#">iPad</a></li>
                            <li className={s.item}><a href="#">Samsung</a></li>
                            <li className={s.item}><a href="#">Другое устройство</a></li>
                            <li className={s.item}><a href="#">Macbook</a></li>
                            <li className={s.item}><a href="#">iMac</a></li>
                        </ul>
                    </div>
                    <div className={cx(`${s.itemGroup} ${this.state.active === 'Продажа' ? `${s.active}` : ''}`)}>
                        <h3 className={s.title} onClick={this.setActiveMenu}>Продажа</h3>
                        <ul className={`${s.list} ${this.state.active === 'Продажа' ? `${s.active}` : ''}`}>
                            <li className={s.item}><a href="#">iPhone</a></li>
                            <li className={s.item}><a href="#">Дисплеи</a></li>
                        </ul>
                    </div>
                    <div className={s.itemGroup}>
                        <h3 className={s.title} onClick={this.setActiveMenu}>Контакты</h3>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Menu;
