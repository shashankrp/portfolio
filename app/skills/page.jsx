import React from 'react'

function page() {
    return (
        <div className='container-md text-wrap font-monospace pb-12 border-radius-md w-md font-bold my-container h-auto skills-container'>
            <h1>Skills</h1>
            <div className='py-10'>
             {/* React JS */}
            <div className='place-self-auto pt-4 pb-xl-5 pb-4'>
                <div className='col'>
                    <p>React JS - V19</p>
                </div>
                <div className="progress w-auto" role="progressbar" aria-label="Success striped example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar progress-bar-striped bg-success" style={{width: "80%"}}><strong><em>80%</em></strong></div>
                </div>
            </div>
            {/* AWS */}
            <div className='place-self-auto pb-xl-5 pb-4'>
                <div className='col'>
                    <p>AWS</p>
                </div>
                <div className="progress w-auto" role="progressbar" aria-label="Success striped example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar progress-bar-striped bg-success" style={{width: "40%"}}><strong><em>40%</em></strong></div>
                </div>
            </div>
            {/* GIT */}
            <div className='place-self-auto pb-xl-5 pb-4'>
                <div className='col'>
                    <p>GIT</p>
                </div>
                <div className="progress w-auto" role="progressbar" aria-label="Success striped example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar progress-bar-striped bg-success" style={{width: "60%"}}><strong><em>60%</em></strong></div>
                </div>
            </div>
            {/* Linux */}
            <div className='place-self-auto pb-xl-5 pb-4'>
                <div className='col'>
                    <p>Linux</p>
                </div>
                <div className="progress w-auto" role="progressbar" aria-label="Success striped example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar progress-bar-striped bg-success" style={{width: "75%"}}><strong><em>75%</em></strong></div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default page
