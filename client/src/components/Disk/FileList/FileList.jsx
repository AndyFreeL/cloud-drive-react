import React from 'react';
import './fileList.scss';
import {useSelector} from "react-redux";
import File from "./File/File";

const FileList = () => {
  const files = useSelector(state=>state.files.files).map(file=><File key={file._id} file={file}/>);

  return (
    <div className='filelist'>
      <div className='filelist__header'>
        <div className='filelist__name'>Имя</div>
        <div className='filelist__date'>Дата</div>
        <div className='filelist__size'>Размер файла</div>
      </div>
      {files}
    </div>
  );
};

export default FileList;
