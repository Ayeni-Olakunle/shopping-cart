import React from 'react';
import { useState } from 'react';
import productMe from "./product";
import categoriesStyle from "./categories.module.scss";
import { AiOutlineShoppingCart } from 'react-icons/ai';

export default function Categories(props) {
    return (
        <section>
            <div>
                <div></div>
                <h3>Category Women</h3>
                <div className={categoriesStyle.holdCatego}>
                    {
                        productMe.map((item, index) => {
                            return (
                                <div className={categoriesStyle.singleCato}>
                                    <div>
                                        <img src={item.productImage} alt="Product" className={categoriesStyle.imWidth} />
                                    </div>
                                    <div className={categoriesStyle.holdCart}>
                                        <div>
                                            <h4 className={categoriesStyle.productName}>{item.productName}</h4>
                                            <p className={categoriesStyle.tproductPrice}>${item.productPrice}</p>
                                        </div>
                                        <div>
                                            <AiOutlineShoppingCart className={categoriesStyle.add} onClick={() => {
                                                sessionStorage.setItem("pro", JSON.stringify(item))
                                            }} />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}

