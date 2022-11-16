import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import '../assets/styles/home.css';

export default function Home() {
  return (
    <Container fluid className='bg-img'>
        <section className='content-wrapper'>
            <h1>Fitness at home</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <button className='btn'>Sign Up</button>
            <button className='btn'>Sign In</button>
        </section>
    </Container>
  )
}
