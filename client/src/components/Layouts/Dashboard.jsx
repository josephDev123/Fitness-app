import React from 'react'
import { Outlet, Link } from 'react-router-dom';
import {Chart as ChartJS, CategoryScale,LinearScale,BarElement, Title,Tooltip,Legend,} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};





export default function Dashboard() {
  return (
        <section className='container'>
          {/* header */}
              <nav className="navbar">
                  <Link className="navbar-brand" to="#">
                    <img src={process.env.PUBLIC_URL + '/imgs/logo/logo.png'} alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
                    Fitness
                  </Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  </button>
            </nav>
        

            <section className="d-flex bg-transparent" style={{height:'100vh'}}>
              {/* sidebar */}
                <aside className='collapse' id='navbarSupportedContent'>
                   aside
                   <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to="#">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="#">Link</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link disabled">Disabled</Link>
                    </li>
              
                    <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to="#">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="#">Link</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link disabled">Disabled</Link>
                    </li>
                  </ul>
                </aside>

                <main>
                     <h4 className='lead'>Hello Joseph</h4>
                     <h6 className=''>Welcome</h6>
                     <section>
                     <Bar options={options} data={data} />
                     </section>
                     <Outlet/>
                </main>
                  
            </section>
        </section>
  )
}


