import React from 'react'
import '../assets/styles/home.css';
import { redirect, useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate()
  return (
    <section className="container-fluid" style={{height:'100vh'}}>
        <section className="d-flex justify-content-center text-center" style={{height:'80vh'}}>
          <section className='mt-auto'>
              <h1 className='display-2'>Fitness at home</h1>
              <p className='text-muted'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              <button className='btn btn-primary d-block w-100 p-3' onClick={()=>navigate('register')}>Sign Up</button>
              <button className='btn btn-secondary d-block w-100 p-3 mt-2' onClick={()=>navigate('/login')}>Sign In</button>
          </section>
       
        </section>
    </section>
  )
}
// align-items-center flex-column