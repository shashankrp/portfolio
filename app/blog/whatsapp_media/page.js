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
                    <div className='pt-1 pb-5 blog-container'>
                    <div className='row pt-4'>
                                            <div className="col">
                                                    <em><h3>Whatsapp May soon let you stop others from saving media to there devices</h3></em>
                                            </div> 
                                            <div className="col text-end">
                                                    <strong><em>18-Apr-2025</em></strong>
                                            </div>
                                    </div>
                            WhatsApp is one of the most commonly used messaging app in the world and it is
                            used by many people for many purposes. It is used for chatting, calling and 
                            sharing medias this also provides the feature of communicating with multiple
                            people at a time. It is a great tool for people who are looking for help in 
                            their work.
                            <br /> <br />
                            WhatsApp, the Meta instant messaging platform is working on a new feature that
                            makes chats more privacy feature will allow the users to prevent the recipient
                            from saving images and videos in a conversation on their device.
                            <br /> <br />
                            This is similar to the Disappearing Message functionally, where a user can only 
                            view a photo or video with no way to downalod it. Apart from disabling media 
                            download,the new advanced chat privacy feature will also place restrictions on 
                            the chat exports.
                            <br /> <br />
                            For those unaware, WhatsApp currently allows users to export there chat hostory 
                            with someone. But when the new feature rolls out, you won&apos;t be able to export the 
                            chat history of users that has the new privacy feature enabled. Another downside
                            is that when advanced chat history is enabled, participants won&apos;t be able to use
                            Meta AI in any way. 
                            <br/><br/>
                            This would change the way that we are using the whatsapp.   
                    </div>
                    <div className='pt-3 d-flex justify-content-between flex gap-180'>
                            <a href='./ghibli_style_images' className='background-none text-white text-decoration-none flex-row'>
                                    <strong>Back</strong><br/>
                                    <p>Ghibli Style Images</p>
                            </a>
                            <a href='../blog/ai_making_us_stupid' className='background-none text-white text-decoration-none flex-row'>
                                    <strong>Next</strong><br/>
                                    <p>AI Makes Us Stupid</p>
                            </a>
                    </div>
            </div>
    </div>
)
}

export default page
