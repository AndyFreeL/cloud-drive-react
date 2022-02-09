import React from 'react';
import './fileList.scss';
import {useSelector} from "react-redux";
import File from "./File/File";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const FileList = () => {
  const files = useSelector(state => state.files.files);
  const filesView = useSelector(state => state.files.view);

  if (files.length === 0) {
    return <div className='empty-folder'>Папка пуста</div>
  }

  if (filesView === 'list') {
    return (
      <div className='filelist'>
        <div className='filelist__header'>
          <div className='filelist__name'>Имя</div>
          <div className='filelist__date'>Дата</div>
          <div className='filelist__size'>Размер файла</div>
        </div>
        <TransitionGroup>
          {files.map(file =>
            <CSSTransition key={file._id} timeout={500} classNames={'file'} exit={false}>
              <File file={file}/>
            </CSSTransition>)}
        </TransitionGroup>
      </div>
    );
  }
  if (filesView === 'plate'){
    return (
      <div className='fileplate'>
        {files.map(file => <File key={file._id} file={file}/>)}
      </div>
    );
  }
};

export default FileList;
