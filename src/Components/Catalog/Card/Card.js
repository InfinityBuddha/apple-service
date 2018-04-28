import React, {Component} from 'react';
import s from './styles.module.scss'
import {addToCart} from '../../../ducks/store'
import {connect} from 'react-redux'

class Card extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    /*addToBasket = () => {
        const {data} = this.props
        const contentfulManage = require('contentful-management')

        const clientManage = contentfulManage.createClient({
            accessToken: 'CFPAT-9f355b5c49275d9f13740934a56e8ed30667ac6ea43937443b8046e59f3751ab'
        })


        clientManage.getSpace('3afxhmr1xm65')
            .then((space) => space.createEntry('basket', {
                fields: {
                  title: {
                    'ru-RU': data.fields.title
                  },
                  price: {
                    'ru-RU': data.fields.price
                  },
                  photo: {
                    'ru-RU': [
                    {
                      "sys": {
                        "type": "Link",
                        "linkType": "Asset",
                        "id": data.fields.photo[0].sys.id
                      }
                    }
                  ]
                }
                }
              }))
            .then((entry) => entry.publish())
            .then((entry) => console.log(entry))
            .catch(console.error)
    }*/

    render() {
        const {data} = this.props
        return (
            <article className={s.productCard}>
                <div className={s.productCard__photoContainer}>
                    <img src={data.fields.photo[0].fields.file.url} alt=''/>
                </div>
                <div className={s.productCard__container}>
                    <a className={s.productCard__link}>{data.fields.title}</a>
                    <span className={s.productCard__price}>{data.fields.price} Р</span>
                    <button onClick={() => this.props.addToCart(data.fields.title, data.fields.price, 'makita', 'Дрель')}>Добавить в корзину</button>
                </div>
            </article>
        )
    }
}

export default connect(null, {addToCart})(Card)
