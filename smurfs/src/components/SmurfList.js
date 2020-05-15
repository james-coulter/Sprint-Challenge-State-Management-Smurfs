import React, { useContext } from 'react';
import SmurfsContext from '../contexts/SmurfsContext.js';



const SmurfList = () => {
    const { smurfs } = useContext(SmurfsContext)

    return (
        <div>
            {smurfs.map(item => (
                <div key={item.id}>

                    <h1>Hi, my name is {item.name}.</h1>
                    <h2>I am {item.age} years old.</h2>
                    <h2>I am a whopping {item.height} tall.</h2>

                </div>
            ))}
        </div>
    )

}

export default SmurfList;