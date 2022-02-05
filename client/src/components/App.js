import './App.scss';
import Authorization from "./Authorization/Authorization";
import Registration from "./Authorization/Registration";
import {BrowserRouter, Navigate, Route, Routes,} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {auth} from "../reducers/userReducer";
import Header from "./Header/Header";
import Leftbar from "./Leftbar/Leftbar";
import Disk from "./Disk/Disk";


function App() {
  let isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth())
  }, [])


  return (
    <BrowserRouter>
      {!isAuth
        ? <Routes>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/login" element={<Authorization/>}/>
          <Route path="*" element={<Navigate to="/login"/>}/>
        </Routes>
        :
        <div className='app-wrapper'>
          <Header/>
          <Leftbar/>
          <Disk/>
        </div>}

    </BrowserRouter>
  );
}

export default App;
