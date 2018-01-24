import React, {Component} from 'react';
import CloseIcon from '../../img/icons/CloseIcon'
import cx from 'classnames'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router'
import s from './styles.css'

class Menu extends Component {
    constructor() {
        super()
        this.state = {
            active: '',
            activeCategory: ''
        }
    }

    componentDidMount () {
        document.addEventListener('click', this.handleOutsideClick);
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
        this.props.toggleMenu()
    }

    render() {
        console.log(this.props.location.pathname);

        return (
            <nav className={this.props.visibility ? s.menu : s.hidden}>
                <CloseIcon className={s.closeIcon} onClick={this.props.toggleMenu}/>
                <div className={s.wrapper}>
                    <div className={cx(`${s.itemGroup} ${this.state.active === 'Ремонт' ? `${s.active}` : ''}`)} onClick={this.getActiveCategory}>
                        <h3 className={cx(s.title)} onClick={this.setActiveMenu}>Ремонт</h3>
                        <ul className={cx(`${s.list} ${this.state.active === 'Ремонт' ? `${s.active}` : ''}`)}>
                            <li className={s.item} onClick={this.setActiveMenu}><Link to='/iphone' title='iPhone'>Ремонт iPhone</Link></li>
                            <li className={s.item} onClick={this.setActiveMenu}><Link to='/ipad' title='iPad'>Ремонт iPad</Link></li>
                            <li className={s.item} onClick={this.setActiveMenu}><Link to='/other-devices'>Ремонт другого устройства</Link></li>
                            <li className={s.item} onClick={this.setActiveMenu}><a href=''>Ремонт Macbook</a></li>
                            <li className={s.item} onClick={this.setActiveMenu}><a href=''>Ремонт iMac</a></li>
                        </ul>
                    </div>
                    <div className={cx(`${s.itemGroup} ${this.state.active === 'Продажа' ? `${s.active}` : ''}`)}>
                        <h3 className={s.title} onClick={this.setActiveMenu}>Продажа</h3>
                        <ul className={`${s.list} ${this.state.active === 'Продажа' ? `${s.active}` : ''}`}>
                            <li className={s.item} onClick={this.setActiveMenu}><Link to='/iphone-sell'>Продажа iPhone</Link></li>
                            <li className={s.item} onClick={this.setActiveMenu}><a href=''>Продажа Дисплеев</a></li>
                        </ul>
                    </div>
                    <div className={s.itemGroup}>
                        {this.props.location.pathname === '/' && <h3 className={s.title} onClick={this.setActiveMenu}><a href='#scroll_here'>Контакты</a></h3>}
                    </div>
                </div>
            </nav>
        )
    }
}

export default withRouter(Menu)
