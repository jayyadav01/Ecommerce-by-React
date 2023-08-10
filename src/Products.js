import React , { useState , useEffect , useContext } from 'react'
import axios from 'axios'
import About from './About';
import { globalstate } from './App';
import { Link } from 'react-router-dom';

function Products() {
    const [data,setdata] = useState([]);
    const {cart,setcart} = useContext(globalstate);
    const [buttondisabled,setbuttondisabled] = useState(false)

    useEffect(() => {
        
        axios.get('https://fakestoreapi.com/products/').then((result) => {
            console.log(result.data);
            setdata(result.data);
        })
    } , [])

    function handleCart(e,result,index) 
    {
        e.preventDefault();
        setcart([...cart,result]);
        console.log(cart);
    }

    function trimtitle(title)
    {
        return (title.length>18) ? title.slice(0,18) + '...' : title;
    }
  return (
    <>
        <About/> 
        <h1 id='heading'>Products</h1>
        <div className='container'>
            {
                data.map((data,index) => {
                    return(
                        <div className='box' key={index}>

                            <Link to={`/Product/${data.id}`}><img src={data.image}></img></Link>
                            <h1><Link to={`/Product/${data.id}`}>{trimtitle(data.title)}</Link></h1>
                            <p>$ {data.price}</p>
                            
                            <button className={'cartbutton'} href='' onClick={(e) => handleCart(e,data,index)}>Add to Cart</button>

                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default Products

