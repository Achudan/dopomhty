import './App.css';
import SOS from './pages/SOS/sos.component';
import Navbar from './components/Nav/Navbar';
import { Route, Routes } from 'react-router-dom';
import SigninSignup from './pages/Signin/signin.component';
import { useEffect, useState } from 'react';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
// import DeceasedRegistry from './pages/DeceasedRegistry/deceasedRegistry.component';
import SafeCheck from './pages/SafeCheck/safecheck.page';
function App() {
  const [user, setUser] = useState(null);
  useEffect(()=>{
    // console.log("effect");
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (user)=>{
      if(user){
        const docRef = createUserProfileDocument(user);
        (await docRef).onSnapshot(snapShot => {
          setUser({id:snapShot.id, ...snapShot.data()})
        })
      }
      else{
        setUser(user);
      }
    })
    return ()=>{unsubscribeFromAuth()}
  },[]);
  return (
    <div className="App">
      <Navbar currentUser={user}/>
      <Routes>
        <Route path='/' element={<SOS/>}/>
        <Route path='/decesedregistry' element={<SafeCheck/>}/>
        <Route path='/signin' element={<SigninSignup/>}/>
      </Routes>
    </div>
  );
}

export default App;
