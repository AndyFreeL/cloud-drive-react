import React from 'react';
import fileIcon from '../../../../assets/image/file.svg';
import folderIcon from '../../../../assets/image/folder2.svg';
import './file.scss';
import {useDispatch, useSelector} from "react-redux";
import {pushToStack, setCurrentDir} from "../../../../reducers/fileReducer";


const File = ({file}) => {
  const dispatch = useDispatch()
  const currentDir = useSelector(state => state.files.currentDir)


  function openDirHandler() {
    if(file.type === 'dir'){
      dispatch(pushToStack(currentDir))
      dispatch(setCurrentDir(file._id))
    }
  }

  return (
    <div className='file' onClick={()=>openDirHandler()}>
      <img src={file.type === 'dir' ? folderIcon : fileIcon} alt=""/>
      <div className='file__name'>{file.name}</div>
      <div className='file__date'>{file.date}</div>
      <div className='file__size'>{file.size}</div>
    </div>
  );
};

export default File;
