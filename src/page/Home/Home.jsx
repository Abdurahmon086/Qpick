import React, { useEffect, useState } from 'react'
import './index.scss'
import bgImage from '../../../public/Banner.png'
import postApi from '../../api/post'
import Cases from '../../UI/Cases/Cases'
import { Link } from 'react-router-dom'
function Home() {

  // const [category, setCategory] = useState([])
  const [products, setProducts] = useState([])

  useEffect(() => {
    // postApi.getCategory().then(res => setCategory(res.data))
    postApi.getAll().then(res => setProducts(res.data)).catch(e => console.log(e.message))
  }, [])
  return (
    <div className="container">
      <div className='hero'>
        <div className="hero__bg">
          <img src={bgImage} alt="baground image" width={1100} />
        </div>
        <ul className='hero__list'>
          {
            products.length > 0 && products?.map((item) => {
              return (
                <Link to={`/products/singleproduct/${item.id}`} key={item.id} className='hero__title'>
                  <Cases data={item} />
                </Link>)
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Home