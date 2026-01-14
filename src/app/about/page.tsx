import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Target, Users, Lightbulb, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                CodeHive
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building the future of AI-powered web development
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            <section className="p-8 rounded-2xl border bg-card">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                CodeHive is dedicated to empowering developers to build intelligent, scalable web applications
                with cutting-edge technologies. We believe that AI should be accessible to every developer,
                and we're committed to providing the tools and infrastructure to make that possible.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                By combining the power of Next.js, Firebase, and Google Genkit, we've created a platform
                that makes it easy to build modern applications with AI capabilities built right in.
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ValueCard
                icon={<Target className="w-8 h-8" />}
                title="Innovation"
                description="We stay at the forefront of web development, constantly integrating the latest technologies and best practices."
              />
              <ValueCard
                icon={<Users className="w-8 h-8" />}
                title="Community"
                description="Building a vibrant community of developers who share knowledge and help each other grow."
              />
              <ValueCard
                icon={<Lightbulb className="w-8 h-8" />}
                title="Simplicity"
                description="Making complex technologies accessible through intuitive APIs and comprehensive documentation."
              />
              <ValueCard
                icon={<Heart className="w-8 h-8" />}
                title="Open Source"
                description="Contributing to the open source ecosystem and building tools that benefit everyone."
              />
            </div>

            <section className="p-8 rounded-2xl border bg-card">
              <h2 className="text-3xl font-bold mb-6">Why CodeHive?</h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">🚀 Modern Stack</h3>
                  <p>Built on the latest versions of Next.js, React, and TypeScript with full type safety.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">🤖 AI-First</h3>
                  <p>Google Genkit integration makes it easy to add AI capabilities to your applications.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">🔥 Firebase Backend</h3>
                  <p>Complete backend solution with real-time database, authentication, and cloud functions.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">🎨 Beautiful UI</h3>
                  <p>Pre-built components using Radix UI and TailwindCSS with dark mode support.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">📦 Production Ready</h3>
                  <p>Optimized for performance and ready to deploy on Vercel with zero configuration.</p>
                </div>
              </div>
            </section>

            <section className="text-center p-12 rounded-2xl bg-gradient-to-br from-violet-600/10 to-indigo-600/10 border border-violet-600/20">
              <h2 className="text-3xl font-bold mb-4">Join the Community</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Be part of the next generation of web development
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-violet-600/50 transition-all hover:scale-105">
                Get Started Today
              </button>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function ValueCard({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 rounded-xl border bg-card hover:shadow-lg transition-all">
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
