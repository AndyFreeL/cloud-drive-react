import React, {useEffect} from 'react';
import './disk.scss'
import FileList from "./FileList/FileList";
import {useDispatch, useSelector} from "react-redux";
import {getFiles, pushToStack, setCurrentDir} from "../../reducers/fileReducer";
import rArrow from '../../../src/assets/image/rightA.svg';
import backArrow from '../../../src/assets/image/back.svg';
import home from '../../../src/assets/image/home1.svg'


const Disk = () => {
  const dispatch = useDispatch();
  const currentDir = useSelector(state => state.files.currentDir);
  const dirStack = useSelector(state => state.files.dirStack);

  const folders = useSelector(state => state.files.dirStack)
    .map(file =><div className='folder' key={file} onClick={()=>folderPathHandler()}>
      <img src={rArrow} alt=''/>
      <div >{file[1]}</div>
    </div>);

  useEffect(()=>{
    dispatch(getFiles(currentDir))
  },[currentDir])

  function backClickHandler() {
    const backDir=dirStack.pop()
    dispatch(setCurrentDir(backDir[backDir.length-2]))
  }

  function homeClickHandler() {
    dirStack.splice(0, dirStack.length)
    dispatch(setCurrentDir(null))
  }

 function folderPathHandler(){
   console.log(dirStack)
 }

  return (
    <div className='disk'>
      <div className='nav-block'>
        <img onClick={()=>backClickHandler()} src={backArrow} alt='' />
        <img onClick={()=>homeClickHandler()} src={home} alt=''/>
        <div className='folder_path'>
          {folders}
        </div>
        <div className='sort-block'>sort</div>
      </div>
      <FileList/>
    </div>
  );
};

export default Disk;
