import React from 'react'

function Form() {
  return (
    <div className='container container__form' >
        
        <label className='label'>Phone Number</label>
        <div className='container'>
        <input className="input input__areaCode" type="option" placeholder=''/>
        <input className="input input__phoneNumber" placeholder=''/>
        </div>

        <label className='label'>E-mail</label>
        <input className="input"  type="e-mail" placeholder=''/>
        <label className='label'>Choose password</label>
        <input className="input" type="password" placeholder='It will be our secret'/>
        <label className='label'>repeat Password</label>
        <input className="input" type="password" placeholder=''/>

        <div className='container container__checkbox'>
        <input className='input__checkbox' type="checkbox"/>
        <input className='input__checkbox' type="checkbox"/>

        </div>


        <button className="button button__signUp">Sign Up</button>
    </div>
  )
}

export default Form