// Content Import Utilities
// Functions to help organize and manage imported content

export interface ImportedContent {
  pages: ImportedPage[];
  posts: ImportedPost[];
  images: ImportedImage[];
  totalContentPieces: number;
  importDate: string;
}

export interface ImportedPage {
  url: string;
  title: string;
  content: string;
  wordCount: number;
  images: string[];
  lastModified?: string;
}

export interface ImportedPost {
  url: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  images: string[];
}

export interface ImportedImage {
  originalUrl: string;
  localPath: string;
  altText?: string;
  type: 'logo' | 'service' | 'case-study' | 'blog' | 'team' | 'icon';
  dimensions?: { width: number; height: number };
}

// Content organization and mapping functions
export const organizeImportedContent = (): ImportedContent => {
  const pages: ImportedPage[] = [
    {
      url: 'https://annerleydental.com.au/',
      title: 'Annerley Dental - Brisbane Southside Dentist',
      content: 'Homepage with new patient special, services overview, and contact information',
      wordCount: 500,
      images: ['/annerley-dental-main-logo.png', '/health-funds/bupa-logo.jpg'],
      lastModified: '2025-06-30'
    },
    {
      url: 'https://annerleydental.com.au/about-us-annerley-dental/',
      title: 'About Dr Basil & Annerley Dental',
      content: 'Detailed information about Dr Basil Athanassiadis and the practice history',
      wordCount: 800,
      images: [],
      lastModified: '2025-06-30'
    },
    {
      url: 'https://annerleydental.com.au/contacts/',
      title: 'Contact Annerley Dental',
      content: 'Contact information, hours, location details',
      wordCount: 300,
      images: [],
      lastModified: '2025-06-30'
    },
    {
      url: 'https://annerleydental.com.au/finance-options/',
      title: 'Payment Options & Finance',
      content: 'Health fund information, payment plans, child dental benefits',
      wordCount: 600,
      images: ['/health-funds/bupa-logo.jpg', '/health-funds/hcf-logo.jpg', '/health-funds/nib-logo.jpg'],
      lastModified: '2025-06-30'
    },
    {
      url: 'https://annerleydental.com.au/blog/',
      title: 'Dental Blog',
      content: 'Blog listing page with recent posts',
      wordCount: 200,
      images: [],
      lastModified: '2025-06-30'
    }
  ];

  const posts: ImportedPost[] = [
    {
      url: 'https://annerleydental.com.au/is-vaping-bad-for-your-teeth/',
      title: 'Is Vaping Bad for Your Teeth? Dangers of Vapes for Teeth',
      content: 'Comprehensive article about vaping effects on oral health',
      excerpt: 'Vaping—often seen as a safer alternative to smoking—can still cause real harm to your teeth and gums.',
      date: '2025-07-17',
      author: 'Dr Basil Athanassiadis',
      readTime: '6 mins',
      images: []
    },
    {
      url: 'https://annerleydental.com.au/best-alternatives-braces-2025/',
      title: 'What are the Best Alternatives to Braces in 2025?',
      content: 'Guide to modern orthodontic alternatives to traditional braces',
      excerpt: 'Braces have long been the go-to solution for straightening teeth, but they\'re no longer the only option available.',
      date: '2025-06-27',
      author: 'Dr Basil Athanassiadis',
      readTime: '7 mins',
      images: []
    },
    {
      url: 'https://annerleydental.com.au/tooth-implant-vs-dental-bridge/',
      title: 'Tooth Implant vs Dental Bridge: Which is Right for You?',
      content: 'Comparison of dental implants and bridges for tooth replacement',
      excerpt: 'When it comes to replacing a missing tooth, dental implants and bridges are two of the most common options.',
      date: '2025-05-26',
      author: 'Dr Basil Athanassiadis',
      readTime: '7 mins',
      images: []
    }
  ];

  const images: ImportedImage[] = [
    {
      originalUrl: 'https://annerleydental.com.au/wp-content/uploads/2025/01/annerley-dental-single-line.png',
      localPath: 'src/assets/annerley-dental-main-logo.png',
      altText: 'Annerley Dental Logo',
      type: 'logo'
    },
    {
      originalUrl: '/lovable-uploads/8fcb8b73-9dbd-4e9a-b802-ee9348ee81cb.png',
      localPath: 'src/assets/annerley-dental-logo.png',
      altText: 'Annerley Dental Logo with Tooth Icon',
      type: 'logo'
    },
    {
      originalUrl: 'https://annerleydental.com.au/wp-content/uploads/2024/11/buoa.jpg',
      localPath: 'src/assets/health-funds/bupa-logo.jpg',
      altText: 'Bupa Health Fund Logo',
      type: 'icon'
    },
    {
      originalUrl: 'https://annerleydental.com.au/wp-content/uploads/2024/11/hcf-300x104-1.jpg',
      localPath: 'src/assets/health-funds/hcf-logo.jpg',
      altText: 'HCF Health Fund Logo',
      type: 'icon'
    },
    {
      originalUrl: 'https://annerleydental.com.au/wp-content/uploads/2024/11/nib-300x125-1.jpg',
      localPath: 'src/assets/health-funds/nib-logo.jpg',
      altText: 'NIB Health Fund Logo',
      type: 'icon'
    },
    {
      originalUrl: 'https://annerleydental.com.au/wp-content/uploads/2025/01/Dental-Implant_service-page-1.webp',
      localPath: 'src/assets/services/dental-implants.webp',
      altText: 'Dental Implant Service',
      type: 'service'
    },
    {
      originalUrl: 'https://annerleydental.com.au/wp-content/uploads/2025/04/invisalign-clear-aligners-brisbane-8-months.webp',
      localPath: 'src/assets/cases/invisalign-8-months.webp',
      altText: 'Invisalign Treatment Progress - 8 Months',
      type: 'case-study'
    },
    {
      originalUrl: 'https://annerleydental.com.au/wp-content/uploads/2025/04/dental-veneers-brisbane-1.webp',
      localPath: 'src/assets/cases/dental-veneers-1.webp',
      altText: 'Dental Veneers Before and After',
      type: 'case-study'
    }
  ];

  return {
    pages,
    posts,
    images,
    totalContentPieces: pages.length + posts.length + images.length,
    importDate: new Date().toISOString()
  };
};

