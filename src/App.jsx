// import { useState } from 'react';
import Header from './components/header'
import Nav from './components/nav'
import './App.css'

function App() {
  return (
    <>
      <div className='container'>
        <div className='position-fixed top-0 start-0'>
          <div className='row' id='header-row'>
            <div className='col-sm-2'><Nav /></div>
            <div className='col-sm-10'><Header /></div>
         </div>

        </div>
        <div className='row' id='about-row'>
          <div className='col-sm-2'>  </div>
          <div className='col-sm-10'><p> <em>Breakpoints</em>   are specific screen dimensions at which the layout of your website can change to provide a better user experience on different devices</p></div>
        </div>
      </div>
  </>
);}

export default App
