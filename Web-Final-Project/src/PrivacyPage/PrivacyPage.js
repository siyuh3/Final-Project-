import React from "react";
import {Link} from "react-router-dom";

const PrivacyScreen = () => {

    return(
        <>

            <div className='container'>

                <h1>
                    Privacy Policy
                </h1>

                <h3 className='mt-3 me-2'>
                    What are we Building for?
                </h3>
                <div>
                    Our website is an e-commerce website that can sell/buy brand-new clothes. Our website allows you to buy and sell products and search for products. The user can either choose to be a seller or a buyer. The user not only can do the register and login but also can be an anonymous user. Every user has their own user ID and the user can edit their own
                    profile. The profile page can traverse the selling item and the other user reviews.
                </div>
                <h3 className='me-2 mt-3'>
                    What data are we collect for ? Where are we use?
                </h3>
                <div className=''>
                    We will access personal data, like name, email address, address, and phone number. We will use those data to
                    provide and maintain our service, manage customer account, the performance of a contract, contact customer, provide
                    customer news and manage customer requests.
                    The values are relevant to our website should be the customers information analysis.
                    We can know the usage trends and personal item preference for each customers. Thus, we will only use those
                    information for our own analysis and may do the business transfer.

                </div>

                <h3 className='me-2 mt-3'>
                    What function are we provide to people?
                </h3>
                <div>
                    If a person doesn't have time to go to the mall to buy clothes, then he can pick clothes on our website. In addition, if a person has unused items, he can easily try to sell them on our website.
                    So our website is mainly for the customer's convenience without leaving home.
                </div>

                <h3 className='me-2 mt-3'>
                    Who may interested for our website.
                </h3>
                <div>
                    Seller(Suppliers), Buyer(Customers), Media(May need to interact with press to advertise our website), website owner(Investors)
                </div>

                <h3 className='me-2 mt-3'>
                    What is the value for them ?
                </h3>
                <div>
                    The amount of user visits, user clicks, order transacations, user return ratio, new user and the ad clicks.
                </div>

                <h3 className='me-2 mt-3'>
                    Our website may undermine or compromise for particular value.
                </h3>
                <div>
                    Our website may compromise the seller’s value. Because our return policy will be more protective of our buyers than sellers. It may happen buyer gets a good condition product but also want to return it. In the worst-case,
                    the buyer may receive the product and still claim not to have received it.
                </div>

                <h3 className='me-2 mt-3'>
                    Website promote values.
                </h3>

                <div>
                    We do have an ad on our website's first page to promote new products in a specific brand this session. That will promote the seller’s value since if customers are interested that ad then they will click and increase the amount of purchase rate.
                </div>

                <h3 className='me-2 mt-3'>
                    What counts as “success” for the website we are building?
                </h3>
                <div>
                    Steady increase in users, clicks and transctions for our website. And more brand merchants join to our website. And also more companies want to advertise on our website. Since those increases will increase our business value. More users joining means the possibility of having more buyers or sellers,
                    which also means the possibility of increased order volume.
                </div>

                <h3 className='me-2 mt-3'>

                </h3>


                <div className='d-flex justify-content-center'>
                    <Link to = "/home">
                        <button className='btn btn-success me-4 rounded-pill' style={{width:100}}>
                            Accept
                        </button>
                    </Link>
                    <Link to = "/bye">
                        <button className='btn btn-danger rounded-pill' style={{width:100}}>
                            Decline
                        </button>
                    </Link>
                </div>


            </div>

        </>
    );
}

export default PrivacyScreen;