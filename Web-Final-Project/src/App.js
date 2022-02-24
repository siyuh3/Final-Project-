import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomeScreen from "./AllScreen/HomeScreen";
import SellerScreen from "./SellerScreen";
// import Profile from './Profile/main';
import EditProfile from './EditProfile/EditProfile';
import DetailProduct from "./Detail/DetailProduct";
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import addItems from "./reducer/addItems";
import cart from "./reducer/cart";
import profile from './reducer/profile';
import './profile.css'
import ProductsScreen from "./AllScreen/ProductsScreen";
import CartScreen from "./AllScreen/CartScreen";
import PublicProfile from "./PublicProfile/index";
import LoginScreen from './LogIn/LoginScreen'
import Register from './LogIn/Register'
// import ProfileX from './LogIn/Profile'
import seller from './reducer/seller'
import CreateProduct from './SellerScreen/CreateNewProduct/createNewScreen';
import EditProductScreen from './SellerScreen/EditProduct/editProductScreen'
import SearchScreen from './SearchScreen/SearchScreen'
import DeleteScreen from './SellerScreen/DeleteVerification/DeleteScreen'
import PrivacyPage from './PrivacyPage/PrivacyPage'
import OrderPage from '../src/OrderPage/OrderPage'
import Profile from './LogIn/Profile'


const reducers = combineReducers({cart, addItems, profile, seller});
const store = createStore(reducers);


function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route path = "/" element={<PrivacyPage/>}/>
                    <Route path = "/home" element={<HomeScreen/>}/>
                    <Route path = "/seller" element={<SellerScreen/>}/>
                    <Route path = "/products/:id" element={<DetailProduct/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/editProfile" element={<EditProfile/>}/>
                    <Route path="/cart" element={<CartScreen/>}/>
                    <Route path="/products" element={<ProductsScreen/>}/>
                    <Route path = "/profile/:id" element = {<PublicProfile/>}/>
                    <Route path = "/login" element = {<LoginScreen/>}/>
                    <Route path = "/register" element = {<Register/>}/>
                    {/*<Route path = "/x" element = {<ProfileX/>}/>*/}
                    <Route path = "/create" element={<CreateProduct/>}/>
                    <Route path = "/editproducts/:id" element={<EditProductScreen/>}/>
                    <Route path = "/deleteproduct/:id" element={<DeleteScreen/>}/>
                    <Route path = "/search" element = {<SearchScreen/>}/>
                    <Route path = "/search/:searchTerm" element = {<SearchScreen/>}/>
                    <Route path = "bye" element = {<bye/>}/>
                    <Route path = "/ordered" element = {<OrderPage/>}/>









                </Routes>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
