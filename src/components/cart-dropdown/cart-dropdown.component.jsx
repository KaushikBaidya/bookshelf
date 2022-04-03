import React from 'react'
import { connect } from 'react-redux'

import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../../cart/cart-item.component'
import { selectCartItems } from '../../redux/cart/cart.selector'

import './cart-dropdown.scss'

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>Check Out</CustomButton>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
})

export default connect(mapStateToProps)(CartDropdown)
