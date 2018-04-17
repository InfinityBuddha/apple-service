import React, {Component} from 'react';
import s from './styles.module.scss'
import PropTypes from 'prop-types'

class CardForBasket extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    removeCard = () => {
      const {data} = this.props
      const contentfulManage = require('contentful-management')

      const clientManage = contentfulManage.createClient({
          accessToken: 'CFPAT-9f355b5c49275d9f13740934a56e8ed30667ac6ea43937443b8046e59f3751ab'
      })

      clientManage.getSpace('3afxhmr1xm65')
        .then((space) => space.getEntry(data.sys.id))
        .then((entry) => entry.unpublish())
        .then((entry) => entry.delete())
        .then(() => console.log('Entry deleted.'))
        .catch(console.error)
    }

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
                </div>
                <div className={s.productCard__remove} onClick={this.removeCard}>X</div>
                
            </article>
        )
    }
}

CardForBasket.propTypes = {
    card: PropTypes.object
}

export default CardForBasket;
