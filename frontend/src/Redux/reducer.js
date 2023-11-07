import { LOCATION_LOADING,LOCATION_ERROR,LOCATION_SUCCESS,SWAP,NOT_SWAP } from "./actionTypes";


const initialState={
    loading:false,
    locations:[],
    error:false,
    swap:false
}

const LocationReducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case LOCATION_LOADING:{
            return {...state,loading:true}
        }
         case LOCATION_SUCCESS:{
            return {...state,locations:payload}            
         }
         case LOCATION_ERROR:{
            return {...state,loading:false,error:true}
         }   
        case SWAP:{
            return {...state,swap:true}
        }
        case NOT_SWAP:{
            return {...state,swap:false}
        }
        default:return state
            
    }
}
export default LocationReducer