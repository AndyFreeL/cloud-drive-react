import React, {useEffect} from 'react';
import './disk.scss'
import FileList from "./FileList/FileList";
import {useDispatch, useSelector} from "react-redux";
import {getFiles, setCurrentDir} from "../../reducers/fileReducer";
import rArrow from '../../../src/assets/image/rightA.svg';
import backArrow from '../../../src/assets/image/back.svg';
import home from '../../../src/assets/image/home1.svg'
import Uploader from "./Uploader/Uploader";


const Disk = () => {
  const dispatch = useDispatch();
  const currentDir = useSelector(state => state.files.currentDir);
  const dirStack = useSelector(state => state.files.dirStack);

  const folders = useSelector(state => state.files.dirStack)
    .map((folder, index) =>
      <div className='folder' key={index} >
        <img src={rArrow} alt=''/>
        <div>{folder.name}</div>
      </div>);

  useEffect(() => {
    dispatch(getFiles(currentDir))
    console.log(currentDir)
  }, [currentDir])

  function backClickHandler() {
    const backDir = dirStack.pop()
    dispatch(setCurrentDir(backDir.currentDir))
  }

  function homeClickHandler() {
    dirStack.splice(0, dirStack.length)
    dispatch(setCurrentDir(null))
  }

  return (
    <div className='disk'>
      <div className='nav-block'>
       <div className='nav-buttons'>
          <img className='nav-button' onClick={() => backClickHandler()} src={backArrow} alt=''/>
          <img className='nav-button' onClick={() => homeClickHandler()} src={home} alt=''/>
        </div>
        <div className='folder_path'>
          {folders}
        </div>
        <div className='sort-block'>

        </div>
      </div>
      <FileList/>
      <Uploader/>
    </div>
  );
};

export default Disk;
