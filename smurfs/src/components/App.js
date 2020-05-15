import React, { useState, useEffect } from "react";
import SmurfsContext from '../contexts/SmurfsContext';
import SmurfsForm from '../components/SmurfForm'; 
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
           console.log('Error with Get Req', err)
         })
  }, [])

  const getRequest = () => {
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
      setSmurfs(res.data)
    })
    .catch(err => {
      console.log('Error with Get Req', err)
    })
}

  const postRequest = (item) => {

    axios.post('http://localhost:3333/smurfs', item)
         .then(res => {
           console.log('Post Successful', res)
         })
         .catch(err => {
           console.log('Error with Post Req', err)
         })
  }


return (
  <SmurfsContext.Provider value={{ smurfs, postRequest, getRequest }}>
    <div className="App">
      <SmurfsForm />
      <SmurfList />
    </div>
  </SmurfsContext.Provider>
)

}

export default App;

