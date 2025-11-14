"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import image from '../public/assets/images/shashank.jpg';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading or wait for images/resources if needed
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
  <div className="loader-overlay">
    <div>
      <div className="matrix-loader">
        <div className="matrix-bar"></div>
        <div className="matrix-bar"></div>
        <div className="matrix-bar"></div>
        <div className="matrix-bar"></div>
        <div className="matrix-bar"></div>
        <div className="matrix-bar"></div>
        <div className="matrix-bar"></div>
      </div>
      <div className="loader-text">Loading Portfolio...</div>
    </div>
  </div>
)}
      <div style={{ opacity: loading ? 0 : 1, transition: "opacity 0.5s" }}>
        <div className="container-md text-break pt-md-4 px-md-5 d-flex align-items-center content-center flex-lg-row flex-column w-auto mt-5 fading-effect hero">
          <div className="d-flex flex-column justify-center w-auto px-md-5 row hero-left" style={{ flex: 1 }}>
            <h1 className="pb-5 text-center font-monospace fw-bold hero-title-gradient">
  <em>Who am I?</em>
</h1>
            <p className="pl-4 w-5/6 break-words fs-4" style={{ textAlign: 'justify' }}>
              Hello, I am <strong><em>Shashank</em></strong> and am a <strong><em>Software engineer</em></strong> with <strong><em>4+ years</em></strong> of experience in <strong><em>Full Stack Developer</em></strong> and currently working at <strong><em>Ellucian</em></strong>.
            </p>
            <a className="btn btn-primary mt-4 text-center fw-bold" href="./about">Know More</a>
          </div>
          <div className="d-flex justify-content-center hero-image-wrap" style={{ flex: 1 }}>
            <Image
              className='rounded shadow img-fluid mb-4 hero-image'
              src={image}
              alt="background"
              width={400}
              height={400}
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </>
  );
}