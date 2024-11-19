// generateSitemap.js
import { SitemapStream, streamToPromise } from 'sitemap';
import { writeFileSync } from 'fs';

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
//   { url: '/rentals/bike-mumbai', changefreq: 'weekly', priority: 0.8 },
];

const sitemap = new SitemapStream({ hostname: 'https://rideroz.com' });

streamToPromise(sitemap).then((data) => {
  writeFileSync('./public/sitemap.xml', data.toString());
});
links.forEach((link) => sitemap.write(link));
sitemap.end();
