import Image from "next/image";
import image from '../public/assets/images/shashank.jpg'
export default function Home() {
  return (
    <div>
      {/* <div className="container-md text-break pt-35 d-flex align-items-center content-center flex-row w-50"> */}
      <div className="container-md text-break pt-md-5 d-flex align-items-center content-center flex-md-row flex-column w-auto space-y-7">
              <Image className='rounded shadow mx-auto d-block img-fluid' src={image} alt="background" />
              <div className="d-flex flex-md-column justify-center w-auto px-md-5 row" >
              <p className="pl-4 w-5/6 break-words fs-4">Hi my name is <b>Shashank</b> and am a <b>Software engineer</b> with <b>3+ years</b> of experience and currently working in <b>Ellucian.</b></p>
              <a className="btn btn-primary" href="/skills">Know More</a>
              </div>
            </div>
    </div>
  );
}
