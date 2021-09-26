import React from 'react';
import'./cart.css'
const Cart = (props) => {
    //add cart  procces
    const {cart} = props;
    let toatal = 0;
    let name = [];
    for(const profile of cart){
        toatal = toatal +profile.charge;
         name.push(profile.name);
    }
    
    return (
        <div className="addcart">
            <div className="greens">
            <h3><i className="fas fa-user-check"></i> hired: {cart.length} developers</h3>
            </div>
            <div className="addname">
            {
                //this map for name 
                name.map(name => <h3>{name}</h3>)
            }
            </div>
            <div>
            <h3 className="greens">Toatal: ${toatal}</h3>
            </div>
        </div>
    );
};

export default Cart;