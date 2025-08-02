import React from 'react'

function page() {
return (
    <div className='container my-container'>
        <div className='row pt-4'>
                    <div className='pt-4 pb-5 blog-container'>
                    <div className='row pt-2'>
                                            <div className="col">
                                                    <em><h3>How To Keep AI from Making Us Stupid</h3></em>
                                            </div> 
                                            <div className="col text-end">
                                                    <strong><em>2-Aug-2025</em></strong>
                                            </div>
                                    </div>
                                    <br/>
                            AI has become central to much of what we do, but we rely on it more, we are bleeding related skills.
                            <br /> <br />
                            Just like calculators made memorizing multiplication tables feel unnecessary, 
                            smartphones have rendered cursive practically obsolete, and services like ola 
                            and Uber have led many young people to skip learning how to drive.
                            <br /> <br />
                            Tools like GitHub Copilot and Gemini Code Assist can significantly accelerate development, catch syntax errors, and even suggest entire code blocks.
                            <br/> <br />
                            <b>How to use smartly:</b> Understand why the AI suggests a particular solution. Debug manually, learn the underlying logic, and actively strive to improve your coding skills by analyzing the generated code. Mindlessly copying and pasting code without understanding it is a fast track to becoming a human debugging unit. 
                            <br /> <br />
                            Final thoughts, I would say that ChatGPT is a great tool for people 
                            who are looking for help in their work. But we should be careful 
                            while using it. We should not share our personal information with 
                            it.    
                    </div>
                    <div className='pt-3 d-flex justify-content-between'>
                            {/* <a href='./git_best_practices' className='background-none text-black text-decoration-none'>
                                    <strong>Back</strong><br/>
                                    <p>Git Best Practices</p>
                            </a> */}
                            <a href='../blog/whatsapp_media' className='background-none text-black text-decoration-none blog-buttons'>
                                    <strong>Next</strong><br/>
                                    <p>WhatsApp May soon let you stop ...</p>
                            </a>
                    </div>
            </div>
    </div>
)
}

export default page
