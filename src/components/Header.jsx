import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 primary-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🇺🇸</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">US Immigration Hub</h1>
              <p className="text-sm text-muted-foreground">Your path to America</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#roadmap" className="text-muted-foreground hover:text-foreground transition-colors">
              Roadmap
            </a>
            <a href="#resources" className="text-muted-foreground hover:text-foreground transition-colors">
              Resources
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <Button variant="hero" size="sm">
              Get Started
            </Button>
          </nav>

          <Button variant="ghost" size="sm" className="md:hidden">
            ☰
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;