"use client";

import { Sparkles, Database, Palette, Shield, Zap, Code2, ArrowRight, Github, Rocket, Box, Terminal, Cloud, Lock } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section with Animated Background */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-indigo-500/10 to-purple-500/10">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          </div>

          {/* Floating Orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center space-y-8 max-w-5xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-600/20 to-indigo-600/20 border border-violet-600/30 text-sm font-medium backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-violet-600" />
                <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  Powered by AI
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
                Build the{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Future
                  </span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-indigo-600 blur-2xl opacity-20 -z-10"></div>
                </span>
                <br />
                <span className="text-muted-foreground text-5xl md:text-7xl">with CodeHive</span>
              </h1>

              {/* Description */}
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                The modern AI-powered platform for building intelligent web applications.
                Powered by Next.js 15, Firebase, and Google Genkit.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button className="group px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-violet-600/50 transition-all hover:scale-105 flex items-center justify-center gap-2">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-secondary/50 backdrop-blur-sm text-foreground rounded-xl font-semibold hover:bg-secondary transition-all border border-border flex items-center justify-center gap-2">
                  <Github className="w-5 h-5" />
                  View on GitHub
                </button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-8 md:gap-16 pt-12">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">10+</div>
                  <div className="text-sm text-muted-foreground mt-1">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">100%</div>
                  <div className="text-sm text-muted-foreground mt-1">Type Safe</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">AI</div>
                  <div className="text-sm text-muted-foreground mt-1">Powered</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Everything you need to{" "}
                <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  build amazing apps
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A comprehensive toolkit with cutting-edge technologies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              <FeatureCard
                icon={<Sparkles className="w-6 h-6" />}
                title="AI-Powered Intelligence"
                description="Integrate Google Genkit for intelligent features, natural language processing, and AI-driven functionality out of the box"
                gradient="from-violet-600 to-purple-600"
              />
              <FeatureCard
                icon={<Database className="w-6 h-6" />}
                title="Firebase Backend"
                description="Real-time database, authentication, cloud functions, and hosting all in one powerful platform"
                gradient="from-amber-600 to-orange-600"
              />
              <FeatureCard
                icon={<Zap className="w-6 h-6" />}
                title="Next.js 15 Performance"
                description="Latest React framework with server components, streaming, and optimized performance for lightning-fast apps"
                gradient="from-blue-600 to-cyan-600"
              />
              <FeatureCard
                icon={<Palette className="w-6 h-6" />}
                title="Beautiful UI Components"
                description="Radix UI primitives with TailwindCSS styling and full dark mode support for stunning interfaces"
                gradient="from-pink-600 to-rose-600"
              />
              <FeatureCard
                icon={<Shield className="w-6 h-6" />}
                title="Type-Safe Development"
                description="Full TypeScript support with Zod validation ensuring rock-solid, error-free code at compile time"
                gradient="from-green-600 to-emerald-600"
              />
              <FeatureCard
                icon={<Code2 className="w-6 h-6" />}
                title="Complete Modern Stack"
                description="React Hook Form for forms, Recharts for data visualization, and date-fns for date management"
                gradient="from-indigo-600 to-violet-600"
              />
            </div>
          </div>
        </section>

        {/* Tech Stack Showcase */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Built with{" "}
                <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  Modern Technologies
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                The best tools for building production-ready applications
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              <TechCard icon={<Rocket className="w-8 h-8" />} name="Next.js 15" />
              <TechCard icon={<Code2 className="w-8 h-8" />} name="React 18" />
              <TechCard icon={<Terminal className="w-8 h-8" />} name="TypeScript" />
              <TechCard icon={<Sparkles className="w-8 h-8" />} name="Genkit AI" />
              <TechCard icon={<Database className="w-8 h-8" />} name="Firebase" />
              <TechCard icon={<Palette className="w-8 h-8" />} name="TailwindCSS" />
              <TechCard icon={<Box className="w-8 h-8" />} name="Radix UI" />
              <TechCard icon={<Shield className="w-8 h-8" />} name="Zod" />
              <TechCard icon={<Cloud className="w-8 h-8" />} name="Vercel" />
              <TechCard icon={<Lock className="w-8 h-8" />} name="Type Safe" />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-indigo-600/20 to-purple-600/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8 p-12 rounded-2xl border bg-card/50 backdrop-blur-sm">
              <h2 className="text-4xl md:text-5xl font-bold">
                Ready to start building?
              </h2>
              <p className="text-xl text-muted-foreground">
                Join developers building the next generation of AI-powered applications
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-violet-600/50 transition-all hover:scale-105 flex items-center justify-center gap-2">
                  Get Started Now
                  <ArrowRight className="w-5 h-5" />
                </button>
                <Link href="/docs" className="px-8 py-4 bg-secondary text-foreground rounded-xl font-semibold hover:bg-secondary/80 transition-all flex items-center justify-center gap-2">
                  Read Documentation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  gradient
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}) {
  return (
    <div className="group relative p-8 rounded-2xl border bg-card hover:shadow-2xl hover:shadow-violet-600/10 transition-all hover:-translate-y-1">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}></div>
      <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
        <div className="text-white">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

function TechCard({ icon, name }: { icon: React.ReactNode; name: string }) {
  return (
    <div className="group p-6 rounded-xl border bg-card hover:shadow-lg hover:border-violet-600/50 transition-all hover:-translate-y-1 text-center">
      <div className="flex justify-center mb-4 text-muted-foreground group-hover:text-violet-600 transition-colors">
        {icon}
      </div>
      <div className="font-medium text-sm">{name}</div>
    </div>
  );
}
