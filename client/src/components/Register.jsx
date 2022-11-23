import React from 'react'

export default function Register() {
  return (
    <section className='container'>
        <section className='row justify-content-center align-items-center' style={{height:'100vh'}}>
         
          <section className='col-lg-4 col-md-6 col-sm-6 m-auto'>
          <img src='/cartoons/woman-5681398_1280.png' alt='' className='img-fluid rounded'/>
            <h2 className='display-4  text-center'>Register</h2>
              <form>
                    <div className="mb-3">
                      <label htmlFor="InputEmail" className="htmlForm-label">Email address</label>
                      <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" autoComplete='no'/>
                      <div id="emailHelp" className="htmlForm-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="InputPassword" className="htmlForm-label">Password</label>
                      <input type="password" className="form-control" id="InputPassword" autoComplete='no'/>
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
              </form>
          </section>
    
        </section>
      
    </section>
  )
}
