import React from 'react'
import './homepage.styles.scss'

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">New Books</h1>
            <span className="subtitle">Buy Now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Old Books</h1>
            <span className="subtitle">Buy Now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Comics</h1>
            <span className="subtitle">Buy Now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">History</h1>
            <span className="subtitle">Buy Now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Others</h1>
            <span className="subtitle">Buy Now</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
