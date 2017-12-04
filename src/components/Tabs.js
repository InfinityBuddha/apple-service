import React, {Component} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import tabs from '../styles/blocks/tabs.css'



class Table extends React.Component {
  render() {
    return (
      <div className={tabs.container}>
	<Tabs>
		<TabList className={tabs.list}>
			<Tab className={tabs.items}>iPhone</Tab>
			<Tab className={tabs.items}>iPad</Tab>
		</TabList>
		<TabPanel>
    <Tabs>
      <TabList className={tabs.list}>
        <Tab className={tabs.item}>iPhone 4</Tab>
        <Tab className={tabs.item}>iPhone 4s</Tab>
        <Tab className={tabs.item}>iPhone 5</Tab>
        <Tab className={tabs.item}>iPhone 5s</Tab>
        <Tab className={tabs.item}>iPhone 5c</Tab>
        <Tab className={tabs.item}>iPhone SE</Tab>
        <Tab className={tabs.item}>iPhone 6</Tab>
        <Tab className={tabs.item}>iPhone 6 Plus</Tab>
        <Tab className={tabs.item}>iPhone 6s</Tab>
        <Tab className={tabs.item}>iPhone 6s Plus</Tab>
        <Tab className={tabs.item}>iPhone 7</Tab>
        <Tab className={tabs.item}>iPhone 7 Plus</Tab>
      </TabList>
				<TabPanel className={tabs.panel}>
          <table>
              <tbody>
                <tr>
                  <td>Устройство</td>
                  <td>Услуга</td>
                  <td>Время ремонта</td>
                  <td>Стоимость. Включает в себя работу мастера и стоимость детали.</td>
                </tr>
                <tr>
                  <td data-name="iPhone 4"></td>
                  <td>Диагностика</td>
                  <td></td>
                  <td>Бесплатно, даже при отказе от ремонта</td>
                </tr>
                <tr>
                  <td data-name="iPhone 4"></td>
                  <td>Замена дисплея</td>
                  <td>от 20 мин</td>
                  <td>2490 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPhone 4"></td>
                  <td>Замена заднего корпуса</td>
                  <td>от 20 мин</td>
                  <td>990 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPhone 4"></td>
                  <td>Замена верхнего шлейфа (проблема с кнопками)</td>
                  <td>от 30 мин</td>
                  <td>1190 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPhone 4"></td>
                  <td>Замена нижнего шлейфа (проблема с зарядкой)</td>
                  <td>от 30 мин</td>
                  <td>1190 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPhone 4"></td>
                  <td>Замена шлейфа кнопки "Home"</td>
                  <td>от 20 мин</td>
                  <td>1190 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPhone 4"></td>
                  <td>Замена динамика</td>
                  <td>от 20 мин</td>
                  <td>1190 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPhone 4"></td>
                  <td>Замена микрофона</td>
                  <td>от 20 мин</td>
                  <td>1190 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPhone 4"></td>
                  <td>Замена аккумулятора</td>
                  <td>от 20 мин</td>
                  <td>1190 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPhone 4"></td>
                  <td>Замена камеры</td>
                  <td>от 20 мин</td>
                  <td>1190 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPhone 4"></td>
                  <td>Ремонт после попадания влаги</td>
                  <td>от 50 мин</td>
                  <td>от 900 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPhone 4"></td>
                  <td>Прошивка и разблокировка iPhone</td>
                  <td>от 50 мин</td>
                  <td>от 900 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPhone 4"></td>
                  <td>Ремонт материнской платы</td>
                  <td>от 2 дней</td>
                  <td>от 900 ₽</td>
                </tr>
              </tbody>
          </table>
				</TabPanel>
				<TabPanel>
          <table>
                <tbody>
                  <tr>
                    <td>Устройство</td>
                    <td>Услуга</td>
                    <td>Время ремонта</td>
                    <td>Стоимость. Включает в себя работу мастера и стоимость детали.</td>
                  </tr>
                  <tr>
                    <td data-name="iPhone 4s"></td>
                    <td>Диагностика</td>
                    <td></td>
                    <td>Бесплатно, даже при отказе от ремонта</td>
                  </tr>
                  <tr>
                    <td data-name="iPhone 4s"></td>
                    <td>Замена дисплея</td>
                    <td>от 20 мин</td>
                    <td>2490 ₽</td>
                  </tr>
                  <tr>
                    <td data-name="iPhone 4s"></td>
                    <td>Замена заднего корпуса</td>
                    <td>от 20 мин</td>
                    <td>990 ₽</td>
                  </tr>
                  <tr>
                    <td data-name="iPhone 4s"></td>
                    <td>Замена верхнего шлейфа (проблема с кнопками)</td>
                    <td>от 30 мин</td>
                    <td>1190 ₽</td>
                  </tr>
                  <tr>
                    <td data-name="iPhone 4s"></td>
                    <td>Замена нижнего шлейфа (проблема с зарядкой)</td>
                    <td>от 30 мин</td>
                    <td>1190 ₽</td>
                  </tr>
                  <tr>
                    <td data-name="iPhone 4s"></td>
                    <td>Замена шлейфа кнопки "Home"</td>
                    <td>от 20 мин</td>
                    <td>1190 ₽</td>
                  </tr>
                  <tr>
                    <td data-name="iPhone 4s"></td>
                    <td>Замена динамика</td>
                    <td>от 20 мин</td>
                    <td>1190 ₽</td>
                  </tr>
                  <tr>
                    <td data-name="iPhone 4s"></td>
                    <td>Замена микрофона</td>
                    <td>от 20 мин</td>
                    <td>1190 ₽</td>
                  </tr>
                  <tr>
                    <td data-name="iPhone 4s"></td>
                    <td>Замена аккумулятора</td>
                    <td>от 20 мин</td>
                    <td>1190 ₽</td>
                  </tr>
                  <tr>
                    <td data-name="iPhone 4s"></td>
                    <td>Замена камеры</td>
                    <td>от 20 мин</td>
                    <td>1190 ₽</td>
                  </tr>
                  <tr>
                    <td data-name="iPhone 4s"></td>
                    <td>Ремонт после попадания влаги</td>
                    <td>от 50 мин</td>
                    <td>от 900 ₽</td>
                  </tr>
                  <tr>
                    <td data-name="iPhone 4s"></td>
                    <td>Прошивка и разблокировка iPhone</td>
                    <td>от 50 мин</td>
                    <td>от 900 ₽</td>
                  </tr>
                  <tr>
                    <td data-name="iPhone 4s"></td>
                    <td>Ремонт материнской платы</td>
                    <td>от 2 дней</td>
                    <td>от 900 ₽</td>
                  </tr>
              </tbody>
          </table>
				</TabPanel>
        <TabPanel>
          <table>
              <tbody>
                <tr>
                  <td>Устройство</td>
                  <td>Услуга</td>
                  <td>Время ремонта</td>
                  <td>Стоимость. Включает в себя работу мастера и стоимость детали.</td>
                </tr>
                <tr>
                  <td data-name="iPhone 5"></td>
                  <td>Диагностика</td>
                  <td></td>
                  <td>Бесплатно, даже при отказе от ремонта</td>
                </tr>
                <tr>
                  <td data-name="iPhone 5"></td>
                  <td>Замена дисплея</td>
                  <td>от 20 мин</td>
                  <td>3490 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPhone 5"></td>
                  <td>Замена заднего корпуса</td>
                  <td>от 20 мин</td>
                  <td>3490 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPhone 5"></td>
                  <td>Замена верхнего шлейфа (проблема с кнопками)</td>
                  <td>от 30 мин</td>
                  <td>1490 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPhone 5"></td>
                  <td>Замена нижнего шлейфа (проблема с зарядкой)</td>
                  <td>от 30 мин</td>
                  <td>1490 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPhone 5"></td>
                  <td>Замена шлейфа кнопки "Home"</td>
                  <td>от 20 мин</td>
                  <td>1490 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPhone 5"></td>
                  <td>Замена динамика</td>
                  <td>от 20 мин</td>
                  <td>1490 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPhone 5"></td>
                  <td>Замена микрофона</td>
                  <td>от 20 мин</td>
                  <td>1490 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPhone 5"></td>
                  <td>Замена аккумулятора</td>
                  <td>от 20 мин</td>
                  <td>1490 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPhone 5"></td>
                  <td>Замена камеры</td>
                  <td>от 20 мин</td>
                  <td>1490 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPhone 5"></td>
                  <td>Ремонт после попадания влаги</td>
                  <td>от 50 мин</td>
                  <td>от 900 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPhone 5"></td>
                  <td>Прошивка и разблокировка iPhone</td>
                  <td>от 50 мин</td>
                  <td>от 900 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPhone 5"></td>
                  <td>Ремонт материнской платы</td>
                  <td>от 2 дней</td>
                  <td>от 900 ₽</td>
                </tr>
              </tbody>
          </table>
				</TabPanel>
        <TabPanel>
			    <table>
              <tbody>
                <tr>
                  <td>Устройство</td>
                  <td>Услуга</td>
                  <td>Время ремонта</td>
                  <td>Стоимость. Включает в себя работу мастера и стоимость детали.</td>
                </tr>
                <tr>
                  <td data-name="iPhone 5s"></td>
                  <td>Диагностика</td>
                  <td></td>
                  <td>Бесплатно, даже при отказе от ремонта</td>
                </tr>
                <tr>
                  <td data-name="iPhone 5s"></td>
                  <td>Замена дисплея</td>
                  <td>от 20 мин</td>
                  <td>3490 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPhone 5s"></td>
                  <td>Замена заднего корпуса</td>
                  <td>от 20 мин</td>
                  <td>3490 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPhone 5s"></td>
                  <td>Замена верхнего шлейфа (проблема с кнопками)</td>
                  <td>от 30 мин</td>
                  <td>1490 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPhone 5s"></td>
                  <td>Замена нижнего шлейфа (проблема с зарядкой)</td>
                  <td>от 30 мин</td>
                  <td>1490 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPhone 5s"></td>
                  <td>Замена шлейфа кнопки "Home"</td>
                  <td>от 20 мин</td>
                  <td>1490 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPhone 5s"></td>
                  <td>Замена динамика</td>
                  <td>от 20 мин</td>
                  <td>1490 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPhone 5s"></td>
                  <td>Замена микрофона</td>
                  <td>от 20 мин</td>
                  <td>1490 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPhone 5s"></td>
                  <td>Замена аккумулятора</td>
                  <td>от 20 мин</td>
                  <td>1490 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPhone 5s"></td>
                  <td>Замена камеры</td>
                  <td>от 20 мин</td>
                  <td>1490 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPhone 5s"></td>
                  <td>Ремонт после попадания влаги</td>
                  <td>от 50 мин</td>
                  <td>от 900 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPhone 5s"></td>
                  <td>Прошивка и разблокировка iPhone</td>
                  <td>от 50 мин</td>
                  <td>от 900 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPhone 5s"></td>
                  <td>Ремонт материнской платы</td>
                  <td>от 2 дней</td>
                  <td>от 900 ₽</td>
                </tr>
              </tbody>
          </table>
				</TabPanel>
        <TabPanel>
          <table>
              <tbody>
                <tr>
                  <td>Устройство</td>
                  <td>Услуга</td>
                  <td>Время ремонта</td>
                  <td>Стоимость. Включает в себя работу мастера и стоимость детали.</td>
                </tr>
                <tr>
                  <td data-name="iPhone 5c"></td>
                  <td>Диагностика</td>
                  <td></td>
                  <td>Бесплатно, даже при отказе от ремонта</td>
                </tr>
                <tr>
                  <td data-name="iPhone 5c"></td>
                  <td>Замена дисплея</td>
                  <td>от 20 мин</td>
                  <td>3490 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPhone 5c"></td>
                  <td>Замена заднего корпуса</td>
                  <td>от 20 мин</td>
                  <td>3490 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPhone 5c"></td>
                  <td>Замена верхнего шлейфа (проблема с кнопками)</td>
                  <td>от 30 мин</td>
                  <td>1490 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPhone 5c"></td>
                  <td>Замена нижнего шлейфа (проблема с зарядкой)</td>
                  <td>от 30 мин</td>
                  <td>1490 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPhone 5c"></td>
                  <td>Замена шлейфа кнопки "Home"</td>
                  <td>от 20 мин</td>
                  <td>1490 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPhone 5c"></td>
                  <td>Замена динамика</td>
                  <td>от 20 мин</td>
                  <td>1490 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPhone 5c"></td>
                  <td>Замена микрофона</td>
                  <td>от 20 мин</td>
                  <td>1490 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPhone 5c"></td>
                  <td>Замена аккумулятора</td>
                  <td>от 20 мин</td>
                  <td>1490 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPhone 5c"></td>
                  <td>Замена камеры</td>
                  <td>от 20 мин</td>
                  <td>1490 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPhone 5c"></td>
                  <td>Ремонт после попадания влаги</td>
                  <td>от 50 мин</td>
                  <td>от 900 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPhone 5c"></td>
                  <td>Прошивка и разблокировка iPhone</td>
                  <td>от 50 мин</td>
                  <td>от 900 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPhone 5c"></td>
                  <td>Ремонт материнской платы</td>
                  <td>от 2 дней</td>
                  <td>от 900 ₽</td>
                </tr>
              </tbody>
          </table>
				</TabPanel>
        <TabPanel>
        <table>
         <tbody>
          <tr>
            <td>Устройство</td>
            <td>Услуга</td>
            <td>Время ремонта</td>
            <td>Стоимость. Включает в себя работу мастера и стоимость детали.</td>
          </tr>
          <tr>
            <td data-name="iPhone SE"></td>
            <td>Диагностика</td>
            <td></td>
            <td>Бесплатно, даже при отказе от ремонта</td>
          </tr>
          <tr>
            <td data-name="iPhone SE"></td>
            <td>Замена дисплея</td>
            <td>от 20 мин</td>
            <td>3490 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone SE"></td>
            <td>Замена заднего корпуса</td>
            <td>от 20 мин</td>
            <td>3490 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone SE"></td>
            <td>Замена верхнего шлейфа (проблема с кнопками)</td>
            <td>от 30 мин</td>
            <td>1490 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone SE"></td>
            <td>Замена нижнего шлейфа (проблема с зарядкой)</td>
            <td>от 30 мин</td>
            <td>1490 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone SE"></td>
            <td>Замена шлейфа кнопки "Home"</td>
            <td>от 20 мин</td>
            <td>1490 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone SE"></td>
            <td>Замена динамика</td>
            <td>от 20 мин</td>
            <td>1490 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone SE"></td>
            <td>Замена микрофона</td>
            <td>от 20 мин</td>
            <td>1490 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone SE"></td>
            <td>Замена аккумулятора</td>
            <td>от 20 мин</td>
            <td>1490 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone SE"></td>
            <td>Замена камеры</td>
            <td>от 20 мин</td>
            <td>1490 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone SE"></td>
            <td>Ремонт после попадания влаги</td>
            <td>от 50 мин</td>
            <td>от 900 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone SE"></td>
            <td>Прошивка и разблокировка iPhone</td>
            <td>от 50 мин</td>
            <td>от 900 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone SE"></td>
            <td>Ремонт материнской платы</td>
            <td>от 2 дней</td>
            <td>от 900 ₽</td>
          </tr>
          </tbody>
        </table>
				</TabPanel>
        <TabPanel>
			  <table>
         <tbody>
          <tr>
            <td>Устройство</td>
            <td>Услуга</td>
            <td>Время ремонта</td>
            <td>Стоимость. Включает в себя работу мастера и стоимость детали.</td>
          </tr>
          <tr>
            <td data-name="iPhone 6"></td>
            <td>Диагностика</td>
            <td></td>
            <td>Бесплатно, даже при отказе от ремонта</td>
          </tr>
          <tr>
            <td data-name="iPhone 6"></td>
            <td>Замена дисплея</td>
            <td>от 20 мин</td>
            <td>5990 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 6"></td>
            <td>Замена заднего корпуса</td>
            <td>от 20 мин</td>
            <td>4490 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 6"></td>
            <td>Замена верхнего шлейфа (проблема с кнопками)</td>
            <td>от 30 мин</td>
            <td>1990 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 6"></td>
            <td>Замена нижнего шлейфа (проблема с зарядкой)</td>
            <td>от 30 мин</td>
            <td>1990 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 6"></td>
            <td>Замена шлейфа кнопки "Home"</td>
            <td>от 20 мин</td>
            <td>1990 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 6"></td>
            <td>Замена динамика</td>
            <td>от 20 мин</td>
            <td>1490 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 6"></td>
            <td>Замена микрофона</td>
            <td>от 20 мин</td>
            <td>1990 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 6"></td>
            <td>Замена аккумулятора</td>
            <td>от 20 мин</td>
            <td>1990 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 6"></td>
            <td>Замена камеры</td>
            <td>от 20 мин</td>
            <td>1990 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 6"></td>
            <td>Ремонт после попадания влаги</td>
            <td>от 50 мин</td>
            <td>от 900 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 6"></td>
            <td>Прошивка и разблокировка iPhone</td>
            <td>от 50 мин</td>
            <td>от 900 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 6"></td>
            <td>Ремонт материнской платы</td>
            <td>от 2 дней</td>
            <td>от 900 ₽</td>
          </tr>
          </tbody>
        </table>
				</TabPanel>
        <TabPanel>
        <table>
         <tbody>
          <tr>
            <td>Устройство</td>
            <td>Услуга</td>
            <td>Время ремонта</td>
            <td>Стоимость. Включает в себя работу мастера и стоимость детали.</td>
          </tr>
          <tr>
            <td data-name="iPhone 6 Plus"></td>
            <td>Диагностика</td>
            <td></td>
            <td>Бесплатно, даже при отказе от ремонта</td>
          </tr>
          <tr>
            <td data-name="iPhone 6 Plus"></td>
            <td>Замена дисплея</td>
            <td>от 20 мин</td>
            <td>7990 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 6 Plus"></td>
            <td>Замена заднего корпуса</td>
            <td>от 20 мин</td>
            <td>5990 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 6 Plus"></td>
            <td>Замена верхнего шлейфа (проблема с кнопками)</td>
            <td>от 30 мин</td>
            <td>2190 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 6 Plus"></td>
            <td>Замена нижнего шлейфа (проблема с зарядкой)</td>
            <td>от 30 мин</td>
            <td>2190 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 6 Plus"></td>
            <td>Замена шлейфа кнопки "Home"</td>
            <td>от 20 мин</td>
            <td>1990 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 6 Plus"></td>
            <td>Замена динамика</td>
            <td>от 20 мин</td>
            <td>1990 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 6 Plus"></td>
            <td>Замена микрофона</td>
            <td>от 20 мин</td>
            <td>2190 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 6 Plus"></td>
            <td>Замена аккумулятора</td>
            <td>от 20 мин</td>
            <td>2490 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 6 Plus"></td>
            <td>Замена камеры</td>
            <td>от 20 мин</td>
            <td>2490 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 6 Plus"></td>
            <td>Ремонт после попадания влаги</td>
            <td>от 50 мин</td>
            <td>от 900 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 6 Plus"></td>
            <td>Прошивка и разблокировка iPhone</td>
            <td>от 50 мин</td>
            <td>от 900 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 6 Plus"></td>
            <td>Ремонт материнской платы</td>
            <td>от 2 дней</td>
            <td>от 900 ₽</td>
          </tr>
          </tbody>
        </table>
				</TabPanel>
        <TabPanel>
        <table>
         <tbody>
          <tr>
            <td>Устройство</td>
            <td>Услуга</td>
            <td>Время ремонта</td>
            <td>Стоимость. Включает в себя работу мастера и стоимость детали.</td>
          </tr>
          <tr>
            <td data-name="iPhone 6s"></td>
            <td>Диагностика</td>
            <td></td>
            <td>Бесплатно, даже при отказе от ремонта</td>
          </tr>
          <tr>
            <td data-name="iPhone 6s"></td>
            <td>Замена дисплея</td>
            <td>от 20 мин</td>
            <td>9990 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 6s"></td>
            <td>Замена заднего корпуса</td>
            <td>от 20 мин</td>
            <td>7190 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 6s"></td>
            <td>Замена верхнего шлейфа (проблема с кнопками)</td>
            <td>от 30 мин</td>
            <td>2490 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 6s"></td>
            <td>Замена нижнего шлейфа (проблема с зарядкой)</td>
            <td>от 30 мин</td>
            <td>2490 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 6s"></td>
            <td>Замена шлейфа кнопки "Home"</td>
            <td>от 20 мин</td>
            <td>2490 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 6s"></td>
            <td>Замена динамика</td>
            <td>от 20 мин</td>
            <td>1990 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 6s"></td>
            <td>Замена микрофона</td>
            <td>от 20 мин</td>
            <td>2490 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 6s"></td>
            <td>Замена аккумулятора</td>
            <td>от 20 мин</td>
            <td>2490 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 6s"></td>
            <td>Замена камеры</td>
            <td>от 20 мин</td>
            <td>3490 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 6s"></td>
            <td>Ремонт после попадания влаги</td>
            <td>от 50 мин</td>
            <td>от 900 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 6s"></td>
            <td>Прошивка и разблокировка iPhone</td>
            <td>от 50 мин</td>
            <td>от 900 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 6s"></td>
            <td>Ремонт материнской платы</td>
            <td>от 2 дней</td>
            <td>от 900 ₽</td>
          </tr>
          </tbody>
        </table>
				</TabPanel>
        <TabPanel>
			  <table>
         <tbody>
          <tr>
            <td>Устройство</td>
            <td>Услуга</td>
            <td>Время ремонта</td>
            <td>Стоимость. Включает в себя работу мастера и стоимость детали.</td>
          </tr>
          <tr>
            <td data-name="iPhone 6s Plus"></td>
            <td>Диагностика</td>
            <td></td>
            <td>Бесплатно, даже при отказе от ремонта</td>
          </tr>
          <tr>
            <td data-name="iPhone 6s Plus"></td>
            <td>Замена дисплея</td>
            <td>от 20 мин</td>
            <td>14490 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 6s Plus"></td>
            <td>Замена заднего корпуса</td>
            <td>от 20 мин</td>
            <td>8490 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 6s Plus"></td>
            <td>Замена верхнего шлейфа (проблема с кнопками)</td>
            <td>от 30 мин</td>
            <td>2990 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 6s Plus"></td>
            <td>Замена нижнего шлейфа (проблема с зарядкой)</td>
            <td>от 30 мин</td>
            <td>2990 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 6s Plus"></td>
            <td>Замена шлейфа кнопки "Home"</td>
            <td>от 20 мин</td>
            <td>2490 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 6s Plus"></td>
            <td>Замена динамика</td>
            <td>от 20 мин</td>
            <td>2490 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 6s Plus"></td>
            <td>Замена микрофона</td>
            <td>от 20 мин</td>
            <td>2990 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 6s Plus"></td>
            <td>Замена аккумулятора</td>
            <td>от 20 мин</td>
            <td>2990 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 6s Plus"></td>
            <td>Замена камеры</td>
            <td>от 20 мин</td>
            <td>3490 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 6s Plus"></td>
            <td>Ремонт после попадания влаги</td>
            <td>от 50 мин</td>
            <td>от 900 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 6s Plus"></td>
            <td>Прошивка и разблокировка iPhone</td>
            <td>от 50 мин</td>
            <td>от 900 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 6s Plus"></td>
            <td>Ремонт материнской платы</td>
            <td>от 2 дней</td>
            <td>от 900 ₽</td>
          </tr>
          </tbody>
        </table>
				</TabPanel>
        <TabPanel>
        <table>
         <tbody>
          <tr>
            <td>Устройство</td>
            <td>Услуга</td>
            <td>Время ремонта</td>
            <td>Стоимость. Включает в себя работу мастера и стоимость детали.</td>
          </tr>
          <tr>
            <td data-name="iPhone 7"></td>
            <td>Диагностика</td>
            <td></td>
            <td>Бесплатно, даже при отказе от ремонта</td>
          </tr>
          <tr>
            <td data-name="iPhone 7"></td>
            <td>Замена дисплея</td>
            <td>от 20 мин</td>
            <td>12500 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 7"></td>
            <td>Замена заднего корпуса</td>
            <td>от 20 мин</td>
            <td>8490 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 7"></td>
            <td>Замена верхнего шлейфа (проблема с кнопками)</td>
            <td>от 30 мин</td>
            <td>3990 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 7"></td>
            <td>Замена нижнего шлейфа (проблема с зарядкой)</td>
            <td>от 30 мин</td>
            <td>4490 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 7"></td>
            <td>Замена шлейфа кнопки "Home"</td>
            <td>от 20 мин</td>
            <td>5990 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 7"></td>
            <td>Замена динамика</td>
            <td>от 20 мин</td>
            <td>3990 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 7"></td>
            <td>Замена микрофона</td>
            <td>от 20 мин</td>
            <td>4490 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 7"></td>
            <td>Замена аккумулятора</td>
            <td>от 20 мин</td>
            <td>5490 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 7"></td>
            <td>Замена камеры</td>
            <td>от 20 мин</td>
            <td>5990 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 7"></td>
            <td>Ремонт после попадания влаги</td>
            <td>от 50 мин</td>
            <td>от 900 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 7"></td>
            <td>Прошивка и разблокировка iPhone</td>
            <td>от 50 мин</td>
            <td>от 900 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 7"></td>
            <td>Ремонт материнской платы</td>
            <td>от 2 дней</td>
            <td>от 900 ₽</td>
          </tr>
          </tbody>
        </table>
				</TabPanel>
        <TabPanel>
        <table>
         <tbody>
          <tr>
            <td>Устройство</td>
            <td>Услуга</td>
            <td>Время ремонта</td>
            <td>Стоимость. Включает в себя работу мастера и стоимость детали.</td>
          </tr>
          <tr>
            <td data-name="iPhone 7 Plus"></td>
            <td>Диагностика</td>
            <td></td>
            <td>Бесплатно, даже при отказе от ремонта</td>
          </tr>
          <tr>
            <td data-name="iPhone 7 Plus"></td>
            <td>Замена дисплея</td>
            <td>от 20 мин</td>
            <td>14990 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 7 Plus"></td>
            <td>Замена заднего корпуса</td>
            <td>от 20 мин</td>
            <td>17990 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 7 Plus"></td>
            <td>Замена верхнего шлейфа (проблема с кнопками)</td>
            <td>от 30 мин</td>
            <td>5490 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 7 Plus"></td>
            <td>Замена нижнего шлейфа (проблема с зарядкой)</td>
            <td>от 30 мин</td>
            <td>5490 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 7 Plus"></td>
            <td>Замена шлейфа кнопки "Home"</td>
            <td>от 20 мин</td>
            <td>5990 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 7 Plus"></td>
            <td>Замена динамика</td>
            <td>от 20 мин</td>
            <td>4490 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 7 Plus"></td>
            <td>Замена микрофона</td>
            <td>от 20 мин</td>
            <td>5490 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 7 Plus"></td>
            <td>Замена аккумулятора</td>
            <td>от 20 мин</td>
            <td>6990 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 7 Plus"></td>
            <td>Замена камеры</td>
            <td>от 20 мин</td>
            <td>8990 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 7 Plus"></td>
            <td>Ремонт после попадания влаги</td>
            <td>от 50 мин</td>
            <td>от 900 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 7 Plus"></td>
            <td>Прошивка и разблокировка iPhone</td>
            <td>от 50 мин</td>
            <td>от 900 ₽</td>
          </tr>
          <tr>
            <td data-name="iPhone 7 Plus"></td>
            <td>Ремонт материнской платы</td>
            <td>от 2 дней</td>
            <td>от 900 ₽</td>
          </tr>
          </tbody>
        </table>
				</TabPanel>
			</Tabs>
		</TabPanel>
	</Tabs>
  <Tabs>
      <TabList className={tabs.list}>
        <Tab className={tabs.item}>iPad 2</Tab>
        <Tab className={tabs.item}>iPad 3</Tab>
        <Tab className={tabs.item}>iPad 4</Tab>
        <Tab className={tabs.item}>iPad Air</Tab>
        <Tab className={tabs.item}>iPad Air 2</Tab>
        <Tab className={tabs.item}>iPad Mini 1</Tab>
        <Tab className={tabs.item}>iPad Mini 2</Tab>
        <Tab className={tabs.item}>iPad Mini 3</Tab>
        <Tab className={tabs.item}>iPad Mini 4</Tab>
        <Tab className={tabs.item}>iPad Pro 9.7</Tab>
        <Tab className={tabs.item}>iPad Pro 12.9</Tab>
      </TabList>
				<TabPanel className={tabs.panel}>
          <table>
              <tbody>
                <tr>
                  <td>Устройство</td>
                  <td>Услуга</td>
                  <td>Время ремонта</td>
                  <td>Стоимость. Включает в себя работу мастера и стоимость детали.</td>
                </tr>
                <tr>
                  <td data-name="iPad 2"></td>
                  <td>Диагностика</td>
                  <td></td>
                  <td>Бесплатно, даже при отказе от ремонта</td>
                </tr>
                <tr>
                  <td data-name="iPad 2"></td>
                  <td>Замена стекла</td>
                  <td>от 20 мин</td>
                  <td>2990 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPad 2"></td>
                  <td>Замена дисплея</td>
                  <td>от 20 мин</td>
                  <td>4490 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPad 2"></td>
                  <td>Замена заднего корпуса</td>
                  <td>от 20 мин</td>
                  <td>4490 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPad 2"></td>
                  <td>Замена верхнего шлейфа (проблема с кнопками)</td>
                  <td>от 30 мин</td>
                  <td>2690 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPad 2"></td>
                  <td>Замена нижнего шлейфа (проблема с зарядкой)</td>
                  <td>от 30 мин</td>
                  <td>2690 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPad 2"></td>
                  <td>Замена шлейфа кнопки "Home"</td>
                  <td>от 20 мин</td>
                  <td>2290 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPad 2"></td>
                  <td>Замена динамика</td>
                  <td>от 20 мин</td>
                  <td>2490 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPad 2"></td>
                  <td>Замена микрофона</td>
                  <td>от 20 мин</td>
                  <td>2490 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPad 2"></td>
                  <td>Замена аккумулятора</td>
                  <td>от 20 мин</td>
                  <td>3490 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPad 2"></td>
                  <td>Замена камеры</td>
                  <td>от 20 мин</td>
                  <td>2590 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPad 2"></td>
                  <td>Ремонт после попадания влаги</td>
                  <td>от 50 мин</td>
                  <td>от 1000 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPad 2"></td>
                  <td>Прошивка и разблокировка iPad</td>
                  <td>от 50 мин</td>
                  <td>от 990 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPad 2"></td>
                  <td>Ремонт материнской платы</td>
                  <td>от 2 дней</td>
                  <td>от 1500 ₽</td>
                </tr>
              </tbody>
          </table>
				</TabPanel>
				<TabPanel>
        <table>
         <tbody>
          <tr>
            <td>Устройство</td>
            <td>Услуга</td>
            <td>Время ремонта</td>
            <td>Стоимость. Включает в себя работу мастера и стоимость детали.</td>
          </tr>
          <tr>
            <td data-name="iPad 3"></td>
            <td>Диагностика</td>
            <td></td>
            <td>Бесплатно, даже при отказе от ремонта</td>
          </tr>
          <tr>
            <td data-name="iPad 3"></td>
            <td>Замена стекла</td>
            <td>от 20 мин</td>
            <td>2990 ₽</td>
          </tr>
          <tr>
            <td data-name="iPad 3"></td>
            <td>Замена дисплея</td>
            <td>от 20 мин</td>
            <td>4490 ₽</td>
          </tr>
          <tr>
            <td data-name="iPad 3"></td>
            <td>Замена заднего корпуса</td>
            <td>от 20 мин</td>
            <td>4490 ₽</td>
          </tr>
          <tr>
            <td data-name="iPad 3"></td>
            <td>Замена верхнего шлейфа (проблема с кнопками)</td>
            <td>от 30 мин</td>
            <td>2690 ₽</td>
          </tr>
          <tr>
            <td data-name="iPad 3"></td>
            <td>Замена нижнего шлейфа (проблема с зарядкой)</td>
            <td>от 30 мин</td>
            <td>2690 ₽</td>
          </tr>
          <tr>
            <td data-name="iPad 3"></td>
            <td>Замена шлейфа кнопки "Home"</td>
            <td>от 20 мин</td>
            <td>2290 ₽</td>
          </tr>
          <tr>
            <td data-name="iPad 3"></td>
            <td>Замена динамика</td>
            <td>от 20 мин</td>
            <td>2490 ₽</td>
          </tr>
          <tr>
            <td data-name="iPad 3"></td>
            <td>Замена микрофона</td>
            <td>от 20 мин</td>
            <td>2490 ₽</td>
          </tr>
          <tr>
            <td data-name="iPad 3"></td>
            <td>Замена аккумулятора</td>
            <td>от 20 мин</td>
            <td>3490 ₽</td>
          </tr>
          <tr>
            <td data-name="iPad 3"></td>
            <td>Замена камеры</td>
            <td>от 20 мин</td>
            <td>2590 ₽</td>
          </tr>
          <tr>
            <td data-name="iPad 3"></td>
            <td>Ремонт после попадания влаги</td>
            <td>от 50 мин</td>
            <td>от 1000 ₽</td>
          </tr>
          <tr>
            <td data-name="iPad 3"></td>
            <td>Прошивка и разблокировка iPad</td>
            <td>от 50 мин</td>
            <td>от 990 ₽</td>
          </tr>
          <tr>
            <td data-name="iPad 3"></td>
            <td>Ремонт материнской платы</td>
            <td>от 2 дней</td>
            <td>от 1500 ₽</td>
          </tr>
          </tbody>
        </table>
				</TabPanel>
        <TabPanel>
        <table>
              <tbody>
                <tr>
                  <td>Устройство</td>
                  <td>Услуга</td>
                  <td>Время ремонта</td>
                  <td>Стоимость. Включает в себя работу мастера и стоимость детали.</td>
                </tr>
                <tr>
                  <td data-name="iPad 4"></td>
                  <td>Диагностика</td>
                  <td></td>
                  <td>Бесплатно, даже при отказе от ремонта</td>
                </tr>
                <tr>
                  <td data-name="iPad 4"></td>
                  <td>Замена стекла</td>
                  <td>от 20 мин</td>
                  <td>2990 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPad 4"></td>
                  <td>Замена дисплея</td>
                  <td>от 20 мин</td>
                  <td>4490 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPad 4"></td>
                  <td>Замена заднего корпуса</td>
                  <td>от 20 мин</td>
                  <td>4490 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPad 4"></td>
                  <td>Замена верхнего шлейфа (проблема с кнопками)</td>
                  <td>от 30 мин</td>
                  <td>2690 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPad 4"></td>
                  <td>Замена нижнего шлейфа (проблема с зарядкой)</td>
                  <td>от 30 мин</td>
                  <td>2690 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPad 4"></td>
                  <td>Замена шлейфа кнопки "Home"</td>
                  <td>от 20 мин</td>
                  <td>2290 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPad 4"></td>
                  <td>Замена динамика</td>
                  <td>от 20 мин</td>
                  <td>2490 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPad 4"></td>
                  <td>Замена микрофона</td>
                  <td>от 20 мин</td>
                  <td>2490 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPad 4"></td>
                  <td>Замена аккумулятора</td>
                  <td>от 20 мин</td>
                  <td>3490 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPad 4"></td>
                  <td>Замена камеры</td>
                  <td>от 20 мин</td>
                  <td>2590 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPad 4"></td>
                  <td>Ремонт после попадания влаги</td>
                  <td>от 50 мин</td>
                  <td>от 1000 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPad 4"></td>
                  <td>Прошивка и разблокировка iPad</td>
                  <td>от 50 мин</td>
                  <td>от 990 ₽</td>
                </tr>
                <tr>
                  <td data-name="iPad 4"></td>
                  <td>Ремонт материнской платы</td>
                  <td>от 2 дней</td>
                  <td>от 1500 ₽</td>
                </tr>
              </tbody>
        </table>
				</TabPanel>
        <TabPanel>
        <table>
            <tbody>
              <tr>
                <td>Устройство</td>
                <td>Услуга</td>
                <td>Время ремонта</td>
                <td>Стоимость. Включает в себя работу мастера и стоимость детали.</td>
              </tr>
              <tr>
                <td data-name="iPad Air"></td>
                <td>Диагностика</td>
                <td></td>
                <td>Бесплатно, даже при отказе от ремонта</td>
              </tr>
              <tr>
                <td data-name="iPad Air"></td>
                <td>Замена стекла</td>
                <td>от 20 мин</td>
                <td>3990 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Air"></td>
                <td>Замена дисплея</td>
                <td>от 20 мин</td>
                <td>5990 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Air"></td>
                <td>Замена заднего корпуса</td>
                <td>от 20 мин</td>
                <td>6990 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Air"></td>
                <td>Замена верхнего шлейфа (проблема с кнопками)</td>
                <td>от 30 мин</td>
                <td>3290 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Air"></td>
                <td>Замена нижнего шлейфа (проблема с зарядкой)</td>
                <td>от 30 мин</td>
                <td>3490 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Air"></td>
                <td>Замена шлейфа кнопки "Home"</td>
                <td>от 20 мин</td>
                <td>3290 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Air"></td>
                <td>Замена динамика</td>
                <td>от 20 мин</td>
                <td>3290 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Air"></td>
                <td>Замена микрофона</td>
                <td>от 20 мин</td>
                <td>3290 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Air"></td>
                <td>Замена аккумулятора</td>
                <td>от 20 мин</td>
                <td>3990 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Air"></td>
                <td>Замена камеры</td>
                <td>от 20 мин</td>
                <td>2990 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Air"></td>
                <td>Ремонт после попадания влаги</td>
                <td>от 50 мин</td>
                <td>от 1000 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Air"></td>
                <td>Прошивка и разблокировка iPad</td>
                <td>от 50 мин</td>
                <td>от 990 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Air"></td>
                <td>Ремонт материнской платы</td>
                <td>от 2 дней</td>
                <td>от 1500 ₽</td>
              </tr>
            </tbody>
        </table>
				</TabPanel>
        <TabPanel>
        <table>
            <tbody>
              <tr>
                <td>Устройство</td>
                <td>Услуга</td>
                <td>Время ремонта</td>
                <td>Стоимость. Включает в себя работу мастера и стоимость детали.</td>
              </tr>
              <tr>
                <td data-name="iPad Air 2"></td>
                <td>Диагностика</td>
                <td></td>
                <td>Бесплатно, даже при отказе от ремонта</td>
              </tr>
              <tr>
                <td data-name="iPad Air 2"></td>
                <td>Замена стекла</td>
                <td>от 20 мин</td>
                <td>9990 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Air 2"></td>
                <td>Замена дисплея</td>
                <td>от 20 мин</td>
                <td>9990 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Air 2"></td>
                <td>Замена заднего корпуса</td>
                <td>от 20 мин</td>
                <td>8490 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Air 2"></td>
                <td>Замена верхнего шлейфа (проблема с кнопками)</td>
                <td>от 30 мин</td>
                <td>3990 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Air 2"></td>
                <td>Замена нижнего шлейфа (проблема с зарядкой)</td>
                <td>от 30 мин</td>
                <td>4290 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Air 2"></td>
                <td>Замена шлейфа кнопки "Home"</td>
                <td>от 20 мин</td>
                <td>3990 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Air 2"></td>
                <td>Замена динамика</td>
                <td>от 20 мин</td>
                <td>3990 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Air 2"></td>
                <td>Замена микрофона</td>
                <td>от 20 мин</td>
                <td>4290 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Air 2"></td>
                <td>Замена аккумулятора</td>
                <td>от 20 мин</td>
                <td>4990 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Air 2"></td>
                <td>Замена камеры</td>
                <td>от 20 мин</td>
                <td>4490 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Air 2"></td>
                <td>Ремонт после попадания влаги</td>
                <td>от 50 мин</td>
                <td>от 1000 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Air 2"></td>
                <td>Прошивка и разблокировка iPad</td>
                <td>от 50 мин</td>
                <td>от 990 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Air 2"></td>
                <td>Ремонт материнской платы</td>
                <td>от 2 дней</td>
                <td>от 1500 ₽</td>
              </tr>
            </tbody>
        </table>
				</TabPanel>
        <TabPanel>
        <table>
            <tbody>
              <tr>
                <td>Устройство</td>
                <td>Услуга</td>
                <td>Время ремонта</td>
                <td>Стоимость. Включает в себя работу мастера и стоимость детали.</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 1"></td>
                <td>Диагностика</td>
                <td></td>
                <td>Бесплатно, даже при отказе от ремонта</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 1"></td>
                <td>Замена стекла</td>
                <td>от 20 мин</td>
                <td>3990 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 1"></td>
                <td>Замена дисплея</td>
                <td>от 20 мин</td>
                <td>4690 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 1"></td>
                <td>Замена заднего корпуса</td>
                <td>от 20 мин</td>
                <td>5990 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 1"></td>
                <td>Замена верхнего шлейфа (проблема с кнопками)</td>
                <td>от 30 мин</td>
                <td>2990 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 1"></td>
                <td>Замена нижнего шлейфа (проблема с зарядкой)</td>
                <td>от 30 мин</td>
                <td>2990 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 1"></td>
                <td>Замена шлейфа кнопки "Home"</td>
                <td>от 20 мин</td>
                <td>2990 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 1"></td>
                <td>Замена динамика</td>
                <td>от 20 мин</td>
                <td>2990 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 1"></td>
                <td>Замена микрофона</td>
                <td>от 20 мин</td>
                <td>2990 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 1"></td>
                <td>Замена аккумулятора</td>
                <td>от 20 мин</td>
                <td>3490 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 1"></td>
                <td>Замена камеры</td>
                <td>от 20 мин</td>
                <td>3290 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 1"></td>
                <td>Ремонт после попадания влаги</td>
                <td>от 50 мин</td>
                <td>от 1000 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 1"></td>
                <td>Прошивка и разблокировка iPad</td>
                <td>от 50 мин</td>
                <td>от 990 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 1"></td>
                <td>Ремонт материнской платы</td>
                <td>от 2 дней</td>
                <td>от 1500 ₽</td>
              </tr>
            </tbody>
        </table>
				</TabPanel>
        <TabPanel>
        <table>
            <tbody>
              <tr>
                <td>Устройство</td>
                <td>Услуга</td>
                <td>Время ремонта</td>
                <td>Стоимость. Включает в себя работу мастера и стоимость детали.</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 2"></td>
                <td>Диагностика</td>
                <td></td>
                <td>Бесплатно, даже при отказе от ремонта</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 2"></td>
                <td>Замена стекла</td>
                <td>от 20 мин</td>
                <td>3990 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 2"></td>
                <td>Замена дисплея</td>
                <td>от 20 мин</td>
                <td>4690 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 2"></td>
                <td>Замена заднего корпуса</td>
                <td>от 20 мин</td>
                <td>5990 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 2"></td>
                <td>Замена верхнего шлейфа (проблема с кнопками)</td>
                <td>от 30 мин</td>
                <td>2990 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 2"></td>
                <td>Замена нижнего шлейфа (проблема с зарядкой)</td>
                <td>от 30 мин</td>
                <td>2990 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 2"></td>
                <td>Замена шлейфа кнопки "Home"</td>
                <td>от 20 мин</td>
                <td>2990 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 2"></td>
                <td>Замена динамика</td>
                <td>от 20 мин</td>
                <td>2990 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 2"></td>
                <td>Замена микрофона</td>
                <td>от 20 мин</td>
                <td>2990 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 2"></td>
                <td>Замена аккумулятора</td>
                <td>от 20 мин</td>
                <td>3490 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 2"></td>
                <td>Замена камеры</td>
                <td>от 20 мин</td>
                <td>3290 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 2"></td>
                <td>Ремонт после попадания влаги</td>
                <td>от 50 мин</td>
                <td>от 1000 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 2"></td>
                <td>Прошивка и разблокировка iPad</td>
                <td>от 50 мин</td>
                <td>от 990 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 2"></td>
                <td>Ремонт материнской платы</td>
                <td>от 2 дней</td>
                <td>от 1500 ₽</td>
              </tr>
            </tbody>
        </table>
				</TabPanel>
        <TabPanel>
        <table>
            <tbody>
              <tr>
                <td>Устройство</td>
                <td>Услуга</td>
                <td>Время ремонта</td>
                <td>Стоимость. Включает в себя работу мастера и стоимость детали.</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 3"></td>
                <td>Диагностика</td>
                <td></td>
                <td>Бесплатно, даже при отказе от ремонта</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 3"></td>
                <td>Замена стекла</td>
                <td>от 20 мин</td>
                <td>3990 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 3"></td>
                <td>Замена дисплея</td>
                <td>от 20 мин</td>
                <td>4690 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 3"></td>
                <td>Замена заднего корпуса</td>
                <td>от 20 мин</td>
                <td>5990 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 3"></td>
                <td>Замена верхнего шлейфа (проблема с кнопками)</td>
                <td>от 30 мин</td>
                <td>2990 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 3"></td>
                <td>Замена нижнего шлейфа (проблема с зарядкой)</td>
                <td>от 30 мин</td>
                <td>2990 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 3"></td>
                <td>Замена шлейфа кнопки "Home"</td>
                <td>от 20 мин</td>
                <td>2990 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 3"></td>
                <td>Замена динамика</td>
                <td>от 20 мин</td>
                <td>2990 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 3"></td>
                <td>Замена микрофона</td>
                <td>от 20 мин</td>
                <td>2990 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 3"></td>
                <td>Замена аккумулятора</td>
                <td>от 20 мин</td>
                <td>3490 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 3"></td>
                <td>Замена камеры</td>
                <td>от 20 мин</td>
                <td>3290 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 3"></td>
                <td>Ремонт после попадания влаги</td>
                <td>от 50 мин</td>
                <td>от 1000 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 3"></td>
                <td>Прошивка и разблокировка iPad</td>
                <td>от 50 мин</td>
                <td>от 990 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 3"></td>
                <td>Ремонт материнской платы</td>
                <td>от 2 дней</td>
                <td>от 1500 ₽</td>
              </tr>
            </tbody>
        </table>
				</TabPanel>
        <TabPanel>
        <table>
            <tbody>
              <tr>
                <td>Устройство</td>
                <td>Услуга</td>
                <td>Время ремонта</td>
                <td>Стоимость. Включает в себя работу мастера и стоимость детали.</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 4"></td>
                <td>Диагностика</td>
                <td></td>
                <td>Бесплатно, даже при отказе от ремонта</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 4"></td>
                <td>Замена стекла</td>
                <td>от 20 мин</td>
                <td>12990 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 4"></td>
                <td>Замена дисплея</td>
                <td>от 20 мин</td>
                <td>12990 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 4"></td>
                <td>Замена заднего корпуса</td>
                <td>от 20 мин</td>
                <td>7990 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 4"></td>
                <td>Замена верхнего шлейфа (проблема с кнопками)</td>
                <td>от 30 мин</td>
                <td>3690 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 4"></td>
                <td>Замена нижнего шлейфа (проблема с зарядкой)</td>
                <td>от 30 мин</td>
                <td>3690 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 4"></td>
                <td>Замена шлейфа кнопки "Home"</td>
                <td>от 20 мин</td>
                <td>3690 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 4"></td>
                <td>Замена динамика</td>
                <td>от 20 мин</td>
                <td>3690 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 4"></td>
                <td>Замена микрофона</td>
                <td>от 20 мин</td>
                <td>3690 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 4"></td>
                <td>Замена аккумулятора</td>
                <td>от 20 мин</td>
                <td>5990 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 4"></td>
                <td>Замена камеры</td>
                <td>от 20 мин</td>
                <td>3690 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 4"></td>
                <td>Ремонт после попадания влаги</td>
                <td>от 50 мин</td>
                <td>от 1000 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 4"></td>
                <td>Прошивка и разблокировка iPad</td>
                <td>от 50 мин</td>
                <td>от 990 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Mini 4"></td>
                <td>Ремонт материнской платы</td>
                <td>от 2 дней</td>
                <td>от 1500 ₽</td>
              </tr>
            </tbody>
        </table>
				</TabPanel>
        <TabPanel>
        <table>
            <tbody>
              <tr>
                <td>Устройство</td>
                <td>Услуга</td>
                <td>Время ремонта</td>
                <td>Стоимость. Включает в себя работу мастера и стоимость детали.</td>
              </tr>
              <tr>
                <td data-name="iPad Pro 9.7"></td>
                <td>Диагностика</td>
                <td></td>
                <td>Бесплатно, даже при отказе от ремонта</td>
              </tr>
              <tr>
                <td data-name="iPad Pro 9.7"></td>
                <td>Замена стекла</td>
                <td>от 20 мин</td>
                <td>19990 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Pro 9.7"></td>
                <td>Замена дисплея</td>
                <td>от 20 мин</td>
                <td>19990 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Pro 9.7"></td>
                <td>Замена заднего корпуса</td>
                <td>от 20 мин</td>
                <td>12990 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Pro 9.7"></td>
                <td>Замена верхнего шлейфа (проблема с кнопками)</td>
                <td>от 30 мин</td>
                <td>5490 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Pro 9.7"></td>
                <td>Замена нижнего шлейфа (проблема с зарядкой)</td>
                <td>от 30 мин</td>
                <td>5790 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Pro 9.7"></td>
                <td>Замена шлейфа кнопки "Home"</td>
                <td>от 20 мин</td>
                <td>6490 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Pro 9.7"></td>
                <td>Замена динамика</td>
                <td>от 20 мин</td>
                <td>5490 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Pro 9.7"></td>
                <td>Замена микрофона</td>
                <td>от 20 мин</td>
                <td>5490 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Pro 9.7"></td>
                <td>Замена аккумулятора</td>
                <td>от 20 мин</td>
                <td>9990 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Pro 9.7"></td>
                <td>Замена камеры</td>
                <td>от 20 мин</td>
                <td>5490 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Pro 9.7"></td>
                <td>Ремонт после попадания влаги</td>
                <td>от 50 мин</td>
                <td>от 1000 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Pro 9.7"></td>
                <td>Прошивка и разблокировка iPad</td>
                <td>от 50 мин</td>
                <td>от 990 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Pro 9.7"></td>
                <td>Ремонт материнской платы</td>
                <td>от 2 дней</td>
                <td>от 1500 ₽</td>
              </tr>
            </tbody>
        </table>
				</TabPanel>
        <TabPanel>
        <table>
            <tbody>
              <tr>
                <td>Устройство</td>
                <td>Услуга</td>
                <td>Время ремонта</td>
                <td>Стоимость. Включает в себя работу мастера и стоимость детали.</td>
              </tr>
              <tr>
                <td data-name="iPad Pro 12.9"></td>
                <td>Диагностика</td>
                <td></td>
                <td>Бесплатно, даже при отказе от ремонта</td>
              </tr>
              <tr>
                <td data-name="iPad Pro 12.9"></td>
                <td>Замена стекла</td>
                <td>от 20 мин</td>
                <td>29900 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Pro 12.9"></td>
                <td>Замена дисплея</td>
                <td>от 20 мин</td>
                <td>29900 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Pro 12.9"></td>
                <td>Замена заднего корпуса</td>
                <td>от 20 мин</td>
                <td>14990 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Pro 12.9"></td>
                <td>Замена верхнего шлейфа (проблема с кнопками)</td>
                <td>от 30 мин</td>
                <td>5490 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Pro 12.9"></td>
                <td>Замена нижнего шлейфа (проблема с зарядкой)</td>
                <td>от 30 мин</td>
                <td>5790 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Pro 12.9"></td>
                <td>Замена шлейфа кнопки "Home"</td>
                <td>от 20 мин</td>
                <td>6490 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Pro 12.9"></td>
                <td>Замена динамика</td>
                <td>от 20 мин</td>
                <td>5490 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Pro 12.9"></td>
                <td>Замена микрофона</td>
                <td>от 20 мин</td>
                <td>5490 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Pro 12.9"></td>
                <td>Замена аккумулятора</td>
                <td>от 20 мин</td>
                <td>13490 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Pro 12.9"></td>
                <td>Замена камеры</td>
                <td>от 20 мин</td>
                <td>6490 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Pro 12.9"></td>
                <td>Ремонт после попадания влаги</td>
                <td>от 50 мин</td>
                <td>от 1000 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Pro 12.9"></td>
                <td>Прошивка и разблокировка iPad</td>
                <td>от 50 мин</td>
                <td>от 990 ₽</td>
              </tr>
              <tr>
                <td data-name="iPad Pro 12.9"></td>
                <td>Ремонт материнской платы</td>
                <td>от 2 дней</td>
                <td>от 1500 ₽</td>
              </tr>
            </tbody>
        </table>
				</TabPanel>
			</Tabs>
		
  </div>
 );
}
}

export default Table