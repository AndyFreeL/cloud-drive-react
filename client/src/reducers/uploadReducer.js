import {filesAPI} from "../api/api";
import {addFile, setPopupDisplay} from "./fileReducer";

const SHOW_UPLOADER = 'SHOW_UPLOADER'
const HIDE_UPLOADER = 'HIDE_UPLOADER'
const ADD_UPLOAD_FILE = 'ADD_UPLOAD_FILE'
const REMOVE_UPLOAD_FILE = 'REMOVE_UPLOAD_FILE'
const CHANGE_UPLOAD_FILE = 'CHANGE_UPLOAD_FILE'

const defaultState = {
  isVisible: false,
  files: []
}

export default function uploadReducer(state = defaultState, action) {
  switch (action.type) {
    case SHOW_UPLOADER:
      return { ...state, isVisible: true }
    case HIDE_UPLOADER:
      return { ...state, isVisible: false }
    case ADD_UPLOAD_FILE:
      return { ...state, files: [...state.files, { ...action.payload }] }
    case REMOVE_UPLOAD_FILE:
      return { ...state, files: [...state.files.filter(file => file.id != action.payload)] }
    case CHANGE_UPLOAD_FILE:
      return {
        ...state, files: [...state.files.map(file => file.id == action.payload.id
          ? { ...file, progress: action.payload.progress }
          : { ...file }
        )]
      }

    default:
      return state
  }
}

export const showUploader = () => ({ type: SHOW_UPLOADER })
export const hideUploader = () => ({ type: HIDE_UPLOADER })
export const addUploadFile = (file) => ({ type: ADD_UPLOAD_FILE, payload: file })
export const removeUploadFile = (fileId) => ({ type: REMOVE_UPLOAD_FILE, payload: fileId })
export const changeUploadFile = (payload) => ({ type: CHANGE_UPLOAD_FILE, payload })

export const uploadFile = (file, dirId) => async(dispatch)=>{
  try{
    const formData = new FormData()
    formData.append('file', file)

    if(dirId){
      formData.append('parent', dirId)
    }
    const uploadFile = {name:file.name, progress: 0, id:Date.now()}
    dispatch(showUploader())
    dispatch(addUploadFile(uploadFile))

    const uploadStatus = {
      onUploadProgress: progressEvent => {
        const totalLength = progressEvent.lengthComputable
          ? progressEvent.total : progressEvent.target.getResponseHeader('content-length')
          || progressEvent.target.getResponseHeader('x-decompressed-content-length');
        console.log('total', totalLength)
        if (totalLength) {
          uploadFile.progress = Math.round((progressEvent.loaded * 100) / totalLength)
          dispatch(changeUploadFile(uploadFile))
          console.log('progress', uploadFile.progress)
        }
      }
    }

    const response = await filesAPI.uploadFile(formData,uploadStatus)
    dispatch(addFile(response.data))

  }catch (e){
    alert(e)
  }
}

