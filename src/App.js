import './App.css';
import SOS from './pages/SOS/sos.component';
import Navbar from './components/Nav/Navbar';
import { Route, Routes } from 'react-router-dom';
import SigninSignup from './pages/Signin/signin.component';
import DeceasedRegistry from './pages/DeceasedRegistry/deceasedRegistry.component';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<SOS/>}/>
        <Route path='/decesedregistry' element={<DeceasedRegistry/>}/>
        <Route path='/signin' element={<SigninSignup/>}/>
      </Routes>
    </div>
  );
}

export default App;
