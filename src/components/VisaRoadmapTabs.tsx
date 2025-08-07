import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
      "Pay SEVIS fee ($350)",
      "Complete DS-160 form online",
      "Schedule visa interview at US consulate",
      "Attend interview with required documents",
      "Receive visa and travel to US",
      "Report to school and maintain F1 status"
    ],
    requirements: [
      "Acceptance letter from SEVP-approved school",
      "Proof of financial support",
      "Valid passport",
      "SEVIS I-20 form",
      "Academic transcripts",
      "English proficiency test scores"
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
      "Pay visa application fee ($185)",
      "Schedule interview appointment",
      "Gather supporting documents",
      "Attend consular interview",
      "Receive visa decision",
      "Travel to US within visa validity"
    ],
    requirements: [
      "Valid passport",
      "Completed DS-160 form",
      "Visa application fee receipt",
      "Photo meeting requirements",
      "Evidence of ties to home country",
      "Travel itinerary"
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
      "Employer files Labor Condition Application",
      "Employer files H1B petition (I-129)",
      "Wait for lottery results (if applicable)",
      "USCIS approves petition",
      "Apply for visa at consulate (if abroad)",
      "Enter US and begin work"
    ],
    requirements: [
      "Bachelor's degree or equivalent",
      "Job offer from US employer",
      "Specialty occupation position",
      "Employer willing to sponsor",
      "Labor Condition Application",
      "Valid passport"
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
      "US citizen/LPR files petition (I-130)",
      "Wait for priority date to become current",
      "File for adjustment of status or consular processing",
      "Attend biometrics appointment",
      "Complete medical examination",
      "Attend adjustment interview",
      "Receive green card or immigrant visa"
    ],
    requirements: [
      "Qualifying relationship to US citizen/LPR",
      "Proof of relationship",
      "Affidavit of Support (I-864)",
      "Medical examination",
      "Background checks",
      "Valid passport"
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
      "File I-485 (adjustment) or consular processing",
      "Attend biometrics appointment",
      "Complete medical examination",
      "Attend adjustment interview",
      "Receive green card approval",
      "Maintain permanent resident status"
    ],
    requirements: [
      "Eligible immigration category",
      "Form I-485 or immigrant visa application",
      "Medical examination",
      "Affidavit of Support (if applicable)",
      "Background checks",
      "Valid passport"
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
      "Meet residency requirements (5 years as LPR)",
      "File Form N-400",
      "Attend biometrics appointment",
      "Complete civics and English interview",
      "Pass civics and English tests",
      "Take oath of allegiance ceremony",
      "Receive Certificate of Naturalization"
    ],
    requirements: [
      "5+ years as permanent resident",
      "Physical presence in US",
      "Good moral character",
      "Basic English knowledge",
      "US civics knowledge",
      "Oath of allegiance"
    ],
    nextPath: [],
    color: "primary"
  }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Easy": return "secondary";
    case "Medium": return "outline";
    case "Hard": return "destructive";
    default: return "secondary";
  }
};

const VisaRoadmapTabs = () => {
  return (
    <section id="roadmap" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            🗺️ Complete Roadmap
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            US Immigration Pathways
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose your immigration path and follow the step-by-step roadmap. 
            Each tab contains detailed requirements and timeline information.
          </p>
        </div>

        <Tabs defaultValue="f1" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
            {visaTypes.map((visa) => (
              <TabsTrigger key={visa.id} value={visa.id} className="text-xs">
                <span className="mr-1">{visa.icon}</span>
                {visa.title.split(' ')[0]}
              </TabsTrigger>
            ))}
          </TabsList>

          {visaTypes.map((visa) => (
            <TabsContent key={visa.id} value={visa.id}>
              <Card className="w-full">
                <CardHeader className="text-center pb-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-3xl">
                      {visa.icon}
                    </div>
                  </div>
                  <CardTitle className="text-3xl mb-2">{visa.title}</CardTitle>
                  <CardDescription className="text-lg">{visa.description}</CardDescription>
                  
                  <div className="flex items-center justify-center gap-4 mt-4">
                    <Badge variant={getDifficultyColor(visa.difficulty) as any}>
                      {visa.difficulty}
                    </Badge>
                    <Badge variant="outline">Timeline: {visa.timeline}</Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold border-b border-border pb-2">
                      Step-by-Step Process
                    </h3>
                    <ol className="space-y-3">
                      {visa.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start">
                          <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold mr-3">
                            {stepIndex + 1}
                          </span>
                          <span className="text-sm leading-relaxed">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold border-b border-border pb-2">
                      Requirements
                    </h3>
                    <ul className="space-y-2">
                      {visa.requirements.map((requirement, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-sm">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {visa.nextPath.length > 0 && (
                      <div className="mt-6 pt-4 border-t border-border">
                        <h4 className="font-semibold mb-2">Next Possible Steps:</h4>
                        <div className="flex flex-wrap gap-2">
                          {visa.nextPath.map((nextId) => {
                            const nextVisa = visaTypes.find(v => v.id === nextId);
                            return (
                              <Badge key={nextId} variant="secondary" className="text-xs">
                                {nextVisa?.title}
                              </Badge>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Need personalized guidance for your immigration journey?
          </p>
          <Button variant="default" size="lg">
            Get Expert Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VisaRoadmapTabs;