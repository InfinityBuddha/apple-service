import React from 'react'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import tabs from './tabs.css'

const iPad = (props) => (

    <div className={tabs.container}>
        <h1 className={tabs.title}>Ремонт iPad</h1>
        <Tabs>
            <Tabs>
                <TabList className={tabs.list}>
                    <Tab className={tabs.item} selectedClassName={tabs.activeTab}>iPad 2</Tab>
                    <Tab className={tabs.item} selectedClassName={tabs.activeTab}>iPad 3</Tab>
                    <Tab className={tabs.item} selectedClassName={tabs.activeTab}>iPad 4</Tab>
                    <Tab className={tabs.item} selectedClassName={tabs.activeTab}>iPad Air</Tab>
                    <Tab className={tabs.item} selectedClassName={tabs.activeTab}>iPad Air 2</Tab>
                    <Tab className={tabs.item} selectedClassName={tabs.activeTab}>iPad Mini 1</Tab>
                    <Tab className={tabs.item} selectedClassName={tabs.activeTab}>iPad Mini 2</Tab>
                    <Tab className={tabs.item} selectedClassName={tabs.activeTab}>iPad Mini 3</Tab>
                    <Tab className={tabs.item} selectedClassName={tabs.activeTab}>iPad Mini 4</Tab>
                    <Tab className={tabs.item} selectedClassName={tabs.activeTab}>iPad Pro 9.7</Tab>
                    <Tab className={tabs.item} selectedClassName={tabs.activeTab}>iPad Pro 12.9</Tab>
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
        </Tabs>
    </div>

);

export default iPad