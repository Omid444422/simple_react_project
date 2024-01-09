import React from 'react'

export default function InputComponent(props) {
  return (
    <>
        <input type={props.type ?? 'text'} className='form-control' style={{ width:props.width }} placeholder={props.placeholder} value={props.new_product} onChange={(e)=> props.get_data(e)} />
    </>
  )
}
