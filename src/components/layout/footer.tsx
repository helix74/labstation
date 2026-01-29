"use client";

import { Instagram, Phone, MapPin, Heart } from "lucide-react";
import Image from "next/image";

const footerLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Avis", href: "#testimonials" },
  { label: "Histoire", href: "#story" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { 
    icon: Instagram, 
    href: "https://www.instagram.com/lab.station.tn/", 
    label: "@lab.station.tn" 
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-[#2a2a2a] py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-14 h-14 rounded-xl overflow-hidden">
                <Image
                  src="/images/logo.jpg"
                  alt="Lab Station"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-xl text-white">
                  LAB <span className="text-[#ffd700]">STATION</span>
                </h3>
                <p className="text-sm text-gray-500">The Lab is Working! 🥼</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Le laboratoire du goût à Ariana. Burgers signature, tacos maison, 
              viandes fumées 100% fraîches.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-[#ffd700] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-500">
                <MapPin size={18} className="text-[#ffd700]" />
                <span>Av. Hédi Nouira, Ariana</span>
              </li>
              <li>
                <a 
                  href="tel:+21621722108" 
                  className="flex items-center gap-3 text-gray-500 hover:text-[#ffd700] transition-colors"
                >
                  <Phone size={18} className="text-[#ffd700]" />
                  <span>+216 21 722 108</span>
                </a>
              </li>
              {socialLinks.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-500 hover:text-[#ffd700] transition-colors"
                  >
                    <social.icon size={18} className="text-[#ffd700]" />
                    <span>{social.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#2a2a2a] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {currentYear} Lab Station. Tous droits réservés.
          </p>
          <p className="text-gray-600 text-sm flex items-center gap-2">
            Made with <Heart size={14} className="text-red-500" fill="currentColor" /> by Moudi Food
          </p>
        </div>
      </div>
    </footer>
  );
}
