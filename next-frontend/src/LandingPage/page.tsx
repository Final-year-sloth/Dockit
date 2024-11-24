"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import LandingNav from "@/components/LandingNav";
import LandingFooter from "@/components/LandingFooter";
import LandingMobileMenu from "@/components/LandingMobileMenu";

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/auth/login", label: "Log in" },
  { href: "/auth/signup", label: "Sign up" },
];

const LandingPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center relative">
      {/* Navbar */}
      <LandingNav />

      {/* Mobile Menu */}
      <LandingMobileMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        navLinks={navLinks}
      />

      {/* Header Section */}
      <div
        id="home"
        className="relative flex flex-col w-full h-screen md:flex-row max-w-8xl bg-cover bg-center pt-16"
        style={{
          backgroundImage: "url('/LandingPage_Images/BackgroundImage.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Content Section */}
        <div className="relative z-20 w-full md:w-2/5 flex flex-col justify-center items-end gap-6  p-8 md:p-12 md:m-6 text-right">
          {/* Subtitle */}
          <h1 className="text-3xl  sm:text-4xl md:text-5xl font-semibold text-red-800  mt-7 p-2 md:p-4">
            START CONNECTING TODAY!
          </h1>

          {/* Description */}
          <p className="text-red-300 text-base md:text-lg p-2 md:p-4 break-words max-w-full">
            Medigeek is a social media platform that provides assistance and
            various job opportunities.
          </p>

          {/* Offers Heading */}
          <h2 className="text-white text-2xl md:text-3xl p-2 ml-8 md:p-4">
            We Offer
          </h2>

          {/* Typewriter Text */}
          <span className="text-white text-2xl md:text-3xl p-2 md:p-4">
            <Typewriter
              words={[
                "Posting",
                "Exploring",
                "Connecting Friends",
                "Sharing Experiences",
                "Job Opportunities",
                "And Much More...",
              ]}
              loop
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={2000}
              cursor
              cursorStyle="|"
              cursorBlinking
            />
          </span>

          {/* Call-to-Action Section */}
          <div className=" flex flex-col items-end justify-end gap-4 mt-8 w-full">
            <h1 className="text-white text-2xl md:text-3xl mb-4">
              New to Medigeek?
            </h1>
            <Link href="auth/signup">
              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        #home::before {
          content: "";
          position: absolute;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.1);

          z-index: 10;
        }
      `}</style>

      {/* Why Medigeek Section */}
      <section className="features-section py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Medigeek?
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-12">
            {/* Explore Communities Card */}
            <div className="feature-item text-center bg-white shadow-lg rounded-lg p-8">
              <Image
                src="/LandingPage_Images/community_icon.png"
                alt="Community"
                width={80}
                height={80}
              />
              <h3 className="text-xl font-semibold mt-4">
                Explore Communities
              </h3>
              <p className="text-gray-600 mt-4">
                Join groups and clubs based on your interests and meet
                like-minded peers.
              </p>
            </div>

            {/* Job Opportunities Card */}
            <div className="feature-item text-center bg-white shadow-lg rounded-lg p-8">
              <Image
                src="/LandingPage_Images/job_icon.png"
                alt="Jobs"
                width={80}
                height={80}
              />
              <h3 className="text-xl font-semibold mt-4">Job Opportunities</h3>
              <p className="text-gray-600 mt-4">
                Find internships and jobs curated specifically for
                undergraduates.
              </p>
            </div>

            {/* Assessments Card */}
            <div className="feature-item text-center bg-white shadow-lg rounded-lg p-8">
              <Image
                src="/LandingPage_Images/assessment_icon.png"
                alt="Assessments"
                width={80}
                height={80}
              />
              <h3 className="text-xl font-semibold mt-4">Assessments</h3>
              <p className="text-gray-600 mt-4">
                Take assessments to evaluate your skills and improve your
                qualifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Component */}
      <LandingFooter />
    </main>
  );
};

export default LandingPage;
