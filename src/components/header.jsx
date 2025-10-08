"use client";
import { useState } from "react";
import { Search, ShoppingCart, Menu } from "lucide-react";

// Khai báo component bằng const
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-border bg-background">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-foreground">
            Furniture
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="/"
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="/features"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Features
            </a>
            <a
              href="/contact"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4">
            <button className="text-muted-foreground hover:text-primary transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="relative text-muted-foreground hover:text-primary transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center">
                2
              </span>
            </button>
            <button
              className="md:hidden text-muted-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <a
              href="/"
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="/features"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Features
            </a>
            <a
              href="/contact"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
