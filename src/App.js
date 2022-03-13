import './App.css';
import SOS from './pages/SOS/sos.component';
import Navbar from './components/Nav/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SOS/>
      <Routes>
        <Route path='/' element={<RecipePage/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/ingredients/:ingredientName' element={<IngredientsPage/>} />
      </Routes>
    </div>
  );
}

export default App;
