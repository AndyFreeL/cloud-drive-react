import {userAPI} from "../api/api";
import {hidePreloader, showPreloader} from "./preloaderReducer";

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
    const response = await userAPI.login(email, password);
    dispatch(setUser(response.data.user))
    localStorage.setItem('token', response.data.token)
    console.log(response.data.user)
  }catch (e){
    alert(e)
  }
}
export const registration = (email, password) => async (dispatch) =>{
  try{
    const response = await userAPI.registration(email, password);
    console.log(response.data.message)
  }catch (e){
    alert(e)
  }
}
export const auth = () => async (dispatch) =>{
  try{
    const response = await userAPI.auth();
    dispatch(setUser(response.data.user))
    localStorage.setItem('token', response.data.token)
  }catch (e){
    alert(e)
    localStorage.removeItem('token')
  }
}

export default userReducer;
