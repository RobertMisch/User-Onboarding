import React, {useState, useEffect} from 'react'
import axios from 'axios'
import * as yup from 'yup'

//form schema. you have to make one of these every time you use yup and want to make aq form with validation
//formSchema

function Form(){
    //state
    //state for inputs
    const[myform, setMyForm] = useState({
        name:'',
        email:'',
        password:'',
        terms:''
    })
    //state for errors
    //state for button (only pressable when the form is complete)
    const [buttonDisabled, setButtonDisabled]= useState(true)
    //state for post request

    //VALIDATION STEPS
    //use effect
    //validateChange
    //formSubmit
    //inputChange

    return(
    <div>
        <form onSubmit={formSubmit}>
            <label htmlFor='name'>
                Name 
                <input 
                type='text' 
                id='name' 
                name='name'
                />
            </label>
            <label htmlFor='email'>
                Email
                <input 
                type='text' 
                id='email' 
                name='email'
                />
            </label>
            <label htmlFor='password'>
                Password
                <input 
                type='password' 
                id='password' 
                name='password'
                />
            </label>
            <label htmlFor='terms' className='terms'>
                Terms of Service
                <input 
                type='checkbox' 
                name='terms'
                checked='false'
                />
            </label>
        </form>
        <button disabled={buttonDisabled}>Submit</button>
    </div>
    )
}

export default Form