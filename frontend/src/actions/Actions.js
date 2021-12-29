import { GET_ITEMS, DELETE_ITEM , ADD_ITEM, ITEMS_LOADING, GET_ITEMS_ID } from "./types";
import axios from 'axios'

export const getItems = ()=>(dispatch) =>{
    axios.get('/api/items/')
    .then(res=>{
        dispatch({
            type : GET_ITEMS,
            payload : res.data
        })
    })
    
}

export const loginStudent = (data,callback) =>{
    return dispatch => {
        return axios.post('http://localhost:5000/auth/login/',data,{
        "Content-Type": "application/json",
    })
        .then(res=>{
            if(res.status === 200){
                callback(res)
            }
        })
        .catch(err=>{
           callback(err.response)
        }) 
    }
}

export const verifyOtp = (data,callback)=>{
    return dispatch=>{
        return axios.post('http://localhost:5000/auth/verify/',data,{
            "Content-Type": "application/json",
        })
        .then(res=>{
            callback(res);
        })
        .catch(err=>{
            callback(err.response)
        })
    }
}