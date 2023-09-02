import React from 'react'
import { Link } from 'react-router-dom'


export default function ForgotPassword() {
  return (
    <body
      className='bg-gradient-primary'
      style={{
        width:'100%',
        height:'100%',
        position:'absolute'
      }}
    >
      <div className='container'>
        {/* outer row */}
        <div className='row justify-content-center'>
          <div className='col-x1-x10 col-lg-12 col-md-9'>
            <div className='card-body p-0'>
              {/* Nested row within card body */}
              <div className='row'>
                <div className='col-lg-6 d-lg-block bg-password-image'></div>
                <div className='col-lg-6'>
                  <div className='p-5'>
                    <div className='text-center'>
                      <h1 className='h4 text-gray-900 mb-2'>
                        Forgot Password
                      </h1>
                      <p className='mb-4'>
                          We get it, Stuff happens. Just enter your email address below and we'll send you a link to reset your password!
                      </p>
                    </div>
                    <form className='user'>
                      <div className='form-group'>
                        <input
                          type='email'
                          className='form-control form-control-user'
                          id='exampleInputEmail'
                          aria-describedby='emailHelp'
                          placeholder='Enter Email Address'
                        />   
                      </div>
                      <Link to='/login' style={{textDecoration:'none'}}>
                        <a href='login.html' className='btn btn-primary btn-user btn-block'>
                          Reset Password
                        </a>
                      </Link>
                    </form>
                    <hr />
                    <div>
                      <Link to='/register'>
                        <a className='small' href='register.html'>
                          Create Account
                        </a>
                      </Link>
                    </div>
                    <div>
                      <Link to='/login'> 
                        <a className='small' href='login.html'>
                          Already have an account? Login!
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}
