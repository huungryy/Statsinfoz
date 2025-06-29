# Deployment Guide

## Step 1: Upload to GitHub

### Option A: Using GitHub Desktop (Recommended for beginners)

1. **Download GitHub Desktop**: https://desktop.github.com/
2. **Install and sign in** to your GitHub account
3. **Create a new repository**:
   - Click "Create a New Repository on your hard drive"
   - Name: `statsinfoz`
   - Description: `Professional Betting Analytics Platform`
   - Make it Public
   - Initialize with README: ✓
4. **Add your files**:
   - Copy all project files to the repository folder
   - GitHub Desktop will automatically detect changes
   - Add a commit message: "Initial commit - Statsinfoz website"
   - Click "Commit to main"
5. **Publish to GitHub**:
   - Click "Publish repository"
   - Uncheck "Keep this code private" if you want it public
   - Click "Publish Repository"

### Option B: Using Command Line

1. **Create a new repository on GitHub.com**:
   - Go to https://github.com/new
   - Repository name: `statsinfoz`
   - Description: `Professional Betting Analytics Platform`
   - Public/Private: Choose as needed
   - Don't initialize with README (we already have one)

2. **Initialize and push your code**:
```bash
# Navigate to your project folder
cd /path/to/your/statsinfoz-project

# Initialize git repository
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial commit - Statsinfoz website"

# Add GitHub repository as origin
git remote add origin https://github.com/YOURUSERNAME/statsinfoz.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Netlify

### Method 1: Connect GitHub Repository (Recommended)

1. **Sign up/Login to Netlify**: https://netlify.com
2. **New site from Git**:
   - Click "New site from Git"
   - Choose "GitHub"
   - Authorize Netlify to access your GitHub
   - Select your `statsinfoz` repository
3. **Configure build settings**:
   - Branch to deploy: `main`
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

### Method 2: Manual Deploy

1. **Build your project locally**:
```bash
npm run build
```

2. **Deploy to Netlify**:
   - Go to https://netlify.com
   - Drag and drop the `dist` folder to the deploy area
   - Your site will be live immediately

## Step 3: Connect Custom Domain

### If you already own a domain:

1. **In Netlify Dashboard**:
   - Go to your site settings
   - Click "Domain management"
   - Click "Add custom domain"
   - Enter your domain (e.g., `statsinfoz.com`)

2. **Configure DNS with your domain provider**:

   **Option A: Use Netlify DNS (Recommended)**
   - In Netlify, go to "Domain management" → "Netlify DNS"
   - Copy the 4 nameservers provided
   - Go to your domain registrar (GoDaddy, Namecheap, etc.)
   - Replace the nameservers with Netlify's nameservers
   - Wait 24-48 hours for propagation

   **Option B: Keep your current DNS**
   - Add these DNS records at your domain provider:
   ```
   Type: CNAME
   Name: www
   Value: your-site-name.netlify.app

   Type: A
   Name: @
   Value: 75.2.60.5
   ```

### If you need to buy a domain:

**Recommended Domain Registrars:**
- **Namecheap**: https://namecheap.com (affordable, good support)
- **Google Domains**: https://domains.google.com (easy integration)
- **Cloudflare**: https://cloudflare.com (includes free CDN)

**Suggested Domain Names:**
- `statsinfoz.com`
- `statsinfoz.net`
- `statsinfoz.io`
- `bettingstatsinfoz.com`
- `statsinfozpro.com`

## Step 4: Enable HTTPS and Additional Features

1. **HTTPS**: Netlify automatically provides free SSL certificates
2. **Form Handling**: Already configured in `netlify.toml`
3. **Redirects**: Configured for admin panel access

## Step 5: Set Up Netlify CMS (Optional)

1. **Enable Netlify Identity**:
   - In Netlify dashboard, go to "Identity"
   - Click "Enable Identity"
   - Go to "Settings and usage"
   - Enable "Open registration" temporarily
   - Set "External providers" if needed (Google, GitHub)

2. **Enable Git Gateway**:
   - In Identity settings, click "Services"
   - Enable "Git Gateway"

3. **Create admin user**:
   - Visit your site's `/admin/` page
   - Sign up for an account
   - Disable "Open registration" after creating your account

## Step 6: Environment Variables (if needed)

If you're using PayPal or other services requiring API keys:

1. **In Netlify Dashboard**:
   - Go to "Site settings" → "Environment variables"
   - Add your variables:
   ```
   VITE_PAYPAL_CLIENT_ID=your_paypal_client_id
   ```

## Troubleshooting

### Common Issues:

1. **Build fails**: Check that all dependencies are in `package.json`
2. **404 on refresh**: Already handled by `netlify.toml` redirects
3. **Domain not working**: Wait 24-48 hours for DNS propagation
4. **Admin panel not accessible**: Check that `netlify.toml` is in root directory

### Getting Help:

- **Netlify Support**: https://netlify.com/support/
- **GitHub Issues**: Create an issue in your repository
- **Community**: Netlify Community Forum

## Post-Deployment Checklist

- [ ] Site loads correctly at Netlify URL
- [ ] Custom domain is connected and working
- [ ] HTTPS is enabled (green lock icon)
- [ ] Admin panel is accessible at `/admin`
- [ ] PayPal buttons are working
- [ ] All pages and links work correctly
- [ ] Mobile responsiveness is good
- [ ] Site speed is acceptable (test with PageSpeed Insights)

## Maintenance

### Regular Updates:
1. Update dependencies: `npm update`
2. Test locally: `npm run dev`
3. Commit changes: `git add . && git commit -m "Update dependencies"`
4. Push to GitHub: `git push`
5. Netlify will automatically rebuild and deploy

### Content Updates:
- Use the admin panel at `/admin` for blog posts
- Or edit files directly in GitHub and push changes

Your Statsinfoz website is now live and ready for users! 🚀