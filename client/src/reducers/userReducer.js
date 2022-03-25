import {userAPI} from "../api/api";
import {hidePreloader, showPreloader} from "./preloaderReducer";
import axios from "axios";

const SET_USER = 'SET_USER';
const LOGOUT = 'LOGOUT';

const defaultState = {
  currentUser: {},
  isAuth: false
}

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_USER:
      return {...state, currentUser: action.payload, isAuth: true}
    case LOGOUT:
      localStorage.removeItem('token')
      return {...state, currentUser: {}, isAuth: false}
    default:
      return state;
  }
}

export const setUser = (user) => ({type: SET_USER, payload: user})
export const logout = ()=>({type:LOGOUT})

export const login = (email, password) => async (dispatch) =>{
  try{
    console.log('login')
    const response = await userAPI.login(email, password);
    dispatch(setUser(response.data.user))
    localStorage.setItem('token', response.data.token)
    console.log('login token', response.data.token)
  }catch (e){
    alert(e)
  }
}

export const registration = (email, password) => async (dispatch) =>{
  try{
    const response = await userAPI.registration(email, password);
  }catch (e){
    alert(e)
  }
}

export const auth = () => {
  return async dispatch =>{
    try {
      const response = await axios.get(`http://localhost:5000/api/auth/auth`,
        {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
      dispatch(setUser(response.data.user))
      localStorage.setItem('token', response.data.token)
    }catch (e){
      alert(e.response.data.message)
      localStorage.removeItem('token')
    }
  }
}

export default userReducer;
