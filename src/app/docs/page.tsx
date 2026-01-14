import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Book, Rocket, Code2, Zap } from "lucide-react";

export default function DocsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Documentation
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn how to build amazing applications with CodeHive
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            <DocCard
              icon={<Rocket className="w-6 h-6" />}
              title="Getting Started"
              description="Quick start guide to set up your first CodeHive project"
              link="/docs/getting-started"
            />
            <DocCard
              icon={<Code2 className="w-6 h-6" />}
              title="Components"
              description="Learn about the UI components and how to use them"
              link="/docs/components"
            />
            <DocCard
              icon={<Zap className="w-6 h-6" />}
              title="AI Integration"
              description="Integrate Google Genkit AI into your application"
              link="/docs/ai"
            />
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            <section className="p-8 rounded-2xl border bg-card">
              <h2 className="text-3xl font-bold mb-4">Quick Start</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">1. Clone the Repository</h3>
                  <pre className="p-4 bg-secondary rounded-lg overflow-x-auto">
                    <code>git clone https://github.com/yourusername/codehive.git</code>
                  </pre>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2. Install Dependencies</h3>
                  <pre className="p-4 bg-secondary rounded-lg overflow-x-auto">
                    <code>npm install</code>
                  </pre>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">3. Run Development Server</h3>
                  <pre className="p-4 bg-secondary rounded-lg overflow-x-auto">
                    <code>npm run dev</code>
                  </pre>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">4. Open Your Browser</h3>
                  <p className="text-muted-foreground">Navigate to <code className="px-2 py-1 bg-secondary rounded">http://localhost:9002</code></p>
                </div>
              </div>
            </section>

            <section className="p-8 rounded-2xl border bg-card">
              <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Frontend</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Next.js 15</li>
                    <li>• React 18</li>
                    <li>• TypeScript</li>
                    <li>• TailwindCSS</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Backend</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Firebase</li>
                    <li>• Google Genkit</li>
                    <li>• Firestore</li>
                    <li>• Cloud Functions</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="p-8 rounded-2xl border bg-card">
              <h2 className="text-3xl font-bold mb-4">Resources</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-violet-600">→</span>
                  <div>
                    <a href="https://nextjs.org/docs" className="font-semibold text-foreground hover:text-violet-600">Next.js Documentation</a>
                    <p className="text-sm">Learn about Next.js features and API</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-600">→</span>
                  <div>
                    <a href="https://firebase.google.com/docs" className="font-semibold text-foreground hover:text-violet-600">Firebase Documentation</a>
                    <p className="text-sm">Complete guide to Firebase services</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-600">→</span>
                  <div>
                    <a href="https://firebase.google.com/docs/genkit" className="font-semibold text-foreground hover:text-violet-600">Google Genkit Documentation</a>
                    <p className="text-sm">AI integration with Genkit</p>
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function DocCard({ icon, title, description, link }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <a href={link} className="block p-6 rounded-xl border bg-card hover:shadow-lg hover:border-violet-600/50 transition-all group">
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </a>
  );
}
