import React, {useEffect} from 'react';
import './disk.scss'
import FileList from "./FileList/FileList";
import {useDispatch, useSelector} from "react-redux";
import {getFiles} from "../../reducers/fileReducer";


const Disk = () => {
  const dispatch = useDispatch();
  const currentDir = useSelector(state => state.files.currentDir);

  useEffect(()=>{
    dispatch(getFiles(currentDir))
  },[])

  return (
    <div className='disk'>
      <div className='nav_block'>
        <button>asdasd</button>
        <button>asdasd</button>
      </div>
      <FileList/>
    </div>
  );
};

export default Disk;
