import { Link } from 'react-router-dom';
import { Bus, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Blogs', href: '#blogs' },
    ],
    legal: [
      { label: 'Terms & Conditions', href: '#terms' },
      { label: 'Privacy Policy', href: '#privacy' },
    ],
    registrations: [
      { label: 'Driver Registration', href: '#driver' },
      { label: 'Agent Registration', href: '#agent' },
    ],
    more: [
      { label: 'Insurance', href: '#insurance' },
      { label: 'Partners', href: '#partners' },
      { label: 'Pricing', href: '#pricing' },
    ],
    routes: [
      { label: 'Top Routes', href: '#routes' },
      { label: 'Bus Routes & Timetable', href: '#timetable' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'Youtube' },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Bus className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold">
                Nepal<span className="text-secondary">Yatra</span>
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm mb-4">
              Your trusted partner for bus travel across Nepal. Book tickets easily and travel safely.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Registrations */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Registrations</h4>
            <ul className="space-y-2">
              {footerLinks.registrations.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">More</h4>
            <ul className="space-y-2">
              {footerLinks.more.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Routes */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Routes</h4>
            <ul className="space-y-2">
              {footerLinks.routes.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-primary-foreground/10 pt-8 mb-8">
          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            <a href="mailto:info@nepalyatra.com" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors duration-200">
              <Mail className="w-4 h-4" />
              info@nepalyatra.com
            </a>
            <a href="tel:+9771234567890" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors duration-200">
              <Phone className="w-4 h-4" />
              +977 1234567890
            </a>
            <span className="flex items-center gap-2 text-primary-foreground/70 text-sm">
              <MapPin className="w-4 h-4" />
              Kathmandu, Nepal
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} NepalYatra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;