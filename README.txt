FlipZo — Website Files
=======================

Files in this folder:
- index.html   -> main website page
- style.css    -> all styling (colors, layout, fonts)
- script.js    -> all functionality (shop, cart, WhatsApp orders, try-at-home, banner)
- README.txt   -> this file

HOW TO GO LIVE
--------------
These 3 files (index.html, style.css, script.js) are all you need. Keep them
together in the same folder — index.html links to the other two by filename.

Easiest free options:
1. Netlify Drop (https://app.netlify.com/drop) — drag this folder in, get a live link instantly.
2. GitHub Pages — upload these files to a GitHub repo, enable Pages in repo settings.
3. Any regular web hosting (Hostinger, GoDaddy, etc.) — upload these files to the
   public_html (or www) folder via File Manager or FTP. Make sure the file is
   named exactly "index.html" so it loads as the homepage.

IMPORTANT NOTES
---------------
- WhatsApp number used for orders: +91 8128177882 (set in script.js as WHATSAPP_NUMBER).
- Product data (name, price, image links) lives at the top of script.js inside
  the "products" array — edit that directly to change products, prices, or images.
- Product photos are loaded from Unsplash URLs. As long as the site has internet
  access, these will load normally on any host.
- There is no backend/database — all data resets when the page is reloaded.
  Orders are sent as pre-filled WhatsApp messages, not stored anywhere.

Developed by Mr. Iftekhar | Wadala
