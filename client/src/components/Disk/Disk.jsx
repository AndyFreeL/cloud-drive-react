// import React, {useEffect, useState} from 'react';
// import './disk.scss'
// import FileList from "./FileList/FileList";
// import {useDispatch, useSelector} from "react-redux";
// import {getFiles, setCurrentDir, setFilesView} from "../../reducers/fileReducer";
// import rArrow from '../../../src/assets/image/rightA.svg';
// import backArrow from '../../../src/assets/image/back.svg';
// import home from '../../../src/assets/image/home1.svg'
// import Uploader from "./Uploader/Uploader";
// import tile from '../../../src/assets/image/tile-sort.svg';
// import list from '../../../src/assets/image/list-sort.svg';
// import Navbar from "./Navbar/Navbar";
//
//
// const Disk = () => {
//   const dispatch = useDispatch();
//   const currentDir = useSelector(state => state.files.currentDir);
//   const [sort, setSort] = useState('type')
//
//   useEffect(() => {
//     dispatch(getFiles(currentDir,sort))
//   }, [currentDir, sort])
//
//   return (
//     <div className='disk'>
//       <Navbar/>
//       <FileList/>
//       <Uploader/>
//     </div>
//   );
// };
//
// export default Disk;
