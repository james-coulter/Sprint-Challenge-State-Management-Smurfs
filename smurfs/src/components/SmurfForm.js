import React, { useState, useContext } from 'react';
import SmurfsContext from '../contexts/SmurfsContext';

const SmurfForm = () => {

    const [form, setForm] = useState({name:'', age: 0, height:''})

    const { postRequest, getRequest } = useContext(SmurfsContext);

    const handleOnChange = e => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        postRequest(form)
        e.target.reset()
        getRequest()
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Create your own Smurf or Smurfette</h1>
            <label>
                <input 
                type='text' 
                name='name'  
                values={form} 
                onChange={handleOnChange} 
                placeholder='New Name'></input>
            </label>
            <label>
                <input 
                type='number' 
                name='age'  
                values={form} 
                onChange={handleOnChange} 
                placeholder='Age'></input>
            </label>
            <label>
                <input 
                type='text' 
                name='height'  
                values={form} 
                onChange={handleOnChange} 
                placeholder='Height'></input>
            </label>
            <label>
                <button type='submit'>Render</button>
            </label>
        </form>
    )

}

export default SmurfForm;