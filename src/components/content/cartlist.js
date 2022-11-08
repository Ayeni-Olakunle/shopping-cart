import React from 'react';
import { useState } from 'react';
import cartStyle from './cartlist.module.scss';
import myProduct from '../content/product';
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';

export default function Cartlist(props) {
    const [num, setNum] = useState(0);
    return (
        <div className={cartStyle.holdCartPage}>
            <h3>Cart</h3>
            <div>
                <div className={cartStyle.holdMini}>
                    {myProduct.map((item, index) => {
                        if (item.addToCart === true) {
                            console.log(item);
                            return (

                                <div className={cartStyle.holdMain}>
                                    <div>
                                        <p className={cartStyle.miniClothName}>{item.productName}</p>
                                        <p className={cartStyle.miniPric}>${item.productPrice}</p>
                                        <p className={cartStyle.size}>Size:</p>
                                        <div className={cartStyle.holdSize}>
                                            <span className={cartStyle.boxesSma}>XS</span>
                                            <span className={cartStyle.boxesSma}>S</span>
                                            <span className={cartStyle.boxesSma}>M</span>
                                            <span className={cartStyle.boxesSma}>L</span>
                                        </div>
                                        <p className={cartStyle.size}>Color:</p>
                                        <div className={cartStyle.holdColorType}>
                                            <div className={cartStyle.colorType} style={{ backgroundColor: `${item.colorAvailable[0]}` }}></div>
                                            <div className={cartStyle.colorType} style={{ backgroundColor: `${item.colorAvailable[1]}` }}></div>
                                            <div className={cartStyle.colorType} style={{ backgroundColor: `${item.colorAvailable[2]}` }}></div>
                                        </div>
                                    </div>
                                    <div className={cartStyle.holdImageCart}>
                                        <div className={cartStyle.miniIncrease}>
                                            <div className={cartStyle.incres} onClick={() => {
                                                setNum(num + 1);
                                            }}><AiOutlinePlusSquare /></div>
                                            <div>{num}</div>
                                            <div className={cartStyle.incres} onClick={() => {
                                                if (num === 0) {
                                                    setNum(0);
                                                } else {
                                                    setNum(num - 1);
                                                }
                                            }}><AiOutlineMinusSquare /></div>
                                        </div>
                                        <div className={cartStyle.miniCartImagde}>
                                            <img src={item.productImage} alt="Product" className={cartStyle.imWidth} />
                                        </div>
                                    </div>
                                </div>

                            )
                        }
                    })}
                    <div>
                        <p><span>    padding: 15px;</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

