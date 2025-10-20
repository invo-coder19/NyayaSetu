import { Shield, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6" />
              <span className="font-semibold">Justice with Dignity</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Direct Benefit Transfer system ensuring swift relief to victims under PCR/PoA Acts.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/victim" className="hover:underline">Victim Portal</Link></li>
              <li><Link to="/officer" className="hover:underline">Officer Portal</Link></li>
              <li><Link to="/transparency" className="hover:underline">Transparency Hub</Link></li>
              <li><Link to="/grievances" className="hover:underline">File Grievance</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:underline">Terms of Service</Link></li>
              <li><Link to="/acts" className="hover:underline">PCR/PoA Acts</Link></li>
              <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>1800-XXX-XXXX (Toll-Free)</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>support@dbt-pcr.gov.in</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Ministry of Home Affairs, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2025 Government of India. All rights reserved.</p>
          <p className="mt-2 text-primary-foreground/80">
            Powered by National Informatics Centre
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
