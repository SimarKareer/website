## Simar Kareer Personal Site (V2)

Minimal Next.js personal site with a single responsive homepage section.

### Stack

- Next.js (App Router)
- TypeScript
- Global CSS with CSS variables (no Tailwind)
- `next/font` for mono font loading (`IBM Plex Mono`)

### Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

### Project Structure

- `src/app/layout.tsx`: app shell, metadata, mono font config
- `src/app/page.tsx`: homepage intro, research blurb, social links, profile image
- `src/app/globals.css`: global tokens and responsive styling
- `public/pfp2025.png`: profile photo

### Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

### Deploy to Vercel

1. Push this directory to a Git repository.
2. Import the repository in Vercel.
3. Keep framework preset as `Next.js`.
4. Deploy and verify the default Vercel URL.

### Domain Setup (`simarkareer.com` on Namecheap)

1. In Vercel, add both domains:
- `simarkareer.com`
- `www.simarkareer.com`

2. In Namecheap DNS, set records to the values Vercel provides.
- Usually:
- `A` record for `@` pointing to `76.76.21.21`
- `CNAME` for `www` pointing to `cname.vercel-dns.com`

3. Wait for DNS propagation, then confirm both domains are marked `Valid` in Vercel.
4. Remove/replace old Gatsby Cloud DNS targets once Vercel is serving production traffic.

### Content Defaults

- Scholar: `https://scholar.google.com/citations?user=ItdEfc8AAAAJ&hl=en`
- Twitter: `https://twitter.com/simar_kareer`
- GitHub: `https://www.github.com/simarkareer`
- CV: `https://drive.google.com/file/d/18xzet6fQblILHRMPv7K0kk4jaBxfQA9J/view?usp=share_link`
- Email display: `skareer[at]gatech[dot]edu`
