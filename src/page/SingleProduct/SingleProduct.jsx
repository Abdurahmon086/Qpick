import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import postApi from '../../api/post';
import likeBlack from '../../../public/likeBlackl.svg'
import likeIcon from '../../../public/like.svg';
import telegram from '../../../public/telegram.svg';
import basket from '../../../public/basket.svg'
import './index.scss'
import { useDispatch, useSelector } from 'react-redux';
import { addData, addLike } from '../../redux/action/action';

function SingleProduct() {
    const { id } = useParams()
    const [single, setSingle] = useState([])
    const [open, setOpen] = useState(false)
    const [like, setLike] = useState(false)

    useEffect(() => {
        postApi.getSingle(id).then(res => setSingle(res.data))
    }, [])
    const dispatch = useDispatch()
    const { data } = useSelector(res => res)
    localStorage.setItem('data', JSON.stringify(data))
    return (
        <div className='container'>
            <div className="single">
                <h4 className="single__category">{single.category}</h4>
                <div className="single__card card">
                    <img onClick={(e) => (setLike(like ? false : true), dispatch(addLike(single)))} src={like ? likeBlack : likeIcon} alt="like icon" className="card__like" />
                    <img src={single.image} alt={single.title} className='card__image' />
                    <div className="card__bottom">
                        <div className="card__left">
                            <h4 className="card__title">{single.title}</h4>
                        </div>
                        <div className="card__right">
                            <span className='card__sp'>{single.price}$</span>
                        </div>
                    </div>
                </div>
                <div className="single__discription discription">
                    <div className="discription__left">
                        <button className='discription__btn' onClick={() => setOpen(open ? false : true)}>Описание и характеристики</button>
                        <div className="discription__list" style={open ? { display: "block" } : { display: "none" }}>
                            <p className='discription__text' >{single.description}</p>
                        </div>
                    </div>
                    <div className="discription__right">
                        <Link to='/selected'>
                            <button onClick={() => dispatch(addData(single))} className='discription__buy'>Купить!</button>
                        </Link>
                        <button onClick={() => dispatch(addData(single))} className='discription__basket'><img src={basket} alt="basket icon" /> Добавить в корзину</button>
                    </div>
                    <div className="discription__bottom bottom">
                        <button className='bottom__basket' onClick={() => dispatch(addData(single))}><img src={basket} alt="basket icon" /></button>
                        <Link to='/selected' className='bottom__link-cart'>
                            <button className='bottom__cart' onClick={() => dispatch(addData(single))}>Купить сейчас!</button>
                        </Link>
                        <button className='bottom__link'><a href='#'> <img src={telegram} alt="telegram icon" /></a></button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SingleProduct