import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import MobileMenu from "./components/MobileMenu";
import SocialIcons from "./components/SocialIcons";
import image from "../public/assets/images/shashank.jpg";

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Skills', href: '#Skills' },
  { name: 'Experience', href: '#Experience' },
  { name: 'Blog', href: '#Blog' },
  { name: 'Cyber Security', href: '#CyberSecurity' },
  { name: 'Contact', href: '#Contact' },
  { name: 'About', href: '#About' },
];

export default function Home() {
  return (
    <div className="bg-gray-900 scroll-smooth">
      <header className="fixed inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Shashank R P</span>
              Shashank R P
            </a>
          </div>
          <MobileMenu />
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-white">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="https://drive.google.com/file/d/1gzb3m_BdrhNwRfRFuF7IblGXIHCnRZip/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-sm/6 font-semibold text-white">
              <ArrowDownTrayIcon aria-hidden="true" className="h-5 w-5 inline-block mr-2" />Resume
            </a>
          </div>
        </nav>
      </header>

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
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">

          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
              Hi, I'm Shashank 👋
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
              Full-stack engineer, problem solver, and tech enthusiast. I love building scalable apps and turning ideas into user-friendly products. Currently at Ellucian, always learning and collaborating.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#About"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Know more about me &rarr;
              </a>
            </div>
          </div>
        </div>
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


        {/* Skills section */}
        <div className="mt-20 max-w-5xl mx-auto pt-60 pb-15" id="Skills">
          <div className="bg-gray-900 rounded-2xl shadow-xl p-10 animate-fade-in">
            <div className="flex flex-col items-center gap-8">
              <div className="w-full space-y-6">
                <div className="flex items-center gap-3 mb-4 justify-center">
                  <span className="text-green-400 text-4xl">💻</span>
                  <h2 className="text-3xl font-bold text-green-300">Skills</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-green-400 flex items-center gap-3 hover:scale-105 transition-all duration-300">
                    <span className="text-green-300 font-bold">⚛️</span>
                    <span className="text-gray-200">React JS 
                      {/* <span className="ml-2 text-xs">80%</span> */}
                      </span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-green-400 flex items-center gap-3 hover:scale-105 transition-all duration-300">
                    <span className="text-green-300 font-bold">🎨</span>
                    <span className="text-gray-200">Tailwind CSS 
                      {/* <span className="ml-2 text-xs">45%</span> */}
                      </span>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-green-400 flex items-center gap-3 hover:scale-105 transition-all duration-300">
                    <span className="text-green-300 font-bold">☕︎</span>
                    <span className="text-gray-200">Java and Spring Boot
                      {/* <span className="ml-2 text-xs">60%</span> */}
                      </span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-green-400 flex items-center gap-3 hover:scale-105 transition-all duration-300">
                    <span className="text-green-300 font-bold">☁️</span>
                    <span className="text-gray-200">AWS Services 
                      {/* <span className="ml-2 text-xs">50%</span> */}
                      </span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-green-400 flex items-center gap-3 hover:scale-105 transition-all duration-300">
                    <span className="text-green-300 font-bold">🐚</span>
                    <span className="text-gray-200">Shell Scripting 
                      </span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-green-400 flex items-center gap-3 hover:scale-105 transition-all duration-300">
                    <span className="text-green-300 font-bold">🛠️</span>
                    <span className="text-gray-200">Burp Suite and Bruno 
                      </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience section */}
        <div className="mt-40 max-w-5xl mx-auto pt-20 pb-15" id="Experience">
          <div className="bg-gray-900 rounded-2xl shadow-xl p-10 animate-fade-in">
            <div className="flex flex-col items-center gap-8">
              <div className="w-full space-y-6">
                <div className="flex items-center gap-3 mb-4 justify-center">
                  <span className="text-yellow-400 text-4xl">🏢</span>
                  <h2 className="text-3xl font-bold text-yellow-300">Experience - 4.8 Years</h2>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-yellow-400 mb-4">
                  <h3 className="m-0 text-xl font-semibold text-yellow-200">Ellucian Higher Education System - 3.5 Years<span className="ml-2 text-xs text-gray-300">Bangalore</span></h3>
                  <p className="m-0 text-gray-200">Software Engineer 1 <span className="ml-2 text-xs">Nov 2022 - Present</span></p>
                  <ol className="list-decimal list-inside text-gray-300 space-y-2 text-justify mt-2">
                    <li className='pt-3'>Engineered and maintained RESTful APIs using Spring Boot and Java, reducing recurring integration issues by approximately 30% through root-cause analysis and targeted fixes.</li>
                    <li>Designed and implemented mock API frameworks to decouple testing from upstream dependencies, cutting integration test cycle time by ~40% and enabling parallel development across teams.</li>
                    <li>Prototyped AWS-based cloud deployment pipelines (EC2, S3) to improve deployment speed and cloud readiness for production releases.</li>
                    <li>Introduced AI-assisted development workflows (GitHub Copilot, LLM tooling) that increased individual engineering throughput by an estimated 25%.</li>
                    <li>Collaborated cross-functionally with product, QA, and business teams to define API contracts, write technical documentation, and accelerate partner onboarding.</li>
                    <li>Implemented comprehensive unit and integration test suites using JUnit and Mockito, improving code coverage and reducing post-release defect rates.</li>
                    <li>Streamlined development and release processes by introducing standardized branching strategies and code review practices using Git.</li>
                  </ol>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-yellow-400">
                  <h3 className="m-0 text-xl font-semibold text-yellow-200">Voicera Analytics Pvt Ltd - 1.5 Years <span className="ml-2 text-xs text-gray-300">Bangalore</span></h3>
                  <p className="m-0 text-gray-200">Software Engineer 1 <span className="ml-2 text-xs">July 2021 - Nov 2022</span></p>
                  <ol className="list-decimal list-inside text-gray-300 space-y-2 text-justify mt-2">
                    <li className='pt-3'>Built backend services for a Voice Outbound Dialer application using Spring MVC and Java, handling call orchestration, workflow routing, and telephony event processing.</li>
                    <li>Developed and deployed RESTful APIs consumed by multiple client-facing web applications built with ReactJS and Node.js, enabling seamless frontend-backend integration.</li>
                    <li>Implemented JWT-based authentication, role-based access control (RBAC), and session management across multiple web applications, improving security posture.</li>
                    <li>Leveraged AWS Lambda for serverless business logic components, reducing infrastructure overhead and improving scalability for event-driven workflows.</li>
                    <li>Managed EC2 instance provisioning, configuration, and maintenance for application hosting; used S3 for static asset storage and environment backups.</li>
                    <li>Delivered 3+ full-stack client projects end-to-end — from requirement gathering to production deployment — with consistent on-time delivery.</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Blog section */}
        <div className="mt-40 max-w-5xl mx-auto pt-20 pb-15" id="Blog">
          <div className="bg-gray-900 rounded-2xl shadow-xl p-10 animate-fade-in">
            <div className="flex flex-col items-center gap-8">
              <div className="w-full space-y-6">
                <div className="flex items-center gap-3 mb-4 justify-center">
                  <span className="text-pink-400 text-4xl">📝</span>
                  <h2 className="text-3xl font-bold text-pink-300">Blog Write-ups</h2>
                </div>
                <div className="space-y-2">
                  <details className="group [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-pink-400 bg-white/10 px-4 py-3 font-medium text-pink-200 hover:bg-pink-400/10 transition-all duration-300">
                      <span>How To Keep AI from Making Us Stupid?</span>
                      <svg className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </summary>
                    <div className="p-4">
                      <p className="text-pink-100">
                        AI has become central to much of what we do, but we rely on it more, we are bleeding related skills.<br /><br />
                        Just like calculators made memorizing multiplication tables feel unnecessary, smartphones have rendered cursive practically obsolete, and services like ola and Uber have led many young people to skip learning how to drive.<br /><br />
                        Tools like GitHub Copilot and Gemini Code Assist can significantly accelerate development, catch syntax errors, and even suggest entire code blocks.<br /><br />
                        How to use smartly: Understand why the AI suggests a particular solution. Debug manually, learn the underlying logic, and actively strive to improve your coding skills by analyzing the generated code. Mindlessly copying and pasting code without understanding it is a fast track to becoming a human debugging unit.<br /><br />
                        AI can be a powerful tool for learning and productivity, but it&apos;s essential to use it mindfully. By actively engaging with the suggestions, understanding the underlying concepts, and continuously honing our skills, we can ensure that AI serves as a catalyst for growth rather than a crutch that leads to skill atrophy.<br /><br />
                        Final thoughts, I would say that ChatGPT is a great tool for people who are looking for help in their work. But we should be careful while using it. We should not share our personal information with it.
                      </p>
                    </div>
                  </details>
                  <details className="group [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-pink-400 bg-white/10 px-4 py-3 font-medium text-pink-200 hover:bg-pink-400/10 transition-all duration-300">
                      <span>Ghibli-style images</span>
                      <svg className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </summary>
                    <div className="p-4">
                      <p className="text-pink-100">
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
                    <summary className="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-pink-400 bg-white/10 px-4 py-3 font-medium text-pink-200 hover:bg-pink-400/10 transition-all duration-300">
                      <span>GIT Best Practices</span>
                      <svg className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </summary>
                    <div className="p-4">
                      <p className="text-pink-100">
                        Git is a version control system that allows developers to track changes in their
                        codebase. It is widely used in the software development industry and is an
                        essential tool for any developer. Git is more powerful than other version
                        control systems because it allows developers to work on multiple branches
                        of code at the same time. This means that developers can work on new features
                        or bug fixes without affecting the main codebase.<br /><br />
                        There are several best practices that developers should follow when using Git.
                        These best practices include using descriptive commit messages, keeping commits
                        small and focused, and using branches to organize code changes. Using
                        descriptive commit messages is important because it helps other developers
                        understand the changes that have been made to the codebase. Keeping commits
                        small and focused is also important because it makes it easier to review.<br /><br />
                        The best practices for Git are important because they help developers work more
                        efficiently and effectively. By following these best practices, developers would
                        be able to know the reasons behind the changes that have been made to the codebase.
                        This would help them understand the code better and make it easier to work with.<br /><br />
                        The 5 best practices for Git are as follows:
                      </p>
                      <ol className='list-decimal list-inside text-pink-100 space-y-2 text-justify'>
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
                    <summary className="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-pink-400 bg-white/10 px-4 py-3 font-medium text-pink-200 hover:bg-pink-400/10 transition-all duration-300">
                      <span>Whatsapp May soon let you stop others from saving media to there devices</span>
                      <svg className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </summary>
                    <div className="p-4">
                      <p className="text-pink-100">
                        WhatsApp is one of the most commonly used messaging app in the world and it is
                        used by many people for many purposes. It is used for chatting, calling and
                        sharing medias this also provides the feature of communicating with multiple
                        people at a time. It is a great tool for people who are looking for help in
                        their work.<br /><br />
                        WhatsApp, the Meta instant messaging platform is working on a new feature that
                        makes chats more privacy feature will allow the users to prevent the recipient
                        from saving images and videos in a conversation on their device.<br /><br />
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
                        <br /><br />
                        This would change the way that we are using the whatsapp.
                      </p>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cyber Security section */}
        <div className="mt-40 max-w-5xl mx-auto pt-40 pb-15" id="CyberSecurity">
          <div className="bg-gray-900 rounded-2xl shadow-xl p-10 animate-fade-in">
            <div className="flex flex-col items-center gap-8">
              <div className="w-full space-y-6">
                <div className="flex items-center gap-3 mb-4 justify-center">
                  <span className="text-cyan-400 text-4xl">🛡️</span>
                  <h2 className="text-3xl font-bold text-cyan-300">Cyber Security</h2>
                </div>
                <p className="mb-0 text-xl font-normal text-gray-200 whitespace-pre-wrap text-center">
                  I’m passionate about cyber security—protecting data, applications, and users from threats. I regularly explore best practices, vulnerability assessments, and the latest security trends.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-cyan-400 flex items-center gap-3 hover:scale-105 transition-all duration-300">
                    <span className="text-cyan-300 font-bold">🛡️</span>
                    <span className="text-gray-200">Penetration Testing & Vulnerability Assessment</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-cyan-400 flex items-center gap-3 hover:scale-105 transition-all duration-300">
                    <span className="text-cyan-300 font-bold">🔒</span>
                    <span className="text-gray-200">Secure Coding Practices</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-cyan-400 flex items-center gap-3 hover:scale-105 transition-all duration-300">
                    <span className="text-cyan-300 font-bold">🌐</span>
                    <span className="text-gray-200">Network Security & Firewalls</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-cyan-400 flex items-center gap-3 hover:scale-105 transition-all duration-300">
                    <span className="text-cyan-300 font-bold">☁️</span>
                    <span className="text-gray-200">Cloud Security (AWS)</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-cyan-400 flex items-center gap-3 hover:scale-105 transition-all duration-300">
                    <span className="text-cyan-300 font-bold">🚨</span>
                    <span className="text-gray-200">Incident Response & Threat Analysis</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-cyan-400 flex items-center gap-3 hover:scale-105 transition-all duration-300">
                    <span className="text-cyan-300 font-bold">⚙️</span>
                    <span className="text-gray-200">Security Automation & Tools (OWASP, Burp Suite, etc.)</span>
                  </div>
                </div>
                <a
                  href="https://shashankrp.github.io/"
                  className="inline-block mt-8 px-6 py-2 rounded-lg bg-cyan-500 text-white font-semibold shadow hover:bg-cyan-400 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Know more...
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact section */}
        <div className="mt-40 max-w-5xl mx-auto py-60" id="Contact">
          <div className="bg-gray-900 rounded-2xl shadow-xl p-10 animate-fade-in">
            <div className="flex flex-col items-center gap-8">
              <div className="w-full space-y-6">
                <div className="flex items-center gap-3 mb-4 justify-center">
                  <span className="text-blue-400 text-4xl">📬</span>
                  <h2 className="text-3xl font-bold text-blue-300">Contact Me</h2>
                </div>
                <SocialIcons size={65} />
              </div>
            </div>
          </div>
        </div>

        {/* About section */}
        <div className="mt-40 max-w-5xl mx-auto pt-20 pb-15" id="About">
          <div className="bg-gray-900 rounded-2xl shadow-xl p-10 animate-fade-in">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-full md:w-2/3 space-y-6">
                <div className="flex items-center gap-3 mb-4 justify-center">
                  <span className="text-indigo-400 text-4xl">🙋‍♂️</span>
                  <h2 className="text-3xl font-bold text-indigo-300">About Me</h2>
                </div>
                <div>
                  <p className='mb-0 font-semibold text-xl mt-10 pb-2'>
                    Hi, I'm Shashank RP 👋
                  </p>
                  <p className='mb-0 text-xl font-normal text-gray-300 whitespace-pre-wrap text-justify'>
                    I'm a full-stack software engineer with 4+ years of experience, currently building scalable apps at Ellucian. I love turning ideas into reliable, user-friendly products.
                  </p>
                </div>
                <div>
                  <p className='mb-0 font-semibold text-xl mt-4 pb-2'>
                    What do I do?
                  </p>
                  <p className='mb-0 text-xl font-normal text-gray-300 whitespace-pre-wrap text-justify'>
                    I work across the stack—React, Node.js, Python, Java, AWS, and more. Whether it’s crafting interactive UIs or building robust backends, I enjoy solving real-world problems with clean, maintainable code.
                  </p>
                </div>
                <div>
                  <p className='mb-0 font-semibold text-xl mt-4 pb-2'>
                    My Approach
                  </p>
                  <p className='mb-0 text-xl font-normal text-gray-300 whitespace-pre-wrap text-justify'>
                    I believe in continuous learning and teamwork. I stay up-to-date with new tech, love collaborating, and always aim to deliver solutions that make a difference.
                  </p>
                </div>
                <div>
                  <p className='mb-0 font-semibold text-xl mt-4 pb-2'>
                    Let's Connect!
                  </p>
                  <p className='mb-0 text-xl font-normal text-gray-300 whitespace-pre-wrap text-justify'>
                    Interested in working together or just want to chat tech? Reach out—I'm always open to new connections and opportunities!
                  </p>
                </div>
              </div>
              <div className='w-full md:w-1/3 flex justify-center md:justify-end m-auto'>
                <Image
                  className='rounded shadow img-fluid mb-4 hero-image drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]'
                  src={image}
                  alt="Shashank R P - Software Engineer"
                  width={400}
                  height={400}
                  priority
                  quality={80}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-center text-gray-500 mt-20 py-10">
        © {new Date().getFullYear()} • Built by Shashank R P
      </footer>
    </div>
  );
}
