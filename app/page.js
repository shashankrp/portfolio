'use client'
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import image from '../public/assets/images/shashank.jpg';
import Image from "next/image";
import Icon from '@mui/material/Icon';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import OutgoingMailIcon from '@mui/icons-material/OutgoingMail';

const navigation = [
  { name: 'Home', href: '/' },
  // { name: 'Skills', href: '/skills' },
  // { name: 'Experience', href: '/experience' },
  { name: 'Blog', href: '/blog' },
  // { name: 'Contact', href: '/contact' },
  // { name: 'About', href: '/about' },
]

export default function Home() {
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className="bg-gray-900">
      {/* <header className="fixed inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Shashank R P</span>
              Shashank R P
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-white">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="https://drive.google.com/file/d/1gzb3m_BdrhNwRfRFuF7IblGXIHCnRZip/view?usp=sharing" target='_blank' className="text-sm/6 font-semibold text-white">
              <ArrowDownTrayIcon aria-hidden="true" className="h-5 w-5 inline-block mr-2" />Resume
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Shashank RP</span>
                Shashank R P
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-200"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
        <div
  className="flex justify-center gap-10 pt-6 fixed bottom-0 left-1/2 transform -translate-x-1/2 text-center"
>
  <a
    href="https://github.com/shashankrp"
    target="_blank"
    className="text-black"
  >
    <Icon component={GitHubIcon} style={{ fontSize: 45, color: "white" }} />
  </a>

  <a
    href="https://www.linkedin.com/in/shashank-r-p-5a866b15a/"
    target="_blank"
    className="text-black"
  >
    <Icon component={LinkedInIcon} style={{ fontSize: 45, color: "white" }} />
  </a>

  <a
    href="mailto:shashankrp2@gmail.com"
    target="_blank"
    className="text-black"
  >
    <Icon component={OutgoingMailIcon} style={{ fontSize: 45, color: "white" }} />
  </a>
</div>

              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header> */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
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
        {/* <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
              Who am i?
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
              I am a software engineer with over four years of experience in full-stack development, and i am currently working at Ellucian.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/about"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Know more about me &rarr;
              </a>
            </div>
          </div>
        </div> */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-25rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-45rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>


<div className="flex flex-col md:flex-row mt-0 md:max-w-5xl md:mx-auto md:pt-34 md:space-y-6 md:gap-20 md:h-auto md:pb-8">
  <div className="w-full flex justify-center md:justify-end m-auto">
    <Image
      className="rounded-2xl shadow img-fluid md:mb-4 hero-image drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]"
      src={image}
      alt="background"
      width={400}
      height={400}
      placeholder="blur"
    />
  </div>
  <div className="max-w-xl md:pt-8 md:text-2xl sm:text-2xl pt-5 pb-5 md:pb-23">
    <strong>Hello, I'm Shashank R P</strong>
    <br /><br />
    <p className="font-mono">
      I'm 4+ yrs experienced Full Stack Developer. Basically I can work with both ReactJS and NextJS and I specialize in ReactJS Development.
      <br /><br />
      Currently, I'm working as Software Engineer at Ellucian.
    </p>
  </div>
</div>
<div className='flex justify-center md:mt-10 gap-10 md:pt-6'>
    <a href='https://github.com/shashankrp' target='_blank' className='text-black'>
    <Icon component={GitHubIcon} style={{ fontSize: 65, color: 'white' }} />
    </a>
    <a href='https://www.linkedin.com/in/shashank-r-p-5a866b15a/' target='_blank' className='text-black'>
    <Icon component={LinkedInIcon} style={{ fontSize: 70, color: 'white' }} />
    </a>
    <a href='mailto:shashankrp2@gmail.com' target='_blank' className='text-black'>
    <Icon component={OutgoingMailIcon} style={{ fontSize: 70, color: 'white' }} />
    </a>
  </div>





{/* Skills section */}
 {/* <div className="mt-0 max-w-5xl mx-auto pt-54 mb-54 space-y-6" id="Skills"> 
    <h2 className='text-white text-center text-3xl font-semibold mb-6'>Skills</h2>
      <div role="progressbar" aria-label='80' aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
  <div className="flex justify-between gap-4">
            <p>React JS</p>
    <span className="text-sm font-medium text-white-100">80%</span>
  </div>

  <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
    <div className="h-full rounded-full bg-blue-600" style={{width: "80%"}}></div>
  </div>
</div>

<div role="progressbar" aria-label='50' aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div className="flex justify-between gap-4 mt-2">
    <span className="text-sm font-medium text-white-900">Tailwind CSS</span>

    <span className="text-sm font-medium text-white-900">45%</span>
  </div>

  <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
    <div className="h-full rounded-full bg-gray-600" style={{width: "45%"}}></div>
  </div>
</div>

<div role="progressbar" aria-label='50' aria-valuenow="50" aria-valuemin="0" aria-valuemax="50">
  <div className="flex justify-between gap-4 mt-2">
    <p>AWS Services</p>
    <span className="text-sm font-medium text-white-900">50%</span>
  </div>

  <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
    <div className="h-full rounded-full bg-green-600" style={{width: "50%"}}></div>
  </div>
</div>

<div role="progressbar" aria-label='60' aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
  <div className="flex justify-between gap-4">
    <span className="text-sm font-medium text-white-900">Python</span>

    <span className="text-sm font-medium text-white-900">60%</span>
  </div>

  <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
    <div className="h-full rounded-full bg-red-600" style={{width: "60%"}}></div>
  </div>
</div>
</div> */}

{/* Blog section */}
{/* <div className='max-w-5xl mx-auto pt-54 pb-40' id="Blog">
      <h1 className="text-3xl font-bold text-center mt-[-74px] mb-20">Blog Write-ups</h1>
    <div className="space-y-2">
    <details className="group [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white px-4 py-3 font-medium text-gray-900 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800">
        <span>How To Keep AI from Making Us Stupid?</span>

        <svg className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </summary>

      <div className="p-4">
        <p className="text-gray-700 dark:text-gray-200">
          AI has become central to much of what we do, but we rely on it more, we are bleeding related skills.<br/><br/>
          Just like calculators made memorizing multiplication tables feel unnecessary, smartphones have rendered cursive practically obsolete, and services like ola and Uber have led many young people to skip learning how to drive.<br/><br/>
          Tools like GitHub Copilot and Gemini Code Assist can significantly accelerate development, catch syntax errors, and even suggest entire code blocks.<br/><br/>
          How to use smartly: Understand why the AI suggests a particular solution. Debug manually, learn the underlying logic, and actively strive to improve your coding skills by analyzing the generated code. Mindlessly copying and pasting code without understanding it is a fast track to becoming a human debugging unit.<br/><br/>
          AI can be a powerful tool for learning and productivity, but it&apos;s essential to use it mindfully. By actively engaging with the suggestions, understanding the underlying concepts, and continuously honing our skills, we can ensure that AI serves as a catalyst for growth rather than a crutch that leads to skill atrophy.<br/><br/>
          
          Final thoughts, I would say that ChatGPT is a great tool for people who are looking for help in their work. But we should be careful while using it. We should not share our personal information with it.
        </p>
      </div>
    </details>

    <details className="group [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white px-4 py-3 font-medium text-gray-900 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800">
        <span>Ghibli-style images</span>

        <svg className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </summary>

      <div className="p-4">
        <p className="text-gray-700 dark:text-gray-200">
          ChatGPT&apos;s is one of the most commonly used AI tool in the world and it is
                            used by many people for many purposes. It is used for writing, coding,
                            generating images, and many more. It is a great tool for people who are
                            looking for help in their work. For example, if you are a student and you are
                            looking for help in your assignments, you can use ChatGPT to get help.
                            <br /> <br />
                            If this technology is used in a good way, it can be very helpful for people.
                            But if it is used in a bad way, it can be very dangerous. As its a peace 
                            of code that is written by a human, if someone gains a control over the 
                            data that could be provided by you to the AI they could exactly predict
                            what you are doing or what you are thinking.
                            <br /> <br />
                            ChatGPT&apos;s native image generation capabilities were introduced since 
                            the last update but people have become soo obsessed with one of its 
                            style which is <mark>Studio Ghibli-style images</mark> and they are 
                            enjyoing it a lot, but they are forgetting that its an AI. As AI are 
                            the kind of technology that learns from the inputs provided to it, 
                            so as of now it may not affect the people but in the future it may 
                            affect the people a lot, as it may use your pictures to genereate some
                            new images and it may be used in any criminal activities. Even though 
                            as the technologies are made to help people we should know what we 
                            should be sharing. So, be careful while using it. 
                            <br /> <br />
                            Final thoughts, I would say that ChatGPT is a great tool for people 
                            who are looking for help in their work. But we should be careful 
                            while using it. We should not share our personal information with 
                            it.    
        </p>
      </div>
    </details>

    <details className="group [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white px-4 py-3 font-medium text-gray-900 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800">
        <span>GIT Best Practices</span>

        <svg className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </summary>

      <div className="p-4">
        <p className="text-gray-700 dark:text-gray-200">
          Git is a version control system that allows developers to track changes in their 
            codebase. It is widely used in the software development industry and is an 
            essential tool for any developer. Git is more powerful than other version 
            control systems because it allows developers to work on multiple branches 
            of code at the same time. This means that developers can work on new features 
            or bug fixes without affecting the main codebase.<br/><br/>
            There are several best practices that developers should follow when using Git.
            These best practices include using descriptive commit messages, keeping commits
            small and focused, and using branches to organize code changes. Using
            descriptive commit messages is important because it helps other developers
            understand the changes that have been made to the codebase. Keeping commits
            small and focused is also important because it makes it easier to review.<br/><br/>
            The best practices for Git are important because they help developers work more
            efficiently and effectively. By following these best practices, developers would
            be able to know the reasons behind the changes that have been made to the codebase. 
            This would help them understand the code better and make it easier to work with.<br/><br/>
            The 5 best practices for Git are as follows:
        </p>
        <ol className='list-decimal list-inside text-gray-300 space-y-2 text-justify'>
            <li>Use descriptive commit messages: When making a commit, it is important to use a
              descriptive commit message that explains what changes have been made to the codebase.
              This helps other developers understand the changes that have been made and makes it
              easier to review the code.</li>
            <li className='pt-2'>Keep commits small and focused: It is important to keep commits small and focused on a
              specific change. This makes it easier to review the code and understand the changes that
              have been made. It also makes it easier to revert changes if necessary.</li>
            <li className='pt-2'>Use branches to organize code changes: Git allows developers to create branches to work on
              new features or bug fixes without affecting the main codebase. This is a powerful feature of Git.</li>
            <li className='pt-2'>Use pull requests to review code changes: When making changes to the codebase, it is important to use
              pull requests to review the changes before they are merged into the main codebase. This helps ensure that
              the changes are reviewed and approved by other developers before they are merged into the main codebase.</li>
            <li className='pt-2'>
              Use tags to mark important milestones: Git allows developers to create tags to mark important milestones in the codebase.
            </li>
          </ol>
      </div>
    </details>

    <details className="group [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white px-4 py-3 font-medium text-gray-900 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800">
        <span>Whatsapp May soon let you stop others from saving media to there devices</span>

        <svg className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </summary>

      <div className="p-4">
        <p className="text-gray-700 dark:text-gray-200">
          WhatsApp is one of the most commonly used messaging app in the world and it is
                            used by many people for many purposes. It is used for chatting, calling and 
                            sharing medias this also provides the feature of communicating with multiple
                            people at a time. It is a great tool for people who are looking for help in 
                            their work.<br/><br/>
            WhatsApp, the Meta instant messaging platform is working on a new feature that
                            makes chats more privacy feature will allow the users to prevent the recipient
                            from saving images and videos in a conversation on their device.<br/><br/>
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
      </div>
    </details>
  </div>
</div> */}

{/* Contact section */}
{/* <div className='max-w-5xl mx-auto pt-54 pb-40' id="Contact">
  <h2 className='text-3xl font-semibold text-center'>Contact Me</h2>
  <div className='flex justify-center mt-10 gap-10 pt-6'>
    <a href='https://github.com/shashankrp' target='_blank' className='text-black'>
    <Icon component={GitHubIcon} style={{ fontSize: 65, color: 'white' }} />
    </a>
    <a href='https://www.linkedin.com/in/shashank-r-p-5a866b15a/' target='_blank' className='text-black'>
    <Icon component={LinkedInIcon} style={{ fontSize: 70, color: 'white' }} />
    </a>
    <a href='mailto:shashankrp2@gmail.com' target='_blank' className='text-black'>
    <Icon component={OutgoingMailIcon} style={{ fontSize: 70, color: 'white' }} />
    </a>
  </div>
</div> */}

{/* About section */}
{/* <div className='mt-40 max-w-5xl mx-auto pt-20 pb-5' id="About">
  <h2 className='text-3xl font-semibold text-center'>About Me</h2>
  <div className='flex flex-col md:flex-row items-start gap-8'>
  <div className='w-full md:w-2/3 space-y-6'>
  <div>
  <p className='mb-0 font-semibold text-xl mt-10 pb-2'>
    Hi, I'm Shashank RP
  </p>
  <p className='mb-0 text-xl font-normal text-gray-300 whitespace-pre-wrap text-justify'>
    {'\t'}I'm a dedicated and passionate software engineer with over 4 years of professional experience in full-stack web development. Currently, I work at Ellucian, where I design and develop scalable, reliable, and user-friendly applications while collaborating with cross-functional teams to deliver high-quality solutions.
  </p>
</div>
<div>
  <p className='mb-0 font-semibold text-xl mt-4 pb-2'>
    What do i do?
  </p>
  <p className='mb-0 text-xl font-normal text-gray-300 whitespace-pre-wrap text-justify'>
    {'\t'}I have a strong foundation in both front-end and back-end development, with experience working on technologies such as JavaScript (React, Node.js), Python, Java, Docker, AWS and more. Whether it's crafting responsive, interactive user interfaces or building robust back-end systems that can handle complex data processing, I enjoy the challenge of solving problems at every layer of the stack. I am also a strong advocate of writing clean, maintainable code and adopting best practices in software development.
  </p>
    <p className='mb-0 text-xl font-normal text-gray-300 whitespace-pre-wrap text-justify'>
    {'\t'}Beyond technical skills, I value communication and collaboration. I believe that software development is not just about writing code—it's about working with people to turn ideas into reality. I take pride in my ability to understand user needs and business requirements and translate them into functional, efficient, and engaging digital experiences.
  </p>
</div>
<div>
  <p className='mb-0 font-semibold text-xl mt-4 pb-2'>
    My Approach
  </p>
  <p className='mb-0 text-xl font-normal text-gray-300 whitespace-pre-wrap text-justify'>
    {'\t'}I'm a firm believer in continuous learning. The tech world is always evolving, and I make it a point to stay updated with the latest trends, frameworks, and best practices to ensure my solutions are as innovative and efficient as possible. I enjoy tackling complex problems and finding creative, optimal solutions that contribute to the success of the projects I work on.
  </p>
    <p className='mb-0 text-xl font-normal text-gray-300 whitespace-pre-wrap text-justify'>
    {'\t'}When I'm not coding, you'll likely find me exploring new technologies, contributing to open-source projects, or reading up on the latest developments in the tech world. I also enjoy networking with fellow developers and professionals, learning from their experiences, and sharing knowledge within the tech community.
  </p>
</div>
<div>
  <p className='mb-0 font-semibold text-xl mt-4 pb-2'>
    Let's Connect
  </p>
  <p className='mb-0 text-xl font-normal text-gray-300 whitespace-pre-wrap text-justify'>
    {'\t'}I'm always open to new opportunities, collaborations, and conversations about technology. If you're interested in working together or simply want to chat about the latest in software development, feel free to reach out. I'm excited to connect and explore how we can create something amazing together!
  </p>
</div>
</div>
<div className='w-full md:w-1/3 flex justify-center md:justify-end m-auto'>
  <Image
              className='rounded shadow img-fluid mb-4 hero-image drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]'
              src={image}
              alt="background"
              width={400}
              height={400}
              placeholder="blur"
            />
</div>
</div>
</div> */}
      </div>
    </div>
  );
}
