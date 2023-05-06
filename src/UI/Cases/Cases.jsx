import './index.scss'
import likeBlack from '../../../public/likeBlackl.svg'
import likes from '../../../public/like.svg';
import star from '../../../public/star.svg';
import { useEffect, useState } from 'react';
import postApi from '../../api/post';

function Cases({ data }) {

    // const [categories, setCategories] = useState([])

    // useEffect(() => {
    //     el?.length > 0 && el.map((item) => {
    //         return (postApi.getCategorySingle(item).then(res => setCategories(res.data)))
    //     })
    // }, [])
    // console.log(categories);

    const [like, setLike] = useState(false)
    // if (like) {
    //     localStorage.setItem('like', like)
    // } else if(!like) {
    //     localStorage.clear()
    // }
    // const liked = localStorage.getItem('like')

    console.log(data);
    return (
        <li className="card">
            <div className="card__top">
                <img onClick={() => setLike(like ? false : true)} src={like ? likeBlack : likes} alt=" like icon" width={20} height={18.5} className='card__top-img' />
                <img src={data.image} alt="name" width={219.8} height={295} className='card__img-main' />
            </div>
            <div className="card__bottom">
                <div className="card__inner">
                    <h4 className="card__title">{data.title}</h4>

                    <span className='card__sp'>3527 ₸</span>
                </div>
                <div className="card__reting">
                    <img src={star} alt="star icon" />
                    <span className='card__sp-star'> {data.rating.rate}</span>
                </div>
            </div>
        </li>
    )
}

export default Cases