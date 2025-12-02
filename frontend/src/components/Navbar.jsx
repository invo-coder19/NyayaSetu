import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield, Globe, User, ChevronDown } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { navigateToRoleTarget } from "@/utils/navigation";
import { useToast } from "@/hooks/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowUserDropdown(false);
      }
    };

    if (showUserDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showUserDropdown]);

  const handleLogout = () => {
    logout();
    setShowUserDropdown(false);
  };

  const handleVictimPortalClick = (e) => {
    e.preventDefault();
    setIsOpen(false);
    navigateToRoleTarget(navigate, location, '/victim-portal', 'victim', { isAuthenticated, user }, toast);
  };

  const handleOfficerPortalClick = (e) => {
    e.preventDefault();
    setIsOpen(false);
    navigateToRoleTarget(navigate, location, '/officer-portal', 'officer', { isAuthenticated, user }, toast);
  };

  // Define navigation links based on login state
  const loggedOutNavLinks = [
    { label: "Home", path: "/", type: "link" },
    { label: "Victim Portal", path: "/victim-portal", type: "portal", role: "victim", handler: handleVictimPortalClick },
    { label: "Officer Portal", path: "/officer-portal", type: "portal", role: "officer", handler: handleOfficerPortalClick },
    { label: "Emergency fund", path: "/emergency-fund", type: "link" },
    { label: "Transparency Hub", path: "/transparency", type: "link" },
    {
      label: "PCR Act",
      path: "https://www.indiacode.nic.in/bitstream/123456789/15434/1/protection_of_civil_rights_act%2C_1955.pdf",
      type: "external",
      ariaLabel: "Open PCR Act (PDF) in new tab"
    },
    {
      label: "POA Act",
      path: "https://www.indiacode.nic.in/bitstream/123456789/15338/1/scheduled_castes_and_the_scheduled_tribes.pdf",
      type: "external",
      ariaLabel: "Open POA Act (PDF) in new tab"
    },
  ];

  // Role-based navigation for logged-in users
  const getLoggedInNavLinks = () => {
    if (!user?.role) return [];

    if (user.role === 'victim') {
      // Victims see no navigation links
      return [];
    } else if (user.role === 'officer') {
      // Officers see no navigation links
      return [];
    }

    return [];
  };

  // Use appropriate nav links based on login state
  const navLinks = isAuthenticated ? getLoggedInNavLinks() : loggedOutNavLinks;

  return (
    <nav className="sticky top-0 z-50 bg-card border-b shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">{/* Logo */}
            <div className="bg-primary p-2 rounded-lg transition-smooth group-hover:bg-primary-hover">
              <Shield className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="hidden md:block">
              <div className="text-sm font-semibold text-primary">Justice with Dignity</div>
              <div className="text-xs text-muted-foreground">DBT for PCR/PoA Acts</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              link.type === 'portal' ? (
                <a
                  key={link.path}
                  href="#"
                  onClick={link.handler}
                  className="px-3 py-2 text-sm font-medium text-foreground border border-transparent hover:border-black hover:rounded-lg hover:bg-transparent transition-all duration-200 cursor-pointer"
                >
                  {link.label}
                </a>
              ) : link.type === 'external' ? (
                <a
                  key={link.path}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                  className="px-3 py-2 text-sm font-medium text-foreground border border-transparent hover:border-black hover:rounded-lg hover:bg-transparent transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className="px-3 py-2 text-sm font-medium text-foreground border border-transparent hover:border-black hover:rounded-lg hover:bg-transparent transition-all duration-200"
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="hidden md:flex">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>हिंदी</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Login/User Dropdown */}
            {isAuthenticated ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setShowUserDropdown(!showUserDropdown)}
                  className="flex items-center space-x-2 px-4 py-2 text-sm font-medium border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200"
                  style={{ color: '#0A1E5C' }}
                >
                  <User className="h-4 w-4" />
                  <span>Welcome, {user?.name || 'User'}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>

                {/* Custom Dropdown */}
                {showUserDropdown && (
                  <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-3 text-sm font-medium hover:bg-gray-100 rounded-lg transition-all duration-200"
                      style={{ color: '#0A1E5C' }}
                    >
                      Log Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login">
                <Button className="bg-primary hover:bg-primary-hover transition-base">
                  Login
                </Button>
              </Link>
            )}

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 space-y-2 border-t">
            {navLinks.map((link) => (
              link.type === 'portal' ? (
                <a
                  key={link.path}
                  href="#"
                  onClick={link.handler}
                  className="block px-4 py-2 text-sm font-medium text-foreground border border-transparent hover:border-black hover:rounded-lg hover:bg-transparent transition-all duration-200 cursor-pointer"
                >
                  {link.label}
                </a>
              ) : link.type === 'external' ? (
                <a
                  key={link.path}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-sm font-medium text-foreground border border-transparent hover:border-black hover:rounded-lg hover:bg-transparent transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-sm font-medium text-foreground border border-transparent hover:border-black hover:rounded-lg hover:bg-transparent transition-all duration-200"
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
