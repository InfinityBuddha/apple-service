import React, { Component } from 'react';
import './styles/App.css'
import head from './styles/blocks/header.css'
import main from './styles/blocks/main.css'
import dev from './styles/blocks/device.css'
import dis from './styles/blocks/displays.css'
import c from './styles/blocks/circles.css'
import loc from './styles/blocks/location.css'
import f from './styles/blocks/footer.css'
import s from './styles/blocks/slider.css'
import cx from 'classnames'

/*
* В этом файле делается верстка
* */
class App extends Component {
  render () {
    return (
      <div className="App">
				<div className={head.wrapper}>
					<div className={head.cover}>
						<header className={head.header}>
							<div className={head.container}>
								<div className={head.contacts__tablet}>
									<div className={head.city}>г. Руза</div>
									<a href="tel:8(800)-200-00-56" className={head.phone}>8 800 200 00 56</a>
								</div>
								<div className={head.contacts__tablet}>
									<div className={head.city}>г. Можайск</div>
									<a href="tel:8(800)-200-00-56" className={head.phone}>8 800 200 00 56</a>
								</div>
								<div className={head.contacts}>
									<a href="tel:8(800)-200-00-56" className={head.phone}>8 800 200 00 56</a>
									<div className={head.schedule}>10:00 - 18:00</div>
								</div>

								<nav className={head.nav}>

								</nav>
							</div>
						</header>

						<section className={main.container}>
							<h1 className={main.title}>Да, мы это исправим</h1>
							<div className={main.text}>Обращайтесь к нам, если у вас возникли проблемы с вашими девайсами.<br />
								Мы знаем толк в ремонте.</div>
							<a href="#" className={main.button}>
								<div className={main.button__title}>Нужен ремонт</div>
							</a>
						</section>

					</div>

							<section className={dev.container}>
								<div className={dev.title}>С каким устройством проблемы?</div>
								<ul className={dev.list}>
									<li className={cx(dev.iphone, dev.card)}>
										<a href="#" className={dev.link}>
											<div className={dev.name}>iPhone</div>
										</a>
									</li>
									<li className={cx(dev.samsung, dev.card)}>
										<a href="#" className={dev.link}>
											<div className={dev.name}>Samsung</div>
										</a>
									</li>
									<li className={cx(dev.other, dev.card)}>
										<a href="#" className={dev.link}>
											<div className={dev.name}>Другое
												устройство</div>
										</a>
									</li>
									<li className={cx(dev.ipad, dev.card)}>
										<a href="#" className={dev.link}>
											<div className={dev.name}>iPad</div>
										</a>
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
										<span className={dis.title}>Дисплеи для iPhone</span>
										<a href="#" className={dis.button}>
											<div className={dis.button__title}>Открыть каталог</div>
										</a>
									</div>
								</div>
							</section>


							<section className={s.slider}>
								<div className={s.container}>
									<div className={s.title}>5 лет качества</div>
									<div className={s.text}>За это время через наши руки прошло  более 5000 устройств.</div>
								</div>
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
										<span className={c.title}>Бесплатная диагностика</span>
										<div className={c.circle}>
											<span>2</span>
										</div>
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
										<span className={c.title}>Готово</span>
										<div className={c.circle}>
											<span>4</span>
										</div>
									</div>
								</div>
							</section>


							<section className={loc.container}>
								<div className={loc.location}>
									<div className={loc.title}>Ждем вас в гости</div>
									<div className={loc.card}>
										<div className={loc.ruza}>
											<div className={loc.address}>
												<div className={loc.city}>г. Руза</div>
												<div className={loc.street}>ул. Ульяновская, дом 7. ТЦ-Пятёрочка 2 этаж.</div>
										</div>
									</div>
										<div className={loc.contacts}>
											<a href="tel:8(985)-070-80-80" className={loc.phone}>+7(985) 070-80-80</a>
											<a href="#" className={loc.button}>
												<div className={loc.button__title}>Записаться на ремонт</div>
											</a>
										</div>
									</div>
									<div className={loc.card}>
										<div className={loc.moj}>
											<div className={loc.address}>
												<div className={loc.city}>г. Можайск</div>
												<div className={loc.street}>ул. Мира, дом 2.</div>
											</div>
										</div>
										<div className={loc.contacts}>
											<a href="tel:8(985)-070-80-80" className={loc.phone}>+7(985) 070-80-80</a>
											<a href="#" className={loc.button}>
												<div className={loc.button__title}>Записаться на ремонт</div>
											</a>
										</div>
									</div>
								</div>
							</section>
						</div>

				<footer className={f.footer}>
					<div className={f.container}>
						<a href="#" className={f.title}>ApplePremiumService</a>
						<div className={f.phones}>+7(985) 070-80-80 <br /> +7(916) 611-55-50 </div>
						<a href="https://vk.com" className={f.vk}></a>
					</div>
				</footer>
			</div>
    );
  }
}

export default App;
