# World Peas 🫛

A modern Next.js e-commerce application for browsing and managing a basket of fresh vegetables and produce.
<br>
deployed link- https://my-nextjs-app-chi-indol.vercel.app/

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Development](#development)
- [Production Build](#production-build)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- Browse a variety of fresh vegetables and produce
- Shopping basket management
- Product image gallery
- Responsive design
- Fast performance with Next.js optimization
- Modern React components

## 🛠 Tech Stack

- **Framework:** Next.js 14.2.5
- **Library:** React 18.3.1
- **React DOM:** 18.3.1
- **Node.js:** v18+ (recommended)
- **Package Manager:** npm or yarn

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or higher)
- npm or yarn package manager
- Git

## 🚀 Installation

### Clone the Repository

```bash
# Clone the repository
git clone https://github.com/SUYASHADITYA919/my-nextjs-app.git

# Navigate to the project directory
cd my-nextjs-app
```

### Install Dependencies

```bash
# Using npm
npm install

# Or using yarn
yarn install

# Or using pnpm
pnpm install
```

## 📝 Available Scripts

### Development Server

Start the development server with hot-reload on port 3000:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Build for Production

Create an optimized production build:

```bash
npm run build
```

This command:
- Compiles your application
- Optimizes bundle size
- Generates static assets
- Prepares for deployment

### Start Production Server

Run the production build locally:

```bash
npm start
```

This will start the Next.js server in production mode on port 3000.

## 📁 Project Structure

```
my-nextjs-app/
├── app/                          # App Router (Next.js 13+)
│   └── basket/
│       └── page.tsx             # Basket page component
├── pages/                        # Pages Router (legacy)
│   ├── _app.js                  # App wrapper
│   └── index.js                 # Home page
├── public/
│   └── images/                  # Product images
│       ├── Ginger.png
│       ├── Onion.jpg
│       ├── Pears.jpg
│       ├── Tomato.png
│       └── ...
├── styles/
│   └── globals.css              # Global styles
├── package.json                 # Dependencies & scripts
├── package-lock.json            # Dependency lock file
└── README.md                    # This file
```

## 💻 Development

### Running in Development Mode

```bash
# Start development server
npm run dev

# The app will be available at http://localhost:3000
```

**Features:**
- Hot Module Replacement (HMR) for instant code updates
- Automatic page reloads on file changes
- Detailed error messages in the browser

### File Structure

- **App Router** (`app/` folder): Modern Next.js routing
- **Pages Router** (`pages/` folder): Legacy routing system
- **Public Assets** (`public/` folder): Static images and files
- **Styles** (`styles/` folder): Global CSS styles

## 🏗 Production Build

### Building the Application

```bash
# Create production build
npm run build

# Verify build output
# This generates .next/ directory with optimized code
```

### Running Production Server Locally

```bash
# Start the production server
npm start

# Access the app at http://localhost:3000
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel

# For production deployment
vercel --prod
```

### Deploy to Other Platforms

**Docker Deployment:**

```bash
# Create a Dockerfile
docker build -t world-peas .

# Run the container
docker run -p 3000:3000 world-peas
```

**Manual Deployment:**

```bash
# Build the app
npm run build

# Start in production
npm start
```

## 🧪 Testing & Debugging

### Browser DevTools

- Open Developer Tools (F12 or Right-click → Inspect)
- Check Console tab for errors
- Use React DevTools for component inspection

### Next.js Debugging

```bash
# Run with debugging enabled
NODE_OPTIONS='--inspect' npm run dev
```

## 📦 Adding Dependencies

To add new packages:

```bash
# Using npm
npm install package-name

# Using yarn
yarn add package-name

# Using pnpm
pnpm add package-name
```

## 🔄 Version Management

Check your versions:

```bash
# Node version
node --version

# npm version
npm --version

# Next.js version
npm list next
```

## 🚨 Troubleshooting

### Port 3000 Already in Use

```bash
# On macOS/Linux
lsof -i :3000
kill -9 <PID>

# On Windows (PowerShell)
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Clear Cache and Reinstall

```bash
# Remove node_modules
rm -rf node_modules
# or on Windows
rmdir /s /q node_modules

# Clear npm cache
npm cache clean --force

# Reinstall dependencies
npm install
```

### Build Issues

```bash
# Clean Next.js cache
rm -rf .next

# Rebuild
npm run build
```

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Node.js Documentation](https://nodejs.org/docs)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**GitHub:** [@SUYASHADITYA919](https://github.com/SUYASHADITYA919)

**Repository:** [my-nextjs-app](https://github.com/SUYASHADITYA919/my-nextjs-app)

---

**Happy Coding! 🎉**

