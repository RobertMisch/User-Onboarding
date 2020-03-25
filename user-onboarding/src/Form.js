import React, {useState, useEffect} from 'react'
import axios from 'axios'
import * as yup from 'yup'

//form schema. you have to make one of these every time you use yup and want to make aq form with validation
//basicall you need to use yup, and then whatever the data type is of that key. 
//from there .required is something that you can use to proc stuff later down the line

//formSchema
const formSchema = yup.object().shape({
    name: yup.string().required('name is required'),
    email: yup.string().required('email is required'),
    password: yup.string().required('password is required'),
    terms: yup.boolean().oneOf([true], 'must agree to TOS')
})

function Form(){
    //STATE
        //state for inputs
        const[myForm, setMyForm] = useState({
            name:'',
            email:'',
            password:'',
            terms:''
        })

        //state for errors
        const[myErrors, setMyErrors] = useState({
            name:'',
            email:'',
            password:'',
            terms:''
        })

        //state for button (only pressable when the form is complete)
        const [buttonDisabled, setButtonDisabled]= useState(true)

        //state for post request
        const [post, setPost] = useState([])

    //VALIDATION STEPS
    //use effect
    //validateChange
    //formSubmit
    //inputChange

    //use effect
    useEffect(() => {
	    /* We pass the entire state into the entire schema, no need to use reach here. 
	    We want to make sure it is all valid before we allow a user to submit
	    isValid comes from Yup directly */
	    formSchema.isValid(myForm).then(valid => {
	      setButtonDisabled(!valid);
	    });
	  }, [myForm]);

    //validateChange
    const validateChange= function(){

    }

    //formSubmit
    const formSubmit= function(){

    }

    //inputChange
    const inputChange = function(e){
    /* e.persist allows us to use the synthetic event in an async manner.
    We need to be able to use it after the form validation */
    e.persist();

    const newFormData = {
        ...myForm, //similar to yesterday, when we change something, we get everything we already have. here
        [e.target.name]://here e is the input event going on, in a specific input. target.name gathers that name data
          e.target.type === "checkbox" ? e.target.checked : e.target.value//if the type is checkbox, 
      };
      validateChange(e);//we pass e along to our validation function for some checking
      setMyForm(newFormData);//we set our for to everything we had previously (...myForm) 
      //and also add on the key value pair of e.target.name : e.target.checked/value
    }


    return(
    <div>
        <form onSubmit={formSubmit}>
            <label htmlFor='name'>
                Name 
                <input 
                type='text' 
                id='name' 
                name='name'
                value={myForm.name}
                onChange={inputChange}
                />
                {/*put error state stuff right after this section of a form */}
                {myErrors.name.length > 0 ? <p className="error">{myErrors.name}</p> : null}
            </label>
            <label htmlFor='email'>
                Email
                <input 
                type='text' 
                id='email' 
                name='email'
                value={myForm.email}
                onChange={inputChange}
                />
                {myErrors.email.length > 0 ? <p className="error">{myErrors.email}</p> : null}

            </label>
            <label htmlFor='password'>
                Password
                <input 
                type='password' 
                id='password' 
                name='password'
                value={myForm.password}
                onChange={inputChange}
                />
                {myErrors.password.length > 0 ? <p className="error">{myErrors.password}</p> : null}

            </label>
            <label htmlFor='terms' className='terms'>
                Terms of Service
                <input 
                type='checkbox' 
                name='terms'
                checked={myForm.terms}
                onChange={inputChange}
                />
            </label>
        </form>
        <button disabled={buttonDisabled}>Submit</button>
    </div>
    )
}

export default Form