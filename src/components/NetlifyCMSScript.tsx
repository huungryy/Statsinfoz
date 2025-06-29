import { useEffect } from 'react';

const NetlifyCMSScript = () => {
  useEffect(() => {
    // Add Netlify Identity widget script
    const script = document.createElement('script');
    script.src = 'https://identity.netlify.com/v1/netlify-identity-widget.js';
    script.async = true;
    document.head.appendChild(script);

    // Handle Netlify Identity events
    script.onload = () => {
      if (window.netlifyIdentity) {
        window.netlifyIdentity.on('init', (user: any) => {
          if (!user) {
            window.netlifyIdentity.on('login', () => {
              document.location.href = '/admin/';
            });
          }
        });
      }
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default NetlifyCMSScript;