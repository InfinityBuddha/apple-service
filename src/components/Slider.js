import React, {Component} from 'react';
import Carousel from 'nuka-carousel';
import s from './Slider.css'
import cx from 'classnames'

class Slider extends Component {
    render() {
        let Decorators = [{
            component: ({
                render() {
                    return (
                        <button
                            onClick={this.props.previousSlide}>
                            Previous Slide
                        </button>
                    )
                }
            }),
            position: 'CenterLeft',
            style: {
                marginTop: 20
            }
        }];
        return (
            <Carousel decorators={Decorators}>
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
          /*  <section className={s.slider}>
                <div className={s.cards__wrapper}>
                    <ul className={s.cards}>
                        <SlickSlider>
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
                        </SlickSlider>
                    </ul>
                </div>
            </section>*/
        )
    }
}

export default Slider;
