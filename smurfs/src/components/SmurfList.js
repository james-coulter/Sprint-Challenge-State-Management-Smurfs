import React, { useContext } from 'react';
import SmurfsContext from '../contexts/SmurfsContext.js';

import './App.css';




const SmurfList = () => {
    const { smurfs, removeSmurf, getRequest } = useContext(SmurfsContext)

    return (
        <div className='smurfCard'>
            {smurfs.map(item => (
                <div className='smurfCardContent' key={item.id}>

                    <h1>Hi, my name is <span>{item.name}</span>.</h1>
                    <h2>I am <span>{item.age}</span> years old.</h2>
                    <h2>I am a whopping <span>{item.height}</span> tall.</h2>
                    <button onClick={() => { 
                        removeSmurf(item.id); 
                        getRequest()
                        }}>Remove</button>
                </div>
            ))}
        </div>
    )

}

export default SmurfList;