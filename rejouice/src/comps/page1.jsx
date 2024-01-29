import React from 'react'
import "../comps/style.css"

const Page1 = () => {

    
  return (
    <div className="main">
        {/* <div className="cursor">
            <h3>Click reel</h3>
        </div> */}
        <video autoPlay loop muted src="../src/assets/bgvid.mp4" type="video/mp4"></video>
        <div className="page1">
            <nav>
                <h3>The Venture Agency.</h3>
                <h3>Menu</h3>
            </nav>
            <h1>Rejouice</h1>
        </div>
    </div>
  )
}

export default Page1