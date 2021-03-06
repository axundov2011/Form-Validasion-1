
import { useFormik} from 'formik'
import validationSchema from './Validations';


function SignUp() {
    
   const {handleSubmit, handleChange, values} = useFormik({
    initialValues: {
     email: "",
     password: '',
     passwordConfirm: '',
       },
    onSubmit: values => {
     console.log(values);
    },
validationSchema,    //email degilde baska bir seyler yazarsan gondermez cun ki email gondermedigini anlar

  });

  return (
    <div>
<h1>Sign Up</h1>
<form onSubmit={handleSubmit}> 

<label htmlFor="email">Email</label>
<input name="email" value={values.email} onChange={handleChange} />
<br />
<br />


<label htmlFor="password">Password</label>
<input name="password" value={values.password} onChange={handleChange} />
<br />
<br />

<label >Confirm Password</label>
<input name="passwordConfirm" value={values.passwordConfirm} onChange={handleChange} />
<br />
<br />


        <button type="submit">Submit</button>

        <br /> <br />

       <code>{JSON.stringify(values)}</code> 
      </form>
    </div>
  )
}

export default SignUp