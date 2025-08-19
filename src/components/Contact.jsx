import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-8 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-6">
          <Badge variant="outline" className="mb-2">
            📞 Contact
          </Badge>
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            Get in Touch
          </h2>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto">
            Ready to start your journey? Contact us for a consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Contact Information */}
          <Card className="visa-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Contact Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pb-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 primary-gradient rounded-lg flex items-center justify-center">
                  <Phone className="h-3 w-3 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs">Phone</h4>
                  <p className="text-xs text-muted-foreground">+1 (555) 123-4567</p>
                  <p className="text-xs text-muted-foreground">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 primary-gradient rounded-lg flex items-center justify-center">
                  <Mail className="h-3 w-3 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs">Email</h4>
                  <p className="text-xs text-muted-foreground">info@usastudylearn.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 primary-gradient rounded-lg flex items-center justify-center">
                  <MapPin className="h-3 w-3 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs">Office</h4>
                  <p className="text-xs text-muted-foreground">123 Education Street, New Delhi</p>
                  <p className="text-sm text-muted-foreground">New Delhi, India 110001</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 primary-gradient rounded-lg flex items-center justify-center">
                  <Clock className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Office Hours</h4>
                  <p className="text-sm text-muted-foreground">Mon-Fri: 9:00 AM - 6:00 PM</p>
                  <p className="text-sm text-muted-foreground">Saturday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h4 className="font-semibold text-sm mb-3">Follow Us</h4>
                <div className="flex space-x-3">
                  <a 
                    href="#" 
                    className="w-10 h-10 primary-gradient rounded-lg flex items-center justify-center text-white hover:glow-shadow hover:scale-105 transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-3 w-3" />
                  </a>
                  <a 
                    href="#" 
                    className="w-8 h-8 primary-gradient rounded-lg flex items-center justify-center text-white hover:glow-shadow hover:scale-105 transition-all duration-300"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-3 w-3" />
                  </a>
                  <a 
                    href="#" 
                    className="w-8 h-8 primary-gradient rounded-lg flex items-center justify-center text-white hover:glow-shadow hover:scale-105 transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-3 w-3" />
                  </a>
                  <a 
                    href="#" 
                    className="w-8 h-8 primary-gradient rounded-lg flex items-center justify-center text-white hover:glow-shadow hover:scale-105 transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="visa-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Send Message</CardTitle>
            </CardHeader>
            <CardContent className="pb-4">
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="name" className="text-xs">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="h-8 text-xs"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-xs">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="h-8 text-xs"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-xs">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={2}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    className="text-xs"
                  />
                </div>

                <Button type="submit" variant="hero" className="w-full h-8 text-xs">
                  Send
                  <Send className="ml-1 h-3 w-3" />
                </Button>
              </form>

              <div className="mt-3 p-2 bg-muted rounded-lg">
                <div className="flex items-center text-muted-foreground">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  <span className="text-xs font-medium">
                    We respond within 24 hours
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;