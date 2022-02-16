import React, {useState} from 'react';
import './header.scss'
import logo from "../../assets/image/cloud-storage-drive.svg";
import {logout} from "../../reducers/userReducer";
import {useDispatch, useSelector} from "react-redux";
import searchIco from './../../assets/image/search.svg';
import logoutIco from './../../assets/image/logout1.svg';
import {getFiles, searchFile} from "../../reducers/fileReducer";

const Header = () => {
  const dispatch = useDispatch()
  const currentDir = useSelector(state => state.files.currentDir)
  const [searchName, setSearchName] = useState()
  const [searchTimeout, setSearchTimeout] = useState(false)

  function searchHandler(e) {
    setSearchName(e.target.value)
    if (searchTimeout != false) {
      clearTimeout(searchTimeout)
    }
    if (e.target.value != '') {
      setSearchTimeout(setTimeout((value) => {
        dispatch(searchFile(value))
      }, 500, e.target.value))
    } else {
      dispatch(getFiles(currentDir))
    }
  }

  return (
    <div className='header'>
      <div className='header-logo'>
        <div className='logo'>
          <img src={logo}/>
          <div>CloudDrive</div>
        </div>
      </div>
      <div className='header-search'>
        <div className='search-logo'><img src={searchIco} alt=""/></div>
        <input className='search-input' type="text" value={searchName} placeholder='Имя файла...'
               onChange={e => searchHandler(e)}/>
      </div>
      <div className='logout' onClick={() => dispatch(logout())}><img src={logoutIco} alt="Logout"/></div>
    </div>
  );
};

export default Header;
