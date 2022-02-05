import React, {useState} from 'react';
import './leftbar.scss'
import Input from "../../utils/input/Input";
import {useDispatch, useSelector} from "react-redux";
import {createDirAction, setPopupDisplay} from "../../reducers/fileReducer";

const CreateDirPopup = () => {
  const[dirName, setDirName] = useState('')
  const dispatch=useDispatch();
  const currentDir = useSelector(state => state.files.currentDir)
  const popupDisplay = useSelector(state => state.files.popupDisplay)

  function createHandler() {
    dispatch(createDirAction(currentDir, dirName))
  }
  function hidePopupHandler() {
    dispatch(setPopupDisplay('none'))
  }

  return (
    <div className='popup' onClick={()=>hidePopupHandler()} style={{display: popupDisplay}}>
      <div className='popup__content' onClick={e => e.stopPropagation()}>
        <div className='popup__wrapper'>
          <div className="popup__header">Новая папка</div>
          <Input type='text' placeholder='Введите имя папки...' value={dirName} setValue={setDirName}/>
          <div className='popup__buttons'>
            <button onClick={()=>hidePopupHandler()}>Отмена</button>
            <button onClick={()=>createHandler()}>Создать</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateDirPopup;
