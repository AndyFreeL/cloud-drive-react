import React, {useEffect, useState} from 'react';
import Header from "../Header/Header";
import Leftbar from "../Leftbar/Leftbar";
import Navbar from "./Navbar/Navbar";
import FileList from "./FileList/FileList";
import Uploader from "./Uploader/Uploader";
import {getFiles} from "../../reducers/fileReducer";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "../../reducers/userReducer";

const Disk = () => {
  const dispatch = useDispatch();
  const currentDir = useSelector(state => state.files.currentDir);

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

export default Disk;
