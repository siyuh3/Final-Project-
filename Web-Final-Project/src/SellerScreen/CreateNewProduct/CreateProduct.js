import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useState} from "react";
import { useDispatch, useSelector } from 'react-redux'

import {createNewProduct} from "../../service/sellerService";
import { getProfile } from '../../service/getUserService'

// const SELLER_API = 'http://localhost:4000/api/profile'

const NewProduct = () => {
    // const [user, setUser] = useState({})
    // const navigate = useNavigate()
    // const getProfile = () => {
    //     fetch(SELLER_API, {
    //         method: 'POST',
    //         credentials: 'include'
    //     }).then(res => res.json())
    //         .then(user => {
    //             setUser(user)
    //         }).catch(e => navigate('/login'))
    // }
    const dispatch = useDispatch();
    const user = useSelector(state => state.seller.user)
    useEffect(()=> getProfile(dispatch), [])

    let[name, setName] = useState({name:""});
    let[imageUrl, setImageUrl] = useState("");
    const nameHandler = (e) => {
        const name = e.target.value;
        const newName = {
            name : name
        };
        setName(newName);
    }

    let[category, setCategory] = useState({category:""});
    const categoryHandler = (e) => {
        const category = e.target.value;
        const newCategory = {
            category : category
        };
        setCategory(newCategory);
    }

    let[_id, setId] = useState({_id:""});
    const idHandler = (e) => {
        const _id = e.target.value;
        const newId = {
            _id : _id
        };
        setId(newId);
    }

    let[price, setPrice] = useState({price:""});
    const priceHandler = (e) => {
        const price = e.target.value;
        const newPrice = {
            price : price
        };
        setPrice(newPrice);
    }

    let[description, setDescription] = useState({description:""});
    const descriptionHandler = (e) => {
        const description = e.target.value;
        const newDescription = {
            description : description
        };
        setDescription(newDescription);
    }

    let[stock, setStock] = useState({stock:""});
    const stockHandler = (e) => {
        const stock = e.target.value;
        const newStock = {
            stock : stock
        };
        setStock(newStock);
    }

    const createClickHandler = () => {
        const newProduct = {
            title: name.name,
            image: imageUrl,
            category: category.category,
            _id:_id._id,
            price:price.price,
            description:description.description,
            stock:stock.stock
        }
        const newProducts = [newProduct, ...user.asSeller];
        const backUser = {...user,asSeller:newProducts};
        console.log("This is backUser============", backUser, typeof(backUser));
        console.log(newProducts, "+++++++", user.asSeller);
        // console.log("New products is:", [user.as, newProduct]);
        createNewProduct(backUser, dispatch);

    }
    return(
        <>
            <p className="mt-3 fw-bolder">Please enter your id here</p>
            <input type="text" id="product-id" placeholder="id" onChange={idHandler}/>
            <p className="mt-3 fw-bolder">Please enter your image url here</p>
                <input type="text" value={imageUrl} onChange={e=> setImageUrl(e.target.value)} placeholder="image url" classname="custom-file-input" id="inputgroupfile01"/>
            <p className="mt-3 fw-bolder">Please enter your product name here</p>
            <input type="text" style={{width:'925px'}} id="product-name" placeholder="name" onChange={nameHandler}/>
            <p className="mt-3 fw-bolder">Please enter your product stock quantity</p>
            <input type="text" style={{width:'925px'}} id="product-quantity" placeholder="quantity" onChange={stockHandler}/>
            <p className="mt-3 fw-bolder">Please enter your product category here</p>
            <input type="text" style={{width:'925px'}} id="product-category" placeholder="category" onChange={categoryHandler}/>
            <p className="mt-3 fw-bolder">Please enter your product price here</p>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">$</span>
                </div>
                <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" placeholder="price" onChange={priceHandler}/>
            </div>
            <p className="mt-3 fw-bolder">Please add your product description here</p>
            <textarea style={{width:"925px"}} placeholder="description" onChange={descriptionHandler}>description</textarea>
            <div className="d-flex justify-content-center mt-3">
                <Link to="/seller" className="btn btn-outline-dark" style={{width:"925px"}} onClick={createClickHandler}>Create</Link>
            </div>
        </>
    )
};

export default NewProduct;