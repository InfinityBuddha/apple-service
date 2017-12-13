import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Slider from './Slider'
import { Map, Marker, MarkerLayout } from 'yandex-map-react';
import dev from '../styles/blocks/device.css'
import dis from '../styles/blocks/displays.css'
import c from '../styles/blocks/circles.css'
import loc from '../styles/blocks/location.css'
import sli from './Slider.css'
import head from '../styles/blocks/header.css'
import main from '../styles/blocks/main.css'
import cx from 'classnames'

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className={head.cover}>
        <section className={main.container}>
            <h1 className={main.title}>Мы это исправим.</h1>
            <div className={main.text}>Сервисный центр по ремонту техники Apple и не только.</div>
            {/*<button className={main.button}>
                Нужен ремонт
            </button>*/}
        </section>
      </div>
      <section className={dev.container}>
      <div className={dev.title}>С каким устройством проблемы?</div>
      <ul className={dev.list}>
          <li className={cx(dev.iphone, dev.card)}>
              <Link to='/iphone' className={dev.link}>
                  <div className={dev.name}>iPhone</div>
              </Link>
          </li>
          <li className={cx(dev.samsung, dev.card)}>
              <a href="#" className={dev.link}>
                  <div className={dev.name}>Samsung</div>
              </a>
          </li>
          <li className={cx(dev.other, dev.card)}>
              <a href="#" className={dev.link}>
                  <div className={dev.name}>Другое
                      устройство
                  </div>
              </a>
          </li>
          <li className={cx(dev.ipad, dev.card)}>
              <Link to='/ipad' className={dev.link}>
                  <div className={dev.name}>iPad</div>
              </Link>
          </li>
          <li className={cx(dev.macbook, dev.card)}>
              <a href="#" className={dev.link}>
                  <div className={dev.name}>Macbook</div>
              </a>
          </li>
          <li className={cx(dev.imac, dev.card)}>
              <a href="#" className={dev.link}>
                  <div className={dev.name}>iMac</div>
              </a>
          </li>
      </ul>
  </section>


  <section className={dis.displays}>
      <div className={dis.overlay}>
          <div className={dis.container}>
              <div className={dis.wrapper}>
                  <span className={dis.title}>Дисплеи для iPhone</span>
                  <button className={dis.button}>
                      <div className={dis.button__title}>Открыть каталог</div>
                  </button>
              </div>
          </div>
      </div>
  </section>

  <Slider />
  <section className={sli.cards}>
      <li className={cx(sli.card, sli.card__iphone)}>
          <div className={sli.text}>
              <h3 className={sli.title}>5 лет качества</h3>
              <p className={sli.description}>За это время через наши руки прошло более 5000
                  устройств.
              </p>
          </div>
      </li>
      <li className={cx(sli.card, sli.card__repair)}>
          <div className={sli.text}>
              <h3 className={sli.title}>Экспресс ремонт</h3>
              <p className={sli.description}>Накопленный опыт в области ремонта техники Apple
                  позволяет нам быстро устранять неполадки
              </p>
          </div>
      </li>
      <li className={cx(sli.card, sli.card__guarantee)}>
          <div className={sli.text}>
              <h3 className={sli.title}>Гарантия 2 месяца</h3>
              <p className={sli.description}>Мы используем только качественные запчасти для
                  ремонта продукции Apple. Это позволяет нам давать длительную гарантию на все
                  виды ремонта
              </p>
          </div>
      </li>
  </section>

  <section className={c.container}>
      <div className={c.circles}>
          <div className={c.item}>
              <div className={c.circle}>
                  <span>1</span>
              </div>
              <span className={c.title}>Заявка</span>
          </div>
          <div className={c.line}></div>
          <div className={c.item}>
              <div className={c.circle}>
                  <span>2</span>
              </div>
              <span className={c.title}>Бесплатная диагностика</span>
          </div>
          <div className={c.line}></div>
          <div className={c.item}>
              <div className={c.circle}>
                  <span>3</span>
              </div>
              <span className={c.title}>Ремонт</span>
          </div>
          <div className={c.line}></div>
          <div className={c.item}>
              <div className={c.circle}>
                  <span>4</span>
              </div>
              <span className={c.title}>Готово</span>
          </div>
      </div>
  </section>


  <section className={loc.container}>
      <div className={loc.location}>
          <div className={loc.title}>Ждем вас в гости</div>
          <div className={loc.card}>
              <div className={loc.text}>
                  <div className={loc.address}>
                      <div className={loc.city}>г. Руза</div>
                      <div className={loc.street}>ул. Ульяновская, дом 7. ТЦ-Пятёрочка 2 этаж.</div>
                  </div>
                  <div className={loc.contacts}>
                      <a href="tel:8(985)-070-80-80" className={loc.phone}>+7(985) 070-80-80</a>
                      <a href="#" className={loc.button}>
                          <div className={loc.button__title}>Записаться на ремонт</div>
                      </a>
                  </div>
              </div>
              <div className={loc.map} id="map">
              <Map onAPIAvailable= {
                      function () {
                          console.log('API loaded');
                          }}
                          center = {[55.70343857, 36.20003100]}
                          zoom={16}
                          width = {362}
                          height = {202}>
              <Marker lat={55.70343857} lon={36.20019100}>
                  <MarkerLayout>
                      <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#0070D2"><path d="M4 24h-2v-24h2v24zm6.161-23c-1.8 0-3.436 1.017-4.161 1.638v11.362c2.447-3.692 5.281-2.538 7.526-1.909 4.435 1.244 6.686-1.535 8.474-4.78-6.427 2.666-5.895-6.311-11.839-6.311z"/></svg>
                      </div>
                  </MarkerLayout>
             </Marker>
              </Map></div>
          </div>
          <div className={loc.card}>
              <div className={loc.text}>
                  <div className={loc.address}>
                      <div className={loc.city}>г. Можайск</div>
                      <div className={loc.street}>ул. Мира, дом 2.</div>
                  </div>
                  <div className={loc.contacts}>
                      <a href="tel:8(985)-070-80-80" className={loc.phone}>+7(985) 070-80-80</a>
                      <a href="#" className={loc.button}>
                          <div className={loc.button__title}>Записаться на ремонт</div>
                      </a>
                  </div>
              </div>
              <div className={loc.map} id="map">
                   <Map onAPIAvailable= {
                       function () {
                           console.log('API loaded');
                           }}
                           center = {[55.50430707, 36.02995300]}
                           zoom={16}
                           width = {362}
                           height = {202}>
                  <Marker lat={55.50430707} lon={36.03009300}>
                      <MarkerLayout>
                          <div style={{width: '30px', height: '30px'}}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#0070D2"><path d="M4 24h-2v-24h2v24zm6.161-23c-1.8 0-3.436 1.017-4.161 1.638v11.362c2.447-3.692 5.281-2.538 7.526-1.909 4.435 1.244 6.686-1.535 8.474-4.78-6.427 2.666-5.895-6.311-11.839-6.311z"/></svg>
                          </div>
                      </MarkerLayout>
                  </Marker>
                  </Map>

              </div>
          </div>
      </div>
  </section>
  </div>
    );
  }
  }

  export default Home