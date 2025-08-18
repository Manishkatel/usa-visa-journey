import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card, 
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Search,
  BookOpen,
  Download,
  Bookmark,
  BookMarked,
  ExternalLink,
  FileText,
  Globe,
  Scale,
  GraduationCap,
} from "lucide-react";

const defaultResources = [
  // Immigration Forms
  {
    id: "1",
    title: "DS-160 Online Application",
    type: "Government Form",
    description: "Complete guide to filling out the DS-160 nonimmigrant visa application with step-by-step instructions.",
    category: "immigration",
    tags: ["DS-160", "Visa Application", "Government Form"],
    downloadUrl: "#",
  },
  {
    id: "2",
    title: "I-485 Application Guide",
    type: "Legal Document",
    description: "Comprehensive guide for applying to register permanent residence or adjust status in the United States.",
    category: "immigration",
    tags: ["I-485", "Green Card", "Permanent Residence"],
    downloadUrl: "#",
  },
  {
    id: "3",
    title: "N-400 Naturalization Kit",
    type: "Complete Package",
    description: "Everything you need for U.S. citizenship application including forms, study materials, and practice tests.",
    category: "immigration",
    tags: ["N-400", "Citizenship", "Naturalization"],
    downloadUrl: "#",
  },
  
  // Educational Test Prep
  {
    id: "4",
    title: "SAT Complete Study Guide",
    type: "PDF Document",
    description: "Comprehensive study material covering all sections of the SAT with practice questions and strategies.",
    category: "sat",
    tags: ["Study Guide", "Practice Questions", "Strategies"],
    downloadUrl: "#",
  },
  {
    id: "5",
    title: "GRE Vocabulary Flashcards",
    type: "Interactive Tool",
    description: "Digital flashcards featuring 500+ essential GRE vocabulary words with definitions and example sentences.",
    category: "gre",
    tags: ["Vocabulary", "Flashcards", "Word List"],
    externalUrl: "#",
  },
  {
    id: "6",
    title: "TOEFL Speaking Practice",
    type: "Audio Lessons",
    description: "Audio lessons with sample responses and expert feedback for all six TOEFL speaking tasks.",
    category: "toefl",
    tags: ["Speaking", "Practice Tests", "Sample Responses"],
    downloadUrl: "#",
  },
  {
    id: "7",
    title: "IELTS Reading Strategies",
    type: "Video Course",
    description: "Video lessons teaching effective strategies for all question types in the IELTS Reading section.",
    category: "ielts",
    tags: ["Reading", "Strategies", "Time Management"],
    externalUrl: "#",
  },
  
  // Legal Resources
  {
    id: "8",
    title: "AILA Resource Directory",
    type: "Directory",
    description: "Complete directory of American Immigration Lawyers Association members and their specialties.",
    category: "legal",
    tags: ["AILA", "Lawyers", "Legal Aid"],
    externalUrl: "#",
  },
  {
    id: "9",
    title: "Pro Bono Legal Services",
    type: "Service Directory",
    description: "Find free and low-cost legal services for immigration matters in your area.",
    category: "legal",
    tags: ["Pro Bono", "Free Legal Aid", "Immigration Law"],
    externalUrl: "#",
  },
  
  // Government Resources
  {
    id: "10",
    title: "USCIS Policy Manual",
    type: "Official Guide",
    description: "Official USCIS policy manual with the latest immigration procedures and requirements.",
    category: "government",
    tags: ["USCIS", "Policy", "Official"],
    downloadUrl: "#",
  },
  {
    id: "11",
    title: "State Department Visa Bulletin",
    type: "Monthly Update",
    description: "Current visa bulletin with priority dates and availability for all immigration categories.",
    category: "government",
    tags: ["Visa Bulletin", "Priority Dates", "State Department"],
    externalUrl: "#",
  },
];

