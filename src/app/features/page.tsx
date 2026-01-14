import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Sparkles, Database, Zap, Palette, Shield, Code2, Rocket, Server, Layers, Globe } from "lucide-react";

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Powerful{" "}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Features
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to build modern, scalable, and intelligent web applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <FeatureDetail
              icon={<Sparkles className="w-8 h-8" />}
              title="AI-Powered by Google Genkit"
              description="Integrate advanced AI capabilities with Google Genkit. Build intelligent features like natural language processing, content generation, and smart recommendations with ease."
              features={[
                "Natural language processing",
                "Content generation",
                "Smart recommendations",
                "Easy AI integration"
              ]}
            />
            <FeatureDetail
              icon={<Database className="w-8 h-8" />}
              title="Firebase Backend"
              description="Complete backend solution with Firebase. Real-time database, authentication, cloud functions, and hosting all in one powerful platform."
              features={[
                "Real-time database",
                "User authentication",
                "Cloud functions",
                "File storage"
              ]}
            />
            <FeatureDetail
              icon={<Zap className="w-8 h-8" />}
              title="Next.js 15 Performance"
              description="Built on the latest Next.js 15 with React Server Components for optimal performance and developer experience."
              features={[
                "Server Components",
                "Streaming SSR",
                "Optimized bundling",
                "Edge runtime support"
              ]}
            />
            <FeatureDetail
              icon={<Palette className="w-8 h-8" />}
              title="Beautiful UI Components"
              description="Pre-built, accessible components using Radix UI primitives and TailwindCSS with full dark mode support."
              features={[
                "Radix UI primitives",
                "TailwindCSS styling",
                "Dark mode support",
                "Fully responsive"
              ]}
            />
            <FeatureDetail
              icon={<Shield className="w-8 h-8" />}
              title="Type-Safe Development"
              description="Full TypeScript support throughout the stack with Zod validation for runtime type safety."
              features={[
                "TypeScript everywhere",
                "Zod validation",
                "Compile-time safety",
                "Better DX"
              ]}
            />
            <FeatureDetail
              icon={<Code2 className="w-8 h-8" />}
              title="Complete Toolkit"
              description="React Hook Form for forms, Recharts for data visualization, and date-fns for date management."
              features={[
                "Form handling",
                "Data visualization",
                "Date utilities",
                "Modern patterns"
              ]}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function FeatureDetail({ icon, title, description, features }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}) {
  return (
    <div className="p-8 rounded-2xl border bg-card hover:shadow-xl transition-all">
      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-violet-600"></div>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
