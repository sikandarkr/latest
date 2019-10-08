import {login_request} from '../constant/constants'
import axios from 'axios';
const apiUrl ='http://localhost:5000/api/users/login';
export  const  apiRequest=()=>{
    return{
        type:login_request.LOGIN_REQUEST
    }
}
export const fetchData = (data) => {
  return {
    type: login_request.LOGIN_SUCCESS,
    data
  }
};
export const loginUser = (data, browserHistory) => {
   const  headers = {
        'Content-Type': 'application/json',
        'x-api-key': 'WeLBwoDvI72rHHhXsiT0'
    }
    return (dispatch) => {
        dispatch(apiRequest());
    return axios.post(apiUrl,data, {
         headers:headers
        }).then(response=>{
          if(response.data.message==="success"){
               dispatch(fetchData(response.data))
                localStorage.setItem("Authorization",response.data.token);
                browserHistory.push('/profile');
          }
        })  
        .catch(error=>{
            throw(error);
        }) 
  };
};
