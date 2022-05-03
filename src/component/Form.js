import React,{useState} from 'react'
/* import {AiFillEye} from '../react-icons/AiFillEye'; */

/* AiFillEyeInvisible */

import PageTitle from './PageTitle'



function Form() {
  const[showPassword, setShowPassword] = useState(false);


const togglePassword =()=>{
  setShowPassword(!showPassword)
}

  return (
    <div className='container container__form' >
        <PageTitle/>
        
        <label className='label container container__form__input'>Phone Number</label>
        <div className='container container__form__input'>
          <select className="input input__areaCode">
            <option className='input' value="sweden" >swe(+46)</option>
          </select>
        <input className="input input__phoneNumber" placeholder=''/>
        </div>

        <div className='container container__form__inner'>
          <label className='label'>E-mail</label>
          <input className="input" placeholder=''/>
        </div>
        
        <div className='container container__form__inner'>
        
        <label className='label label__input_title'>Choose password</label> <button onClick={togglePassword} >toggle</button>

        <input className="input" type={showPassword ? "text" : "password"} placeholder='It will be our secret' name="password"/> 
        
        <label className='label'>Repeat Password</label>  <button onClick={togglePassword} > toggle </button>
        
        <input className="input" type={showPassword ? "text" : "password"} placeholder='' name="second-password"/>
        </div>
        
        
        <div className='container container__form__inner container__checkbox'>
          
        <div className='container__App'>
          <input className='input__checkbox ' type="checkbox"  />  <div>I consent to the <a href="#">Privacy Policy</a> & <a href="#">Terms of Service</a></div>
          </div>
        <div className='container__App'>
        <input className='input__checkbox ' type="checkbox"   />   <div>I want to recive stories for trends. inspirations, interior design tips and to be the first to learn about new products & campaings</div>
          </div>

        </div>


        <button className="button button__signUp">Sign up</button>
    </div>
  )
}

export default Form


