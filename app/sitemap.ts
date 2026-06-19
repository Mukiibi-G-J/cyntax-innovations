import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.cyntaxinnovations.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://www.cyntaxinnovations.com/#services',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://www.cyntaxinnovations.com/#products',
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: 'https://www.cyntaxinnovations.com/#team',
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: 'https://www.cyntaxinnovations.com/#contact',
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
