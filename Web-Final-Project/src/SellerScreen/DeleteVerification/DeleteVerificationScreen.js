import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import React from "react";
import {deleteProduct} from "../../service/sellerService";

const DeleteProduct = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const user = useSelector(state => state.seller.user)
    const product = useSelector(state => state.seller.user?.asSeller?.filter(x => (x._id === params.id))?.[0])
    console.log("This is the product after filtering", product);

    const removeProduct = () => {
        const products = user?.asSeller
        for(let i = 0; i < products.length; i++) {
            if (products[i]._id === product._id) {
                products.splice(i,1);
            }
        }
        console.log("This is new products ============:", products);
        return products;
    }

    const deleteClickHandler = () => {
        console.log("This is the click handler")
        const newProducts = removeProduct();
        const backUser = { ...user, asSeller: newProducts }
        deleteProduct(backUser,dispatch);
    }

    const DisplayProduct = () => {
        return (
            <>
                <div className="col-md-4">
                    <img src={product.image} alt={product.title} height="200px" width="200px"/>
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
                </div>
                <p className="lead">Are you sure?</p>
                <Link to="/seller" className="btn btn-outline-danger" onClick={deleteClickHandler}>Delete</Link>
            </>
        )
    }
    return (
        <div>
            <div className="container py-4">
                <div className="row py-5">
                    { DisplayProduct() }
                </div>
            </div>
        </div>
    )
}

export default DeleteProduct