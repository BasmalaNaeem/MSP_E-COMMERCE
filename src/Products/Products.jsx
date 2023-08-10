import React from "react";
import style from './Products.module.css';
const Products = ({list,addtoCart}) => {
    return(
        <div className={style.prod}>
            {
                list.map(({image, oldPrice ,offer ,name}, idx)=>(
                    <div key={idx}>
                <div className={style.image} style={{backgroundImage :`url(${image})`}}></div>
                <div className={style.details}>
                    <h3>{name}</h3>
                    <span>
                        <sub>EGP</sub>
                        <p>{(oldPrice * (offer/100)).toFixed(2)}</p>
                    </span>
                    <span>
                        <del>{oldPrice}</del>
                        <p>{offer}% off</p>
                    </span>
                    <button onClick={(e)=>addtoCart(e, idx)}>Add To Cart</button>
                </div>
            </div>
            
                ))
            }
            
        </div>
    );
}
export default Products;