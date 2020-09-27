import React, { useState } from 'react';
import List from './components/List/List';
import Login from './components/login/Login';

function App() {
  const [isAuth, setIsAuth] = useState(false)
  if (!isAuth) return <Login setIsAuth={() => setIsAuth(true)} />
  return <List />
}


export default App;
