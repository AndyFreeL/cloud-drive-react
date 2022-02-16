import React from 'react';
import {useDispatch} from "react-redux";
import {removeUploadFile} from "../../../reducers/uploadReducer";
import './Uploader.scss'
import cross from "../../../assets/image/cross.svg";

const UploadFile = ({file}) => {
  const dispatch = useDispatch()

  return (
    <div>
      <div className="upload-file">
        <div className="upload-file__header">
          <div className="upload-file__name">{
            file.name.length > 20
              ? file.name.slice(0, 18) + '...'+ file.name.slice(-9)
              : file.name
          }</div>
          <button className="upload-file__remove" onClick={() => dispatch(removeUploadFile(file.id))}><img src={cross}
                                                                                                           alt=""/>
          </button>
        </div>
        <div className="upload-file__progress-bar">
          <div className="upload-file__upload-bar" style={{width: file.progress + "%"}}/>
          <div className="upload-file__percent">{file.progress}%</div>
        </div>
      </div>
    </div>
  );
};

export default UploadFile;
