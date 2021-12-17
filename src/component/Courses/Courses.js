import React, { useState } from 'react';
import './Courses.css';
import Cart from '../Cart/Cart';
import jsonData from '../../fakeData/products.json';

const Courses = () => {
    const shoeData = jsonData.slice(0,10);
    const [data,setData] = useState(shoeData);
    const [cart,setCart] = useState([]);
    const addProduct = (data) =>
    {
        const newCount = [...cart,data];
        setCart(newCount);
        console.log(newCount);
    }
    return (
        <section>
                <div className='data-container'>
                    <div className="cart-body">
                    <Cart cart={cart}></Cart>
                    </div>
                        {
                        data.map(info => <LoadrJson data={info} key={info.key} addProduct={addProduct}></LoadrJson>)
                        }
                </div>
        </section>
    );
};
function LoadrJson(props)
{
    const {name,seller,price,stock,img} = props.data;
    return(
        <div className="data-container">
            <div className="courseRow">
                <div className="singleBox">
                    <div className="imgBox">
                        <img src={img} alt="" />
                    </div>
                    <div className="detailsBox">
                        <p>${name}</p>
                        {/* <p>{seller}</p> */}
                        <p>${price}</p>
                        {/* <p>{stock}</p> */}
                        <button className='enrollbtn' onClick={()=>props.addProduct(props.data)}>Enroll Now !</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Courses;