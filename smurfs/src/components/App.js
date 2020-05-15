import React, { useState, useEffect } from "react";
import SmurfsContext from '../contexts/SmurfsContext';
import axios from 'axios';
import SmurfList from '../components/SmurfList';
import "./App.css";

const App = () => {

  const [smurfs, setSmurfs] = useState([])

  useEffect( () => {
    
    axios.get('http://localhost:3333/smurfs')
         .then(res => {
           setSmurfs(res.data)
         })
         .catch(err => {
           console.log('Uh oh', err)
         })
  }, [])


return (
  <SmurfsContext.Provider value={{ smurfs }}>
    <div className="App">
      <SmurfList />
    </div>
  </SmurfsContext.Provider>
)

}

export default App;

