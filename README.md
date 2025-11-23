# Dhiran Karki - XR Developer Portfolio

A minimal, immersive portfolio built with React, Tailwind CSS, and Framer Motion.

## Features
- 3D-inspired dark UI
- Interactive project filtering
- Responsive design
- Admin dashboard for managing projects

## Tech Stack
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Vite

## Manual Deployment Guide

If the automatic export fails, follow these steps to deploy manually:

1. **Download** the project files and unzip them.
2. **Create a Repository** on GitHub named `dhiran.github.io`.
3. **Open Terminal** in the project folder and run:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/Dhiran28/dhiran.github.io.git
git push -u origin main --force
```

4. **GitHub Actions** will automatically build and deploy your site to the `gh-pages` branch.
5. Go to **Settings > Pages** in your GitHub repository and ensure the source is set to the `gh-pages` branch.

## Setup for Local Development
1. Clone or download the repository
2. Run `npm install`
3. Run `npm run dev` to start the development server
