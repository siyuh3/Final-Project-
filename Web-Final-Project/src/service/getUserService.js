

const PROFILE_API = 'http://localhost:4000/api/profile';
export const getProfile = (dispatch) =>
        fetch(PROFILE_API, {
            method: 'POST',
            credentials: 'include'
        }).then(res => res.json())
            .then(user =>
                dispatch({
                type: 'fetch-current-user',
                user
            }))



