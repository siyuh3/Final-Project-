import SignBar from "../../SignBar/SignBar";
import SearchBar from "../../Component/SearchBar";
import NavigationSidebar from "../SellerNavBar/NavigationSideBar";
import DeleteProduct from "./DeleteVerificationScreen";

const DeleteScreen = () => {
    return(
        <>
            <SignBar/>
            <SearchBar/>
            <div className="row">
                <div className="col-3 ms-2">
                    <NavigationSidebar/>
                </div>
                <div className="col-8">
                    <DeleteProduct/>
                </div>
            </div>
        </>
    )
};

export default DeleteScreen;