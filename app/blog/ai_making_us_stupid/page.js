import React from 'react'

function page() {
return (
    <div className='max-w-5xl mx-auto pt-34 pb-40'>
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
                            <a href='../blog/whatsapp_media' className='background-none text-white text-decoration-none blog-buttons'>
                                    <strong>Back</strong><br/>
                                    <p>WhatsApp May soon let you stop ...</p>
                            </a>
                    </div>
            </div>
    </div>
)
}

export default page
