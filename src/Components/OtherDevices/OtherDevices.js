import React, {Component} from 'react';
import s from './styles.module.scss'
import phonePhoto from '../../img/other.jpg'

export class OtherDevices extends Component {

    render() {
        return (
            <div className={s.container}>
                <h1 className={s.title}>Ремонт других устройств</h1>
                <div className={s.contentWrapper}>
                    <div className={s.textWrapper}>
                        <h2>Любые модели</h2>
                        <p>RepairBox принимает телефоны любых производителей: Apple, Samsung, Nokia, htc, Lenovo, Philips, Alcatel, LG и многих других. На ремонт дается до  1 месяца гарантии.</p>
                        <h2>Надежность и честность</h2>
                        <p>Перед ремонтом мы подписываем договор. Вам заранее скажут цену ремонта. Цена не изменится из-за наценок или непредвиденных статей расходов.</p>
                        <h2>Бесплатная диагностика</h2>
                        <p>Привозите телефон на бесплатную диагностику в сервис. Диагностика остается бесплатной, даже если вы откажетесь от ремонта.</p>
                    </div>
                    <div className={s.photoWrapper}>
                        <img className={s.phonePhoto} src={phonePhoto} alt='Другие устройства'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default OtherDevices;
