// Content Management Component
// This component provides access to all imported content from the original website

import { 
  businessInfo, 
  services, 
  blogPosts, 
  teamMembers, 
  newPatientOffer,
  healthFunds,
  financeOptions
} from '@/data/websiteContent';
import { siteStructure, navigation } from '@/data/pageStructure';

// Content hooks for easy access throughout the app
export const useBusinessInfo = () => businessInfo;
export const useServices = () => services;
export const useBlogPosts = () => blogPosts;
export const useTeamMembers = () => teamMembers;
export const useNewPatientOffer = () => newPatientOffer;
export const useHealthFunds = () => healthFunds;
export const useFinanceOptions = () => financeOptions;
export const useSiteStructure = () => siteStructure;
export const useNavigation = () => navigation;

// Helper functions for content filtering and searching
export const getServicesByCategory = (category: string) => {
  return services.filter(service => service.category === category);
};

export const getServiceById = (id: string) => {
  return services.find(service => service.id === id);
};

export const getBlogPostById = (id: string) => {
  return blogPosts.find(post => post.id === id);
};

export const getRecentBlogPosts = (limit: number = 3) => {
  return blogPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};

export const searchContent = (query: string) => {
  const searchTerms = query.toLowerCase().split(' ');
  const results = {
    services: [] as typeof services,
    blogPosts: [] as typeof blogPosts,
    pages: [] as typeof siteStructure
  };

  // Search services
  results.services = services.filter(service =>
    searchTerms.some(term =>
      service.title.toLowerCase().includes(term) ||
      service.description.toLowerCase().includes(term) ||
      service.fullContent.toLowerCase().includes(term)
    )
  );

  // Search blog posts
  results.blogPosts = blogPosts.filter(post =>
    searchTerms.some(term =>
      post.title.toLowerCase().includes(term) ||
      post.excerpt.toLowerCase().includes(term) ||
      post.content.toLowerCase().includes(term)
    )
  );

  // Search pages
  results.pages = siteStructure.filter(page =>
    searchTerms.some(term =>
      page.title.toLowerCase().includes(term) ||
      page.description.toLowerCase().includes(term) ||
      (page.metaKeywords && page.metaKeywords.some(keyword => 
        keyword.toLowerCase().includes(term)
      ))
    )
  );

  return results;
};

// SEO and metadata helpers
export const getPageMetadata = (pageId: string) => {
  const page = siteStructure.find(p => p.id === pageId);
  if (!page) return null;

  return {
    title: page.title,
    description: page.description,
    keywords: page.metaKeywords?.join(', ') || '',
    url: `${businessInfo.website}${page.path}`,
    type: 'website',
    siteName: businessInfo.name
  };
};

// Content validation and completeness check
export const validateContentCompleteness = () => {
  const issues = [];

  // Check business info completeness
  if (!businessInfo.name) issues.push('Business name missing');
  if (!businessInfo.phone) issues.push('Phone number missing');
  if (!businessInfo.email) issues.push('Email missing');
  if (!businessInfo.address) issues.push('Address missing');

  // Check services have all required fields
  services.forEach((service, index) => {
    if (!service.title) issues.push(`Service ${index + 1}: Title missing`);
    if (!service.description) issues.push(`Service ${index + 1}: Description missing`);
    if (!service.fullContent) issues.push(`Service ${index + 1}: Full content missing`);
  });

  // Check blog posts have required fields
  blogPosts.forEach((post, index) => {
    if (!post.title) issues.push(`Blog post ${index + 1}: Title missing`);
    if (!post.content) issues.push(`Blog post ${index + 1}: Content missing`);
    if (!post.author) issues.push(`Blog post ${index + 1}: Author missing`);
  });

  // Check team members
  if (teamMembers.length === 0) {
    issues.push('No team members defined');
  }

  return {
    isComplete: issues.length === 0,
    issues,
    completeness: Math.max(0, 100 - (issues.length * 5)) // Rough completeness percentage
  };
};

// Statistics about imported content
export const getContentStats = () => {
  return {
    totalServices: services.length,
    servicesByCategory: {
      general: getServicesByCategory('general').length,
      cosmetic: getServicesByCategory('cosmetic').length,
      orthodontic: getServicesByCategory('orthodontic').length,
      surgical: getServicesByCategory('surgical').length,
      specialty: getServicesByCategory('specialty').length
    },
    totalBlogPosts: blogPosts.length,
    totalPages: siteStructure.length,
    totalTeamMembers: teamMembers.length,
    healthFundsSupported: healthFunds.length,
    completeness: validateContentCompleteness().completeness
  };
};

// Export all content for easy access
export const allContent = {
  businessInfo,
  services,
  blogPosts,
  teamMembers,
  newPatientOffer,
  healthFunds,
  financeOptions,
  siteStructure,
  navigation
};