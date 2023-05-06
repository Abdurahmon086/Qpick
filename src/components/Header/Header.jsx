import { Link, NavLink } from 'react-router-dom'
import logo from '../../../public/logo.svg'
import mobile from '../../../public/mobile.svg'
import like from '../../../public/like.svg'
import basket from '../../../public/basket.svg'
import postApi from '../../api/post'
import './index.scss'
import { useEffect, useState } from 'react'


function Header() {
    const [category, setCategory] = useState([])
    const [listClick, setListClick] = useState(false)

    useEffect(() => {
        postApi.getCategory().then(res => setCategory(res.data))
    }, [])
    const a = 2

    return (
        <div className='head container'>
            <div className="head__inner">
                <Link to="/">
                    <img src={logo} alt="QPICK logo" />
                </Link>
                <nav className='head__navlink'>
                    <img src={mobile} alt="mobile icon" width={15} height={21} />
                    <ul className='head__list icon-bottom' onClick={() => setListClick(listClick ? false : true)}>
                        <h5 className='head__title'>Выбрать модель телефона</h5>
                        <div className="h">
                            {listClick ? (
                                category.map((item, i) => {
                                    return (
                                        <li key={i} className='head__item item'>
                                            <p className='head__item-text'>{item}</p>
                                            <ul className="item__list"> <li className='item__items'><p className='item__text'>iPhone 12</p></li>
                                            </ul>
                                        </li>)
                                })
                            ) : ''}
                        </div>
                    </ul>
                </nav>
            </div>
            <div className="head__right">
                <div className="head__icon icon">
                    <img className='icon__img' src={like} alt="like icon" width={22} height={20} />
                    {a.length == 0 ? '' : <p className='icon__text'>{a}</p>}
                </div>
                <div className="head__icon icon">
                    <NavLink to='/card' >
                        <img className='icon__img' src={basket} alt="basket icon" width={22} height={20} />
                    {a.length == 0 ? '' : <p className='icon__text'>{a}</p>}
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header