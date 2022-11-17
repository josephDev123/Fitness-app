import React from 'react'
import '../assets/styles/home.css';
import { redirect, useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate()
  return (
    <section className='container-fluid bg-img'>
        <section className='content-wrapper'>
            <h1>Fitness at home</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <button className='btn' onClick={()=>navigate('register')}>Sign Up</button>
            <button className='btn' onClick={()=>navigate('/login')}>Sign In</button>
        </section>
    </section>
  )
}
