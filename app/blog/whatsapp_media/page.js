import React from 'react'

function page() {
return (
    <div className='container my-container'>
        <div className='row pt-4'>
                    <div className='row pt-4'>
                                            <div className="col">
                                                    <em><h3>Whatsapp May soon let you stop others from saving media to there devices</h3></em>
                                            </div> 
                                            <div className="col text-end">
                                                    <strong><em>18-Apr-2025</em></strong>
                                            </div>
                                    </div>
                    <p className='pt-4 pb-5 blog-container'>
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
                    </p>
                    <div className='d-flex justify-content-between'>
                            <a href='./ghibli_style_images' className='background-none text-black text-decoration-none'>
                                    <strong>Back</strong><br/>
                                    <p>Ghibli Style Images</p>
                            </a>
                            {/* <a href='../blog/git_best_practices' className='background-none text-black text-decoration-none'>
                                    <strong>Next</strong><br/>
                                    <p>Git Best Practices</p>
                            </a> */}
                    </div>
            </div>
    </div>
)
}

export default page
