# Zylo Landing Page

Modern productivity platform landing page built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Hero Section**: Compelling value proposition with network visualization
- **Features Showcase**: Three core capabilities with detailed descriptions
- **Solutions Flow**: Visual workflow diagram showing data transformation
- **Features Page**: In-depth feature details with demos and metrics
- **Pricing Page**: Three pricing tiers with FAQ and contact form
- **Responsive Design**: Mobile-first approach with hamburger menu navigation
- **Pixel-Perfect Design**: Replicated from design reference with exact colors, fonts, and spacing

## 🎨 Design System

### Colors
- **Navy Primary**: `hsl(209 54% 25%)` - `#1e3a5f`
- **Blue Primary**: `hsl(207 90% 54%)` - `#2196F3`
- **Blue Light**: `hsl(207 89% 61%)` - `#42A5F5`
- **Light Background**: `hsl(0 0% 96%)` - `#f5f5f5`

### Typography
- **Font Family**: Inter (Google Fonts)
- **Hero Headline**: 48-56px, weight 700
- **Section Headers**: 36px, weight 700
- **Body Text**: 16px, weight 400

### Spacing
- **Section Padding**: 5-7.5rem vertical (responsive)
- **Container Max Width**: 1200px
- **Card Gap**: 2rem (32px)

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx           # Home page (Hero + Features + Solutions)
│   ├── features/
│   │   └── page.tsx       # Features page (detailed showcase)
│   ├── pricing/
│   │   └── page.tsx       # Pricing page (tiers + FAQ + contact)
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles & design system
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx # Header with responsive menu
│   │   └── Footer.tsx     # Footer with links
│   ├── sections/
│   │   ├── Hero.tsx       # Hero section component
│   │   ├── Features.tsx   # Features section component
│   │   └── Solutions.tsx  # Solutions section component
│   ├── ui/
│   │   └── Button.tsx     # Reusable button component
│   └── icons/
│       └── FeatureIcons.tsx # Custom SVG icons
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.2 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Font**: Inter (Google Fonts)
- **Deployment**: Vercel-optimized

## 🚦 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to see the landing page.

## 📄 Pages

- **Home (`/`)**: Hero, Features, and Solutions sections
- **Features (`/features`)**: Detailed feature showcase with demos
- **Pricing (`/pricing`)**: Pricing tiers, FAQ, and contact form

## 🎯 Key Components

### Navigation
- Sticky header with Zylo branding
- Desktop menu with CTA button
- Mobile hamburger menu with slide-out drawer

### Hero Section
- Large headline with compelling copy
- Dual CTA buttons (primary + secondary)
- Network visualization graphic (SVG)

### Feature Cards
- Three cards with custom icons
- Centered layout with hover effects
- Consistent shadow and spacing

### Pricing Cards
- Three tiers (Starter, Professional, Enterprise)
- Highlighted "Most Popular" card
- Feature list with checkmarks

### Contact Form
- Full validation with required fields
- Team size dropdown selector
- Success message on submission

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (single column, hamburger menu)
- **Tablet**: 768px - 1024px (adjusted spacing)
- **Desktop**: > 1024px (full layout with network viz)

## 🎨 Customization

All design tokens are defined in `src/app/globals.css`:
- Update CSS custom properties for colors
- Modify font imports for different typefaces
- Adjust spacing variables for layout changes

## 📝 License

MIT
