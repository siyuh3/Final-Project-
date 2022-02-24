import {Link, useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'

const DisplayTemplate = () => {
    const[products,setProducts] = useState([]);
    const[filter, setFilter] = useState([]);
    const findProduct = () =>
        fetch(`https://fakestoreapi.com/products`).then(res=>res.json())
            .then(products=>setProducts(products))
            // .then(filter=>setFilter(products))


    useEffect(findProduct,[]);

    const filterProduct = (cat) => {
        const updatedList = products.filter((x) => x.category === cat);
        setFilter(updatedList);
    }
    return (
        <>
            <h3 className="fw-bolder text-center mt-2">Latest Collection</h3>
            <div className="buttons d-flex justify-content-center mb-5 pb-5 mt-2">
                <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(products)}>All</button>
                <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
                <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
                <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("jewelery")}>Jewelery</button>
                <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("electronics")}>Electronic</button>
            </div>

            <div  className="row mt-2">
                {
                    filter.map(product => {
                        return (
                            <>
                                <div className="col-md-3 mb-4">
                                <div className="card h-100 text-center p-4" key={product.id}>
                                    <img className="card-img-top" src={product.image} alt={product.title} height="250px"/>
                                        <div className="card-body">
                                            <h5 className="card-title mb-0">{product.title.substring(0,12)}...</h5>
                                            <p className="card-text lead fw-bolder">
                                                ${product.price}
                                            </p>


                                            <Link to={`/products/${product.id}`}
                                                  className="btn btn-outline-dark">
                                                More
                                            </Link>

                                        </div>
                                </div>
                                </div>
                            </>
                            )
                        }
                    )
                }
            </div>
        </>
    )
}
export default DisplayTemplate;
