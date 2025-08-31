# Smark Solutions Website

A modern, SEO-optimized React website for Smark Solutions - a digital marketing and software development startup. Built with React, Tailwind CSS, Framer Motion, and React Helmet.

## 🚀 Features

- **Pure Black & White Design**: Minimalist aesthetic inspired by manki.space
- **SEO Optimized**: Complete with React Helmet, structured data, sitemap, and robots.txt
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Elements**: 
  - Liquid glass cursor effect
  - Animated light rays background
  - Hover flip animations for project cards
  - Glowing card effects
- **Semantic HTML5**: Proper structure for accessibility and SEO
- **Single Page Application**: Smooth scroll navigation between sections

## 🛠️ Tech Stack

- **React** - Frontend framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Helmet** - Document head management for SEO

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd smark-solutions
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Cursor.jsx      # Custom cursor effect
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section
│   ├── LightRays.jsx   # Animated background
│   ├── ProjectCard.jsx # Project showcase cards
│   └── ServiceCard.jsx # Service offering cards
├── pages/              # Main page sections
│   ├── About.jsx       # About us section
│   ├── Contact.jsx     # Contact form and info
│   ├── Projects.jsx    # Portfolio showcase
│   └── Services.jsx    # Service offerings
├── seo/                # SEO components
│   └── SEO.jsx         # React Helmet configuration
├── App.jsx             # Main application component
├── index.css           # Global styles and Tailwind
└── main.jsx            # Application entry point

public/
├── robots.txt          # Search engine crawler instructions
├── sitemap.xml         # XML sitemap for SEO
└── vite.svg            # Favicon
```

## 🎨 Design Features

### Color Scheme
- **Background**: Pure black (#000000)
- **Text**: White (#ffffff) and gray (#a0a0a0)
- **Accents**: Glowing white effects

### Animations
- **Light Rays**: Animated background rays moving across the screen
- **Card Hover**: Neon glow effects on service and project cards
- **3D Flip**: Project cards flip on hover to reveal details
- **Smooth Scroll**: Snap scrolling between sections
- **Cursor**: Custom liquid glass cursor with glow effects

### Components
- **Hero Section**: Large typography with call-to-action buttons
- **About Us**: Company values with animated reveals
- **Services**: Four main service offerings with detailed cards
- **Projects**: Portfolio grid with interactive flip cards
- **Contact**: Form with floating labels and company information

## 📈 SEO Optimization

- **Meta Tags**: Comprehensive meta tags for search engines
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter-specific sharing tags
- **Structured Data**: JSON-LD schema for organization info
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Sitemap**: XML sitemap for search engine indexing
- **Robots.txt**: Search engine crawler guidance

## 🚀 Performance

- **Vite**: Fast development and optimized production builds
- **Code Splitting**: Automatic code splitting for better loading
- **Asset Optimization**: Optimized images and CSS
- **Minimal Dependencies**: Lightweight library choices

## 📱 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Progressive enhancement approach

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to modify the color scheme:

```javascript
colors: {
  primary: {
    black: '#000000',
    white: '#ffffff',
    gray: '#a0a0a0',
  }
}
```

### Animations
Modify animations in `tailwind.config.js` under the `keyframes` section.

### Content
- Update company information in `src/seo/SEO.jsx`
- Modify services in `src/pages/Services.jsx`
- Update projects in `src/pages/Projects.jsx`
- Change contact details in `src/pages/Contact.jsx`

## 📞 Contact

For questions about this project or services:

- **Email**: contact@smarksolutions.com
- **Phone**: +1 (555) 0123
- **Website**: smarksolutions.com

## 📄 License

This project is proprietary software developed for Smark Solutions.

---

**Smark Solutions** - Innovating Ideas, Empowering Growth
