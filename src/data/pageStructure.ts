// Page structure and navigation for the Annerley Dental website

export interface Page {
  id: string;
  title: string;
  path: string;
  description: string;
  metaKeywords?: string[];
  sections?: Section[];
}

export interface Section {
  id: string;
  type: 'hero' | 'services' | 'about' | 'testimonials' | 'contact' | 'blog' | 'gallery' | 'finance';
  title?: string;
  content?: string;
}

export const siteStructure: Page[] = [
  {
    id: "home",
    title: "Annerley Dental - Brisbane Southside Dentist",
    path: "/",
    description: "Expert dental care in Annerley, Brisbane. New patient special $145. Preferred provider for Bupa, HCF, and NIB.",
    metaKeywords: ["dentist Annerley", "Brisbane dental", "teeth cleaning", "dental implants"],
    sections: [
      { id: "hero", type: "hero" },
      { id: "new-patient-offer", type: "services" },
      { id: "services-overview", type: "services" },
      { id: "about-preview", type: "about" },
      { id: "contact-info", type: "contact" }
    ]
  },
  {
    id: "about",
    title: "About Dr Basil & Annerley Dental",
    path: "/about",
    description: "Meet Dr Basil Athanassiadis, Brisbane's trusted dentist with 35+ years experience and 10,000+ patients treated.",
    sections: [
      { id: "about-hero", type: "hero" },
      { id: "dr-basil-bio", type: "about" },
      { id: "practice-history", type: "about" },
      { id: "qualifications", type: "about" }
    ]
  },
  {
    id: "services",
    title: "Dental Services - Annerley Dental",
    path: "/services",
    description: "Comprehensive dental services including implants, clear aligners, cosmetic dentistry, and sleep apnea treatment.",
    sections: [
      { id: "services-hero", type: "hero" },
      { id: "general-dentistry", type: "services" },
      { id: "cosmetic-services", type: "services" },
      { id: "orthodontic-services", type: "services" },
      { id: "specialty-services", type: "services" }
    ]
  },
  {
    id: "dental-implants",
    title: "Dental Implants Brisbane - Annerley Dental",
    path: "/services/dental-implants",
    description: "Professional dental implant treatment in Brisbane. Permanent solution for missing teeth with natural appearance.",
    sections: [
      { id: "implants-hero", type: "hero" },
      { id: "implant-process", type: "services" },
      { id: "benefits", type: "services" },
      { id: "case-studies", type: "gallery" }
    ]
  },
  {
    id: "clear-aligners",
    title: "Clear Aligners Brisbane - Invisible Braces",
    path: "/services/clear-aligners",
    description: "Straighten your teeth with clear aligners. Invisible, removable, and comfortable alternative to traditional braces.",
    sections: [
      { id: "aligners-hero", type: "hero" },
      { id: "how-it-works", type: "services" },
      { id: "before-after", type: "gallery" },
      { id: "treatment-process", type: "services" }
    ]
  },
  {
    id: "cosmetic-dentistry",
    title: "Cosmetic Dentistry Brisbane - Veneers & Whitening",
    path: "/services/cosmetic-dentistry",
    description: "Transform your smile with cosmetic dentistry. Veneers, teeth whitening, and smile makeovers in Brisbane.",
    sections: [
      { id: "cosmetic-hero", type: "hero" },
      { id: "veneers-info", type: "services" },
      { id: "whitening-options", type: "services" },
      { id: "smile-gallery", type: "gallery" }
    ]
  },
  {
    id: "sleep-apnea",
    title: "Sleep Apnea Treatment Brisbane - Snoring Solutions",
    path: "/services/sleep-apnea",
    description: "Effective sleep apnea and snoring treatment. Oral appliances and comprehensive sleep disorder management.",
    sections: [
      { id: "sleep-hero", type: "hero" },
      { id: "sleep-disorders", type: "services" },
      { id: "treatment-options", type: "services" },
      { id: "oral-appliances", type: "services" }
    ]
  },
  {
    id: "blog",
    title: "Dental Blog - Annerley Dental",
    path: "/blog",
    description: "Expert dental advice and tips from Dr Basil. Latest insights on oral health, treatments, and dental care.",
    sections: [
      { id: "blog-hero", type: "hero" },
      { id: "recent-posts", type: "blog" },
      { id: "categories", type: "blog" }
    ]
  },
  {
    id: "finance",
    title: "Payment Options & Finance - Annerley Dental",
    path: "/finance",
    description: "Flexible payment options and dental finance. Health fund claims, payment plans, and Child Dental Benefits Scheme.",
    sections: [
      { id: "finance-hero", type: "hero" },
      { id: "health-funds", type: "finance" },
      { id: "payment-plans", type: "finance" },
      { id: "child-benefits", type: "finance" }
    ]
  },
  {
    id: "contact",
    title: "Contact Annerley Dental - Book Appointment",
    path: "/contact",
    description: "Contact Annerley Dental. Book your appointment online or call 07 3392 2378. Located at 283 Annerley Road.",
    sections: [
      { id: "contact-hero", type: "hero" },
      { id: "contact-form", type: "contact" },
      { id: "location-map", type: "contact" },
      { id: "hours-info", type: "contact" }
    ]
  }
];

export const navigation = {
  main: [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { 
      title: "Services", 
      path: "/services",
      submenu: [
        { title: "General Dentistry", path: "/services#general" },
        { title: "Dental Implants", path: "/services/dental-implants" },
        { title: "Clear Aligners", path: "/services/clear-aligners" },
        { title: "Cosmetic Dentistry", path: "/services/cosmetic-dentistry" },
        { title: "Sleep Apnea Treatment", path: "/services/sleep-apnea" }
      ]
    },
    { title: "Blog", path: "/blog" },
    { title: "Finance", path: "/finance" },
    { title: "Contact", path: "/contact" }
  ],
  footer: [
    {
      title: "Services",
      links: [
        { title: "Dental Implants", path: "/services/dental-implants" },
        { title: "Clear Aligners", path: "/services/clear-aligners" },
        { title: "Cosmetic Dentistry", path: "/services/cosmetic-dentistry" },
        { title: "Sleep Apnea Treatment", path: "/services/sleep-apnea" }
      ]
    },
    {
      title: "Information",
      links: [
        { title: "About Us", path: "/about" },
        { title: "Finance Options", path: "/finance" },
        { title: "New Patient Offer", path: "/contact" },
        { title: "Blog", path: "/blog" }
      ]
    },
    {
      title: "Contact",
      links: [
        { title: "Book Appointment", path: "/contact" },
        { title: "Call 07 3392 2378", path: "tel:0733922378" },
        { title: "Find Us", path: "/contact#location" }
      ]
    }
  ]
};