import React from 'react';
import './header.scss'
import logo from "../../assets/image/cloud-storage-drive.svg";
import {logout} from "../../reducers/userReducer";
import {useDispatch} from "react-redux";

const Header = () => {
  const dispatch = useDispatch()
  return (
    <div className='header'>
      <div className='header-logo'>
        <div className='logo'>
          <img src={logo}/>
          <div>Cloud drive</div>
        </div>
      </div>
      <div className='logout' onClick={()=>dispatch(logout())}>Logout</div>
    </div>
  );
};

export default Header;
