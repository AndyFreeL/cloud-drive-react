import React, {useState} from 'react';
import logo from "../../assets/image/cloud-storage-drive.svg";
import Input from "../../utils/input/Input";
import {NavLink} from "react-router-dom";
import './authorization.scss'
import {registration} from "../../reducers/userReducer";
import {useDispatch} from "react-redux";

const Registration = () => {
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
          <div>Регистрация в CloudDrive</div>
          <Input value={email} setValue={setEmail} type='text' placeholder='Введите email...'/>
          <Input value={password} setValue={setPassword} type='password' placeholder='Введите пароль...'/>
        </div>
        <div className='button_block'>
            <NavLink to='/login'>Войти</NavLink>
            <button onClick={()=>dispatch(registration(email, password))}>Создать</button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
