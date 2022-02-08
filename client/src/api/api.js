import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api/',
  headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
});

export const userAPI = {
  registration(email, password) {
    return instance.post('auth/registration', {email, password})
  },
  login(email, password) {
    return instance.post('auth/login', {email, password})
  },
  auth() {
    return instance.get('auth/auth')
  }
}

export const filesAPI = {
  getFiles(dirId){
    let url = 'files'
    if(dirId){
      url = `files?parent=${dirId}`
    }
    return instance.get(url)
  },
  createDir(dirId, name){
    return instance.post('files', { name, parent: dirId, type:'dir'})
  },
  uploadFile(formData, uploadStatus){
    return instance.post('files/upload', formData, uploadStatus)
  },
  downloadFile(file){
    return instance.get(`files/download?id=${file._id}`, {
      responseType:'blob'
    })
  }
}
