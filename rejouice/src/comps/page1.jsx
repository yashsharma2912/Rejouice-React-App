import React, { useRef } from 'react'
import { gsap } from "gsap";
import "../comps/style.css"

const Page1 = () => {

const cursor = useRef(""); 
const page1 = useRef(""); 

const mouseMove = (dets)=>{
    gsap.to(cursor,{
      x:dets.x,
      y:dets.y
    })       
}

  return (
    <div className="main">
         {/* <div Ref={cursor} className="cursor">
            <h3>Click reel</h3>
        </div>  */}
        <video autoPlay loop muted src="../src/assets/bgvid.mp4" type="video/mp4"></video>
        <div ref={page1} className="page1" onMouseMove={mouseMove}>
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