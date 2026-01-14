"use client";

import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import Link from "next/link";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              CodeHive
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium hover:text-violet-600 transition-colors">
              Home
            </Link>
            <Link href="/features" className="text-sm font-medium hover:text-violet-600 transition-colors">
              Features
            </Link>
            <Link href="/docs" className="text-sm font-medium hover:text-violet-600 transition-colors">
              Documentation
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-violet-600 transition-colors">
              About
            </Link>
            <button className="px-6 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link href="/" className="block text-sm font-medium hover:text-violet-600 transition-colors">
              Home
            </Link>
            <Link href="/features" className="block text-sm font-medium hover:text-violet-600 transition-colors">
              Features
            </Link>
            <Link href="/docs" className="block text-sm font-medium hover:text-violet-600 transition-colors">
              Documentation
            </Link>
            <Link href="/about" className="block text-sm font-medium hover:text-violet-600 transition-colors">
              About
            </Link>
            <button className="w-full px-6 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-lg font-medium">
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
