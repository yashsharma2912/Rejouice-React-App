import React from 'react'
import "../comps/style.css"

const Page3 = () => {
  return (
    <div className="page3">
        <div className="p3top">
            <h2>Agency & Venture <span>Models</span> →</h2>
            <h1><a href="#">Explore ou services <br />
             and engagement models
            </a></h1>
        </div>
        <div className="p3bot">
             <div className="tb3">
                <h3>Transforming visions into brands</h3>
                <h3>→ See the work</h3>
             </div>
             <div className="bb3">
                <div className="box">
                    <img src="../src/assets/imgs/1.jpg" alt="" />
                    <video autoPlay loop muted src="../src/assets/vid1.mp4"></video>
                </div>
                <div className="box">
                    <img src="../src/assets/imgs/2.jpg" alt="" />
                    <video autoPlay loop muted src="../src/assets/vid2.mp4"></video>
                </div>
                <div className="box">
                    <img src="../src/assets/imgs/3.jpg" alt="" />
                    <video autoPlay loop muted src="../src/assets/vid3.mp4"></video>
                </div>
             </div>
        </div>
    </div>
  )
}

export default Page3