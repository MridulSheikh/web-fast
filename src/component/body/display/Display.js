import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Load from '../load-profile/Load';
import'./display.css';
const Display = () => {
    //load data from bd
    const [profile, setProfile]=useState([]);
    //this stat for cart 
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch("./dataBase.JSON")
        .then(res => res.json())
        .then(data => setProfile(data));
    },[])
    //added profile in cart
    const handleAddtocart = (profile)=>{
        const newcart = [...cart, profile];
        setCart(newcart);
    }
    return (
        <>
        <div className="instruction">
        <h1>Find a qualified developer for your project</h1>
        <h3>There are {profile.length} developer Avalable on our website</h3>
        </div>
        <div className='display'>
            <div className='profile'>
           {
               profile.map(profile => <Load
                key ={profile.id}
                profile ={profile} 
                handleAddtocart = {handleAddtocart}
                />)
           }
            </div>
            <div className='cart'>
            <Cart 
            cart={cart}
            />
            </div>
        </div>
        </>
    );
};

export default Display;