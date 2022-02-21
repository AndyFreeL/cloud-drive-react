import './App.scss';
import Authorization from "./Authorization/Authorization";
import Registration from "./Authorization/Registration";
import {BrowserRouter, Navigate, Route, Routes,} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {auth} from "../reducers/userReducer";
import Disk from "./Disk/Disk";
import Preloader from "./Preloader/Preloader";
import {hidePreloader, showPreloader} from "../reducers/preloaderReducer";


function App() {
  let isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch();
  const preloader = useSelector(state => state.preloader.preloader)

  useEffect(() => {
      dispatch(auth())
  }, [])

  if (preloader === true) {
    return <Preloader/>
  }

  return (
    <BrowserRouter>
      {!isAuth
        ? <Routes>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/login" element={<Authorization/>}/>
          <Route path="*" element={<Navigate to="/login"/>}/>
        </Routes>
        : <Routes>
          <Route exact path='/' element={<Disk/>}/>
          <Route
            path="*"
            element={<Navigate to="/"/>}
          />
        </Routes>
      }

    </BrowserRouter>
  );
}

export default App;
