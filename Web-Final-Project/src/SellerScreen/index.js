import SignBar from "../SignBar/SignBar";
import SearchBar from "../Component/SearchBar";
import NavigationSidebar from "./SellerNavBar/NavigationSideBar";
import SellerList from "./SellerList";
import './SellerScreen.css';

const SellerScreen = () => {
    return(
        <>
            <SignBar/>
            <SearchBar/>
            <div className="row">
                <div className="col-3 ms-2">
                    <NavigationSidebar/>
                </div>
                <div className="col-8">
                    <SellerList/>
                </div>
            </div>

        </>
    )
};

export default SellerScreen;