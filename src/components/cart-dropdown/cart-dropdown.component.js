import React from 'react';
import './cart-dropdown.style.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selector';



const cartDropdown = ({cartItems})=>(
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(cartItem=>(<CartItem key={cartItem.id} item={cartItem}/>))
            }
        </div>
        <CustomButton >GO TO YOUR CART</CustomButton>
    </div>
);

const mapStateToProps=(state)=>({
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(cartDropdown);