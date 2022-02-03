import {filesAPI} from "../api/api";

const SET_FILE = 'SET_FILE';
const SET_CURRENT_DIR = 'SET_CURRENT_DIR';

const initialState = {
  files:[],
  currentDir:null
}

const fileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILE:return {...state, files: action.payload}
    case SET_CURRENT_DIR:return {...state, currentDir: action.payload}
    default:
      return state;
  }
}

export const setFiles = (files)=>({type:SET_FILE, payload: files})
export const setCurrentDir =(dir)=>({type:SET_CURRENT_DIR, payload:dir})

export const getFiles = (currentDir) => async(dispatch)=>{
  try{
    const response = await filesAPI.getFiles(currentDir)
    dispatch(setFiles(response.data))
  }catch (e){
    alert(e)
  }
}

export default fileReducer;
