"use client"
import { Bars3Icon, XMarkIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'
import { Dialog, DialogPanel } from '@headlessui/react'
import { useState } from 'react'
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

function Headers(props) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const router = useRouter();
    const handleNav = (e, path) => {
        e.preventDefault();
        router.push(path);
    };
    return (
        <header className="fixed inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1 text-black">
            <a href="/" className="-m-1.5 p-1.5 font-bold">
              <span className="sr-only">Shashank R P</span>
              Shashank R P
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black-200"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-black">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <div className="hidden lg:flex">
            <a
              href="https://drive.google.com/file/d/1gzb3m_BdrhNwRfRFuF7IblGXIHCnRZip/view?usp=sharing"
              target="_blank"
              className="text-black hover:text-black transition"
            >
              Resume →
            </a>
          </div>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5 text-black font-bold">
                <span className="sr-only">Shashank RP</span>
                Shashank R P
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-black"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root ">
              <div className="-my-6 divide-y divide-white/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-black hover:bg-white/5"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                {/* <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5"
                  >
                    Log in
                  </a>
                </div> */}
        <div
  className="flex justify-center gap-10 pt-6 fixed bottom-0 left-1/2 transform -translate-x-1/2 text-center"
>
  <a
    href="https://github.com/shashankrp"
    target="_blank"
    className="text-black"
  >
    <Icon component={GitHubIcon} style={{ fontSize: 45, color: "black" }} />
  </a>

  <a
    href="https://www.linkedin.com/in/shashank-r-p-5a866b15a/"
    target="_blank"
    className="text-black"
  >
    <Icon component={LinkedInIcon} style={{ fontSize: 45, color: "black" }} />
  </a>

  <a
    href="mailto:shashankrp2@gmail.com"
    target="_blank"
    className="text-black"
  >
    <Icon component={OutgoingMailIcon} style={{ fontSize: 45, color: "black" }} />
  </a>
</div>

              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    )
}

Headers.propTypes = {
}

export default Headers
