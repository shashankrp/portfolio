import React from 'react'

function page(props) {
    return (
        <div className='container-md w-auto text-wrap font-monospace border-radius-md my-container fading-effect'>
            <h1>Experience - (4 Yrs)</h1>
            {/* This is for adding Ellucian data */}
            <ul className='w-auto pr-4'>
                <li>
                    <div className='row pt-4'>
                        <div className="col">
                            <em><h4>Ellucian Higher Education System - (2.5 Yrs)</h4></em>
                        </div> 
                        <div className="col text-end">
                            <strong><em>Bangalore</em></strong>
                        </div>
                    </div>
                </li>
                <ul className='list-group-numbered'>
                    <li><div className="row pt-2">
                        <div className='col text-start'>
                            <b>Software Engineer 1 </b>
                        </div>
                        <div className='col text-end'>
                            <b>Nov 2022 - Present</b>
                        </div>
                    </div>
                    </li>
                    <li className="list-group-item text-justify">Environment Setup: Identify the specific partner requirements for their development and testing environments. Set up and configure the required development and testing environments. Ensure that partners have access to the necessary resources and documentation for their environments.</li>
                    <li className="list-group-item text-justify">Testing API’s: Review the issue reports from partners and gather all relevant information. Develop and execute test cases to reproduce reported issues. Conduct rigorous testing to identify the root causes of the issues. Ensure that partners are informed of the testing progress and results.</li>
                    <li className="list-group-item text-justify">Issue Resolution: Analyze the results of API testing to identify the root causes of the
                        issues. Prioritize issues based on their impact and urgency. Communicate with
                        partners to discuss the identified issues and possible solutions. Constantly update
                        partners on the progress of issue resolution. Validate that the issues are resolved to the
                        satisfaction of partners. Documenting the solutions and maintain a knowledge base for
                        future reference.</li>
                    <li className="list-group-item text-justify">Working with our R & D team on developing pipelines and UI for the clients.</li>
                </ul>
            </ul>
            {/* This is for adding Voicera data */}
            <ul className='w-auto pr-4'>
                <li>
                    <div className='row pt-4'>
                        <div className="col">
                            <em><h4>Voicera Analytics Private Ltd - (1.5 Yrs)</h4></em>
                        </div> 
                        <div className="col text-end">
                            <strong><em>Bangalore</em></strong>
                        </div>
                    </div>
                </li>
                <ul className='list-group-numbered pb-20'>
                    <li><div className="row pt-2">
                        <div className='col text-start'>
                            <b>Software Developer 1 </b>
                        </div>
                        <div className='col text-end'>
                            <b>Jul 2021 - Nov 2022</b>
                        </div>
                    </div>
                    </li>
                    <li className="list-group-item text-justify">Worked on the Spring MVC application on building a Voice Outbound Dialer
                    application contribution.</li>
                    <li className="list-group-item text-justify">Worked on Many projects for the client as full stack web application.</li>
                    <li className="list-group-item text-justify">Worked on AWS Lambda, EC2 Instances and S3 buckets.</li>
                    <li className="list-group-item text-justify">And worked on an application with Avaya OD.</li>
                </ul>
            </ul>
        </div>
    )
}


export default page

