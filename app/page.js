import Image from "next/image";
import image from '../public/assets/images/shashank.jpg';
export default function Home() {
  return (
    <div>
      {/* <div className="container-md text-break pt-35 d-flex align-items-center content-center flex-row w-50"> */}
      <div className="container-md text-break pt-md-4 px-md-5 d-flex align-items-center content-center flex-lg-row flex-column w-auto mt-5 fading-effect">
              <Image className='rounded shadow mx-auto d-block img-fluid mb-4' src={image} alt="background" width={500} placeholder="blur"/>
              <div className="d-flex flex-md-column justify-center w-auto px-md-5 row" >
                <h1 className="pb-5 text-center font-monospace fw-bold"><em>Who am I?</em></h1>
              <p className="pl-4 w-5/6 break-words fs-4" style={{textAlign: 'justify'}}>Hello, I am <strong><em>Shashank</em></strong> and am a <strong><em>Software engineer</em></strong> with <strong><em>4+ years</em></strong> of experience in <strong><em>Full Stack Developer</em></strong> and currently working at <strong><em>Ellucian</em></strong>.</p>
              <a className="btn btn-primary mt-4 text-center fw-bold" href="./about">Know More</a>
              </div>
            </div>
    </div>
  );
}
