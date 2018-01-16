import React, {Component} from 'react';
import s from './styles.css'

export class Card extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        const iphone = this.props.items

        return (
            <article className={s.productCard}>
                <div className={s.productCard__photoContainer}>
                    <img src={iphone.photo} alt=''/>
                </div>
                <div className={s.productCard__container}>
                    <a className={s.productCard__link}>{iphone.name}</a>
                    <span className={s.productCard__price}>{iphone.price} Р</span>
                </div>
            </article>
        )
    }
}

export default Card;
