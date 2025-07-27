# daideguchi Portfolio

Modern, enterprise-level portfolio website showcasing freelance software engineering services with a focus on Forward Deployed Engineer (FDE) inspired "伴走型開発サービス" (Collaborative Development Service).

## 🚀 Features

### Core Pages
- **Home**: Modern hero section with gradient animations and service highlights
- **About**: Professional profile with career timeline and technical skills
- **Services**: Comprehensive service offerings including the new FDE-inspired collaborative development service
- **Portfolio**: Showcase of enterprise-level projects with live demos
- **News/Blog**: Technical articles and project updates
- **Contact**: Professional contact form with service inquiry options

### Live Project Demos
- **Enterprise SaaS Platform** (`/projects/saas-platform`): Multi-tenant dashboard with user management, billing, and analytics
- **Task Management App** (`/projects/task-manager`): Real-time kanban board with team collaboration features
- **E-commerce Platform** (`/projects/ecommerce`): Full shopping cart with product search and filtering
- **Data Visualization Dashboard** (`/projects/dashboard`): Interactive charts and business metrics

### FDE-Inspired Service
- **3-Phase Development Model**: Discovery → Build → Maintain
- **Risk-Mitigated Pricing**: Higher initial phase, reduced maintenance costs
- **On-site Collaboration**: Deep customer engagement and problem-solving
- **Long-term Partnership**: Continuous improvement and support

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Icons**: Lucide React
- **Deployment**: Vercel with GitHub Actions

## 🏗 Architecture

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact form
│   ├── news/              # Blog/news section
│   ├── portfolio/         # Project showcase
│   ├── projects/          # Live project demos
│   │   ├── saas-platform/ # Enterprise SaaS demo
│   │   ├── task-manager/  # Task management app
│   │   ├── ecommerce/     # E-commerce platform
│   │   └── dashboard/     # Data visualization
│   └── services/          # Service offerings
│       └── fde/           # FDE service details
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   └── Footer.tsx         # Site footer
└── types/                 # TypeScript definitions
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/daideguchi/daideguchi-portfolio.git
cd daideguchi-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📦 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables if needed
3. Deploy automatically on push to main branch

### Manual Deployment

```bash
# Build the application
npm run build

# Deploy the .next folder to your hosting provider
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### Code Quality

- **ESLint**: Code linting and formatting
- **TypeScript**: Type safety and better developer experience
- **Prettier**: Code formatting (configured via ESLint)

## 📱 Responsive Design

The site is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎨 Design System

### Colors
- Primary: Blue (#2563eb)
- Secondary: Purple (#7c3aed)
- Accent: Pink (#ec4899)
- Neutral: Gray scale

### Typography
- Primary: Geist Sans
- Monospace: Geist Mono

### Components
- Consistent spacing and sizing
- Smooth animations and transitions
- Modern gradient effects
- Interactive hover states

## 📈 Performance

- **Next.js SSR/SSG**: Optimized rendering
- **Image Optimization**: Automatic image optimization
- **Code Splitting**: Automatic code splitting
- **Bundle Analysis**: Optimized bundle size

## 🔒 Security

- **Content Security Policy**: Configured headers
- **XSS Protection**: Built-in Next.js protections
- **HTTPS**: Enforced in production
- **Input Validation**: Form validation and sanitization

## 📄 License

This project is private and proprietary. All rights reserved.

## 📞 Contact

For inquiries about services or collaboration:

- **Website**: [Portfolio Site URL]
- **Email**: contact@daideguchi.dev
- **GitHub**: [@daideguchi](https://github.com/daideguchi)

---

Built with ❤️ using Next.js and modern web technologies.

Last updated: 2025-07-27