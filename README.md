# Korab Demi - Portfolio Website (Next.js)

This is a professional portfolio website for Korab Demi, a Senior Product Designer specializing in AI-powered SaaS products. The application has been converted from Vite/React to Next.js 15 with App Router.

## 🚀 Migration from Vite to Next.js

Your application has been successfully converted to Next.js! Here's what changed:

### Key Changes

1. **Framework**: Migrated from Vite to Next.js 15
2. **Routing**: Using Next.js App Router architecture
3. **Image Handling**: Images need to be moved to `/public/images` folder
4. **Build System**: Using Next.js build instead of Vite

### Required Setup Steps

#### 1. Install Dependencies

```bash
pnpm install
```

#### 2. Move Your Images

All images imported with `figma:asset` need to be manually moved to the `/public/images` folder.

**Important:** Create the `/public/images` directory and copy all your figma asset images there with their hash names:

```bash
mkdir -p public/images
# Then manually copy your images from the Figma assets to public/images/
# Example: copy image with hash 1d2949d7580fad4455141fc9c476db844ae6e24d.png to public/images/
```

The image paths are already configured in `/src/lib/assets.ts`. Just make sure your image files match the hash names in that file.

#### 3. Run the Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

#### 4. Build for Production

```bash
pnpm build
pnpm start
```

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── components/       # All React components
│   │   ├── layout.tsx        # Root layout (metadata, fonts, etc.)
│   │   └── page.tsx          # Main home page
│   ├── lib/
│   │   └── assets.ts         # Image asset mappings
│   └── styles/
│       ├── index.css         # Global styles
│       ├── fonts.css         # Font imports
│       ├── tailwind.css      # Tailwind directives
│       └── theme.css         # Theme variables
├── public/
│   └── images/               # Static images (YOU NEED TO CREATE THIS)
├── next.config.mjs           # Next.js configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies and scripts
```

## 🎨 Features

- ✅ Next.js 15 with App Router
- ✅ TypeScript support
- ✅ Tailwind CSS v4
- ✅ Motion animations (formerly Framer Motion)
- ✅ Dark mode optimized design
- ✅ Responsive layout
- ✅ SEO optimized with metadata
- ✅ Component-based architecture

## 🔧 Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Motion (Framer Motion)
- **UI Components**: Radix UI
- **Icons**: Lucide React, React Icons
- **Forms**: React Hook Form

## 📝 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🌐 Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy your Next.js app is to use [Vercel](https://vercel.com):

```bash
# Install Vercel CLI
pnpm install -g vercel

# Deploy
vercel
```

Or connect your Git repository to Vercel for automatic deployments.

### Other Platforms

This Next.js app can be deployed to:
- Netlify
- AWS Amplify
- Railway
- Render
- Any Node.js hosting platform

## ⚠️ Important Notes

### Image Assets

The biggest difference from your Vite setup is how images are handled:

**Before (Vite):**
```tsx
import image from 'figma:asset/hash.png';
```

**After (Next.js):**
```tsx
import { assets } from '@/lib/assets';
// Use: assets.imageName or src="/images/hash.png"
```

Make sure all your Figma asset images are copied to `/public/images/` with their exact hash filenames.

### Client Components

All components using hooks (`useState`, `useEffect`, etc.) or browser APIs are marked with `'use client'` directive. The main page (`page.tsx`) is a client component.

### Import Paths

All imports use the `@/` alias which maps to the `src/` directory:
```tsx
import { Component } from '@/app/components/Component';
```

## 🐛 Troubleshooting

### Images Not Loading

1. Make sure you created the `/public/images` folder
2. Verify all image files are in `/public/images/` with correct hash names
3. Check that filenames in `/src/lib/assets.ts` match your actual files

### Build Errors

1. Run `pnpm install` to ensure all dependencies are installed
2. Delete `.next` folder and rebuild: `rm -rf .next && pnpm build`
3. Check TypeScript errors with `pnpm lint`

## 📧 Contact

For questions about the portfolio or design services:

- **Email**: [Contact through website]
- **LinkedIn**: [https://www.linkedin.com/in/korabdemi](https://www.linkedin.com/in/korabdemi)

---

Built with ❤️ using Next.js and Tailwind CSS
