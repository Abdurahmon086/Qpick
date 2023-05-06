import React from 'react'
import Cases from './Cases/Cases'

function List({item}) {
    return (
        <li className='list'>
            <h4>{item}</h4>
            <Cases  />
        </li>
    )
}

export default List