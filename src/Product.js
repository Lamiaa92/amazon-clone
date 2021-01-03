import React from 'react';
import "./Product.css";

function Product() {
    return (
        <div className="product">
            <div className="product__info">
                <p>The lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product__rating">
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>
                </div>
            </div>

            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLDGCIreAxtmYES-b0drzc9kxKX5KwHC37Y7tNeuJIxQXCl6TOkQMiDPzxgwnq2IpBrpKtQ8ED&usqp=CAc" alt="" />
            <button>Add to Basket</button>
        </div>
    )
}

export default Product;
