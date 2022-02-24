import React from "react";

const NavigationBar = (
        {
            active = 'Home'
        }
    ) => {
    const more = ['Electronics','Collections&Arts','Home&Garden','Sporting Goods','Toys','Business&Industrial','Music','eBay Refurbished'];
    return (
        <>
            <ul className="nav mb-2 nav-tabs mr-auto">
                <li className="nav-item mt-2 e-home" style={{fontSize : 12}}>
                    <a className={`nav-link ${active === 'Home' ? 'active' : ''}`} href="#" style={{color: "#2e3330", fontWeight: "bold"}}>Home</a>
                </li>
                <li className="nav-item mt-2" style={{fontSize : 12}}>
                    <a className={`nav-link ${active === 'Saved' ? 'active' : ''}`} href="#" style={{color: "#2e3330", fontWeight: "bold"}}><i
                        className="fas fa-heart"></i> Saved</a>
                </li>
                <li className="nav-item mt-2" style={{fontSize : 12}}>
                    <a className={`nav-link ${active === 'Motors' ? 'active' : ''}`} href="#" style={{color: "#2e3330", fontWeight: "bold"}}>Motors</a>
                </li>
                <li className="nav-item mt-2" style={{fontSize : 12}}>
                    <a className={`nav-link ${active === 'Fashion' ? 'active' : ''}`} href="#" style={{color: "#2e3330", fontWeight: "bold"}}>Fashion</a>
                </li>
                <li className="nav-item mt-2 d-none d-md-block" style={{fontSize : 12}}>
                    <a className={`nav-link ${active === 'Electronics' ? 'active' : ''}`} href="#" style={{color: "#2e3330", fontWeight: "bold"}}>Electronics</a>
                </li>
                <li className="nav-item mt-2 d-none d-md-block" style={{fontSize : 12}}>
                    <a className={`nav-link ${active === 'Collectibles&Arts' ? 'active' : ''}`} href="#" style={{color: "#2e3330", fontWeight: "bold"}}>Collectibles&Arts</a>
                </li>
                <li className="nav-item mt-2 d-none d-md-block" style={{fontSize : 12}}>
                    <a className={`nav-link ${active === 'Home&Garden' ? 'active' : ''}`} href="#" style={{color: "#2e3330", fontWeight: "bold"}}>Home&Garden</a>
                </li>
                <li className="nav-item mt-2 d-none d-md-block" style={{fontSize : 12}}>
                    <a className={`nav-link ${active === 'Sporting Goods' ? 'active' : ''}`} href="#" style={{color: "#2e3330", fontWeight: "bold"}}>Sporting Goods</a>
                </li>
                <li className="nav-item mt-2 d-none d-md-block" style={{fontSize : 12}}>
                    <a className={`nav-link ${active === 'Toys' ? 'active' : ''}`} href="#" style={{color: "#2e3330", fontWeight: "bold"}}>Toys</a>
                </li>
                <li className="nav-item mt-2 d-none d-md-block" style={{fontSize : 12}}>
                    <a className={`nav-link ${active === 'Business&Industrial' ? 'active' : ''}`} href="#" style={{color: "#2e3330", fontWeight: "bold"}}>Business&Industrial</a>
                </li>
                <li className="nav-item mt-2 d-none d-md-block" style={{fontSize : 12}}>
                    <a className={`nav-link ${active === 'Music' ? 'active' : ''}`} href="#" style={{color: "#2e3330", fontWeight: "bold"}}>Music</a>
                </li>
                <li className="nav-item mt-2 d-none d-md-block" style={{fontSize : 12}}>
                    <a className={`nav-link ${active === 'eBay Refurbished' ? 'active' : ''}`} href="#" style={{color: "#2e3330", fontWeight: "bold"}}>eBay Refurbished</a>
                </li>
                <li className="nav-item mt-2 dropdown d-md-none" style={{fontSize : 12, color: "#2e3330", fontWeight: "bold"}}>
                    <select className={`nav-link ${active === 'More' ? 'active' : ''}`} href="#" style={{color: "#2e3330", fontWeight: "bold"}}>
                        <option value="More">More</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Collectibles&Arts">Collectibles&Arts</option>
                        <option value="Home&Garden">Home&Garden</option>
                        <option value="Sporting Goods">Sporting Goods</option>
                        <option value="Toys">Toys</option>
                        <option value="Business&Industrial">Business&Industrial</option>
                        <option value="Music">Music</option>
                        <option value="eBay Refurbished">eBay Refurnished</option>
                    </select>
                </li>
            </ul>

        </>
    );
};

export default NavigationBar;
