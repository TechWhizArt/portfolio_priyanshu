# 3D Portfolio Website

A personal 3D portfolio website built with **React Three Fiber, Three.js, TypeScript, and Vite**.  
The project combines a scroll-driven 3D scene with interactive portfolio content, project detail pages, animations, and custom visual experiences.

> **Credits & Attribution**
>
> This project is based on the open-source 3D resume project created by **Sen Zheng (SEN / SenBuzy)**.
>
> Original project: [Sen · 3D Resume](https://github.com/dayinji/sen-3d-resume)
>
> I used the original project as a foundation and **edited, redesigned, and modified it in my own style** to create my personal portfolio. The visual presentation, personal content, portfolio projects, media, and other custom modifications in this version were adapted specifically for my work.

## ✨ About the Project

This website is designed as an interactive 3D portfolio rather than a traditional static resume.

The main experience combines:

- Scroll-driven 3D camera movement
- A custom 3D character/environment
- Interactive portfolio sections
- Project gallery and project detail pages
- Markdown-based project content
- Custom images, videos, models, and textures
- Visual effects such as depth of field, bloom, and film-noise styling
- Responsive HTML content layered over the 3D scene
- GitHub Pages deployment

The goal is to present my projects and creative work through an immersive visual experience while keeping the portfolio content easy to update.

## 🛠️ Tech Stack

- React 18
- TypeScript
- React Three Fiber
- Three.js
- @react-three/drei
- @react-three/postprocessing
- Framer Motion
- Zustand
- Vite
- Markdown

## 📁 Project Structure

```text
portfolio/
│
├── web/
│   ├── src/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   ├── store.ts
│   │   │
│   │   ├── data/
│   │   │   ├── works.ts
│   │   │   ├── workDocs.ts
│   │   │   └── focusPoints.ts
│   │   │
│   │   ├── content/
│   │   │   └── works/
│   │   │       └── *.md
│   │   │
│   │   ├── scene/
│   │   │   ├── Scene.tsx
│   │   │   └── Env.tsx
│   │   │
│   │   └── ui/
│   │       ├── Resume.tsx
│   │       ├── Works.tsx
│   │       ├── LoadingScreen.tsx
│   │       └── ...
│   │
│   ├── public/
│   │   ├── models/
│   │   ├── images/
│   │   ├── textures/
│   │   ├── fonts/
│   │   └── works/
│   │
│   └── package.json
│
├── blender/
│   └── 3D source files
│
├── docs/
│   └── preview images
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── LICENSE
└── README.md