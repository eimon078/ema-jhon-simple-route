import React from 'react';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { clearTheCart, removeFromDb } from "../../utilities/fakedb";
import { useHistory } from 'react-router';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const history = useHistory();
    const handleRemove = (key) => {
        const remainingCartItem = cart.filter(item => item.key !== key);
        setCart(remainingCartItem);
        removeFromDb(key);
    }
    const handlePlaceOrder = () => {
        setCart([]);
        clearTheCart();
        history.push('./placeorder')
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(reviewItem => <ReviewItem
                        key={reviewItem.key}
                        reviewItem={reviewItem}
                        handleRemove={handleRemove}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className="btn-regular">Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;