import React from 'react'
import Header from '../header/Header'
import Navbar from '../navbar/Navbar'


function available() {
  return (
    <div>
        <Navbar/>
        <Header type="list" />
        <h1>Available</h1>
    </div>
  )
}

export default available;