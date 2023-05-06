import { Link } from 'react-router-dom'
import errBasket from '../../../public/Illustration.png'
import './ErrorCard.scss'

function ErrorCard() {
    return (
        <div className='container'>
            <div className="error-card">
                <img src={errBasket} alt="errBasket image" />
                <h3 className="error-card__title"> Корзина пуста </h3>
                <p className='error-card__text'>Но это никогда не поздно исправить :)</p>
                <button className='error-card__btn'> <Link to='/' className='error-card__link'> В каталог товаров</Link></button>
            </div>
        </div>
    )
}

export default ErrorCard