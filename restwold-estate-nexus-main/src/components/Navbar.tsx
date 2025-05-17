
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LoginModal from "./LoginModal";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isAnalyticsPage = location.pathname === "/analytics";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // When navigating to a new page, scroll to top
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Define text color classes based on page and scroll state
  const getBrandNameClass = () => {
    if (isHomePage) {
      return isScrolled ? "text-primary" : "text-secondary"; // Gold before scroll on homepage, green after
    } else if (isAnalyticsPage) {
      return isScrolled ? "text-primary" : "text-secondary"; // Gold for analytics page
    }
    return isScrolled ? "text-primary" : "text-secondary"; // Now using gold before scroll everywhere, green after
  };

  const getNavLinkClass = () => {
    if (isHomePage) {
      return isScrolled ? "text-primary-dark" : "text-white"; // White before scroll on homepage, dark green after
    } else if (isAnalyticsPage) {
      return isScrolled ? "text-primary-dark" : "text-white"; // White for analytics page
    }
    return isScrolled ? "text-primary-dark" : "text-white"; // White before scroll on other pages, dark green after
  };

  const getNavbarBgClass = () => {
    if (isHomePage) {
      return isScrolled ? "bg-white bg-opacity-95 shadow-md py-2" : "bg-transparent py-6";
    } else if (isAnalyticsPage) {
      // Use forest green background for Analytics page before scrolling
      return isScrolled ? "bg-white bg-opacity-95 shadow-md py-2" : "bg-primary py-6";
    } else {
      return isScrolled ? "bg-white bg-opacity-95 shadow-md py-2" : "bg-primary-dark py-6";
    }
  };

  const getLoginButtonClass = () => {
    if (isScrolled) {
      // After scrolling, consistent styling: green text, white background, green border
      return "border-primary text-primary hover:bg-primary hover:text-white";
    } else {
      if (isAnalyticsPage) {
        return "border-primary text-primary bg-white hover:bg-primary hover:text-white";
      } else if (isHomePage) {
        return "border-primary text-primary hover:bg-primary hover:text-white";
      } else {
        return "border-secondary bg-primary text-secondary hover:bg-secondary hover:text-primary";
      }
    }
  };

  const getConsultationButtonClass = () => {
    if (isScrolled) {
      // After scrolling, consistent styling: white text, emerald green background
      return "bg-primary hover:bg-primary-light text-white transition-colors";
    } else {
      if (isAnalyticsPage) {
        return "bg-white text-primary hover:bg-white hover:text-primary-dark transition-colors";
      } else if (isHomePage) {
        return "bg-primary hover:bg-primary-light text-white transition-colors";
      } else {
        return "bg-neutral hover:bg-neutral/90 text-primary transition-colors";
      }
    }
  };

  const getBorderClass = () => {
    if (isHomePage) {
      return "";
    } else {
      return !isScrolled ? "border-b-[2.5px] border-secondary transition-all duration-300" : "";
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getNavbarBgClass()} ${getBorderClass()}`}
      >
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className={`text-xl md:text-2xl font-playfair font-bold ${getBrandNameClass()} transition-colors duration-300`}>
              Restwold Novelty
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`${getNavLinkClass()} hover:text-primary transition-colors`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${getNavLinkClass()} hover:text-primary transition-colors`}
            >
              About Us
            </Link>
            <Link
              to="/services"
              className={`${getNavLinkClass()} hover:text-primary transition-colors`}
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className={`${getNavLinkClass()} hover:text-primary transition-colors`}
            >
              Portfolio
            </Link>
            <Link
              to="/analytics"
              className={`${getNavLinkClass()} hover:text-primary transition-colors`}
            >
              Analytics
            </Link>
            <Link
              to="/contact"
              className={`${getNavLinkClass()} hover:text-primary transition-colors`}
            >
              Contact
            </Link>
            <Link
              to="/property-evaluation"
              className={`${getNavLinkClass()} hover:text-primary transition-colors`}
            >
              Free Evaluation
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <Button
              onClick={() => setIsLoginModalOpen(true)}
              variant="outline"
              className={`${getLoginButtonClass()} transition-colors`}
            >
              Login
            </Button>
            <Button className={getConsultationButtonClass()}>
              Request Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className={isScrolled ? "" : "text-white"}
            >
              {isMenuOpen ? (
                <X className={`h-6 w-6 ${isScrolled ? "text-primary" : "text-white"}`} />
              ) : (
                <Menu className={`h-6 w-6 ${isScrolled ? "text-primary" : "text-white"}`} />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-40 bg-white pt-20 px-4">
            <div className="flex flex-col space-y-6 text-center">
              <Link
                to="/"
                className="text-xl text-primary-dark hover:text-primary py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-xl text-primary-dark hover:text-primary py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="text-xl text-primary-dark hover:text-primary py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/portfolio"
                className="text-xl text-primary-dark hover:text-primary py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                to="/analytics"
                className="text-xl text-primary-dark hover:text-primary py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Analytics
              </Link>
              <Link
                to="/contact"
                className="text-xl text-primary-dark hover:text-primary py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/property-evaluation"
                className="text-xl text-primary-dark hover:text-primary py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Free Evaluation
              </Link>

              <div className="flex flex-col space-y-4 mt-8">
                <Button
                  onClick={() => {
                    setIsLoginModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Login
                </Button>
                <Button className="bg-primary hover:bg-primary-light text-white">
                  Request Consultation
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  );
};

export default Navbar;
