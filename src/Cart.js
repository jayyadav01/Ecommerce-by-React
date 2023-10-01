import React, { useState ,useEffect ,useContext} from 'react'
import axios from 'axios'
import { globalstate } from './App';

function Cart() {
  const {cart,setcart} = useContext(globalstate);
    console.log(cart);

    function handledelete(index)
    {
        setcart(cart.filter((item,id) => id!=index))
    }
  return (
    <>
        <h1 id='carthead'>Cart</h1>
        {
          cart.map((cart,index) => {
            return (
              <>
                <div className='singlebox' key={index}>
                  <div className='pics'>
                      <img src={cart.image}></img>
                  </div>
                  <div className='des'>
                      <h1>{cart.title}</h1>
                      <p>{cart.category}</p>
                      <p>$ {cart.price}</p>
                      <input type="number" readOnly value={1} id="quantity" name="quantity" min="1" max="1" />
                      <button onClick={() => handledelete(index)} id='delete'>Delete</button>
                  </div>
                </div>
              </>
            )
          })
        }
    </>
  )
}

export default Cart