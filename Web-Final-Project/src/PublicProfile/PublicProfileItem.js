import React from "react";
import {Link} from "react-router-dom";
const PublicProfile = ({profile}) => {
    return(
        <>
            <div className="container emp-profile">
                <form method="post">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-img">
                                <img
                                    src={profile.photo}
                                    alt=""/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="profile-head">
                                <h5>
                                    {profile.username}
                                </h5>
                                <h6>
                                    {profile.identity}
                                </h6>
                                <p className="proile-rating">Selled: <span>{profile.selled}</span></p>
                                <p className="proile-rating">Bought: <span>{profile.bought}</span></p>
                                <p className="proile-rating">Comment: <span>{profile.comment}</span></p>
                                <p className="proile-rating">Most recent comment: <span>a*****h: Item good/bad/ok balabala...</span></p>
                            </div>
                        </div>
                        <div className="col-md-2">
                            {/*<input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>*/}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-work">
                                <p>Selling item</p>
                                <a href="">Selling item 1</a><br/>
                                <a href="">Selling item 2</a><br/>
                                <a href="">Selling item 3</a>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li> Basic Information </li>
                                </ul>
                                <div className="tab-pane fade show active" id="home" role="tabpanel"
                                     aria-labelledby="home-tab">
                                    <div className="row">


                                    </div>
                                    <div className="row">

                                    </div>
                                    <div className="row">

                                    </div>
                                    <div className="row">

                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Location</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{profile.location}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </>


    )
}

export default PublicProfile;