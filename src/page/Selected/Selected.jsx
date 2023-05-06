import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps'
import del from '../../../public/delete.svg'
import car from '../../../public/car.svg'
import './index.scss'
import { Link } from 'react-router-dom'
function Selected() {
    return (
        <div className='container'>
            <section className="selected">
                <h4 className="selected__title">Корзина</h4>
                <div className="selected__wrapper">
                    <div className="selected__left">
                        <ul className="selected__list cards">
                            <li className="cards__item">
                                <img src={del} alt="delete icon" className='cards__delete' />
                                <div className="cards__top">
                                    <img src="" alt="" width={146} height={136} />
                                    <div className="cards__inner">
                                        <h4 className="cards__title">Apple BYZ S852I</h4>
                                        <span className='cards__sp'>2 927 ₸</span>
                                    </div>
                                </div>
                                <div className="cards__bottom">
                                    <div className="cards__left">
                                        <button className='cards__btn'>-</button>
                                        <p className='cards__count'>1</p>
                                        <button className='cards__btn'>+</button>
                                    </div>
                                    <div className="cards__right">
                                        <span className='cards__total-price'> 2 927 ₸</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="selected__bottom bottom">
                            <h4 className="bottom__title">Доставка</h4>
                            <YMaps >
                                <Map
                                    width={584}
                                    height={173}
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
                            <div className="bottom__inner">
                                <div className="bottom__left">
                                    <img src={car} alt="car icon" />
                                    <p className='bottom__text'>Доставка курьером</p>
                                </div>
                                <span className='bottom__sp'>3$</span>
                            </div>
                        </div>
                    </div>
                    <div className="selected__right">
                        <div className="selected__total">
                            <h4 className="selected__total-title">ИТОГО</h4>
                            <span className='selected__total-price'>₸ 2 927</span>
                        </div>
                        <Link to='/ordering' className='selected__link'>
                            <button className='selected__total-btn'>
                                Перейти к оформлению
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Selected