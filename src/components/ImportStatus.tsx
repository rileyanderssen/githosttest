import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, FileText, Image, Users, Building, CreditCard } from "lucide-react";
import { generateImportSummary, organizeImportedContent } from "@/utils/contentImporter";
import { getContentStats } from "@/components/ContentManager";

const ImportStatus = () => {
  const importSummary = generateImportSummary();
  const importedContent = organizeImportedContent();
  const contentStats = getContentStats();

  const importCategories = [
    {
      title: "Business Information",
      icon: Building,
      status: "complete",
      items: [
        "Practice name and contact details",
        "Address and phone number",
        "Email and website URL",
        "Social media accounts",
        "Business hours",
        "Online booking system URL"
      ]
    },
    {
      title: "Pages Imported",
      icon: FileText,
      status: "complete",
      items: importedContent.pages.map(page => `${page.title} (${page.wordCount} words)`)
    },
    {
      title: "Blog Posts",
      icon: FileText,
      status: "complete",
      items: importedContent.posts.map(post => `${post.title} by ${post.author}`)
    },
    {
      title: "Services",
      icon: FileText,
      status: "complete",
      items: [
        "Dental Implants - Complete service info",
        "Clear Aligners - Treatment details",
        "Cosmetic Dentistry - Veneers and whitening",
        "Sleep Apnea Treatment - Snoring solutions",
        "General Dentistry - Basic care services"
      ]
    },
    {
      title: "Images & Assets",
      icon: Image,
      status: "complete",
      items: importedContent.images.map(img => `${img.altText} (${img.type})`)
    },
    {
      title: "Team Information",
      icon: Users,
      status: "complete",
      items: [
        "Dr Basil Athanassiadis - Principal Dentist",
        "35+ years experience",
        "University of Queensland qualification",
        "10,000+ patients treated"
      ]
    },
    {
      title: "Finance & Health Funds",
      icon: CreditCard,
      status: "complete",
      items: [
        "Bupa preferred provider",
        "HCF preferred provider", 
        "NIB preferred provider",
        "Child Dental Benefits Scheme",
        "Payment plan options",
        "HICAPS instant claiming"
      ]
    }
  ];

  return (
    <div className="space-y-6 p-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Content Import Status</h1>
        <p className="text-lg text-muted-foreground">
          {importSummary.summary}
        </p>
        
        <div className="flex justify-center gap-4 flex-wrap">
          <Badge variant="default" className="text-sm">
            {contentStats.totalPages} Pages
          </Badge>
          <Badge variant="default" className="text-sm">
            {contentStats.totalBlogPosts} Blog Posts
          </Badge>
          <Badge variant="default" className="text-sm">
            {contentStats.totalServices} Services
          </Badge>
          <Badge variant="default" className="text-sm">
            {importedContent.images.length} Images
          </Badge>
          <Badge variant="secondary" className="text-sm">
            {contentStats.completeness}% Complete
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {importCategories.map((category, index) => (
          <Card key={index} className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <category.icon className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">{category.title}</h3>
              <CheckCircle className="h-4 w-4 text-green-500 ml-auto" />
            </div>
            
            <ul className="space-y-1 text-sm text-muted-foreground">
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <Card className="p-6">
        <h3 className="font-semibold text-lg mb-4">Import Summary Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {Object.entries(importSummary.details).map(([key, value]) => (
            <div key={key} className="text-center">
              <div className="text-2xl font-bold text-primary">{value.split(' ')[0]}</div>
              <div className="text-sm text-muted-foreground capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </div>
            </div>
          ))}
        </div>
        
        <div className="border-t pt-4">
          <h4 className="font-medium mb-2">Next Steps:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            {importSummary.nextSteps.map((step, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary mt-1">→</span>
                {step}
              </li>
            ))}
          </ul>
        </div>
      </Card>

      <div className="text-center text-sm text-muted-foreground">
        <p>
          Content imported from <a href="https://annerleydental.com.au" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            annerleydental.com.au
          </a> on {new Date(importedContent.importDate).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default ImportStatus;