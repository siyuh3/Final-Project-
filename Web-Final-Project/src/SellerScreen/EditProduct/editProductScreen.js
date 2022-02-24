import SignBar from "../../SignBar/SignBar";
import SearchBar from "../../Component/SearchBar";
import NavigationSidebar from "../SellerNavBar/NavigationSideBar";
import EditProduct from "./editProduct";

const EditProductScreen = () => {
    return(
        <>
            <SignBar/>
            <SearchBar/>
            <div className="row">
                <div className="col-3 ms-2">
                    <NavigationSidebar/>
                </div>
                <div className="col-8">
                    <EditProduct/>
                </div>
            </div>
        </>
    )
};

export default EditProductScreen;