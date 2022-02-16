import React, {useEffect} from 'react';
import Header from "./Header/Header";
import Leftbar from "./Leftbar/Leftbar";
import Navbar from "./Disk/Navbar/Navbar";
import FileList from "./Disk/FileList/FileList";
import Uploader from "./Disk/Uploader/Uploader";
import {getFiles} from "../reducers/fileReducer";
import {useDispatch, useSelector} from "react-redux";

const DiskApp = () => {
  // const dispatch = useDispatch();
  // const currentDir = useSelector(state => state.files.currentDir);
  //
  // useEffect(() => {
  //   dispatch(getFiles(currentDir))
  // }, [currentDir])

  return (
    <div className='app-wrapper'>
      <Header/>
      <div className='app-body'>
        <Leftbar/>
        <div className='content'>
          <Navbar/>
          <FileList/>
          <Uploader/>
        </div>
      </div>
    </div>
  );
};

export default DiskApp;
