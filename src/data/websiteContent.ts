// Comprehensive content imported from Annerley Dental website
// This file contains all the content, images, and structure from the original site

export interface BusinessInfo {
  name: string;
  tagline: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  socialMedia: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  bookingUrl: string;
  hours: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  fullContent: string;
  features?: string[];
  images?: string[];
  category: 'general' | 'cosmetic' | 'orthodontic' | 'surgical' | 'specialty';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
  images?: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  image?: string;
  qualifications?: string[];
  experience?: string;
}

export const businessInfo: BusinessInfo = {
  name: "Annerley Dental",
  tagline: "Your trusted dentist in Annerley, Brisbane Southside",
  address: "283 Annerley Road, Annerley, QLD. 4103",
  phone: "07 3392 2378",
  email: "info@annerleydental.com.au",
  website: "https://annerleydental.com.au",
  socialMedia: {
    facebook: "https://www.facebook.com/AnnerleyDental",
    instagram: "https://www.instagram.com/annerleydental/",
    twitter: "https://twitter.com/DrBasils_Clinic"
  },
  bookingUrl: "https://www.centaurportal.com/d4w/org-739/extended_search?sourceRef=https:%2F%2Fannerleydental.com.au%2F&location=433&randomNumber=cfde245bcc2a42197dace15e84b8092a213e165fc9ff93732adc1b2dbe507c91&shortVer=false&sourceID=null",
  hours: "Mon & Thu: 8:30am – 5:30pm\nTue & Wed: 9:00am - 5:00pm\nFriday: 7:30am-3:00pm"
};

export const newPatientOffer = {
  title: "New Patient Special For Adults",
  price: "$145",
  includes: "Check-Up, Scale/Clean/Polish, Fluoride & Two X-Rays (If Required)",
  note: "This Includes An Orthodontic And Breathing Assessment.",
  terms: [
    "This promotional special must be mentioned at the time of booking to receive the discount.",
    "If the promotional fee of $145 is not covered completely by your health fund you will be required to pay the difference. If you're not in a health fund then the cost is $145.",
    "If you have not seen a Dentist in over 12 months for a checkup & clean, then this offer is subject to the Dentist clinical opinion, as you may have significant scale that requires the Dentist to take more time incurring an additional fee."
  ]
};

export const healthFunds = [
  { name: "Bupa", logo: "/images/bupa-logo.png" },
  { name: "HCF", logo: "/images/hcf-logo.png" },
  { name: "NIB", logo: "/images/nib-logo.png" }
];

