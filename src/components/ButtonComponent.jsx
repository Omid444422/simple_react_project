import React from 'react'

export default function Button(props) {
  return (
    <button className='btn btn-success' disabled={props.loading} onClick={()=>props.submit()}>
    {props.loading == true ? 'در حال پردازش' : 'ثبت'}
    </button>
  )
}
