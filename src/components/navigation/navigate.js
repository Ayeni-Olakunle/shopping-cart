import React from 'react';
import { RiShoppingBag3Fill } from 'react-icons/ri';
import { BsCurrencyDollar } from 'react-icons/bs';
import { BiDollar } from 'react-icons/bi';
import { AiOutlineShoppingCart, AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';
import navigateStyle from './navigate.module.scss';
import { useState } from 'react';
import myProduct from '../content/product';
import { Link } from 'react-router-dom';

export default function Navigate(props) {
    const [num, setNum] = useState(0);
    const [switMe, setSwitMe] = useState("Women");
    const change = (index) => {
        setSwitMe(index);
    };

    return (
        <section>
            <div className={navigateStyle.holdNav}>
                <div>
                    <button
                        type="button"
                        onClick={() => {
                            change("Women")
                        }}
                        className={switMe === "Women" ? navigateStyle.active : navigateStyle.change}>
                        WOMEN
                    </button>

                    <button
                        type="button"
                        onClick={() => {
                            change("Men")
                        }}
                        className={switMe === "Men" ? navigateStyle.active : navigateStyle.change}>
                        MEN
                    </button>

                    <button
                        type="button"
                        onClick={() => {
                            change("Kids")
                        }}
                        className={switMe === "Kids" ? navigateStyle.active : navigateStyle.change}
                    >
                        KIDS
                    </button>

                </div>
                <div>
                    <RiShoppingBag3Fill className={navigateStyle.shopBag} />
                </div>
                <div className={navigateStyle.holdLast}>
                    <select>
                        <option><BiDollar /><span>USD</span></option>
                        <option><BsCurrencyDollar /><span>EUR</span></option>
                        <option><BsCurrencyDollar /><span>JPY</span></option>
                    </select>
                    <div className={navigateStyle.cartDIs}>
                        <AiOutlineShoppingCart className={navigateStyle.cart} />
                        <div className={navigateStyle.holdMini}>
                            <h3 className={navigateStyle.mainCartNum}>My Bag, 3 items</h3>
                            {myProduct.map((item, index) => {
                                if (item.addToCart === true) {
                                    console.log(item);
                                    return (

                                        <div className={navigateStyle.holdMain}>
                                            <div>
                                                <p className={navigateStyle.miniClothName}>{item.productName}</p>
                                                <p className={navigateStyle.miniPric}>${item.productPrice}</p>
                                                <p className={navigateStyle.size}>Size:</p>
                                                <div className={navigateStyle.holdSize}>
                                                    <span className={navigateStyle.boxesSma}>XS</span>
                                                    <span className={navigateStyle.boxesSma}>S</span>
                                                    <span className={navigateStyle.boxesSma}>M</span>
                                                    <span className={navigateStyle.boxesSma}>L</span>
                                                </div>
                                                <p className={navigateStyle.size}>Color:</p>
                                                <div className={navigateStyle.holdColorType}>
                                                    <div className={navigateStyle.colorType} style={{ backgroundColor: `${item.colorAvailable[0]}` }}></div>
                                                    <div className={navigateStyle.colorType} style={{ backgroundColor: `${item.colorAvailable[1]}` }}></div>
                                                    <div className={navigateStyle.colorType} style={{ backgroundColor: `${item.colorAvailable[2]}` }}></div>
                                                </div>
                                            </div>
                                            <div className={navigateStyle.miniIncrease}>
                                                <div className={navigateStyle.incres} onClick={() => {
                                                    setNum(num + 1);
                                                }}><AiOutlinePlusSquare /></div>
                                                <div>{num}</div>
                                                <div className={navigateStyle.incres} onClick={() => {
                                                    if (num === 0) {
                                                        setNum(0);
                                                    } else {
                                                        setNum(num - 1);
                                                    }
                                                }}><AiOutlineMinusSquare /></div>
                                            </div>
                                            <div className={navigateStyle.miniCartImagde}>
                                                <img src={item.productImage} alt="Product" className={navigateStyle.imWidth} />
                                            </div>
                                        </div>

                                    )
                                }
                            })}
                            <p className={navigateStyle.priceTag}>
                                <span>Total</span>
                                <span>$200.00</span>
                            </p>
                            <div className={navigateStyle.holdViewBag}>
                                <Link to="cartlist">
                                    <button className={navigateStyle.viewBag}>View bag</button>
                                </Link>
                                <button className={navigateStyle.viewBag2}>CHECK OUT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

