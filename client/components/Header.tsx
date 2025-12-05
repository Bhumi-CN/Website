import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        // If not on home page, navigate to home first
        navigate("/");
        // Wait for navigation and then scroll
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        // Already on home page, just scroll
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      navigate(href);
    }
    setIsOpen(false); // Close mobile menu
  };



  const navItems = [
    { label: "Home", href: "/" },
    { label: "Our Work", href: "#our-work" },
    { label: "Services", href: "/services" },
    { label: "Company", href: "/company" } ,
    { label: "Careers", href: "/careers" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cn-dark/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
  <img
    src="/logos/cnlogo.png"
    alt="CloudNexus Logo"
    className="w-10 h-10 object-contain"
  />

  <h1 className="text-2xl font-bold">
  <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
    Cloud
  </span>
  <span className="text-white">Nexus</span>
</h1>

</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={`font-medium transition-colors duration-300 flex items-center gap-1 ${
                    isScrolled
                      ? "text-gray-300 hover:text-cn-blue"
                      : "text-white/80 hover:text-cn-blue"
                  }`}
                >
                  {item.label}
                </button>
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="px-6 py-2 bg-cn-blue text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-cn-blue/50">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="text-white/80 hover:text-cn-blue transition-colors duration-300 font-medium text-left flex items-center gap-1"
                  >
                    {item.label}
                  </button>
                </div>
              ))}
              <button className="w-full px-6 py-2 bg-cn-blue text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300 mt-4">
                Contact Us
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
