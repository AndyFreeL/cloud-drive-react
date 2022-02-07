import React from 'react';
import './leftbar.scss'
import {setPopupDisplay} from "../../reducers/fileReducer";
import {useDispatch, useSelector} from "react-redux";
import CreateDirPopup from "./CreateDirPopup";
import {uploadFile} from "../../reducers/uploadReducer";

const Leftbar = () => {
  const dispatch = useDispatch();
  const currentDir = useSelector(state => state.files.currentDir);


  return (
    <div className='leftbar'>
      <div className="button-block"> <div className='button' onClick={() => dispatch(setPopupDisplay('flex'))}>Создать папку</div>
        <label htmlFor='upload-input' className='button'>Загрузить файл</label>
        <input multiple={true} type='file' id='upload-input' className='upload-input'
               onChange={(e) => {
                 const files = [...e.target.files]
                 files.forEach(file => dispatch(uploadFile(file, currentDir)))
               }
               }/></div>
      <CreateDirPopup/>
    </div>
  );
};

export default Leftbar;
