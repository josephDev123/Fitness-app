import React from 'react'

export default function Trending() {
  return (
    <section className='mt-4'>
      <h2 className='mb-4 '>Trending workout</h2>
      <section className='row g-4'>
          <section className='col-md-4'> 
          <div className="card mb-3 h-100" style={{maxWidth:"540px"}}>
            <div className="row g-0">
              <div className=" col-lg-4 col-md-12">
                <img src={process.env.PUBLIC_URL +'/cartoons/box-4530067_1280.png'} className="img-fluid rounded mx-auto mt-2" alt="..."/>
              </div>
              <div className="col-lg-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
          </section>

          <section className='col-md-4'>
          <div className="card mb-3 h-100" style={{maxWidth:"540px"}}>
            <div className="row g-0">
              <div className="col-lg-4 col-md-12">
                <img src={process.env.PUBLIC_URL +'/cartoons/boxing-4574648_.png'} className="img-fluid rounded mx-auto mt-2"  alt="..."/>
              </div>
              <div className="col-lg-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
          </section>

          <section className='col-md-4'>
          <div className="card mb-3 h-100" style={{maxWidth:"540px"}}>
            <div className="row g-0">
              <div className="col-lg-4 col-md-12">
                <img src={process.env.PUBLIC_URL +'/cartoons/boxing-4574648_.png'} className="img-fluid rounded mx-auto mt-2"  alt="..."/>
              </div>
              <div className="col-lg-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
          </section>
      
      </section>
    </section>
  )
}
