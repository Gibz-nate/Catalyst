import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaFacebookSquare, FaDiscord, FaGithub } from "react-icons/fa"

export default function FooterWithContact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', { name, email, message });
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <CSSTransition
      in={isVisible}
      timeout={1000}
      classNames="fade"
      unmountOnExit
    >
      <footer className="bg-gray-900 text-white py-12 rounded-t-xl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-3 py-2 text-gray-900 rounded-xl"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-3 py-2 text-gray-900 rounded-xl"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1">Message</label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows="4"
                    className="w-full px-3 py-2 text-gray-900 rounded-xl"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Connect With Us</h2>
              <ul className="space-y-2">
                <li> 
                  <a href="#" className="flex items-center hover:text-blue-700 transition duration-300">
                  <FaXTwitter className="mr-2"/>
                  <span>Twitter</span>
                  </a>
                </li>
                <li>
                <a href="#" className="flex items-center hover:text-blue-400 transition duration-300">
                  <FaLinkedin className="mr-2"/>
                  <span>Linkedin</span>
                </a>
                </li>
                <li>
                <a href="#" className="flex items-center hover:text-blue-400 transition duration-300">
                  <FaFacebookSquare className="mr-2"/>
                  <span>Facebook</span>
                </a>
                </li>
                <li>
                <a href="#" className="flex items-center hover:text-purple-600 transition duration-300">
                  <FaDiscord className="mr-2"/>
                <span>Discord</span>
                </a>
                </li>
                <li>
                <a href="#" className="flex items-center hover:text-slate-400 transition duration-300">
                  <FaGithub className="mr-2"/>
                  <span>Github</span>
                </a>
                </li>
              </ul>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-2">Our Office</h3>
                <p>123 SaaS Street</p>
                <p>Tech City, TC 12345</p>
                <p>United States</p>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p>&copy; 2023 Your SaaS Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </CSSTransition>
  );
}