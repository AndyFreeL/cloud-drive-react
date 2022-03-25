import React from 'react';
import './leftbar.scss'
import {setPopupDisplay} from "../../reducers/fileReducer";
import {useDispatch, useSelector} from "react-redux";
import CreateDirPopup from "./CreateDirPopup";
import {uploadFile} from "../../reducers/uploadReducer";
import sizeFormat from './../../utils/sizeFormat'

const Leftbar = () => {
  const dispatch = useDispatch();
  const currentDir = useSelector(state => state.files.currentDir);
  const diskSpace = useSelector(state => state.user.currentUser.diskSpace);
  const usedSpace = useSelector(state => state.user.currentUser.usedSpace);
  const progressBar =Math.round((usedSpace*100)/diskSpace)

  return (
    <div className='leftbar'>
      <div className='button-block'>
        <div className='button' onClick={() => dispatch(setPopupDisplay('flex'))}>Создать папку</div>
        <label htmlFor='upload-input' className='button'>Загрузить файл</label>
        <input multiple={true} type='file' id='upload-input' className='upload-input'
               onChange={(e) => {
                 const files = [...e.target.files]
                 files.forEach(file => dispatch(uploadFile(file, currentDir)))}}/>
        <div className='button'>Корзина</div>
      </div>
      <div className='disk-space'>
        <div className='space-bar'>
          <div className='used-space' style={{width:progressBar+'%'}}></div>
          <div className='free-space'>Свободно {sizeFormat(diskSpace-usedSpace)} из {sizeFormat(diskSpace)}</div>

        </div>
      </div>
      <CreateDirPopup/>
    </div>
  );
};

export default Leftbar;
