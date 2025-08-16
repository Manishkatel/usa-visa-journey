import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const visaTypes = [
  {
    id: "f1",
    title: "F1 Student Visa",
    icon: "🎓",
    description: "Study in the US with academic programs",
    difficulty: "Medium",
    timeline: "3-6 months",
    steps: [
      "Get accepted to SEVP-approved school",
      "Pay SEVIS fee",
      "Complete DS-160 form",
      "Schedule visa interview",
      "Attend interview with documents"
    ],
    nextPath: ["opt", "h1b"],
    color: "primary"
  },
  {
    id: "tourist",
    title: "B1/B2 Tourist Visa",
    icon: "✈️",
    description: "Visit the US for tourism or business",
    difficulty: "Easy",
    timeline: "2-4 weeks",
    steps: [
      "Complete DS-160 online application",
      "Pay visa application fee",
      "Schedule interview appointment",
      "Gather supporting documents",
      "Attend consular interview"
    ],
    nextPath: ["family", "business"],
    color: "success"
  },
  {
    id: "h1b",
    title: "H1B Work Visa",
    icon: "💼",
    description: "Work in specialty occupations",
    difficulty: "Hard",
    timeline: "6-12 months",
    steps: [
      "Find H1B sponsor employer",
      "Employer files H1B petition",
      "Wait for lottery results",
      "USCIS approves petition",
      "Apply for visa at consulate"
    ],
    nextPath: ["green-card"],
    color: "warning"
  },
  {
    id: "family",
    title: "Family-Based Visa",
    icon: "👨‍👩‍👧‍👦",
    description: "Join family members in the US",
    difficulty: "Medium",
    timeline: "1-3 years",
    steps: [
      "US citizen/LPR files petition",
      "Wait for priority date",
      "File for adjustment or consular processing",
      "Attend biometrics appointment",
      "Complete interview process"
    ],
    nextPath: ["green-card"],
    color: "accent"
  },
  {
    id: "green-card",
    title: "Green Card (LPR)",
    icon: "🟢",
    description: "Permanent residence in the US",
    difficulty: "Hard",
    timeline: "1-5 years",
    steps: [
      "Determine eligibility category",
      "File I-485 or consular processing",
      "Attend biometrics appointment",
      "Complete medical examination",
      "Attend adjustment interview"
    ],
    nextPath: ["citizenship"],
    color: "success"
  },
  {
    id: "citizenship",
    title: "US Citizenship",
    icon: "🇺🇸",
    description: "Become a US citizen",
    difficulty: "Medium",
    timeline: "6-12 months",
    steps: [
      "Meet residency requirements",
      "File Form N-400",
      "Attend biometrics appointment",
      "Pass civics and English tests",
      "Take oath of allegiance"
    ],
    nextPath: [],
    color: "primary"
  }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Easy": return "success";
    case "Medium": return "warning";
    case "Hard": return "destructive";
    default: return "secondary";
  }
};

const VisaRoadmap = () => {
  return (
    <section id="roadmap" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            🗺️ Complete Roadmap
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your Immigration Path
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore different visa options and understand the complete journey from temporary status to citizenship. 
            Each path is designed with step-by-step guidance and realistic timelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visaTypes.map((visa, index) => (
            <Card key={visa.id} className="visa-card group relative overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl">
                    {visa.icon}
                  </div>
                  <Badge variant={getDifficultyColor(visa.difficulty) as any} className="text-xs">
                    {visa.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {visa.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {visa.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Timeline:</span>
                  <Badge variant="outline">{visa.timeline}</Badge>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Key Steps:</h4>
                  <ol className="text-sm text-muted-foreground space-y-1">
                    {visa.steps.slice(0, 3).map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start">
                        <span className="text-primary font-semibold mr-2 min-w-[1.2rem]">
                          {stepIndex + 1}.
                        </span>
                        {step}
                      </li>
                    ))}
                    {visa.steps.length > 3 && (
                      <li className="text-primary font-medium">
                        +{visa.steps.length - 3} more steps
                      </li>
                    )}
                  </ol>
                </div>

                {visa.nextPath.length > 0 && (
                  <div className="space-y-2 pt-2 border-t border-border">
                    <h4 className="font-semibold text-sm">Next Paths:</h4>
                    <div className="flex flex-wrap gap-1">
                      {visa.nextPath.map((nextId) => {
                        const nextVisa = visaTypes.find(v => v.id === nextId);
                        return (
                          <Badge key={nextId} variant="secondary" className="text-xs">
                            {nextVisa?.title.split(' ')[0]}
                          </Badge>
                        );
                      })}
                    </div>
                  </div>
                )}

                <Button variant="roadmap" className="w-full mt-4">
                  View Complete Guide
                </Button>
              </CardContent>
              
              {/* Connection line for roadmap effect */}
              {index < visaTypes.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-primary/30 transform -translate-y-1/2 z-10"></div>
              )}
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Need personalized guidance? Our immigration experts are here to help.
          </p>
          <Button variant="hero" size="lg">
            Get Personalized Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VisaRoadmap;