import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps'
import map from '../../../public/map.svg'
import visa from '../../../public/visa.svg'
import chek from '../../../public/chek.svg'
import './index.scss'
import { Link } from 'react-router-dom'

function Ordering() {
    return (
        <div className='container'>
            <section className='ordering'>
                <h3 className='ordering__title'>Оформление заказа</h3>
                <div className="ordering__wrapper">
                    <div className="ordering__left left">
                        <div className="left__top">
                            <h4 className="left__title">Доставка курьером</h4>
                            <span className='left__price'>  499 ₸</span>
                        </div>
                        <div className="left__middle">
                            <YMaps >
                                <Map
                                    width={375}
                                    height={146}
                                    defaultState={{
                                        center: [41.309591, 69.280598],
                                        zoom: 9,
                                        controls: ["zoomControl", "fullscreenControl"],
                                    }}
                                    modules={["control.ZoomControl", "control.FullscreenControl"]}
                                >
                                    <Placemark defaultGeometry={[41.309591, 69.280598]} />
                                </Map>
                            </YMaps>
                            <div className="left__map">
                                <img src={map} alt="location icon" width={20} height={22} />
                                <p className='left__map-text'>Адрес доставки</p>
                            </div>
                        </div>
                        <form className='left__from'>
                            <select className='left__section' name='select'>
                                <option selected disabled value="Город">Город </option>
                                <option value="Yunusabad">Yunusabad </option>
                                <option value="Mirzo Ulug'bek">Mirzo Ulug'bek </option>
                                <option value="Chilonzor">Chilonzor </option>
                            </select>
                            <div className="left__form-input">
                                <input type="text" placeholder='Улица / Район' />
                            </div>
                            <div className="left__form-inner">
                                <div className="left__form-inputs">
                                    <input type="text" placeholder='Дом' />
                                </div>
                                <div className="left__form-inputs">
                                    <input type="text" placeholder='Подъезд' />
                                </div>
                                <div className="left__form-inputs">
                                    <input type="text" placeholder='Квартира' />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="ordering__right right">
                        <div className="right__order order">
                            <h4 className="order__title">Ваш заказ</h4>
                            <div className="order__inner">
                                <span className='order__count'>1x</span>
                                <div className="order__left">
                                    <p className='order__text'>Наушники Apple BYZ S852I</p>
                                    <p className='order__text'>Доставка</p>
                                    <p className='order__text'>К оплате</p>
                                </div>
                                <div className="order__right">
                                    <span className='order__price'>₸ 2 927</span>
                                    <span className='order__price'>₸ 2 927</span>
                                    <span className='order__price'>₸ 2 927</span>
                                </div>
                            </div>
                        </div>
                        <div className="right__payment payment">
                            <h4 className="payment__title">Способ оплаты</h4>
                            <div className="payment__cart">
                                <img src={visa} alt="visa icon" />
                                <p className='payment__text'>Счет на kaspi.kz</p>
                            </div>
                            <div className="payment__cart">
                                <img src={chek} alt="promo icon" />
                                <p className='payment__text-code'>Есть промокод?</p>
                            </div>
                        </div>
                        <div className="right__number number">
                            <h4 className="number__title">Номер получателя</h4>
                            <div className="number__input">
                                <input type="text" placeholder='+7 ___ ___ __ __' />
                            </div>
                        </div>
                        <Link to='/ordered' className='right__link'>
                            <button className="right__btn">
                                Закончить оформление
                            </button>
                        </Link>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default Ordering