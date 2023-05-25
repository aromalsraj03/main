import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Home from './components/Home';
import Userdashboard from './components/Userdashboard';
import Admindashboard from './components/Admindashboard';


function App() {
  return (
    <div className="App">
       {/* <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Signup' element={<Signup />}></Route>
      </Routes>
  </BrowserRouter> */}
  {/* <Userdashboard /> */}
  <Admindashboard />
    </div>
  );
}

export default App;
