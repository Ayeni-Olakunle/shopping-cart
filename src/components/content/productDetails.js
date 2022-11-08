import React from 'react';
import { useState } from 'react';
import cartStyle from './productDetails.module.scss';

export default function ProductDetails(props) {
    return (
        <div className={cartStyle.holdCartPage}>
            <h3>Cart</h3>
            <div>
                <div className={cartStyle.holdMini}>
                    <div className={cartStyle.holdMain}>
                        <div>
                            <p className={cartStyle.miniClothName}></p>
                            <p className={cartStyle.miniPric}>$</p>
                            <p className={cartStyle.size}>Size:</p>
                            <div className={cartStyle.holdSize}>
                                <span className={cartStyle.boxesSma}>XS</span>
                                <span className={cartStyle.boxesSma}>S</span>
                                <span className={cartStyle.boxesSma}>M</span>
                                <span className={cartStyle.boxesSma}>L</span>
                            </div>
                            <p className={cartStyle.size}>Color:</p>
                            <div className={cartStyle.holdColorType}>
                                <div className={cartStyle.colorType}>dwdq</div>
                                <div className={cartStyle.colorType}></div>
                                <div className={cartStyle.colorType}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}