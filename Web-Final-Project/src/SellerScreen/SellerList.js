import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createStore } from 'redux'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../service/getUserService'

const SellerList = () => {

    const getSellers = (state) => state.seller.user;
    const user = useSelector(getSellers);
    const dispatch = useDispatch();

    useEffect(() => getProfile(dispatch), [])
    console.log(user, "=============this is user");
    return (
        <>
                <div className="row mt-2">

                    {
                        user.asSeller && user.asSeller.map((product,index) => {
                            return (
                                    <div className="col-md-3 mb-4 ps-0" key={index}>
                                        <div className="card h-100 text-center p-4" key={product._id}>
                                            <img className="card-img-top" src={product.image}
                                                 alt={product.title} height="200px"/>
                                            <div className="card-body">
                                                <h5 className="card-title mb-0">{product.title?.substring(0, 8)}...</h5>
                                                <p className="card-text lead fw-bolder">
                                                    ${product.price}
                                                </p>
                                                <p className="card-text lead fw-light">
                                                    Stock : {product.stock}
                                                </p>
                                                <Link to={`/editproducts/${product._id}`}
                                                      className="btn btn-outline-dark">Edit Product</Link>
                                                <Link to={`/deleteproduct/${product._id}`} className="btn btn-outline-danger mt-1">Delete</Link>
                                            </div>
                                        </div>
                                    </div>
                            )
                        })
                    }
                </div>

        </>
    )
}

export default SellerList

