import React from 'react'

import './cart-item.scss'

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item">
        <div className="item-details">
          <span className="name"> {name} </span>
          <span className="price">
            {' '}
            {quantity} * ${price}{' '}
          </span>
        </div>
      </div>
    </div>
  )
}
export default CartItem
