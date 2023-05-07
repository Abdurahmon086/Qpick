import { Link } from 'react-router-dom'
import './index.scss'

function Ordered() {
    return (
        <div className='container'>
            <section className='ordered'>
                <ul className='ordered__list'>
                    <li className='ordered__item'>
                        <p className='ordered__text'>
                            Номер вашего заказа №123123, с Вами свяжется наш менеджер.
                        </p>
                    </li>
                </ul>
                <Link to='/' className='ordered__link'>
                    <button className='ordered__btn'>На главную</button>
                </Link>
            </section>
        </div>
    )
}

export default Ordered