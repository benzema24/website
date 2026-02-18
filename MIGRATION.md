# Migration Checklist: Vite → Next.js

## ✅ Completed Automatically

The following have been converted for you:

- [x] Created Next.js App Router structure
- [x] Updated `package.json` with Next.js dependencies and scripts
- [x] Created `next.config.mjs` configuration
- [x] Created `tsconfig.json` for TypeScript
- [x] Converted main App component to Next.js page (`page.tsx`)
- [x] Created root layout with metadata (`layout.tsx`)
- [x] Set up image asset mapping system (`lib/assets.ts`)
- [x] Added `.gitignore` for Next.js
- [x] Created `.eslintrc.json` configuration
- [x] Preserved all existing components (no changes needed)
- [x] Preserved all styling (Tailwind CSS v4 compatible)

## ⚠️ Manual Steps Required

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Move Image Assets ⭐ IMPORTANT

You must manually copy your Figma asset images to `/public/images/`:

1. Create the directory:
   ```bash
   mkdir -p public/images
   ```

2. Copy all images from your Figma assets folder to `public/images/`
   - See `/public/images/README.md` for the complete list of required files
   - Each file should keep its hash name (e.g., `dbddd50130405de4294ef3c1d4a6ac2a68f11ad7.png`)

### 3. Test the Application
```bash
pnpm dev
```

Visit `http://localhost:3000` and verify:
- [ ] All images load correctly
- [ ] Navigation works
- [ ] Animations function properly
- [ ] Forms are interactive
- [ ] All sections display correctly

### 4. Build for Production
```bash
pnpm build
```

Fix any TypeScript or build errors that appear.

### 5. Optional: Clean Up Old Vite Files

After confirming everything works, you can remove:
- `vite.config.ts`
- Old `/src/app/App.tsx` (now `/src/app/page.tsx`)
- Any Vite-specific configuration

## 🔍 What to Check

### Images
- [ ] All images in `/public/images/` folder
- [ ] Filenames match hash names in `/src/lib/assets.ts`
- [ ] No broken image links on the site

### Functionality
- [ ] Smooth scroll navigation works
- [ ] Modal popups open/close correctly
- [ ] Contact form functions
- [ ] Hover animations work
- [ ] Social media marquee animates

### Performance
- [ ] Page loads quickly
- [ ] Images are optimized
- [ ] No console errors
- [ ] Lighthouse score is good

## 📊 Comparison: Vite vs Next.js

| Feature | Vite | Next.js |
|---------|------|---------|
| Dev Server | `vite` | `next dev` |
| Build | `vite build` | `next build` |
| Entry Point | `src/app/App.tsx` | `src/app/page.tsx` |
| Images | `figma:asset/hash.png` | `/public/images/hash.png` |
| Routing | Client-side | File-based (App Router) |
| SSR | No | Yes (optional) |
| SEO | Limited | Built-in |

## 🚀 Next Steps After Migration

1. **Deploy to Vercel**
   ```bash
   vercel
   ```

2. **Set up Environment Variables**
   - Copy `.env.example` to `.env.local`
   - Add any API keys or secrets

3. **Optimize Images Further**
   - Consider using Next.js `<Image>` component for better optimization
   - Convert components to use `next/image` instead of `<img>`

4. **Add Analytics**
   - Vercel Analytics
   - Google Analytics
   - PostHog, etc.

5. **Consider Server Components**
   - Some components could be Server Components for better performance
   - Only interactive components need `'use client'`

## 🐛 Common Issues & Solutions

### Issue: Images Not Showing
**Solution**: Verify files are in `/public/images/` with correct hash names

### Issue: Build Fails
**Solution**: 
1. Delete `.next` folder: `rm -rf .next`
2. Clear node_modules: `rm -rf node_modules`
3. Reinstall: `pnpm install`
4. Rebuild: `pnpm build`

### Issue: TypeScript Errors
**Solution**: Check `tsconfig.json` paths and ensure all imports use `@/` alias

### Issue: Motion Animations Not Working
**Solution**: Ensure component has `'use client'` directive at the top

## 📞 Need Help?

If you encounter issues:
1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review the `/README.md` file
3. Check image paths in `/src/lib/assets.ts`

---

**Migration Status**: ✅ Framework converted, ⚠️ Images need manual migration

Last Updated: 2026-02-17
