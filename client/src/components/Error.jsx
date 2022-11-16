import React from 'react';
import { useRouteError } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

export default function Error() {
    const errors = useRouteError();
   
  return (
    <Container className='justify-content-center align-items-center'>
         <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
            <i>{errors.statusText || errors.message}</i>
        </p>
    </Container>
  )
}
