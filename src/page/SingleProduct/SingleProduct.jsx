import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import postApi from '../../api/post';
import like from '../../../public/like.svg'
import basket from '../../../public/basket.svg'
import './index.scss'

function SingleProduct() {
    const { id } = useParams()
    const [single, setSingle] = useState([])
    const [open, setOpen] = useState(false)

    useEffect(() => {
        postApi.getSingle(id).then(res => setSingle(res.data))
    }, [])

    return (
        <div className='container'>
            <div className="single">
                <h4 className="single__category">{single.category}</h4>
                <div className="single__card card">
                    <img src={like} alt="like icon" className="card__like" />
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
                        <button className='discription__buy'>Купить!</button>
                        <button className='discription__basket'><img src={basket} alt="" /> Добавить в корзину</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SingleProduct