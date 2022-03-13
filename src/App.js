import './App.css';
import SafeCheck from './pages/SafeCheck/safeCheck';

import SOS from './pages/SOS/sos.component';
import Navbar from './components/Nav/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SafeCheck />
      <Routes>
        <Route path='/' element={<SOS/>}/>
        {/* <Route path='/deceased' element={<Deceased/>}/>
        <Route path='/signin' element={<Signin/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
