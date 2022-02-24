import SignBar from "../../SignBar/SignBar";
import SearchBar from "../../Component/SearchBar";
import NavigationSidebar from "../SellerNavBar/NavigationSideBar";
import NewProduct from "./CreateProduct";

const CreateProduct = () => {
    return(
        <>
            <SignBar/>
            <SearchBar/>
            <div className="row">
                <div className="col-3 ms-2">
                    <NavigationSidebar/>
                </div>
                <div className="col-8">
                    <NewProduct/>
                </div>
            </div>
        </>
    )
};

export default CreateProduct;