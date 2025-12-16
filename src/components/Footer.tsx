import { Facebook, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* University Info */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-lg font-semibold mb-2">University of Santo Tomas</h3>
            <p className="text-primary-foreground/80 text-sm">Faculty of Engineering</p>
            <p className="text-primary-foreground/60 text-xs mt-1">Manila, Philippines</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.facebook.com/leonardjoshua.bulawan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="mailto:leonardjoshua.bulawan@ust.edu.ph"
              className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://www.instagram.com/leojshua/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-primary-foreground/80">
              © {new Date().getFullYear()} Leonard Joshua Bulawan
            </p>
            <p className="text-xs text-primary-foreground/60 mt-1">
              B.S. Chemical Engineering
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
