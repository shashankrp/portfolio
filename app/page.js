import Image from "next/image";
import image from '../public/assets/images/shashank.jpg'
export default function Home() {
  return (
    <div>
      {/* <div className="container-md text-break pt-35 d-flex align-items-center content-center flex-row w-50"> */}
      <div className="container-md text-break pt-35 d-flex align-items-center content-center flex-md-row flex-column w-auto space-y-5">
              <Image className='rounded mx-auto d-block h-2/5 w-2/5' src={image} alt="background" />
              <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
              <p className="pl-4 w-5/6 break-words">Hi my name is <b>Shashank</b> and am a <b>Software engineer</b> with <b>3+ years</b> of experience and currently working in <b>Ellucian.</b></p>
              <a className="btn btn-primary" href="/skills">Know More</a>
              </div>
            </div>
    </div>
  );
}
