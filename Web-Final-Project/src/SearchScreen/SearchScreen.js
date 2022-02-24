import React from "react";
import {useState,useEffect} from "react";
import {Link, useNavigate,useParams} from "react-router-dom";


const SearchScreen = ()=>{
    const params = useParams();
    const productTitle= params.searchTerm;
    const[searchTerm,setSearchTerm] = useState(productTitle);
    const[results,setResults] = useState([]);
    const navigate = useNavigate();

    const findProduct = () =>
        navigate(`/${searchTerm}`)
        fetch(`https://fakestoreapi.com/products/category/${searchTerm}`)
            .then(res => res.json())
            .then(results=>setResults(results))

    useEffect(findProduct,[]);
    return(
        <div>
            <img style={{ width: '80px', marginRight: '20px', marginLeft: '20px' }}
                 src="https://icons-for-free.com/iconfiles/png/512/cat-131996349058051117.png"/>
            <h1 className='d-flex justify-content-center'>
                Search Screen
            </h1>
            <div className='d-flex justify-content-center'>



                <input onChange={(e) => setSearchTerm(e.target.value)} value = {searchTerm}/>
                <button onClick={findProduct}>Search</button>
            </div>


            <div className='list-group mt-2'>
                {
                    results.map(result =>
                        <list className='list-group-item' key={result.id}>

                            <div className='row'>
                                <div className='col-6 d-flex justify-content-center'>
                                    <img src = {result.image} height={100}/>
                                </div>
                                <div className='col-6 float-end'>
                                    <Link to={`/product/${result.id}`}>
                                        {result.title}
                                    </Link>
                                </div>
                            </div>

                        </list>)
                }
            </div>

        </div>
    )
};
export default SearchScreen
