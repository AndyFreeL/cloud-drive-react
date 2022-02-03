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
