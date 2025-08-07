import { Badge } from "@/components/ui/badge";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 primary-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🇺🇸</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">US Immigration Hub</h3>
                <p className="text-sm text-muted-foreground">Your path to America</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Comprehensive immigration guidance and resources for your journey to the United States.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Visa Types</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">F1 Student Visa</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">H1B Work Visa</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Tourist Visa</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Family Visa</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Green Card</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Official Forms</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Government Sites</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Legal Help</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Test Prep</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Live Chat</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 mt-8 border-t border-border">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} US Immigration Hub. All rights reserved.
            </p>
            <Badge variant="outline" className="text-xs">
              Not legal advice
            </Badge>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;