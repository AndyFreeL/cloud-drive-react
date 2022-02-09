import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import './Uploader.scss';
import cross from './../../../assets/image/cross.svg'
import UploadFile from "./UploadFile";
import {hideUploader} from "../../../reducers/uploadReducer";

const Uploader = () => {
  const dispatch = useDispatch()
  const files = useSelector(state => state.upload.files)
  const isVisible = useSelector(state => state.upload.isVisible)


  return ( isVisible &&
    <div className="uploader">
      <div className="uploader__header">
        <div className="uploader__title">Загрузки</div>
        <div className="uploader__close" onClick={() => dispatch(hideUploader())}><img src={cross} alt=""/></div>
      </div>
      {files.map(file =>
        <UploadFile key={file.id} file={file}/>
      )}
    </div>
  );
};

export default Uploader;