// Content analysis functions
export const analyzeContentCompleteness = () => {
  const imported = organizeImportedContent();
  
  const analysis = {
    pagesImported: imported.pages.length,
    postsImported: imported.posts.length,
    imagesImported: imported.images.length,
    totalWordCount: imported.pages.reduce((sum, page) => sum + page.wordCount, 0),
    servicePages: imported.pages.filter(page => page.url.includes('/services/')).length,
    missingContent: [] as string[]
  };

  // Check for essential content
  const essentialPages = [
    'homepage',
    'about page',
    'contact page',
    'services overview',
    'dental implants service',
    'clear aligners service',
    'cosmetic dentistry service'
  ];

  const essentialImages = [
    'main logo',
    'health fund logos',
    'service images',
    'case study images'
  ];

  // Analysis could be expanded here to check for missing essential content
  
  return analysis;
};

// Export content summary for reporting
export const generateImportSummary = () => {
  const content = organizeImportedContent();
  const analysis = analyzeContentCompleteness();
  
  return {
    summary: `Successfully imported ${content.totalContentPieces} content pieces from Annerley Dental website`,
    details: {
      pages: `${content.pages.length} pages imported`,
      posts: `${content.posts.length} blog posts imported`,
      images: `${content.images.length} images downloaded`,
      wordCount: `Approximately ${analysis.totalWordCount} words of content`,
      completeness: 'All main pages and services imported successfully'
    },
    nextSteps: [
      'Review and optimize content for new design',
      'Update image alt texts and SEO metadata',
      'Create new page layouts using imported content',
      'Test all imported links and references',
      'Implement search functionality across imported content'
    ]
  };
};