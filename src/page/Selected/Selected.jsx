import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps'
import del from '../../../public/delete.svg'
import car from '../../../public/car.svg'
import './index.scss'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { dec, inc, remove } from '../../redux/action/action'
import ErrorCard from '../../components/Error/ErrorCard'
import { useState } from 'react'
function Selected() {

    const { data, count } = useSelector(res => res)
    const dispatch = useDispatch()
    localStorage.setItem('data', JSON.stringify(data))
    const [sum, setSum] = useState({})
    const total = ((sum.qty + 1) * sum.price) + 3

    localStorage.setItem('total', JSON.stringify(total))
    return (
        <div className='container'>

            {data && data.length > 0 ? <section className="selected">
                <h4 className="selected__title">Корзина</h4>
                <div className="selected__wrapper">
                    <div className="selected__left">
                        <ul className="selected__list cards">
                            {
                                data.map((item) => {
                                    return <li className="cards__item" key={item.id}>
                                        <img onClick={() => dispatch(remove(item.id))} src={del} alt="delete icon" className='cards__delete' />
                                        <div className="cards__top">
                                            <img src={item.image} alt={item.title} width={146} height={136} />
                                            <div className="cards__inner">
                                                <h4 className="cards__title">{item.title}</h4>
                                                <span className='cards__sp'>{item.price}$</span>
                                            </div>
                                        </div>
                                        <div className="cards__bottom">
                                            <div className="cards__left">
                                                <button className='cards__btn' onClick={() => {
                                                    if (item.qty > 1) {
                                                        (dispatch(dec(item.id)), setSum({ qty: item.qty, price: item.price }))
                                                    } else {
                                                        dispatch(remove(item.id))
                                                    }
                                                }}> -</button>
                                                <p className='cards__count'>{item.qty}</p>
                                                <button className='cards__btn' onClick={() => (dispatch(inc(item.id)), setSum({ qty: item.qty, price: item.price }))}>+</button>
                                            </div>
                                            <div className="cards__right">
                                                <span className='cards__total-price'> {item.qty * item.price}$</span>
                                            </div>
                                        </div>
                                    </li>
                                })
                            }
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
                            <span className='selected__total-price'>{total}$</span>
                        </div>
                        <Link to='/ordering' className='selected__link'>
                            <button className='selected__total-btn'>
                                Перейти к оформлению
                            </button>
                        </Link>
                    </div>
                </div>
            </section > : <ErrorCard />}
        </div >
    )
}

export default Selected