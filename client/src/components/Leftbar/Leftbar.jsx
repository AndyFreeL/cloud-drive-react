import React from 'react';
import './leftbar.scss'
import {createDirAction, setPopupDisplay} from "../../reducers/fileReducer";
import {useDispatch, useSelector} from "react-redux";
import CreateDirPopup from "./CreateDirPopup";

const Leftbar = () => {
  const dispatch=useDispatch();
  const currentDir = useSelector(state => state.files.currentDir)

  return (
    <div className='leftbar'>
      <button>Загрузить файлы</button>
      <button onClick={()=>dispatch(setPopupDisplay('flex'))}>Создать папку</button>
      <CreateDirPopup/>
    </div>
  );
};

export default Leftbar;
