import React, {useState} from 'react';
import Input from '../../utils/input/Input'
import {NavLink} from 'react-router-dom';
import {useDispatch} from "react-redux";
import './authorization.scss'
import logo from '../../assets/image/cloud-storage-drive.svg'
import {login} from "../../reducers/userReducer";

const Authorization = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  return (
    <div className='wrapper'>
      <div className='auth_body'>
        <div className='logo'>
          <img src={logo}/>
          <div>Cloud drive</div>
        </div>
        <div className='input_block'>
          <div>Переход в CloudDrive</div>
          <Input value={email} setValue={setEmail} type='text' placeholder='Введите email...'/>
          <Input value={password} setValue={setPassword} type='password' placeholder='Введите пароль...'/>
        </div>
        <div className='button_block'>
          <NavLink to='/registration'>Создать аккаунт</NavLink>
          <button onClick={()=>dispatch(login(email, password))}>Войти</button>
        </div>
      </div>
    </div>
  );
};

export default Authorization;
