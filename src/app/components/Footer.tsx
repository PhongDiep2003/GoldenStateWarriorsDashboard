// Footer component
'use client';
import React from 'react';
import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import { TeamInfo } from '../utils/types';
import { useFetchTeamInfo } from '../hooks/utilHooks';
import { styles } from '../utils/styles';
const Footer = () => {
  const { data }: { data: TeamInfo | null } = useFetchTeamInfo();
  const footerSections = {
    ORGANIZATION: ['NBA Official', 'NBA Careers'],
    SHOP: ['Global Stores', 'NBA Store'],
  };
  console.log(data);
  const socialLinks = [
    { icon: Facebook, url: data?.socialLinks?.facebook, label: 'Facebook' },
    { icon: Instagram, url: data?.socialLinks?.instagram, label: 'Instagram' },
    { icon: Twitter, url: data?.socialLinks?.twitter, label: 'Twitter' },
    { icon: Youtube, url: data?.socialLinks?.youtube, label: 'YouTube' },
  ];

  return (
    <footer className={`bg-black text-white ${styles.paddingBtwSection}`}>
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Links Section */}
          <div className="md:col-span-1">
            <div className="grid grid-cols-2 gap-8">
              {Object.entries(footerSections).map(([title, items], index) => (
                <div key={index}>
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                    {title}
                  </h3>
                  <ul className="space-y-3">
                    {items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <a className="text-sm text-gray-300 hover:text-white transition-colors">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Social Media Section */}
          <div className="md:col-span-2 flex flex-col items-center justify-center">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Follow Us
            </h3>
            <div className="flex space-x-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={'https://' + social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-8 h-8" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 md:px-6 ">
          {/* Copyright and Legal */}
          <div className="text-center space-y-3">
            <p className="text-sm text-gray-400">
              © 2025 NBA Media Ventures, LLC. All rights reserved.
            </p>

            <div
              className={`${styles.flexCenter} text-xs text-gray-400 space-x-4`}
            >
              <a className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <span className="text-gray-600">|</span>
              <a className="hover:text-white transition-colors">Terms of Use</a>
              <span className="text-gray-600">|</span>
              <a className="hover:text-white transition-colors">
                Customer Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
