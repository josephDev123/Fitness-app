import React from 'react'
import '../assets/styles/loseBellyFat.css' 


export default function LoseBellyFat() {
    const style = {
        borderRadius:'1rem'
    }
  return (
    <section className='lose-belly-fat-wrapper'>
        <div className='row'>
            <div className='card-header' style={style}>
               <div className='content'>
                <h4>Lose Belly Fat</h4>

               </div>

               <div className='loseBellyFat-header-img-banner'>
                  <img src={process.env.PUBLIC_URL+'/imgs/edgar-chaparro.jpg'} className='img' alt='' loading='lazy' width='100%' height='100%'/>
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
