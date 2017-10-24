import React, { Component } from 'react';
import styles from '../styles/blocks/promo.css'
console.log(styles)
/*
 * В этом файле делается верстка
 * */
class Promo extends Component {
    render () {
        return (
            <div>
                <h1 className={styles.mainNav}>ЖАЛКО ВРЕМЕнИ НА ТЕЛКУ</h1>
                <p className={styles.item}>Я ИМЕЛ ВВИДУ НА ОДНУ ТЕЛКУ</p>
            </div>
        )
    }
}

export default Promo;
