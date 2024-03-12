import React from 'react'

export const Login = () => {
  return (
    <div className='app'>
        <div className="login">
            <form>
                <input type="text" placeholder='username' />
                {/* <input type="email" placeholder='email' /> */}
                <input type="password" name="password" id="password" placeholder='password' />
                <button type='submit'>Login</button>
            </form>
        </div>
    </div>
  )
}
