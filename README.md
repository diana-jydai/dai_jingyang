# Personal Academic Website

This is a personal academic website template based on Vite + React + TypeScript for GitHub Pages.

## Features Included

- Homepage hero section
- Research introduction
- Representative publications
- Research projects
- CV and experience
- Contact information
- GitHub Pages auto-deployment workflow

## Local Development

1. Install Node.js LTS
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Build for production: `npm run build`

## GitHub Pages Deployment

1. Push your code to the `main` branch of your GitHub repository.
2. In repository settings, enable **Pages** and set Source to **GitHub Actions**.
3. After pushing, the workflow [.github/workflows/deploy.yml](.github/workflows/deploy.yml) will run automatically.

`vite.config.ts` will automatically set the `base` path according to `GITHUB_REPOSITORY`, suitable for repository-named Pages URLs.

## What You Need to Customize

- Update your name, affiliation, research interests, publications, projects, and contact info in [src/App.tsx](src/App.tsx)
- For CV download, place your PDF in `public/` and update the link
- For a profile photo, add your image to `src/` or `public/` and replace the default avatar
