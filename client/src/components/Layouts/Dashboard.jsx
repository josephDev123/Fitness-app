import React from 'react'
import { Outlet, Link } from 'react-router-dom';


export default function Dashboard() {
  return (
        <section className="d-flex align-items-start mt-2 bg-light" style={{height:'100vh'}}>
            <div className="nav flex-column nav-pills me-5 ms-4 mt-2" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <Link className="navbar-brand" href="#">
                <img src="/imgs/logo/logo.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top mb-5"/> 
                    Bootstrap
                </Link>
                <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</button>
                <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</button>
                <button className="nav-link" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false" disabled>Disabled</button>
                <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>
                <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
            </div>
            <div className="tab-content" id="v-pills-tabContent">
               <h4 className='text-muted'> Hello Joseph 👋</h4>
            </div>
        </section>
  )
}

