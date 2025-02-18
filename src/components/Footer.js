import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { name: 'Facebook', path: '#' },
    { name: 'Twitter', path: '#' },
    { name: 'LinkedIn', path: '#' },
    { name: 'Instagram', path: '#' },
  ];

  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">School of Leadership and Diplomacy</h3>
            <p className="text-gray-300 mb-4">
              Empowering tomorrow's leaders and diplomats with knowledge, skills, and global perspective.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-300 hover:text-white transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-gray-300">
              <p>XYZ Street, City, Country</p>
              <p>Email: info@leadershipdiplomacy.edu</p>
              <p>Phone: +1234567890</p>
              <div className="flex space-x-4 mt-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.path}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-white">          <p>© 2024 School of Leadership and Diplomacy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
