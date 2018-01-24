import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import f from './styles.css'

class Footer extends Component {
  render() {
    return (
      <footer className={f.footer}>
      <div className={f.container}>
          <div className={f.footerInfo}>
              <div className={f.logo}>
                  <Link to="/apple-service" className={f.title}>RepairBox</Link>
              </div>
              <div className={f.repair}>
                  <h3 className={f.title}>Ремонт</h3>
                  <ul className={f.list}>
                      <li><Link to='/iphone' title='Ремонт iPhone'>Ремонт iPhone</Link></li>
                      <li><Link to='/ipad' title='Ремонт iPad'>Ремонт iPad</Link></li>
                      <li>Ремонт MacBook</li>
                      <li>Ремонт iMac</li>
                      <li>Ремонт Samsung</li>
                      <li><Link to='/other-devices'>Ремонт Других устройств</Link></li>
                  </ul>
              </div>
              <div className={f.sale}>
                  <h3 className={f.title}>Продажа</h3>
                  <ul className={f.list}>
                      <li><Link to='/iphone-sell'>iPhone</Link></li>
                      <li>Дисплеи</li>
                  </ul>
              </div>
              <div className={f.phones}>
                  <p className={f.phone}>+7(985) 070-80-80</p>
                  <h3 className={f.title}>Адреса сервис-центров</h3>
                  <ul className={f.list}>
                      <li>г.Руза</li>
                      <li>+7(985) 070-80-80</li>
                      <li >г. Можайск</li>
                      <li>+7(916) 611-55-50</li>
                      <li>График работы:</li>
                      <li>ПН-ПТ 10:00 - 18:00</li>
                  </ul>
              </div>
          </div>
          <div className={f.footerSocial}>
              <a className={f.vk} href="https://vk.com/club100386203" > </a>
          </div>
      </div>
  </footer>
    );
  }
  }

  export default Footer