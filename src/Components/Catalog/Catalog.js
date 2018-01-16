import React, {Component} from 'react';
import s from './styles.css'
import Card from './Card/Card'
import {base} from '../../config/base'

export class Catalog extends Component {
    constructor() {
        super()
        this.state = {}
    }

    componentDidMount() {
        this.songsRef = base.syncState('iphones', {
            context: this,
            state: 'iphones'
        })
    }

    componentWillUnmount() {
        base.removeBinding(this.songsRef)
    }

    render() {
        const iphones = this.state.iphones
        return (
            <div className={s.container}>
                <h3 className={s.title}>Каталог iPhone</h3>
                <div className={s.catalogWrapper}>
                    {iphones && iphones.map(item => {
                        return <Card key={item.id} items={item}/>
                    })}
                </div>
            </div>
        )
    }
}

export default Catalog;
