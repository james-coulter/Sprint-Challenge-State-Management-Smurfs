import React, { useState, useEffect } from "react";
import SmurfsContext from '../contexts/SmurfsContext';
import SmurfsForm from '../components/SmurfForm'; 
import SmurfList from '../components/SmurfList';
import axios from 'axios';

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

  //STRETCH

  const removeSmurf = id => {
    axios
        .delete(`http://localhost:3333/smurfs/${id}`)
        .then(response => {
            console.log('removing smurf', response)
        })
        .catch(function(error) {
            console.log(error);
        });
};

return (
  <SmurfsContext.Provider value={{ smurfs, postRequest, removeSmurf, getRequest }}>
    <div className="App">
      <SmurfsForm />
      <SmurfList />
    </div>
  </SmurfsContext.Provider>
)

}

export default App;

