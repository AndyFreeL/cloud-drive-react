import './App.scss';
import Authorization from "./Authorization/Authorization";
import Registration from "./Authorization/Registration";
import {BrowserRouter, Navigate, Route, Routes,} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {auth} from "../reducers/userReducer";
import DiskApp from "./DiskApp";


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
        : <Routes>
          <Route exact path='/' element={<DiskApp/>}/>
          <Route
            path="*"
            element={<Navigate to="/" />}
          />
        </Routes>
        }
    </BrowserRouter>
  );
}

export default App;
