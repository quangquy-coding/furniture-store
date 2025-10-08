import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">LOGO</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Furniture is a furniture store that provides the best quality
              furniture for your home.
            </p>
          </div>

          {/* Category */}
          <div>
            <h4 className="font-semibold mb-4">Category</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/sofa"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Sofa
                </Link>
              </li>
              <li>
                <Link
                  href="/chair"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Chair
                </Link>
              </li>
              <li>
                <Link
                  href="/table"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Table
                </Link>
              </li>
              <li>
                <Link
                  href="/lighting"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Lighting
                </Link>
              </li>
            </ul>
          </div>

          {/* Featured Product */}
          <div>
            <h4 className="font-semibold mb-4">Featured Product</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/sofa"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Sofa
                </Link>
              </li>
              <li>
                <Link
                  href="/chair"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Chair
                </Link>
              </li>
              <li>
                <Link
                  href="/table"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Table
                </Link>
              </li>
              <li>
                <Link
                  href="/bed"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Bed
                </Link>
              </li>
            </ul>
          </div>

          {/* Sitemap */}
          <div>
            <h4 className="font-semibold mb-4">Sitemap</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/press"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Press
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Furniture Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
