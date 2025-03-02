import React from 'react'

function LoginPage() {
  return (
    <div className='popupBox'>Login Page
    <form action="Submit">
      <input type="text" name="username" id="usernameInput" placeholder='Username'/>
      <input type="email" name="email" id="emailInput" placeholder='Email'/>
      <input type="password" name="password" id="passwordInput" placeholder='Password'/>
    </form>
    </div>
  )
}

export default LoginPage