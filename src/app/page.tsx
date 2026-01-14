import { Sparkles, Database, Palette, Shield, Zap, Code2 } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span>Powered by AI</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              CodeHive
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A modern web application framework with AI capabilities. Built on Next.js 15,
            Firebase, and Google Genkit for intelligent, scalable applications.
          </p>

          <div className="flex gap-4 justify-center pt-4">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Get Started
            </button>
            <button className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 max-w-6xl mx-auto">
          <FeatureCard
            icon={<Sparkles className="w-6 h-6" />}
            title="AI-Powered"
            description="Integrate Google Genkit for intelligent features and AI-driven functionality"
          />
          <FeatureCard
            icon={<Database className="w-6 h-6" />}
            title="Firebase Backend"
            description="Real-time database, authentication, and hosting all in one platform"
          />
          <FeatureCard
            icon={<Zap className="w-6 h-6" />}
            title="Next.js 15"
            description="Latest React framework with server components and optimized performance"
          />
          <FeatureCard
            icon={<Palette className="w-6 h-6" />}
            title="Beautiful UI"
            description="Radix UI components with TailwindCSS and full dark mode support"
          />
          <FeatureCard
            icon={<Shield className="w-6 h-6" />}
            title="Type Safe"
            description="Full TypeScript support with Zod validation for rock-solid code"
          />
          <FeatureCard
            icon={<Code2 className="w-6 h-6" />}
            title="Modern Stack"
            description="React Hook Form, Recharts, and date-fns for a complete toolkit"
          />
        </div>

        {/* Tech Stack */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-semibold mb-8">Built with Modern Technologies</h2>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <TechBadge>Next.js 15</TechBadge>
            <TechBadge>React 18</TechBadge>
            <TechBadge>TypeScript</TechBadge>
            <TechBadge>Google Genkit</TechBadge>
            <TechBadge>Firebase</TechBadge>
            <TechBadge>TailwindCSS</TechBadge>
            <TechBadge>Radix UI</TechBadge>
            <TechBadge>React Hook Form</TechBadge>
            <TechBadge>Zod</TechBadge>
            <TechBadge>Recharts</TechBadge>
          </div>
        </div>
      </div>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  description
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

function TechBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-4 py-2 rounded-full bg-secondary border">
      {children}
    </span>
  );
}