export const services: Service[] = [
  {
    id: "dental-implants",
    title: "Dental Implants",
    category: "surgical",
    description: "Dental Implants are used to replace missing teeth and offer an alternative to removable devices like partial dentures and bridges.",
    fullContent: `A dental implant is an artificial tooth root. It is a titanium anchor that is placed into the jaw bone and your bone grows onto the implant in a process called osseointegration which generally takes 3-6 months. Once integrated the implant forms a permanent platform upon which the dentist can place your new tooth, bridge or denture.

An abutment sits on top of the implant, which is the small metal post which holds an artificial tooth or crown firmly in place. The crown is the visible part which restores the aesthetics and function of your smile. Implants can also be used to support bridges and dentures.

Benefits of dental implants:
- Permanent solution for missing teeth
- Preserves jawbone structure
- Natural appearance and function
- No impact on adjacent teeth
- Easy maintenance with regular brushing and flossing`,
    features: [
      "Titanium implant posts",
      "Custom-made crowns",
      "Osseointegration process",
      "Long-term solution",
      "Natural appearance"
    ]
  },
  {
    id: "clear-aligners",
    title: "Clear Aligners",
    category: "orthodontic",
    description: "Clear aligners are the generic term for straightening teeth using clear plastic trays without traditional brackets and wires.",
    fullContent: `Clear aligners can alter the arrangement of your teeth without using traditional braces. The aligners are removable, which means there are no food restrictions or issues with flossing or brushing around brackets and wires.

Clear aligners involve a series of clear trays, which you need to wear for 22 hours each day. They are only taken out to eat and to have a small break. Compliance is critical to their success.

The number of retainers depends on the severity of crowding and misalignment. Each retainer is worn for approximately 1-2 weeks and then replaced with the next retainer in the series.

Benefits:
- Nearly invisible appearance
- Removable for eating and cleaning
- No food restrictions
- Comfortable plastic material
- Predictable treatment outcomes`,
    features: [
      "22 hours daily wear",
      "Removable design",
      "Custom-made trays",
      "No food restrictions",
      "Clear plastic material"
    ]
  },
  {
    id: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    category: "cosmetic",
    description: "Enhance your smile with our comprehensive cosmetic dentistry services including veneers, teeth whitening, and smile makeovers.",
    fullContent: `Our cosmetic dentistry services focus on improving the appearance of your teeth and smile while maintaining optimal oral health.

Veneers:
Veneers are commonly placed on the front surface of your prepped tooth to enhance your teeth for cosmetic and structural purposes. All our veneers are Australian made.

Types of Veneers:
- Composite veneers: Made of composite and can be done in single visit
- Porcelain veneers: Made up of ultra-thin porcelain that is permanently bonded to your natural tooth enamel. Porcelain veneers provide a more natural look, superior durability and are highly stain resistant. This requires two to three visits to the dentist

Dental veneers can alter the outward appearance of teeth in many ways. They can whiten your smile, straighten slightly crooked teeth, cover up small chips and cracks, increase the size of teeth and close gaps between teeth.`,
    features: [
      "Porcelain veneers",
      "Composite veneers",
      "Teeth whitening",
      "Smile makeovers",
      "Australian made veneers"
    ]
  },
  {
    id: "sleep-disordered-breathing",
    title: "Snoring & Sleep Apnea Treatment",
    category: "specialty",
    description: "Comprehensive treatment for sleep-related breathing disorders including snoring and obstructive sleep apnea.",
    fullContent: `Dentists have an important role in the screening and management of sleep disorders, including snoring and sleep apnoea.

Sleep-related breathing disorders (SRBD) are disorders characterised by disruptions in normal breathing patterns. SRBDs are potentially serious medical conditions caused by anatomical airway collapse and altered respiratory control mechanisms.

Common SRBDs include snoring and obstructive sleep apnea (OSA). OSA has been associated with poor sleep, high blood pressure, memory issues, cardiovascular concerns, abnormal cholesterol levels, high blood sugar and an increased waist circumference.

Treatment options include:
- Oral appliances
- CPAP therapy coordination
- Lifestyle modifications
- Surgical referrals when appropriate`,
    features: [
      "Sleep disorder screening",
      "Oral appliance therapy",
      "CPAP coordination",
      "Lifestyle counseling",
      "Medical referrals"
    ]
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "vaping-bad-teeth",
    title: "Is Vaping Bad for Your Teeth? Dangers of Vapes for Teeth",
    excerpt: "Vaping—often seen as a safer alternative to smoking—can still cause real harm to your teeth and gums. We explore how vaping impacts your oral health.",
    content: `Vaping—often seen as a safer alternative to smoking—can still cause real harm to your teeth and gums.

In this blog post, we'll explore how vaping impacts your oral health, highlight the specific risks it poses, and offer practical tips to help you protect your smile—even if you vape regularly.

Key risks of vaping for oral health:
- Dry mouth and reduced saliva production
- Increased risk of gum disease
- Tooth decay and cavities
- Oral irritation and inflammation
- Delayed healing after dental procedures

The chemicals in vape juice can create an environment in your mouth that promotes bacterial growth and reduces your mouth's natural ability to fight off infection.`,
    date: "2025-07-17",
    author: "Dr Basil Athanassiadis",
    readTime: "6 mins"
  },
  {
    id: "alternatives-braces-2025",
    title: "What are the Best Alternatives to Braces in 2025?",
    excerpt: "Braces have long been the go-to solution for straightening teeth, but they're no longer the only option available. Discover modern alternatives.",
    content: `Braces have long been the go-to solution for straightening teeth, but they're no longer the only option available.

In this blog post, we'll explore the best alternatives to traditional braces in 2025, helping you understand which option might be right for your specific needs.

Modern alternatives include:
- Clear aligners (Invisalign)
- Lingual braces
- Ceramic braces
- Self-ligating braces
- Accelerated orthodontics

Each option has its own benefits and considerations, and the best choice depends on your specific case, lifestyle, and preferences.`,
    date: "2025-06-27",
    author: "Dr Basil Athanassiadis",
    readTime: "7 mins"
  },
  {
    id: "implant-vs-bridge",
    title: "Tooth Implant vs Dental Bridge: Which is Right for You?",
    excerpt: "When it comes to replacing a missing tooth, dental implants and bridges are two of the most common options—but how do you know which is right for you?",
    content: `When it comes to replacing a missing tooth, dental implants and bridges are two of the most common options—but how do you know which is right for you?

In this blog post, we'll compare tooth implants and dental bridges, exploring their key differences, benefits, and considerations. Our goal is to help you make an informed decision about the best solution for your specific situation.

Dental Implants:
- Permanent solution
- Preserves jawbone
- No impact on adjacent teeth
- Requires surgery
- Higher initial cost

Dental Bridges:
- Faster treatment
- Less invasive procedure
- Relies on adjacent teeth
- May need replacement
- Lower initial cost

The choice between implants and bridges depends on factors like your oral health, budget, timeline, and personal preferences.`,
    date: "2025-05-26",
    author: "Dr Basil Athanassiadis",
    readTime: "7 mins"
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: "dr-basil",
    name: "Dr Basil Athanassiadis",
    title: "Principal Dentist",
    bio: `Dr Basil, was born and raised in Brisbane, has been a dentist for more than 35 years. He is widely recognised as being among Brisbane's best and most qualified dentists and has reputation for always putting his patients best interests at heart.

He started his practice in Annerley in May 1994 and in 2024 he will celebrate 30 years of owning his own practice. Since starting in Annerley in 1994, Dr Basil has treated over 10,000 patients.

Basil graduated from the University of Queensland with a Bachelor of Dental Science in 1987, before beginning his first job as a Dentist at the Brisbane Dental Hospital in 1988. In 1991, he moved to the Mitchelton Dental Centre where he worked for 3 years before establishing his own practice in Annerley.`,
    qualifications: [
      "Bachelor of Dental Science - University of Queensland (1987)",
      "35+ years of dental experience",
      "10,000+ patients treated"
    ],
    experience: "35+ years"
  }
];

