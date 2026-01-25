import React from 'react'

function page(props) {
    return (
        <div className='px-8 sm:mx-5'>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
    <div className='mt-10 max-w-5xl mx-auto pt-20' id='Experience'>
  <h2 className='text-white text-center text-3xl font-semibold mb-6'>Experience - 4.5 Years</h2>
  <div className='flex items-center justify-between'>
  <h3 className='m-0 text-xl font-semibold'>Ellucian Higher Education System - 3 Years</h3>
  <p className='m-0'>Bangalore</p>
  </div>
  
  <div className='flex items-center justify-between'>
    <p className='m-0'>Software Engineer 1</p>
    <p className='m-0'>Nov 2022 - Present</p>
  </div>
  <ol className="list-decimal list-inside text-gray-300 space-y-2 text-justify">
    <li className='pt-3'>Developed and enhanced Data Connect pipelines, implementing new features and optimizing existing workflows to support scalable and reliable data movement across systems.</li>
    <li>Performed comprehensive unit testing (UT) for all pipeline components, ensuring code stability and compliance with development standards.</li>
    <li>Prepared detailed Unit Test (UT) documentation, using clear technical writing and AI-assisted tools to improve documentation quality and consistency.</li>
    <li>Collaborated closely with cross-functional teams, including developers, product owners, and QA engineers, to clarify requirements, validate functionality, and resolve pipeline-related issues.</li>
    <li>Supported QA team in functional and regression testing, assisting in debugging, test case validation, and ensuring sprint deliverables met acceptance criteria.</li>
    <li>Leveraged AI tools for debugging, documentation, and development acceleration, improving productivity and reducing turnaround time on complex tasks.</li>
    <li>Delivered all tasks within sprint timelines, adhering to Agile methodologies and actively contributing to sprint planning, daily stand-ups, and retrospective discussions.</li>
    <li>Proactively identified pipeline issues and proposed enhancements, contributing to improved performance, maintainability, and team efficiency.</li>
  </ol>


  <div className='flex items-center justify-between pt-25'>
  <h3 className='m-0 text-xl font-semibold'>Voicera Analytics Pvt Ltd - 1.5 Years</h3>
  <p className='m-0'>Bangalore</p>
  </div>
  
  <div className='flex items-center justify-between'>
    <p className='m-0'>Software Engineer 1</p>
    <p className='m-0'>July 2021 - Nov 2022</p>
  </div>
  <ol className="list-decimal list-inside text-gray-300 space-y-2 text-justify">
    <li className='pt-3'>Worked on a major CRM model at the time Voice Outbound Dialer application which was implemented using Spring MVC.</li>
    <li>Worked on many client projects full stack web application developer and got the positive feedback from the customers.</li>
    <li>Got opportunity to gain expoture on multiple AWS Services like AWS Lambda, EC2 Instances and S3 buckets.</li>
    <li>Got recognized as best employee for quickly adopting new technologies and delivering quality work.</li>
  </ol>
</div>
        </div>
    )
}


export default page

