import React from 'react';
import fileIcon from '../../../../assets/image/file.svg';
import folderIcon from '../../../../assets/image/folder2.svg';
import './file.scss';
import {useDispatch, useSelector} from "react-redux";
import {deleteFile, downloadFile, pushToStack, setCurrentDir} from "../../../../reducers/fileReducer";
import deleteIcon from './../../../../assets/image/delete.svg';
import downloadIcon from './../../../../assets/image/download.svg';
import sizeFormat from "../../../../utils/sizeFormat";


const File = ({file}) => {
  const dispatch = useDispatch()
  const currentDir = useSelector(state => state.files.currentDir)
  const filesView = useSelector(state => state.files.view);


  function openDirHandler() {
    if(file.type === 'dir'){
      const folder = {currentDir, name:file.name}
      dispatch(pushToStack(folder))
      dispatch(setCurrentDir(file._id))
      console.log('!!!')
    }
  }

  function downloadClickHandler(e){
    e.stopPropagation()
   dispatch(downloadFile(file))
  }
  function deleteClickHandler(e){
    e.stopPropagation()
    dispatch(deleteFile(file))
  }

  if (filesView === 'list') {
    return (
      <div className='file' onClick={() => openDirHandler()}>
        <img src={file.type === 'dir' ? folderIcon : fileIcon} alt=""/>
        <div className='file__name'>{file.name}</div>
        <div className='down-del-icons'>
          {file.type != 'dir' && <div onClick={(e) => downloadClickHandler(e)}><img src={downloadIcon} alt=""/></div>}
          <div onClick={(e) => deleteClickHandler(e)}><img src={deleteIcon} alt=""/></div>
        </div>
        <div className='file__date'>{file.date.slice(0, 10)}</div>
        <div className='file__size'>{sizeFormat(file.size)}
        </div>
      </div>
    );
  }
  if (filesView === 'plate') {
    return(
      <div className='file-plate' onClick={() => openDirHandler()}>
        <div className='down-del-icons'>
          {file.type !== 'dir' && <div onClick={(e) => downloadClickHandler(e)}><img src={downloadIcon} alt=""/></div>}
          <div onClick={(e) => deleteClickHandler(e)}><img src={deleteIcon} alt=""/></div>
        </div>
        <img src={file.type === 'dir' ? folderIcon : fileIcon} alt=""/>
        <div className='file__name'>{(file.name.length > 15) ? (file.name.slice(0, 14)+'...') :file.name}</div>

      </div>
    )
  }
};

export default File;
