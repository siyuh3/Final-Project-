import SignBar from "../SignBar/SignBar";
import Product from "../Component/Product";


const DetailProduct = () => {
    return(
        <>
            <div className="container">
                <SignBar/>
                <Product/>
                {/*<NavBar/>*/}
            </div>
        </>
    )
}

export default DetailProduct;