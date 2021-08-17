import React, {useState} from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './components/UI/navbar/Navbar';
import AppRouter from './components/AppRouter';
import './styles/app.css'
import AuthContext from './context';



function App() {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
          <BrowserRouter> 
      <Navbar />
      <AppRouter />

    </BrowserRouter>
    </AuthContext.Provider>

  )
  
}

export default App;
