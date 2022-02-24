import { useState } from 'react'

let SELLER_API = 'http://localhost:4000/api/profile';

export const createNewProduct = (newProduct, dispatch) => {

    console.log("This is the newProduct in sellerService.js:", newProduct);
    fetch(SELLER_API, {
        method: 'PUT',
        body: JSON.stringify(newProduct),
        credentials: 'include',
        headers: {
            'content-type':'application/json'
        }
    })
        .then(response => {
            console.log("This is response in sellerService.js:", response);
            return response.json();
        }).then(res=>{
            dispatch({
                type: 'create-new-product',
                user: newProduct
            })
    })
}

export const updateProduct = (newUser, dispatch) => {
    console.log("This is the updated user with new Product,", newUser);
    fetch(SELLER_API, {
        method:'PUT',
        body: JSON.stringify(newUser),
        credentials: 'include',
        headers: {
            'content-type':'application/json'
        }
    })
        .then(response => {
            return response.json();
        }).then(res=>{
            dispatch({
                type:'update-product',
                user: newUser
            })
    })
}

export const deleteProduct = (newUser, dispatch) => {
    console.log("This is the new user with deleted Product,", newUser);
    fetch(`${SELLER_API}`, {
        method:'PUT',
        body: JSON.stringify(newUser),
        credentials: 'include',
        headers: {
            'content-type':'application/json'
        }
    })
        .then(response => {
            return response.json();
        }).then(res=>{
        dispatch({
            type:'delete-product',
            user:newUser
        })
    })
}