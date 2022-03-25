import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api/'
});
const token={headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}

export const userAPI = {
  registration(email, password) {
    return instance.post('auth/registration', {email, password})
  },
  login(email, password) {
    return instance.post('auth/login', {email, password})
  },
  auth() {
    console.log('auth req', token)
    return instance.get('auth/auth', token)
  }
}

export const filesAPI = {
  getFiles(dirId, sort){
    let url = 'files'
    if(dirId){
      url = `files?parent=${dirId}`
    }
    if (sort) {
      url = `files?sort=${sort}`
    }
    if (dirId && sort) {
      url = `files?parent=${dirId}&sort=${sort}`
    }
    console.log('filesApi token',token)
    return instance.get(url, token)
  },
  createDir(dirId, name){
    return instance.post('files', { name, parent: dirId, type:'dir'}, token)
  },
  uploadFile(formData, uploadStatus){
    return instance.post('files/upload', formData, uploadStatus, token)
  },
  downloadFile(file){
    return instance.get(`files/download?id=${file._id}`, {responseType:'blob'}, token)
  },
  deleteFile(file){
    return instance.delete(`files?id=${file._id}`, token)
  },
  searchFile(search){
    return instance.get(`files/search?search=${search}`, token)
  }
}
