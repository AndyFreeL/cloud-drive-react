import React from 'react';
import fileIcon from '../../../../assets/image/file.svg';
import folderIcon from '../../../../assets/image/folder2.svg';
import './file.scss';


const File = ({file}) => {
  return (
    <div className='file'>
      <img src={file.type === 'dir' ? folderIcon : fileIcon} alt=""/>
      <div className='file__name'>{file.name}</div>
      <div className='file__date'>{file.date}</div>
      <div className='file__size'>{file.size}</div>
    </div>
  );
};

export default File;
