# Statsinfoz - Professional Betting Analytics Platform

A modern, responsive betting analytics website built with React, TypeScript, and Tailwind CSS.

## Features

- 🏆 Professional betting tips and analysis
- 📊 Interactive charts and statistics
- 📝 Blog management system with admin panel
- 💳 PayPal integration for VIP memberships
- 📱 Fully responsive design
- ⚡ Fast performance with Vite
- 🎨 Beautiful animations with Framer Motion

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **CMS**: Netlify CMS (optional)
- **Deployment**: Netlify

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/statsinfoz.git
cd statsinfoz
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── utils/              # Utility functions
├── App.tsx             # Main app component
└── main.tsx           # Entry point

public/
├── admin/              # Netlify CMS configuration
└── images/             # Static images
```

## Admin Panel

The project includes a built-in admin panel for managing blog posts:

- Access: `/admin`
- Password: `statsinfoz2024` (change in production)
- Features: Create, edit, delete blog posts

## Deployment

### Netlify (Recommended)

1. Build the project:
```bash
npm run build
```

2. Deploy to Netlify:
- Connect your GitHub repository to Netlify
- Set build command: `npm run build`
- Set publish directory: `dist`

### Custom Domain Setup

1. In Netlify dashboard, go to Domain settings
2. Add your custom domain
3. Configure DNS records with your domain provider:
   - Add CNAME record pointing to your Netlify subdomain
   - Or use Netlify DNS for easier management

## Environment Variables

Create a `.env` file for local development:

```env
VITE_PAYPAL_CLIENT_ID=your_paypal_client_id
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email support@statsinfoz.com or join our Telegram channel.