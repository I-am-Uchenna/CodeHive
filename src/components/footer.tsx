import { Github, Twitter, Linkedin, Mail, Sparkles } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-secondary/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                CodeHive
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Building the future of AI-powered web applications with modern technologies.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-violet-600 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-violet-600 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-violet-600 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:hello@codehive.dev" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-violet-600 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/features" className="hover:text-violet-600 transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-violet-600 transition-colors">Pricing</Link></li>
              <li><Link href="/docs" className="hover:text-violet-600 transition-colors">Documentation</Link></li>
              <li><Link href="/changelog" className="hover:text-violet-600 transition-colors">Changelog</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-violet-600 transition-colors">About</Link></li>
              <li><Link href="/blog" className="hover:text-violet-600 transition-colors">Blog</Link></li>
              <li><Link href="/careers" className="hover:text-violet-600 transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-violet-600 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/guides" className="hover:text-violet-600 transition-colors">Guides</Link></li>
              <li><Link href="/tutorials" className="hover:text-violet-600 transition-colors">Tutorials</Link></li>
              <li><Link href="/api" className="hover:text-violet-600 transition-colors">API Reference</Link></li>
              <li><Link href="/support" className="hover:text-violet-600 transition-colors">Support</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} CodeHive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
