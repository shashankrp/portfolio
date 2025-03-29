import React from 'react'

function page() {
    return (
        <div className='container-md text-wrap font-monospace pb-12 border-radius-md mt-4 w-md font-bold'>
            <h1>Skills</h1>
            <div className='space-y-10'>
            <div className='place-self-auto pt-5'>
                <div className='col'>
                    <p>React JS</p>
                </div>
                <div className="progress w-auto" role="progressbar" aria-label="Success striped example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar progress-bar-striped bg-success w-4/5"><strong><em>90%</em></strong></div>
                </div>
            </div>
            <div className='place-self-auto'>
                <div className='col'>
                    <p>Node JS</p>
                </div>
                <div className="progress w-auto" role="progressbar" aria-label="Success striped example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar progress-bar-striped bg-success w-3/4"><strong><em>70%</em></strong></div>
                </div>
            </div>
            <div className='place-self-auto'>
                <div className='col'>
                    <p>Java</p>
                </div>
                <div className="progress w-auto" role="progressbar" aria-label="Success striped example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar progress-bar-striped bg-success w-1/2"><strong><em>50%</em></strong></div>
                </div>
            </div>
            <div className='place-self-auto'>
                <div className='col'>
                    <p>Python</p>
                </div>
                <div className="progress w-auto" role="progressbar" aria-label="Success striped example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar progress-bar-striped bg-success w-2/3"><strong><em>60%</em></strong></div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default page
