import React from 'react'

export default function (props) {
  return (
    <div className='border border-success rounded-3 p-3'>
        
        <div className='d-flex justify-content-between'>
            <span>نام محصول: {props.name}</span>
            <span>قیمت محصول: {props.price}</span>
        </div>

        <p className='mt-2'>توضیحات: {props.desc}</p>

    </div>
  )
}
