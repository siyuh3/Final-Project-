let SELLER_API = 'http://localhost:4000/api/profile'

export const addCart = (product) => {
    console.log(product)
    return {
        type: 'add',
        product
    }
}

export const addtoorderbuyuser = (data)=>{
    fetch('http://localhost:4000/api/setorder', {
        method: 'post',
        body: JSON.stringify(data),
        credentials: 'include',
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => {
            console.log('This is response in CartClient.js:', response)
            return response.json()
        }).then(res => {
    })
}
export const addToDB = (newUser, dispatch) => {
    console.log('***', newUser)
    fetch(SELLER_API, {
        method: 'PUT',
        body: JSON.stringify(newUser),
        credentials: 'include',
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => {
            console.log('This is response in CartClient.js:', response)
            return response.json()
        }).then(res => {
    })
}

export const deleteProductFromUser = (newUser, dispatch) => {
    console.log('***', newUser)
    return fetch(SELLER_API, {
        method: 'PUT',
        body: JSON.stringify(newUser),
        credentials: 'include',
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => {
            console.log('This is response in CartClient.js:', response)
            return response.json()
        }).then(res => {
    })
}

export const delCart = (product) => {
    return {
        type: 'delete',
        product
    }
}

// export const addToOrder =