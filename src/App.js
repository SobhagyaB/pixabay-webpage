// import logo from './logo.svg';
import './App.css';
import Themaincontent from './components/MainContent';
import Signup from './Pages/Join';
import Login from './Pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Secondpage from './Pages/Secondpage';
import Errorpage from './Pages/Errorpage';

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Themaincontent/>}/>
      {/* <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/> */}
      {/* <Route path='/mainpage' element={<Themaincontent/>}/> */}
      <Route path='/loginpage' element={<Login/>}/>
      <Route path='/signinpage' element={<Signup/>}/>
      <Route path='/nextpage' element={<Secondpage/>}/>
      <Route path='*' element={<Errorpage/>}/>
    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
