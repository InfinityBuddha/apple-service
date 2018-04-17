import React, {Component} from 'react'
import cx from 'classnames'
import { Carousel } from 'react-responsive-carousel'
import s from './styles.module.scss'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'

class Slider extends Component {

    render() {
        return (
        <Carousel className={s.carousel} autoPlay infiniteLoop showStatus={false}>
                <li className={cx(s.card, s.card__iphone)}>
                    <div className={s.text}>
                        <h3 className={s.title}>5 лет качества</h3>
                        <p className={s.description}>За это время через наши руки прошло более 5000
                            устройств.
                        </p>
                    </div>
                </li>
                <li className={cx(s.card, s.card__repair)}>
                    <div className={s.text}>
                        <h3 className={s.title}>Экспресс ремонт</h3>
                        <p className={s.description}>Накопленный опыт в области ремонта техники Apple
                            позволяет нам быстро устранять неполадки
                        </p>
                    </div>
                </li>
                <li className={cx(s.card, s.card__guarantee)}>
                    <div className={s.text}>
                        <h3 className={s.title}>Гарантия 2 месяца</h3>
                        <p className={s.description}>Мы используем только качественные запчасти для
                            ремонта продукции Apple. Это позволяет нам давать длительную гарантию на все
                            виды ремонта
                        </p>
                    </div>
                </li>
        </Carousel>
        );
    }
}

export default Slider

