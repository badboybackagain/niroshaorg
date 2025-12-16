# Team Nirosha - Digital Agency Website

A modern, conversion-focused website for Team Nirosha (Nirosha Enterprises).

## Features

- Modern, responsive design
- Fast performance with Vite
- SEO-optimized structure
- Mobile-first approach
- Clean, professional UI

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

### Option 1: Static Hosting (Recommended)

1. Build the project: `npm run build`
2. Upload the `dist` folder contents to your web server
3. Configure your server to serve `index.html` for all routes (for React Router if added later)

### Option 2: Using a Node.js Server

You can serve the `dist` folder using Express or any static file server.

### Server Configuration

For Apache, add to `.htaccess`:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

For Nginx:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## Customization

- Update contact information in `src/components/CTA.jsx`
- Replace placeholder testimonials in `src/components/Testimonials.jsx`
- Modify colors in `src/index.css` (CSS variables)
- Add your logo/image assets to `src/assets/`

## Technologies

- React 18
- Vite
- React Icons

