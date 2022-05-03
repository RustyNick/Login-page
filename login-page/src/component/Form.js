import React from 'react'



function Form() {
  return (
    <div className='container container__form' >
        
        <label className='label'>Phone Number</label>
        
        <div className='container container__form__input'>
          <select className="input input__areaCode">
            <option className='input' value="sweden" >swe(+46)</option>
          </select>
        <input className="input input__phoneNumber" placeholder=''/>
        </div>

        <div className='container container__form'>
          <label className='label'>E-mail</label>
          <input className="input" placeholder=''/>
        </div>
        
        <div className='container container__form'>
        <label className='label label__input_title'>Choose password</label>
        <input className="input" type="password" placeholder='It will be our secret'/>
        <label className='label'>repeat Password</label>
        <input className="input" type="password" placeholder=''/>
        </div>
        
        
        <div className='container container__form container__checkbox'>
          
        <div className='container__App'>
          <input className='input__checkbox ' type="checkbox"  />  <div>I conset to the + <a href="#">Privacy Policy</a> & <a href="#">Terms of Service</a> </div>
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


