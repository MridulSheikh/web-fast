import React, {  } from 'react';
import"./load.css";

const Load = (props) => {
    //distructuring profile
       const {name, img, experiance, language, skill, charge} = props.profile;
    return (
        <div>
        <div className='profilecart'>
        <div className="image">
        <img src={img} alt="" />
        </div>
        <div className="about">
        <div className="name"><h3>Hi i'm {name}</h3></div>
        <p>language: {language}</p>
        <h3>$ {charge} per month</h3>
        <p>professional {skill}</p>
        <p>Experience: {experiance} year</p>
        <button className='button' onClick ={()=>props.handleAddtocart(props.profile)}><i className="far fa-handshake"></i>Hire me</button>
        </div>
        </div>
        </div>
    );
};

export default Load;