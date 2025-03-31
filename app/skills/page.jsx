import React from 'react'

function page() {
    return (
        <div className='container-md text-wrap font-monospace pb-12 border-radius-md w-md font-bold my-container h-auto'>
            <h1>Skills</h1>
            <div className='space-y-10'>
            {/* Next JS */}
            <div className='place-self-auto pt-4 pb-3'>
                <div className='col'>
                    <p>Next JS</p>
                </div>
                <div className="progress w-auto" role="progressbar" aria-label="Success striped example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar progress-bar-striped bg-success" style={{width: "70%"}}><strong><em>70%</em></strong></div>
                </div>
            </div>
                {/* React JS */}
            <div className='place-self-auto pb-3'>
                <div className='col'>
                    <p>React JS</p>
                </div>
                <div className="progress w-auto" role="progressbar" aria-label="Success striped example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar progress-bar-striped bg-success" style={{width: "80%"}}><strong><em>80%</em></strong></div>
                </div>
            </div>
            {/* Node JS */}
            <div className='place-self-auto pb-3'>
                <div className='col'>
                    <p>Node JS</p>
                </div>
                <div className="progress w-auto" role="progressbar" aria-label="Success striped example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar progress-bar-striped bg-success" style={{width: "40%"}}><strong><em>40%</em></strong></div>
                </div>
            </div>
            {/* Java */}
            <div className='place-self-auto pb-3'>
                <div className='col'>
                    <p>Java</p>
                </div>
                <div className="progress w-auto" role="progressbar" aria-label="Success striped example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar progress-bar-striped bg-success" style={{width: "50%"}}><strong><em>50%</em></strong></div>
                </div>
            </div>
            {/* Python */}
            <div className='place-self-auto pb-3'>
                <div className='col'>
                    <p>Python</p>
                </div>
                <div className="progress w-auto" role="progressbar" aria-label="Success striped example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar progress-bar-striped bg-success" style={{width: "60%"}}><strong><em>60%</em></strong></div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default page
