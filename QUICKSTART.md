# Quick Start Guide

Get your Next.js portfolio running in 3 simple steps!

## Prerequisites

- Node.js 18+ installed
- pnpm package manager (or npm/yarn)

## Step 1: Install Dependencies

```bash
pnpm install
```

## Step 2: Add Your Images

Create the images directory and add your assets:

```bash
mkdir -p public/images
```

Then copy all your Figma asset images to `public/images/`. See `/public/images/README.md` for the complete list of required files.

**Required Images Example:**
```
public/images/
  ├── dbddd50130405de4294ef3c1d4a6ac2a68f11ad7.png  # Profile photo
  ├── 96628f103f960d3d689279cf667cdb8dea4c8e5b.png  # WorkBlox
  ├── ac4478184845fca9b22f049880a61a6dbcb999fc.png  # Adrius Group
  └── ... (see full list in /public/images/README.md)
```

## Step 3: Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

## Next Steps

### Build for Production

```bash
pnpm build
pnpm start
```

### Deploy to Vercel

```bash
# Install Vercel CLI
pnpm install -g vercel

# Deploy
vercel
```

## Project Structure

```
your-portfolio/
├── src/
│   ├── app/
│   │   ├── components/      # All React components
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page (main portfolio)
│   ├── lib/
│   │   └── assets.ts        # Image mappings
│   └── styles/              # CSS files
├── public/
│   └── images/              # Your images go here!
└── next.config.mjs          # Next.js config
```

## Common Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run linter |

## Troubleshooting

**Images not loading?**
→ Check that files are in `/public/images/` with correct names

**Build errors?**
→ Delete `.next` folder and run `pnpm build` again

**Port 3000 in use?**
→ Run `pnpm dev -p 3001` to use port 3001

---

Need more details? Check `/README.md` or `/MIGRATION.md`
