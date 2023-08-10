import React, { Fragment } from "react";
import style from './Cart.module.css';
import { CartFill } from 'react-bootstrap-icons';
const Cart = ({list , RemovefromCart}) => {
    return (
        <Fragment>
            <div className={style.cartcontainer}>
                <div className={style.iconcont}>
                    <CartFill  className={style.carticon}/>
                    <p>{list.length}</p>
                </div>
                <main>
                    <div className={style.maincart}>
                        {
                            list.map(({image, oldPrice ,offer ,name}, idx)=>(<Fragment key={idx}>
                            <div>
                                <div className={style.image} style={{backgroundImage :`url(${image})`}}></div>
                                <div className={style.cartdetail}>
                                    <h3>{name}</h3>
                                    <div className={style.cartfooter}>
                                        <div className={style.info}>
                                            <span>
                                                <sub>EGP</sub>
                                                <p>{(oldPrice * (offer/100)).toFixed(2)}</p>
                                            </span>
                                            <span>
                                                <del>{oldPrice}</del>
                                                <p>{offer}% off</p>
                                            </span>
                                        </div>
                                        <button onClick={(e)=>RemovefromCart(e,idx)}>Remove</button>
                                    </div>
                                </div>
                            </div>
                            <div className={style.hr}></div> </Fragment>))
                        }
                        
                        
                    </div>
                </main>
            </div>
        </Fragment>
    );
}
export default Cart;