import React from 'react';
import fileIcon from '../../../../assets/image/file.svg';
import folderIcon from '../../../../assets/image/folder2.svg';
import './file.scss';
import {useDispatch, useSelector} from "react-redux";
import {downloadFile, pushToStack, setCurrentDir} from "../../../../reducers/fileReducer";
import deleteIcon from './../../../../assets/image/delete.svg';
import downloadIcon from './../../../../assets/image/download.svg';


const File = ({file}) => {
  const dispatch = useDispatch()
  const currentDir = useSelector(state => state.files.currentDir)


  function openDirHandler() {
    if(file.type === 'dir'){
      const folder = {currentDir, name:file.name}
      dispatch(pushToStack(folder))
      dispatch(setCurrentDir(file._id))
    }
  }

  function downloadClickHandler(e){
    e.stopPropagation()
   dispatch(downloadFile(file))
  }
  function deleteClickHandler(e){}

  return (
    <div className='file' onClick={()=>openDirHandler()}>
        <img src={file.type === 'dir' ? folderIcon : fileIcon} alt=""/>
      <div className='file__name'>{file.name}</div>
      {file.type != 'dir' && <div className='down-del-icons'>
        <div onClick={(e)=>downloadClickHandler(e)}><img src={downloadIcon}alt=""/></div>
        <div><img src={deleteIcon}alt=""/></div>
      </div>}
      <div className='file__date'>{file.date}</div>
      <div className='file__size'>{file.size}
      </div>
    </div>
  );
};

export default File;
