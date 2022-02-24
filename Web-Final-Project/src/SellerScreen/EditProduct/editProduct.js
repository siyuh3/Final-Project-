import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from '../../Component/CartClient'
import { getProfile } from '../../service/getUserService'
import { updateProduct } from '../../service/sellerService'

const EditProduct = () => {
    // let[title, setTitle] = useState("");
    // const getSellers = (state) => state.seller.user;
    // const user = useSelector(getSellers);
    // const dispatch = useDispatch();
    const dispatch = useDispatch()
    const params = useParams()
    const user = useSelector(state => state.seller.user)
    const product = useSelector(state => state.seller.user?.asSeller?.filter(x => (x._id === params.id))?.[0])
    // useEffect(() => getProfile(dispatch), [])

    // useEffect(() => getProfile(dispatch), [])


    let [title, setTitle] = useState(product?.title)
    const titleHandler = (e) => {
        setTitle(e.target.value)
    }

    let [cat, setCat] = useState(product?.category)
    const catClickHandler = (e) => {
        setCat(e.target.value)
        console.log('Cat:', cat)
    }

    let [price, setPrice] = useState(product?.price)
    const priceHandler = (e) => {
        setPrice(e.target.value)
    }

    let [des, setDes] = useState(product?.description)
    const desHandler = (e) => {
        setDes(e.target.value)
    }

    let [stock, setStock] = useState(product?.stock)
    const stockHandler = (e) => {
        setStock(e.target.value)
    }

    
    

    const findProducts = () => {
        const newProduct = {
            ...product,
            title: title,
            price: price,
            category: cat,
            description: des,
            stock: stock
        }
        const products = user?.asSeller
        for (let i = 0; i < products.length; i++) {
            console.log('result', products[i]._id === product._id)
            if (products[i]._id === product._id) {
                products[i] = newProduct;
                return products;
            }
        }
    }

    const onSaveHandler = () => {
        const newProducts = findProducts();
        const backUser = { ...user, asSeller: newProducts }
        console.log('newProducts', newProducts, "backUser", backUser);
        updateProduct(backUser, dispatch)
    }

    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-4">
                    <img src={product.image} alt={product.title} height="200px" width="200px"/>
                    <div className="input-group-prepend mb-2 mt-2">
                        <span className="input-group-text">Change Product Image</span>
                    </div>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id="inputGroupFile01"/>
                    </div>
                </div>
                <div className="col-md-8">
                    <h4 className="text-uppercase text-black-50">{product.category}</h4>
                    <h1 className="display-5">{product.title}</h1>
                    <p className="lead fw-bolder">
                        Rating {product.rating && product.rating.rate}
                        <i className="fa fa-star"></i>
                    </p>
                    <h3 className="display-6 fw-bold my-4">
                        ${product.price}
                    </h3>
                    <p className="lead">{product.description}</p>

                    <form>
                        <div className="row">
                            <div className="form-group col-md-6 mb-2">
                                <p className="mt-3 fw-bolder">Please enter your product name here</p>
                                <input placeholder="title" value={title} type="text" onChange={titleHandler}/>
                            </div>

                            <div className="form-group col-md-6 mb-2">
                                <p className="mt-3 border">Edit Product Category</p>
                                <input
                                       value={cat}
                                       onChange={catClickHandler}
                                       />
                            </div>

                            <div className="form-group col-md-6 mb-2">
                                <p className="mt-3 border">Edit Product Stock</p>
                                <input
                                    type="text"
                                    value={stock}
                                    onChange={stockHandler}
                                />
                            </div>
                        </div>
                        <div className="form-group col-md-6 mb-2">
                            <label htmlFor="inputAddress">Edit Product Price</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">$</span>
                                </div>
                                <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"
                                       value={price} onChange={priceHandler}/>
                            </div>
                        </div>
                        <div className="form-group col-md-6 mb-2">
                            <label htmlFor="editDescription">Edit Product Description</label>
                            <textarea style={{ width: '100%' }} value={des} onChange={desHandler}>Description</textarea>
                        </div>
                        <div className="form-group col-md-6 mb-2">
                            <Link to="/seller" className="btn btn-outline-dark"
                                  onClick={onSaveHandler}>
                                Save
                            </Link>
                        </div>
                    </form>
                </div>
            </>
        )
    }
    return (
        <div>
            <div className="container py-4">
                <div className="row py-5">
                    { ShowProduct() }
                </div>
            </div>
        </div>
    )
}

export default EditProduct