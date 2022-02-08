import React from 'react';
import Header from "./Header/Header";
import Leftbar from "./Leftbar/Leftbar";
import Disk from "./Disk/Disk";

const DiskApp = () => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Leftbar/>
      <Disk/>
    </div>
  );
};

export default DiskApp;
