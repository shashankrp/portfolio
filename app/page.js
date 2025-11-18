"use client";
import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import OutgoingMailIcon from "@mui/icons-material/OutgoingMail";
import Icon from "@mui/material/Icon";
import photo from "../public/assets/images/shashank.jpg";
import Headers from "./headers";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white text-black min-h-screen">
      {/* HEADER */}
      <Headers />

      {/* HERO SECTION */}
      <section className="pt-40 px-6 lg:px-20 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* Image */}
          <div className="flex justify-center md:justify-start w-full md:w-1/2">
            <Image
              src={photo}
              width={380}
              height={380}
              alt="Profile"
              className="rounded-2xl shadow-2xl drop-shadow-[0_0_25px_rgba(0,255,255,0.4)]
              transition-transform hover:scale-105 duration-300"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-5xl font-semibold leading-tight">
              Hi, I'm <span className="text-cyan-400">Shashank R P</span>
            </h1>

            {/* Terminal-Style Intro */}
            <div className="bg-black border border-gray-700 rounded-lg p-4 font-mono text-sm shadow-lg">
              <p className="text-gray-400"> role: Full Stack Developer</p>
              <p className="text-gray-400">experience: <span className="text-cyan-400">4+ years</span>
              </p>
              <p className="text-gray-400">specialization: <span className="text-cyan-400">React, Next.js</span>
              </p>
              <p className="text-gray-400"> current: Software Engineer @ Ellucian</p>
            </div>

            <p className="text-black text-lg leading-relaxed">
              I build scalable, modern applications with clean UX and strong
              engineering principles. Passionate about frontend architecture,
              cloud integration, and performance optimization.
            </p>

            {/* <a
              href="/about"
              className="inline-block bg-cyan-600 hover:bg-cyan-500 px-6 py-3 rounded-lg text-black font-semibold transition"
            >
              Learn More About Me →
            </a> */}
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="mt-24 px-6 lg:px-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold">Skills</h2>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[
            "React",
            "Next.js",
            "JavaScript",
            "Django",
            "TailwindCSS",
            "AWS",
            "Python",
            "Git",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-center text-white
              hover:border-cyan-400 hover:text-cyan-300 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* SOCIAL ICONS */}
      <div className="flex justify-center mt-20 gap-10">
        <a href="https://github.com/shashankrp" target="_blank">
          <Icon component={GitHubIcon} style={{ fontSize: 55, color: "black" }} />
        </a>
        <a
          href="https://www.linkedin.com/in/shashank-r-p-5a866b15a/"
          target="_blank"
        >
          <Icon
            component={LinkedInIcon}
            style={{ fontSize: 60, color: "black" }}
          />
        </a>
        <a href="mailto:shashankrp2@gmail.com" target="_blank">
          <Icon
            component={OutgoingMailIcon}
            style={{ fontSize: 60, color: "black" }}
          />
        </a>
      </div>

      <footer className="text-center text-gray-500 mt-20 py-10">
        © {new Date().getFullYear()} • Built by Shashank R P
      </footer>
    </div>
  );
}
