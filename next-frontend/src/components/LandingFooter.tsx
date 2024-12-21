import Image from "next/image";
import React from "react";

// Handling Newsletter Submission
const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const email = form.email.value;

  // email submission logic
  console.log(`Newsletter email submitted: ${email}`);
  form.reset();
};

const LandingFooter: React.FC = () => {
  return (
    <footer className="w-full bg-black text-gray-300 py-10">
      <div className="w-full px-4 mt-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Footer Column 1: Logo and About */}
          <div className="footer-about max-w-md md:max-w-sm lg:max-w-md">
            <Image
              src="/LandingPage_Images/Logo.png"
              alt="Medigeek Logo"
              height={50}
              width={150}
              className="mb-4"
            />
            <p className="text-gray-400 break-words">
              Medigeek is your go-to platform for connecting with peers, sharing
              experiences, and finding the best job opportunities.
            </p>
          </div>

          {/* Footer Column 2: Newsletter */}
          <div className="footer-newsletter mt-8 md:mt-0">
            <h3 className="font-semibold text-lg mb-3">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to get the latest updates directly in your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex">
              <label htmlFor="email" className="sr-only">
                Email Address
              </label>{" "}
              {/* Accessibility label */}
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
                required
                className="bg-white text-black rounded-l-md p-2 placeholder-gray-500"
              />
              <button
                type="submit"
                className="bg-red-600 text-white rounded-r-md p-2 hover:bg-red-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
