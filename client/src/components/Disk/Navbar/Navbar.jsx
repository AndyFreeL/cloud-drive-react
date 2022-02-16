import React, {useEffect, useState} from 'react';
import './navbar.scss'
import {useDispatch, useSelector} from "react-redux";
import {getFiles, setCurrentDir, setFilesView} from "../../../reducers/fileReducer";
import rArrow from '../../../../src/assets/image/rightA.svg';
import backArrow from '../../../../src/assets/image/back.svg';
import home from '../../../../src/assets/image/home1.svg'
import tile from '../../../../src/assets/image/tile-sort.svg';
import list from '../../../../src/assets/image/list-sort.svg';


const Navbar = () => {
  const dispatch = useDispatch();
  const currentDir = useSelector(state => state.files.currentDir);
  const dirStack = useSelector(state => state.files.dirStack);
  const filesView = useSelector(state => state.files.view);
  const [sort, setSort] = useState('type')

  const folders = useSelector(state => state.files.dirStack)
    .map((folder, index) =>
      <div className='folder' key={index}>
        <img src={rArrow} alt=''/>
        <div>{folder.name}</div>
      </div>);

  useEffect(() => {
    dispatch(getFiles(currentDir,sort))
  }, [currentDir, sort])

  function backClickHandler() {
    const backDir = dirStack.pop()
    dispatch(setCurrentDir(backDir.currentDir))
  }

  function homeClickHandler() {
    dirStack.splice(0, dirStack.length)
    dispatch(setCurrentDir(null))
  }

  return (
      <div className='nav-block'>
        <div className='nav-buttons'>
          <img className='nav-button' onClick={() => backClickHandler()} src={backArrow} alt=''/>
          <img className='nav-button' onClick={() => homeClickHandler()} src={home} alt=''/>
        </div>
        <div className='folder_path'>
          {folders}
        </div>
        <div className='sort-block'>
          <div className='sort__type'>
            <select value={sort} onChange={(e)=>setSort(e.target.value)}>
              <option value="name">По имени</option>
              <option value="type">По типу</option>
              <option value="date">По дате</option>
            </select>
          </div>
          {filesView === 'list'
            ? <div onClick={() => dispatch(setFilesView('plate'))}>
              <img src={tile} alt=""/>
            </div>
            : <div onClick={() => dispatch(setFilesView('list'))}>
              <img src={list} alt=""/>
            </div>
          }
        </div>
      </div>
  );
};

export default Navbar;
