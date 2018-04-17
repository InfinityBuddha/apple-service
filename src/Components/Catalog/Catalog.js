import React, {Component} from 'react';
import s from './styles.module.scss'
import Card from './Card/Card'
import {base} from '../../config/base'

export class Catalog extends Component {
    constructor() {
        super()
        this.state = {
            cards: []
        }
    }

    componentDidMount() {
        const contentful = require('contentful')

        const client = contentful.createClient({
        space: '3afxhmr1xm65',
        accessToken: 'c8cdb5066fb665984fa30eb15c75d2eb694e461647a9db057dbd27957647de8d'
        })

        const contentfulManage = require('contentful-management')

        const clientManage = contentfulManage.createClient({
            accessToken: 'CFPAT-9f355b5c49275d9f13740934a56e8ed30667ac6ea43937443b8046e59f3751ab'
        })

        client.getEntries({
        content_type: 'card'
        })
            .then((response) => {
                this.setState({
                    cards: response.items
                })
            })
            .catch(console.error)
    }

    render() {
        const cards = this.state.cards.map((card, i) => <Card id={i} key={i} data={card}/>)
    
        return (
            <div className={s.container}>
                <h3 className={s.title}>Каталог iPhone</h3>
                <div className={s.catalogWrapper}>
                    {cards}
                </div>
            </div>
        )
    }
}

export default Catalog;
