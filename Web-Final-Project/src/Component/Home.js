import React from "react";

const Home = () => {
    return (
        <div className="hero">
            <div className="card bg-dark text-white border-0">
                <img className="card-img"
                     src="https://images.pexels.com/photos/9810902/pexels-photo-9810902.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                     alt="Background"
                     style={{objectFit:'cover'}}
                     height={500}/>
                    <div className="card-img-overlay d-flex flex-column justify-content-md-end">
                        <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">NEW ARRIVALS</h5>
                        <p className="card-text lead fs-2">CHECK OUT OUR NEW COLLECTIONS</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Home;