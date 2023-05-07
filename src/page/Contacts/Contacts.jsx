import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import map from '../../../public/map.svg'
import telegram from '../../../public/telegram.svg'
import watsapp from '../../../public/whatsapp.svg'
import wk from '../../../public/wk.svg'
import instagram from '../../../public/instagram.svg'
import tel from '../../../public/tel.svg'
import './index.scss'
import { Link } from 'react-router-dom';

function Contacts() {

    return (
        <div className='container'>
            <div className="contact">
                <div className="contact__wrapper">
                    <div className="contact__left">
                        <h4 className="contact__title">Наш офис</h4>
                        <YMaps>
                            <Map
                                width={722}
                                height={424}
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
                        <div className="contact__bottom-left">
                            <img src={map} alt="location icon" />
                            <div className="contact__inner">
                                <h4 className="contact__adress">Аксай-3а, 62ф, Алматы, Казахстан</h4>
                                <p className='contact__text'>3 этаж 35 кабинет</p>
                            </div>
                        </div>
                    </div>
                    <div className="contact__right">
                        <ul className='contact__list'>
                            <li className='contact__item'> <a href="#"><img src={watsapp} alt="whatsapp icon" /></a> </li>
                            <li className='contact__item'><a href="#"> <img src={wk} alt="wk icon" /></a></li>
                            <li className='contact__item'><a href="#"><img src={instagram} alt="instagram icon" /></a></li>
                            <li className='contact__item'><a href="#"> <img src={telegram} alt="telegram icon" /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="contact__bottom">
                    <img src={tel} alt="telefon icon" />
                    <span className='contact__tel'>+7 777 777 77 77</span>
                </div>
                <Link to='/' className='contact__link-h'>
                <button className='contact__btn-home'>На главную</button>
                </Link>
            </div>
        </div >
    )
}

export default Contacts