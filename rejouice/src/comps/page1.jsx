import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import '../comps/style.css';

const Page1 = () => {
  const [moe, setMoe] = useState(0);
  const cursor = useRef(null);
  const page1 = useRef(null);

  const mouseMove = (event) => {
    const x = event.clientX;
    const y = event.clientY;
    setMoe(x);
    if (cursor.current) {
      cursor.current.style.left = x + 'px';
      cursor.current.style.top = y + 'px';
    }
  };

  return (
    <div className="main" onMouseMove={mouseMove}>
      <div ref={cursor} className="cursor">
        <h3>Click reel</h3>
      </div>
      <video autoPlay loop muted src="../src/assets/bgvid.mp4" type="video/mp4"></video>
      <div ref={page1} className="page1">
        <nav>
          <h3>The Venture Agency.</h3>
          <h3>Menu</h3>
        </nav>
        <h1>Rejouice</h1>
      </div>
    </div>
  );
};

export default Page1;
