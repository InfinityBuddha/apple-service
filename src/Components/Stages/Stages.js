import React, {Component} from 'react'
import RepairIcon from '../../img/icons/RepairIcon'
import LoveIcon from '../../img/icons/LoveIcon'
import SearchIcon from '../../img/icons/SearchIcon'
import PhoneIcon from '../../img/icons/PhoneIcon'
import cx from 'classnames'

import s from './styles.module.scss'
import glob from '../../layouts/global/global.module.scss'

class Slider extends Component {

    render() {
        return (
            <section className={s.container}>
                <div className={glob.title}>Как проходит ремонт</div>
                <div className={s.circles}>
                    <div className={s.item}>
                        <div className={s.circle}>
                            <PhoneIcon className={cx(s.icon, s.phone)}/>
                        </div>
                        <span className={s.title}>Заявка</span>
                    </div>
                    <div className={s.item}>
                        <div className={s.circle}>
                            <SearchIcon className={s.icon}/>
                        </div>
                        <span className={s.title}>Бесплатная диагностика</span>
                    </div>
                    <div className={s.item}>
                        <div className={s.circle}>
                            <RepairIcon className={s.icon}/>
                        </div>
                        <span className={s.title}>Ремонт</span>
                    </div>
                    <div className={s.item}>
                        <div className={s.circle}>
                            <LoveIcon className={s.icon}/>
                        </div>
                        <span className={s.title}>Готово</span>
                    </div>
                </div>
            </section>
        );
    }
}

export default Slider


