import React from 'react'
import logo from '../../../public/logo.svg'
import lang from '../../../public/lang.svg'
import wk from '../../../public/wk.svg'
import instagram from '../../../public/instagram.svg'
import telegram from '../../../public/telegram.svg'
import whatsapp from '../../../public/whatsapp.svg'
import { Link } from 'react-router-dom'
import './index.scss'

function Footer() {
    return (
        <div className="container">
            <div className='foo '>
                <Link to="/">
                    <img src={logo} alt="QPICK logo" width={85} height={30} />
                </Link>

                <div className="foo__middle-left">
                    <ul className='foo__list'>
                        <li className='foo__item'><Link to='/' className='foo__link'>Избранное</Link></li>
                        <li className='foo__item'><Link to='/card' className='foo__link'>Корзина</Link></li>
                        <li className='foo__item'><Link to='/contacts' className='foo__link'>Контакты</Link></li>
                    </ul>
                </div>
                <div className="foo__middle-right">
                    <p className='foo__item'><Link to='/service-requirements' className='foo__link'>Условия сервиса</Link></p> 
                    <div className="foo__lang">
                        <img src={lang} alt="lang icon" />
                        <ul className='foo__list-lang'> 
                            <li className='foo__item-lang'>Каз</li>
                            <li className='foo__item-lang'>Рус</li>
                            <li className='foo__item-lang'>Eng</li>
                        </ul>
                    </div>
                </div>
                <div className="foo__social">
                    <img src={wk} alt="wk icon" />
                    <img src={instagram} alt="instagram icon" />
                    <img src={telegram} alt="telegram icon" />
                    <img src={whatsapp} alt="whatsapp icon" />
                </div>
            </div>
        </div>
    )
}

export default Footer