import React from 'react';


export default function Login() {
  return (
    <section className='container'>
        <section className='d-flex justify-content-center'  style={{height:'80vh'}}>

          <section className='col-lg-4 col-md-6 col-sm-6 mt-auto'>
            <h2 className='display-4  text-center'>Login</h2>
              <form>
                    <div className="mb-3">
                      <label htmlFor="InputEmail" className="htmlForm-label">Email address</label>
                      <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp"/>
                      <div id="emailHelp" className="htmlForm-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="InputPassword" className="htmlForm-label">Password</label>
                      <input type="password" className="form-control" id="InputPassword"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
              </form>
          </section>
    
        </section>
      
    </section>
  )
}
