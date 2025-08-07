import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const resources = [
  {
    category: "Official Forms",
    icon: "📄",
    items: [
      { name: "DS-160", description: "Online nonimmigrant visa application" },
      { name: "I-485", description: "Application to register permanent residence" },
      { name: "N-400", description: "Application for naturalization" },
      { name: "I-94", description: "Arrival/departure record" }
    ]
  },
  {
    category: "Government Websites",
    icon: "🏛️",
    items: [
      { name: "USCIS", description: "U.S. Citizenship and Immigration Services" },
      { name: "State Department", description: "Visa information and services" },
      { name: "CBP", description: "Customs and Border Protection" },
      { name: "ICE", description: "Immigration and Customs Enforcement" }
    ]
  },
  {
    category: "Legal Resources",
    icon: "⚖️",
    items: [
      { name: "AILA", description: "American Immigration Lawyers Association" },
      { name: "Legal Aid", description: "Free and low-cost legal services" },
      { name: "Pro Bono", description: "Volunteer lawyer programs" },
      { name: "Self-Help", description: "DIY immigration guides" }
    ]
  },
  {
    category: "Test Preparation",
    icon: "📚",
    items: [
      { name: "TOEFL", description: "Test of English as a Foreign Language" },
      { name: "IELTS", description: "International English Language Testing" },
      { name: "Civics Test", description: "U.S. citizenship test preparation" },
      { name: "English Test", description: "Naturalization English requirements" }
    ]
  }
];

const ResourcesSection = () => {
  return (
    <section id="resources" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            📚 Essential Resources
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access official forms, government websites, legal resources, and test preparation materials 
            all organized by category for easy navigation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((category, index) => (
            <Card key={index} className="visa-card h-full">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto primary-gradient rounded-xl flex items-center justify-center text-3xl mb-4">
                  {category.icon}
                </div>
                <CardTitle className="text-xl">{category.category}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex} 
                    className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer"
                  >
                    <h4 className="font-semibold text-sm mb-1">{item.name}</h4>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                ))}
                
                <Button variant="outline" className="w-full mt-4">
                  View All Resources
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl p-8 border border-border elegant-shadow">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Immigration laws and procedures change frequently. Subscribe to get the latest updates and tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2 rounded-lg border border-input bg-background"
              />
              <Button variant="hero">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;