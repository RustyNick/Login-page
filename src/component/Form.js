
import React,{useState} from 'react'
import PageTitle from './PageTitle'
import { FaEye,FaEyeSlash } from 'react-icons/fa';


function Form() {
  const[showPassword, setShowPassword] = useState(false);
  const[buttonshow, setButtonShow] = useState(<FaEye/>)


const togglePassword =()=>{
  setShowPassword(!showPassword)
  if(!showPassword){
    setButtonShow(<FaEyeSlash/>)
  }
  if(showPassword){
    setButtonShow(<FaEye/>)
  }
}

  return (
    <div className='container container__form' >
        <PageTitle/>
        <label className='label container container__form__input'>Phone Number</label>
        <div className='container container__form__input'>
          <select className="input input__areaCode option">
            <option className='input' value="46" >SE (+46)</option>
            <option className='input' value="65" > (+65)</option>
            <option className='input' value="290" >STHL (+290)</option>
            <option className='input' value="386" >Sl (+386)</option>
          </select>
        <input className="input input__phoneNumber" placeholder=''/>
        </div>
        
        <div className='container container__form__inner'>
          <label className='label'>E-mail</label>
          <input className="input" placeholder=''/>
        </div>
        
        <div className='container container__form__inner'>
        <div className='label__space__between'>
        <label className='label label__input_title'>Choose password</label>
        
        <button className='button__show__toggle' onClick={togglePassword} > {buttonshow}</button>
        
        </div>

        <input className="input" type={showPassword ? "text" : "password"} placeholder='It will be our secret' name="password"/> 
        <div className='label__space__between'>

        <label className='label'>Repeat Password</label>  
        <button className='button__show__toggle' onClick={togglePassword} > {buttonshow}</button>
        </div>
        
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


