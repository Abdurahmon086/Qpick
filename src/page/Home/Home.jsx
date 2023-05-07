import React, { useEffect, useState } from 'react'
import './index.scss'
import bgImage from '../../../public/Banner.png'
import postApi from '../../api/post'
import Cases from '../../UI/Cases/Cases'
function Home() {

  const [products, setProducts] = useState([])
  useEffect(() => {
    postApi.getAll().then(res => setProducts(res.data)).catch(e => console.log(e.message))
  }, [])


  return (
    <div className="container">
      <div className='hero'>
        <div className="hero__bg">
          <img src={bgImage} alt="baground image" className='hero__img' />
        </div>
        <ul className='hero__list'>
          {
            products.length > 0 && products?.map((item) => {
              return (
                <Cases key={item.id} data={item} />
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Home