import React, {Component} from 'react'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs'
import tabs from './styles.css'

class iPhone extends Component {
    constructor() {
        super()
        this.state = {tabIndex: 0};
    }

    render() {
        return (
            <div className={tabs.container}>
                <h1 className={tabs.title}>Ремонт iPhone</h1>
                <Tabs>
                    <Tabs className={tabs.reactTabs}>
                        <TabList className={tabs.list}>
                            <Tab className={tabs.item} selectedClassName={tabs.activeTab}>iPhone 4</Tab>
                            <Tab className={tabs.item} selectedClassName={tabs.activeTab}>iPhone 4s</Tab>
                            <Tab className={tabs.item} selectedClassName={tabs.activeTab}>iPhone 5</Tab>
                            <Tab className={tabs.item} selectedClassName={tabs.activeTab}>iPhone 5s</Tab>
                            <Tab className={tabs.item} selectedClassName={tabs.activeTab}>iPhone 5c</Tab>
                            <Tab className={tabs.item} selectedClassName={tabs.activeTab}>iPhone SE</Tab>
                            <Tab className={tabs.item} selectedClassName={tabs.activeTab}>iPhone 6</Tab>
                            <Tab className={tabs.item} selectedClassName={tabs.activeTab}>iPhone 6 Plus</Tab>
                            <Tab className={tabs.item} selectedClassName={tabs.activeTab}>iPhone 6s</Tab>
                            <Tab className={tabs.item} selectedClassName={tabs.activeTab}>iPhone 6s Plus</Tab>
                            <Tab className={tabs.item} selectedClassName={tabs.activeTab}>iPhone 7</Tab>
                            <Tab className={tabs.item} selectedClassName={tabs.activeTab}>iPhone 7 Plus</Tab>
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
                </Tabs>
            </div>
        )
    }
}
export default iPhone