export const financeOptions = {
  healthFunds: {
    title: "Health Funds",
    description: "Annerley Dental is a preferred provider for Bupa, HCF and NIB. However, we also accept and welcome all major private dental health insurance.",
    hicaps: "HICAPS is provided allowing our patients to instantly claim the health fund rebate on the spot leaving the difference to be settled at the day of the appointment."
  },
  childDentalBenefits: {
    title: "Child Dental Benefits Schedule (CDBS) - Bulk Billing",
    description: "At Annerley Dental we we're passionate about beginning preventative dental care at an early age. That's why we bulk bill and accept the Medicare Child Dental Benefit Scheme, with no out-of-pocket expenses for eligible children aged 2 to 17 years."
  },
  paymentPlans: [
    { name: "Humm", logo: "/images/humm-logo.png" },
    { name: "Zip", logo: "/images/zip-logo.png" },
    { name: "MediPay", logo: "/images/medipay-logo.png" }
  ]
};

export const importedImages = [
  // Health fund logos
  "/images/bupa-logo.png",
  "/images/hcf-logo.png", 
  "/images/nib-logo.png",
  
  // Service images
  "/images/dental-implant-service.webp",
  "/images/clear-aligners.webp",
  "/images/cosmetic-dentistry.webp",
  "/images/sleep-apnea-treatment.webp",
  
  // Finance logos
  "/images/humm-logo.png",
  "/images/zip-logo.png",
  "/images/medipay-logo.png",
  "/images/australian-gov.webp",
  
  // Case studies and before/after photos
  "/images/invisalign-cases/8-months.webp",
  "/images/invisalign-cases/12-months.webp", 
  "/images/invisalign-cases/20-months.webp",
  "/images/invisalign-cases/22-months.webp",
  "/images/invisalign-cases/24-months.webp",
  "/images/dental-veneers/case-1.webp",
  "/images/dental-veneers/case-2.webp",
  "/images/dental-veneers/case-3.webp",
  
  // Blog post images
  "/images/blog/vaping-teeth.webp",
  "/images/blog/braces-alternatives.webp",
  "/images/blog/implant-vs-bridge.webp"
];