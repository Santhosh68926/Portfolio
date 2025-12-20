# Frontend Developer Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features smooth animations, dark mode support, and a clean design showcasing projects, skills, and professional experience.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Beautiful transitions and micro-interactions using Framer Motion
- **Modern Stack**: Built with React 18, Vite, and Tailwind CSS
- **Component-Based Architecture**: Clean, reusable components
- **React Router**: Client-side routing for smooth navigation
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Dynamic project cards with live links and GitHub repos

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: React Icons
- **Language**: JavaScript (JSX)

## 📁 Project Structure

```
frontend-portfolio/
├── public/
│   └── assets/
│       └── projects/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── SkillBar.jsx
│   │   ├── ThemeToggle.jsx
│   │   └── TimelineItem.jsx
│   ├── data/               # Static data files
│   │   ├── education.js
│   │   ├── personalInfo.js
│   │   ├── projects.js
│   │   └── skills.js
│   ├── hooks/              # Custom React hooks
│   │   └── useTheme.js
│   ├── pages/              # Page components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── utils/              # Utility functions
│   ├── App.jsx             # Main App component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/frontend-portfolio.git
   cd frontend-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` (or the URL shown in your terminal)

## 📝 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint for code quality checks

## ⚙️ Configuration

### Personal Information

Update your personal information in `src/data/personalInfo.js`:

```javascript
export const personalInfo = {
  name: "Your Name",
  title: "Frontend Developer",
  description: "Your professional description...",
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  location: "Your City, Country",
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/yourusername",
      icon: "FaGithub"
    },
    // Add more social links...
  ]
};
```

### Projects

Update your projects in `src/data/projects.js`:

```javascript
export const projects = [
  {
    id: 1,
    name: "Your Project Name",
    description: "Project description...",
    techStack: ["React", "Node.js", "MongoDB"],
    githubLink: "https://github.com/username/project",
    liveLink: "https://project-demo.vercel.app",
    image: "/assets/projects/project-image.jpg"
  },
  // Add more projects...
];
```

### Skills

Update your skills in `src/data/skills.js`:

```javascript
export const skills = {
  "Frontend": [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    // Add more skills...
  ],
  "Backend": [
    // Add backend skills...
  ],
  "Tools & Others": [
    // Add other skills...
  ]
};
```

### Education & Experience

Update your education and experience in `src/data/education.js`:

```javascript
export const education = [
  {
    id: 1,
    degree: "Your Degree",
    institution: "Your University",
    location: "City, Country",
    period: "2020 - 2024",
    gpa: "3.8/4.0",
    achievements: [
      "Your achievements..."
    ]
  },
  // Add more education entries...
];

export const experience = [
  {
    id: 1,
    position: "Your Position",
    company: "Company Name",
    location: "City, Country",
    period: "2022 - Present",
    responsibilities: [
      "Your responsibilities..."
    ]
  },
  // Add more experience entries...
];
```

## 🎨 Customization

### Theme Colors

The theme colors can be customized in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
    }
  }
}
```

### Animations

Animation settings are defined in `tailwind.config.js` and used throughout the components with Framer Motion. You can modify animations in individual components or create new ones in the config.

## 📱 Responsive Design

The portfolio is fully responsive and includes:

- Mobile-first approach
- Responsive navigation menu with hamburger toggle
- Flexible grid layouts
- Responsive typography
- Touch-friendly interactive elements

## 🌙 Dark Mode

The portfolio includes a dark mode toggle that:

- Persists user preference in localStorage
- Smoothly transitions between themes
- Updates all UI components appropriately
- Respects system color scheme preference by default

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically build and deploy your site

### Netlify

1. Run `npm run build`
2. Upload the `dist` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

### Other Platforms

Any static hosting service that supports React applications will work. Just make sure to:

1. Run `npm run build`
2. Upload the contents of the `dist` folder
3. Configure your server for single-page applications if needed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The UI library
- [Vite](https://vitejs.dev/) - Build tool and dev server
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- [React Router](https://reactrouter.com/) - Routing library

## 📞 Contact

Feel free to reach out if you have any questions or suggestions!

- Email: your.email@example.com
- GitHub: https://github.com/yourusername
- LinkedIn: https://linkedin.com/in/yourusername

---

**Built with ❤️ using React and modern web technologies**