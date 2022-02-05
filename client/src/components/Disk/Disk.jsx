import React, {useEffect} from 'react';
import './disk.scss'
import FileList from "./FileList/FileList";
import {useDispatch, useSelector} from "react-redux";
import {getFiles, setCurrentDir} from "../../reducers/fileReducer";


const Disk = () => {
  const dispatch = useDispatch();
  const currentDir = useSelector(state => state.files.currentDir);
  const dirStack = useSelector(state => state.files.dirStack);

  useEffect(()=>{
    dispatch(getFiles(currentDir))
  },[currentDir])

  function backClickHandler() {
    const backDir=dirStack.pop()
    dispatch(setCurrentDir(backDir))
  }

  return (
    <div className='disk'>
      <div className='nav_block'>
        <button onClick={()=>backClickHandler()}>Назад</button>
      </div>
      <FileList/>
    </div>
  );
};

export default Disk;
