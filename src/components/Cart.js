import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'



export default function Cart(props) {
    const {cartItems, emptyCart, itemsPrice} = props;
    // const itemsPrice = cartItems.reduce((a,c) => a + c.price, 0);

    function clearCart(item){
        emptyCart(item);
    }

    return (
        <div>

            {cartItems.length !== -1 && (
                <div className="row">
                    <div>
                        <h3>Favorites:</h3>
                        {cartItems.length === 0 && <div> Favorites are empty </div>}
                        <h5>
                            {cartItems.map((item) => (
                                <div>{item.name}, {item.color}  ${item.price}</div>
                            ))}
                        </h5>
                    </div>
                    <div>
                        <h3>Favorites Price: ${itemsPrice}</h3>
                    </div>
                    <Button onClick={()=> clearCart(cartItems)}> Empty Cart </Button> 
                </div>
                
            )}

        </div>
    );
}
