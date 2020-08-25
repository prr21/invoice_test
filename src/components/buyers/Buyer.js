import React from 'react'
import './buyer.sass'

export default function Buyer({ itemId }){
  return (
    <div className="content-center">
      <h1 className="display-1">{ itemId }</h1>
    </div>
  )
}
