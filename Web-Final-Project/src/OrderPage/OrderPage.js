import React, {useEffect,useState} from "react";
import {Link} from "react-router-dom";

// let[order, setOrder] = useState([])
//
// const getOrders = () => {
//     fetch(`http://localhost:4000/api/profile`)
//         .then(res => res.json())
//         .then(order => setOrder(order.asBuyer))
//     }


const OrderPage = () =>{
    let [comment, setComment] = useState("");
    let [order,setorder] = useState([])
    console.log(comment, "comment")
    const [user, setUser] = useState({})
    
    const getUser = () => {
        fetch(`http://localhost:4000/api/profile`, {
            method: 'POST',
            credentials: 'include'
        }).then(res => res.json())
            .then(users => {
                console.log(users,"------uuuu")
                setUser(users)
                localStorage.setItem("userid",users._id)
                getorderbyuser()
            }).catch(e => {
           
            // navigate('/login')
        })
    }
  
    const getorderbyuser = ()=>{
        console.log(user,"user---")
            fetch(`http://localhost:4000/api/getorderbyuserid`, {
                method: 'POST',
                body: JSON.stringify({userid:localStorage.getItem("userid")}),
                credentials: 'include',
                headers: {
                    'content-type': 'application/json'
                }
            }).then(res => res.json())
                .then(data => {
                   console.log(data)
                   let list = data.result.map(item=>{
                       console.log(item)
                       return {...item,orderlist:JSON.parse(item.orderlist)}
                   })
                   setorder(list)
                   console.log(list,"----list")
                }).catch(e => {
               
            })
    }
    useEffect(
        getUser
    , [])
    let deleteorder = (id)=>{
        fetch(`http://localhost:4000/api/deleteorderbyid`, {
            method: 'POST',
            body: JSON.stringify({orderid:id}),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => res.json())
            .then(data => {
                getorderbyuser()
            }).catch(e => {
           
        })
    }
    return(
        <>
            <div className='container'>
                <img style={{ width: '80px', marginRight: '20px', marginLeft: '20px' }}
                     src="https://icons-for-free.com/iconfiles/png/512/cat-131996349058051117.png"/>
                <h3>Your Orders</h3>
                {/* <div>
                    <div className='list-group-item'>
                        <div className='row'>
                            <div className='col-8'>
                                <div className='row'>
                                    <div className='col-3'>
                                        Order Place By User
                                    </div>
                                    <div className='col-3'>
                                        Total
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-3'>
                                        {user.username}
                                    </div>
                                    <div className='col-3'>
                                        $199
                                    </div>

                                </div>
                            </div>

                            <div className='col-4'>
                                <div >
                                    Order Number
                                </div>
                                <Link path to ='/product'>
                                    Order Details
                                </Link>

                            </div>




                        </div>
                    </div>

                    <div className='list-group-item'>
                        <div className='row'>
                            <div className='col-3'>
                                <img src={"https://cdn-images.farfetch-contents.com/17/53/64/32/17536432_37072288_1000.jpg"} style={{height:250,width:200}}/>
                            </div>
                            <div className='col-5 mt-5'>
                                Product Title
                            </div>
                            <div className={"col-3 "}>

                                <br/>
                                <button className='btn btn-outline-secondary fw-bold mt-2 ' style={{width:160, height:70}}>
                                    Cancel the Item
                                </button>
                            </div>
                        </div>
                        <div>
                            <textarea onChange={(e) => setComment(e.target.value)}>

                            </textarea>
                            <br/>
                            <button className='btn btn-outline-secondary fw-bold mt-3 ms-5'>
                                Comment
                            </button>
                        </div>




                    </div>
                </div> */}
                {order.map(item=>{
                    let totalprice = item.orderlist.reduce((a,b)=>{
                        return a+(b.price*b.qty)
                    },0)
                    return <div>
                    <div className='list-group-item'>
                    <div className='row'>
                        <div className='col-8'>
                            <div className='row'>
                                <div className='col-3'>
                                    Order Place By User
                                </div>
                                <div className='col-3'>
                                    Total
                                </div>
                            </div>
    
                            <div className='row'>
                                <div className='col-3'>
                                    {user.username}
                                </div>
                                <div className='col-3'>
                                    ${totalprice}
                                </div>
    
                            </div>
                        </div>
    
                        <div className='col-4'>
                        <button onClick={()=>deleteorder(item._id)} className='btn btn-outline-secondary fw-bold mt-2 ' style={{width:160, height:70}}>
                                Cancel the Item
                            </button>
                        </div>
    
    
    
    
                    </div>
                </div>
                    {item.orderlist.map(initem=>{
                        return  <div className='list-group-item'>
                        <div className='row'>
                            <div className='col-3'>
                                <img src={initem.image} style={{height:250,width:200}}/>
                            </div>
                            <div className='col-5 mt-5'>
                                Product Title
                                <div>{initem.title}</div>
                            </div>
                            <div className={"col-3 "}>
        
                                <br/>
                            </div>
                        </div>
                        <div>
                          
                        </div>
        
        
        
        
                    </div>
                    })}
               
                        </div>
                }) 
                    
                    }
              
               
            </div>

        </>
    );
}


export default OrderPage;