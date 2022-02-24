import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addCart, delCart, deleteProductFromUser} from '../Component/CartClient';
import {Link, useNavigate, useParams} from "react-router-dom";
import {addToDB,addtoorderbuyuser} from "../Component/CartClient";

const Cart = () => {
    //identify user
    const [user, setUser] = useState({})
    const products= useSelector((state) => state.cart)
    const navigate = useNavigate()
    const getUser = () => {
        fetch(`http://localhost:4000/api/profile`, {
            method: 'POST',
            credentials: 'include'
        }).then(res => res.json())
            .then(user => {
                setUser(user)
                
                dispatch({
                    type: 'put-to-order',
                    user: user
                })
            }).catch(e => {
            console.log('未登录 add to cart', user, !!user)
            // navigate('/login')
        })
    }
    useEffect(getUser, [])

    const dispatch = useDispatch()

    console.log('ppppp',products);
    const [ disable , setDisable ] = useState(false)
    const deleteClickHandler = (product, user) => {
        if (disable) return
        setDisable(true)
        console.log("This is the user in deleteClickHandler:", user);
        console.log("This is the product that supposed to be deleted", product);
        let delTemp = []
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === product.id) {
                products[i].qty --;
                console.log("products are:========", products);
            }

            if (products[i].qty <= 0) {
                delTemp.push(i)
            }
        }
        delTemp.forEach(i => { products.splice(i,1)})

        console.log("00000)))", products)
        delFromUser({...user, asBuyer: products}).then(() => {
            setDisable(false)
            dispatch(delCart(products))
        }).catch(err=> setDisable(false))
    }

    const delFromUser = (user) => {
        return deleteProductFromUser(user, dispatch)
    }

    const addDataToDb = (user) => {
        addToDB(user, dispatch);
    }
    const addToOrder = (user) => {
        let temp = [];
        for (let i = 0; i < user.asBuyer.length; i++) {
            temp.push(user.asBuyer[i]);
        }
        console.log("Temp array is:", temp);
        addtoorderbuyuser({orderlist:temp,userid:user._id})
        setTimeout(() => {
            window.location.href = "/ordered"
        }, 1000);
        //addDataToDb({...user, order: temp});
    }

    const checkOutHandler = (user) => {
        let temp = [];
        addToOrder(user);
        delFromUser({...user, asBuyer: temp});
    }

    const cartItems = (cartItem) => {
        return(
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                <div className="container py-4">

                    <button disabled={disable} onClick={()=>deleteClickHandler(cartItem, user)} className="btn-close float-end" aria-label="Close"></button>

                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cartItem.image} alt={cartItem.title} height="200px" width="180px"/>
                        </div>
                        <div className="col-md-4">
                            <h3>{cartItem.title}</h3>
                            <p className="lead fw-bold">${cartItem.price}</p>
                            <p className="lead fw-bold">Qty: {cartItem.qty}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const emptyCart = () => {
        return(
            <div className="px-4 my-5 bg-light rounded-3">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                </div>
            </div>
        )
    }

    const button = () => {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <button className="btn btn-outline-primary mb-5 w-25" onClick={()=>checkOutHandler(user)}>Proceed To Checkout</button>
                </div>
            </div>
        )
    }

    console.log("e902uq483u92ir93", products, typeof (products));

    return (
        <>
            {products.length === 0 && emptyCart()}
            {products.length !== 0 && products?.map(cartItems)}
            {products.length !== 0 && button()}
        </>
    );
}

export default Cart;