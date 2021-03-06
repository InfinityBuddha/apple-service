import React, { Component } from 'react';
import s from './styles.module.scss';
import Card from './Card/Card';
import skygear from 'skygear';

export class Catalog extends Component {
  constructor() {
    super();
    this.state = {
      cards: []
    };
  }

  componentDidMount() {
   /* const contentful = require('contentful');

    const client = contentful.createClient({
      space: '3afxhmr1xm65',
      accessToken: 'c8cdb5066fb665984fa30eb15c75d2eb694e461647a9db057dbd27957647de8d'
    });

    const contentfulManage = require('contentful-management');

    const clientManage = contentfulManage.createClient({
      accessToken: 'CFPAT-9f355b5c49275d9f13740934a56e8ed30667ac6ea43937443b8046e59f3751ab'
    });

    client.getEntries({
      content_type: 'card'
    })
      .then((response) => {
        this.setState({
          cards: response.items
        });
      })
      .catch(console.error);
*/
    skygear.config({
      'endPoint': 'https://repairbox.skygeario.com/',
      'apiKey': '391a5c8f42a046adb8e1b6e04464fbdd'
    }).then(() => {
      console.log('skygear container is now ready for making API calls.');
    }).then(() => skygear.auth.signupAnonymously())
      .then(() => {
        const Test = skygear.Record.extend('test');
        return skygear.publicDB.save(new Test({
          'content': 'Hello World'
        }));
      })
      .catch(console.error)
  }

  render() {
    const cards = this.state.cards.map((card, i) => <Card id={i} key={i} data={card}/>);

    return (
      <div className={s.container}>
        <h3 className={s.title}>Каталог iPhone</h3>
        <div className={s.catalogWrapper}>
          {cards}
        </div>
      </div>
    );
  }
}

export default Catalog;
