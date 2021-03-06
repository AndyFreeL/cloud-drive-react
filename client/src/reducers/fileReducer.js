import {filesAPI} from "../api/api";
import {login} from "./userReducer";
import axios from "axios";

const SET_FILE = 'SET_FILE';
const SET_CURRENT_DIR = 'SET_CURRENT_DIR';
const ADD_FILE = 'ADD_FILE';
const SET_POPUP_DISPLAY = 'SET_POPUP_DISPLAY';
const PUSH_TO_STACK = 'PUSH_TO_STACK';
const DELETE_FILE = 'DELETE_FILE';
const SET_VIEW = 'SET_VIEW'

const defaultState = {
  files:[],
  currentDir:null,
  popupDisplay: 'none',
  dirStack:[],
  view: 'list'
}

const fileReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_FILE:return {...state, files: action.payload}
    case SET_CURRENT_DIR:return {...state, currentDir: action.payload}
    case ADD_FILE: return {...state, files:[...state.files, action.payload]}
    case SET_POPUP_DISPLAY: return {...state, popupDisplay: action.payload}
    case PUSH_TO_STACK: return {...state, dirStack: [...state.dirStack, action.payload]}
    case DELETE_FILE: return {...state, files: [...state.files.filter(file=>file._id != action.payload)]}
    case SET_VIEW: return {...state, view: action.payload}
    default:
      return state;
  }
}

export const setFiles = (files)=>({type:SET_FILE, payload: files})
export const setCurrentDir =(dir)=>({type:SET_CURRENT_DIR, payload:dir})
export const addFile = (file)=>({type:ADD_FILE, payload:file})
export const setPopupDisplay = (display)=>({type:SET_POPUP_DISPLAY,  payload:display})
export const pushToStack = (dir)=>({type:PUSH_TO_STACK,  payload:dir})
export const deleteFileAc = (dirId)=>({type:DELETE_FILE,  payload:dirId})
export const setFilesView = (payload)=>({type:SET_VIEW,  payload})


//------------------------------actions----------------------------------------------
// export const getFiles = (currentDir, sort) => async(dispatch)=>{
//   try{
//     console.log('getfiles')
//     const response = await filesAPI.getFiles(currentDir,sort)
//     dispatch(setFiles(response.data))
//   }catch (e){
//     alert(e)
//   }
// }

export function getFiles(dirId, sort) {
  return async dispatch => {
    try {
      let url = `http://localhost:5000/api/files`
      if (dirId) {
        url = `http://localhost:5000/api/files?parent=${dirId}`
      }
      if (sort) {
        url = `http://localhost:5000/api/files?sort=${sort}`
      }
      if (dirId && sort) {
        url = `http://localhost:5000/api/files?parent=${dirId}&sort=${sort}`
      }

      const response = await axios.get(url, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      })
      dispatch(setFiles(response.data))
    } catch (e) {
      alert(e.response.data.message)
    }
  }
}


export const createDirAction = (currentDir, dirName) => async(dispatch)=>{
  try{
    const response = await filesAPI.createDir(currentDir, dirName)
    dispatch(addFile(response.data))
    dispatch(setPopupDisplay('none'))
  }catch (e){
    alert(e)
  }
}
export const downloadFile = (file) => async(dispatch)=>{
  try{
    const response = await filesAPI.downloadFile(file)
    const url = window.URL.createObjectURL(new Blob([response.data]))
    const link = document.createElement('a')
    link.href=url
    link.setAttribute('download', file.name)
    document.body.appendChild(link)
    link.click()
  }catch (e){
    alert(e)
  }
}
export const deleteFile = (file) => async(dispatch)=>{
  try{
    const response = await filesAPI.deleteFile(file)
    dispatch(deleteFileAc(file._id))
    console.log(response.data.message)
  }catch (e){
    alert(e)
  }
}
export const searchFile= (search) => async(dispatch)=>{
  try{
    const response = await filesAPI.searchFile(search)
    dispatch(setFiles(response.data))
  }catch (e){
    alert(e)
  }
}

export default fileReducer;
