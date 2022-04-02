import React from 'react'

import CustomButton from '../custom-button/custom-button.component'

import './cart-dropdown.scss'

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <CustomButton>Check Out</CustomButton>
      </div>
    </div>
  )
}

export default CartDropdown
