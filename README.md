# CodeHive 🚀

A modern AI-powered web application framework built with Next.js 15, Firebase, and Google Genkit.

![CodeHive](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- 🤖 **AI-Powered** - Integrated with Google Genkit for intelligent features
- 🔥 **Firebase Backend** - Real-time database, authentication, and cloud functions
- ⚡ **Next.js 15** - Latest React framework with server components
- 🎨 **Beautiful UI** - Radix UI components with TailwindCSS
- 🛡️ **Type-Safe** - Full TypeScript support with Zod validation
- 📱 **Responsive** - Mobile-first design with dark mode support

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/codehive.git
cd codehive
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:9002](http://localhost:9002) in your browser

## 📦 Tech Stack

### Frontend
- **Next.js 15** - React framework with server components
- **React 18** - UI library
- **TypeScript** - Type safety
- **TailwindCSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide Icons** - Beautiful icon library

### Backend & Services
- **Firebase** - Backend as a service
- **Google Genkit** - AI integration framework
- **Firestore** - NoSQL database
- **Firebase Auth** - Authentication

### Development Tools
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **Recharts** - Data visualization
- **date-fns** - Date utilities

## 🌐 Deploy to Vercel

The easiest way to deploy CodeHive is using Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/codehive)

### Manual Deployment

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy"

Your app will be live in seconds! 🎉

## 📁 Project Structure

```
codehive/
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── about/        # About page
│   │   ├── docs/         # Documentation page
│   │   ├── features/     # Features page
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   └── globals.css   # Global styles
│   ├── components/       # React components
│   │   ├── header.tsx    # Navigation header
│   │   ├── footer.tsx    # Footer component
│   │   └── ui/           # UI components
│   ├── lib/              # Utility functions
│   ├── hooks/            # Custom React hooks
│   └── ai/               # Genkit AI functions
├── public/               # Static assets
└── package.json          # Dependencies
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server on port 9002
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run typecheck` - Run TypeScript type checking
- `npm run genkit:dev` - Start Genkit AI dev server

## 🎨 Customization

### Theming

The project uses TailwindCSS with custom theme variables. Edit `src/app/globals.css` to customize colors:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --primary: 240 5.9% 10%;
  /* ... more variables */
}
```

### Components

All UI components are built with Radix UI primitives and can be found in `src/components/ui/`.

## 📝 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Google Genkit Configuration
GENKIT_API_KEY=your_genkit_api_key
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this project for your own applications!

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Firebase](https://firebase.google.com/)
- [Google Genkit](https://firebase.google.com/docs/genkit)
- [TailwindCSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Lucide Icons](https://lucide.dev/)

---

Built with ❤️ by the CodeHive team