const ResourceHub = ({ resources = defaultResources }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [savedResources, setSavedResources] = useState([]);

  const filteredResources = resources.filter((resource) => {
    // Filter by search query
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());

    // Filter by active tab
    const matchesTab =
      activeTab === "all" ||
      resource.category.toLowerCase() === activeTab.toLowerCase();

    return matchesSearch && matchesTab;
  });

  const toggleSaveResource = (id) => {
    setSavedResources((prev) =>
      prev.includes(id)
        ? prev.filter((resourceId) => resourceId !== id)
        : [...prev, id],
    );
  };

  return (
    <section id="resources" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            📚 Complete Resource Hub
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access immigration forms, test preparation materials, legal resources, and government guides 
            all organized by category with powerful search and filtering.
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 border border-border elegant-shadow">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search resources..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" className="md:w-auto">
              <BookMarked className="mr-2 h-4 w-4" />
              My Saved Resources ({savedResources.length})
            </Button>
          </div>

          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6 w-full justify-start">
              <TabsTrigger value="all">All Resources</TabsTrigger>
              <TabsTrigger value="immigration">Immigration</TabsTrigger>
              <TabsTrigger value="sat">SAT</TabsTrigger>
              <TabsTrigger value="gre">GRE</TabsTrigger>
              <TabsTrigger value="toefl">TOEFL</TabsTrigger>
              <TabsTrigger value="ielts">IELTS</TabsTrigger>
              <TabsTrigger value="legal">Legal</TabsTrigger>
              <TabsTrigger value="government">Government</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <ResourceGrid
                resources={filteredResources}
                savedResources={savedResources}
                toggleSaveResource={toggleSaveResource}
              />
            </TabsContent>

            <TabsContent value="immigration" className="mt-0">
              <ResourceGrid
                resources={filteredResources}
                savedResources={savedResources}
                toggleSaveResource={toggleSaveResource}
              />
            </TabsContent>

            <TabsContent value="sat" className="mt-0">
              <ResourceGrid
                resources={filteredResources}
                savedResources={savedResources}
                toggleSaveResource={toggleSaveResource}
              />
            </TabsContent>

            <TabsContent value="gre" className="mt-0">
              <ResourceGrid
                resources={filteredResources}
                savedResources={savedResources}
                toggleSaveResource={toggleSaveResource}
              />
            </TabsContent>

            <TabsContent value="toefl" className="mt-0">
              <ResourceGrid
                resources={filteredResources}
                savedResources={savedResources}
                toggleSaveResource={toggleSaveResource}
              />
            </TabsContent>

            <TabsContent value="ielts" className="mt-0">
              <ResourceGrid
                resources={filteredResources}
                savedResources={savedResources}
                toggleSaveResource={toggleSaveResource}
              />
            </TabsContent>

            <TabsContent value="legal" className="mt-0">
              <ResourceGrid
                resources={filteredResources}
                savedResources={savedResources}
                toggleSaveResource={toggleSaveResource}
              />
            </TabsContent>

            <TabsContent value="government" className="mt-0">
              <ResourceGrid
                resources={filteredResources}
                savedResources={savedResources}
                toggleSaveResource={toggleSaveResource}
              />
            </TabsContent>
          </Tabs>
        </div>

        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl p-8 border border-border elegant-shadow">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Immigration laws and procedures change frequently. Subscribe to get the latest updates and tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1"
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

const ResourceGrid = ({
  resources,
  savedResources,
  toggleSaveResource,
}) => {
  if (resources.length === 0) {
    return (
      <div className="text-center py-12">
        <BookOpen className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-lg font-medium">No resources found</h3>
        <p className="text-muted-foreground">
          Try adjusting your search or filters
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {resources.map((resource) => (
        <ResourceCard
          key={resource.id}
          resource={resource}
          isSaved={savedResources.includes(resource.id)}
          toggleSave={() => toggleSaveResource(resource.id)}
        />
      ))}
    </div>
  );
};

const ResourceCard = ({ resource, isSaved, toggleSave }) => {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'immigration': return <FileText className="h-4 w-4" />;
      case 'legal': return <Scale className="h-4 w-4" />;
      case 'government': return <Globe className="h-4 w-4" />;
      default: return <GraduationCap className="h-4 w-4" />;
    }
  };

  return (
    <Card className="h-full flex flex-col visa-card">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{resource.title}</CardTitle>
            <CardDescription className="mt-1">{resource.type}</CardDescription>
          </div>
          <Badge variant="outline" className="capitalize flex items-center gap-1">
            {getCategoryIcon(resource.category)}
            {resource.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">{resource.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {resource.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-4 border-t">
        <div className="flex gap-2">
          {resource.downloadUrl && (
            <Button size="sm" variant="outline">
              <Download className="h-4 w-4 mr-1" /> Download
            </Button>
          )}
          {resource.externalUrl && (
            <Button size="sm" variant="outline">
              <ExternalLink className="h-4 w-4 mr-1" /> View
            </Button>
          )}
        </div>
        <Button
          size="icon"
          variant="ghost"
          onClick={toggleSave}
          className={isSaved ? "text-primary" : ""}
        >
          {isSaved ? (
            <BookMarked className="h-5 w-5" />
          ) : (
            <Bookmark className="h-5 w-5" />
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResourceHub;