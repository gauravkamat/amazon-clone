import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();
    return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img
            className='checkout__ad'
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/cnnjpp/9pro-_ILM-640X45_2._CB651642536_.jpg" />
        
        <div >
            <h2 className='checkout__title'>
                Your Shopping Basket
                    </h2>
                    {
                        basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))
                    }
                    


        </div>
        </div>
        <div className='chechkout__right'>
                <Subtotal />
        </div>
    </div>
    )
}

export default Checkout
