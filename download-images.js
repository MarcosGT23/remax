import fs from 'fs';
import path from 'path';
import https from 'https';

const images = [
  'avatar-01_1avatar-01.png',
  'avatar-02_1avatar-02.png',
  'avatar-03_1avatar-03.png',
  'Star-Icon.svg',
  'hero-image-5.webp',
  'Logo-2.svg',
  'Logo-1.svg',
  'Logo-4.svg',
  'Logo.svg',
  'Logo-3.svg',
  '6a5717b9f45479999f4faae8_Service-Icon-3.svg',
  '6a5717b9f45479999f4faae9_Service-Icon-2.svg',
  '6992e40e90cf6ffecbb28d2c_service-card-two-image-1.jpg',
  '6992e4162373a597380cd73c_service-card-two-image-2.jpg',
  '6a5717b9f45479999f4faaea_Service-Icon-5.svg',
  '6a5717b9f45479999f4faaeb_Service-Icon-4.svg',
  '6a5717b9f45479999f4faae5_service-card-three-image-1.jpg',
  '6a5717b9f45479999f4faae4_service-card-three-image-2.jpg',
  '6a5717b9f45479999f4faae6_Service-Icon-1.svg',
  '6a5717b9f45479999f4faae7_Service-Icon-8.svg',
  '6a5717b9f45479999f4faad4_service-card-one-image-1.jpg',
  '6a5717b9f45479999f4faaf0_Container.png',
  '6a5717b9f45479999f4faaec_Service-Icon-7.svg',
  '6a5717b9f45479999f4faaed_Service-Icon-6.svg',
  '6a5717b9f45479999f4faad5_service-card-one-image-2.jpg',
  'about-image-1.jpg',
  'experts-image-4.jpg',
  'experts-image-1.jpg',
  'experts-image-3.jpg',
  'experts-image-2.jpg',
  'process-card-image.jpg',
  'Icon.svg',
  'Icon-1.svg',
  'Icon-2.svg',
  'Icon-3.svg',
  'Icon-4.svg',
  'why-choose-image.jpg',
  'Icon_1.svg',
  'Icon-1_1.svg',
  'Icon-2_1.svg',
  'Icon-3_1.svg',
  '6a5717b9f45479999f4faad2_our-work-thumbnail-1.jpg',
  '6a5717b9f45479999f4faad0_our-work-thumbnail-2.jpg',
  '6a5717b9f45479999f4faa06_our-work-thumbnail-5.jpg',
  '6a5717b9f45479999f4faa89_our-work-thumbnail-4.jpg',
  '6a5717b9f45479999f4faac2_our-work-thumbnail-3.jpg',
  'testimonial-rating-icon.svg',
  'testimonial-rating-icon-2.svg',
  'testimonial-icon.svg',
  'testimonial-avatar-1_1testimonial-avatar-1.jpg',
  'testimonial-star-icon.svg',
  'testimonial-star-icon-2.svg',
  'ImageWithFallback-1.svg',
  'ImageWithFallback-2.svg',
  'ImageWithFallback.svg',
  'Call-Icon.svg',
  'Mail-Icon.svg',
  'watch-Icon.svg',
  'Location-Icon.svg'
];

const destDir = path.resolve('public/images');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

function download(img) {
  return new Promise((resolve) => {
    const url = `https://roofpro-theme.vercel.app/images/${img}`;
    const filePath = path.join(destDir, img);
    const file = fs.createWriteStream(filePath);
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else {
        resolve();
      }
    }).on('error', () => {
      resolve();
    });
  });
}

async function run() {
  for (const img of images) {
    await download(img);
  }
  console.log('All image downloads completed successfully!');
}

run();
