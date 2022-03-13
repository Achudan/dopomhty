import './App.css';
import SOS from './pages/SOS/sos.component';
import Navbar from './components/Nav/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<SOS/>}/>
        {/* <Route path='/deceased' element={<Deceased/>}/>
        <Route path='/signin' element={<Signin/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
