# Çerkezköy Isı Teknik - Kombi Servisi Website

Professional boiler cleaning service website built with Next.js and Tailwind CSS, optimized for SEO and Google Ads.

## 🚀 Features

- **SEO Optimized** - Perfect for Google Ads campaigns
- **Mobile Responsive** - Works on all devices
- **Fast Loading** - Optimized performance
- **Professional Design** - Red-themed modern UI
- **Turkish Content** - Localized for Turkish market
- **Contact Integration** - Phone and WhatsApp links
- **Service Sections** - Clear service descriptions
- **Structured Data** - Schema.org markup for better SEO

## 🛠️ Technologies

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Heroicons** - Beautiful icons
- **Static Export** - Ready for hosting on any server

## 📞 Business Information

- **Company**: Çerkezköy Isı Teknik
- **Services**: Kombi Servisi, Kazan Temizliği, Kalorifer Tamiri
- **Location**: Çerkezköy, Tekirdağ
- **Hours**: 7/24 Emergency Service

## 🏗️ Installation

1. **Clone or download** the project
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run development server**:
   ```bash
   npm run dev
   ```
4. **Open** [http://localhost:3000](http://localhost:3000)

## 📱 Update Contact Information

Before deployment, update the phone numbers in `src/app/page.tsx`:

```typescript
const phoneNumber = "+90 XXX XXX XX XX";  // Replace with real number
const whatsappNumber = "+90XXXXXXXXXX";   // Replace with WhatsApp number
```

## 🌐 Deployment

### For Static Hosting (Recommended)

1. **Build the static site**:
   ```bash
   npm run build
   ```

2. **Upload the `out` folder** to your hosting provider:
   - Upload contents of `out/` folder to your domain root
   - Compatible with: Apache, Nginx, shared hosting

### For Netlify/Vercel

1. **Connect your repository**
2. **Build command**: `npm run build`
3. **Publish directory**: `out`

## 🎯 SEO Optimization

### Already Included:
- ✅ Meta tags for Google Ads
- ✅ Structured data (Schema.org)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Open Graph tags
- ✅ Turkish language optimization
- ✅ Local business markup

### Google Search Console Setup:
1. Verify your domain in Google Search Console
2. Submit sitemap: `https://yoursite.com/sitemap.xml`
3. Update verification codes in `src/app/layout.tsx`

## 📊 Google Ads Integration

The website is optimized for these keywords:
- çerkezköy kombi servisi
- kazan temizliği
- kombi tamiri
- ısıtma sistemleri
- acil kombi servisi

### Recommended Ad Extensions:
- **Call Extensions**: Show phone number
- **Location Extensions**: Show business location
- **Sitelink Extensions**: Link to services

## 🎨 Customization

### Colors
Update the color scheme in `src/app/globals.css`:
```css
:root {
  --primary-red: #dc2626;     /* Main red color */
  --primary-red-dark: #b91c1c; /* Darker red */
  --primary-red-light: #ef4444; /* Lighter red */
}
```

### Content
- Update business information in `src/app/page.tsx`
- Modify services in the `services` array
- Update contact details and hours

## 📈 Performance Features

- Static site generation for fast loading
- Optimized images and fonts
- Minified CSS and JavaScript
- Gzip compression enabled
- Mobile-first responsive design

## 🔧 Maintenance

### Regular Updates:
1. Update contact information as needed
2. Add new services to the services array
3. Update business hours and location
4. Refresh testimonials or reviews

### SEO Monitoring:
- Monitor Google Search Console
- Track keyword rankings
- Update meta descriptions seasonally
- Check for broken links

## 📞 Support

For technical support or customization requests, contact the development team.

## 📄 License

This project is created for Çerkezköy Isı Teknik business use.

---

**Ready to dominate Çerkezköy's heating services market!** 🔥
