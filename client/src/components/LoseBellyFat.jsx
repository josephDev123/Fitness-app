import React from 'react'
import '../assets/styles/loseBellyFat.css' 


export default function LoseBellyFat() {
    const style = {
        borderRadius:'1rem'
    }
  return (
    <section className='lose-belly-fat-wrapper'>
        <div className='row'>

            <div className='cards-wrapper'>
                <div className='card-wrapper' style={style}>
                    <div className='content'>
                        <h6>Name of exercise</h6>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>

                    <div className='loseBellyFat-header-img-banner'>
                      <img src={process.env.PUBLIC_URL+'/cartoons/plank-6573171_1280.png'} className='img' alt='' loading='lazy' width='100%' height='100%'/>
                    </div>
                    
                </div>

                <div className='card-wrapper'>
                      <div className='content'>
                      <h6>Name of exercise</h6>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <div className='loseBellyFat-header-img-banner'>
                      <img src={process.env.PUBLIC_URL+'/cartoons/plank-6573171_1280.png'} className='img' alt='' loading='lazy' width='100%' height='100%'/>
                    </div>
                    
                </div>

                <div className='card-wrapper'>
                      <div className='content'>
                      <h6>Name of exercise</h6>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>

                    <div className='loseBellyFat-header-img-banner'>
                      <img src={process.env.PUBLIC_URL+'/cartoons/plank-6573171_1280.png'} className='img' alt='' loading='lazy' width='100%' height='100%'/>
                    </div>
                    
                </div>
            </div>

        </div>




        <div className='content-wrapper'>

        </div>

        <div className='img-wrapper'>
            
        </div>
    </section>
  )
}
