import './index.scss'
import { Link } from 'react-router-dom';
import likeBlack from '../../../public/likeBlackl.svg'
import likeIcon from '../../../public/like.svg';
import star from '../../../public/star.svg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addLike } from '../../redux/action/action';

function Cases({ data }) {

    const dispatch = useDispatch()
    const [like, setLike] = useState(false)
    return (
        <li className="card">
            <img id={data.id} className='card__top-img' onClick={(e) => (setLike(like ? false : true), dispatch(addLike(data)))} src={like ? likeBlack : likeIcon} alt=" like icon" width={20} height={18.5} />
            <Link to={`/products/singleproduct/${data.id}`} className='hero__title'>

                <div className="card__top">
                    <img src={data.image} alt="name" className='card__img-main' />
                </div>
                <div className="card__bottom">
                    <div className="card__inner">
                        <h4 className="card__title">{data.title}</h4>

                        <span className='card__sp'>{data.price}$</span>
                    </div>
                    <div className="card__reting">
                        <img src={star} alt="star icon" />
                        <span className='card__sp-star'> {data.rating.rate}</span>
                    </div>
                </div>
            </Link>
        </li >
    )
}

export default Cases