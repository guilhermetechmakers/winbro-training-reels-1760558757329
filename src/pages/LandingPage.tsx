import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Users, Shield, Zap, ArrowRight, CheckCircle } from "lucide-react";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-divider-strong bg-surface-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-brand-primary">Winbro Training Reels</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost">Login</Button>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6 animate-fade-in-up">
              Master Machine Operations with
              <span className="text-brand-primary"> 20-30 Second</span> Video Clips
            </h1>
            <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto animate-fade-in-up">
              Capture, distribute, and master machine operation knowledge with our web-first platform. 
              Perfect for internal teams and customers with searchable video libraries and structured courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
              <Button size="lg" className="text-lg px-8 py-4">
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-sunken">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Why Choose Winbro Training Reels?
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Built specifically for manufacturing and industrial training with enterprise-grade features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="animate-fade-in-up hover:shadow-popover transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-brand-primary" />
                </div>
                <CardTitle>Fast Capture & Upload</CardTitle>
                <CardDescription>
                  Record 20-30 second clips directly in your browser or upload existing videos. 
                  AI-assisted transcription and tagging make content instantly searchable.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="animate-fade-in-up hover:shadow-popover transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-state-success/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-state-success" />
                </div>
                <CardTitle>Secure & Private</CardTitle>
                <CardDescription>
                  Per-customer content allocation with enterprise-grade security. 
                  Role-based access control and secure streaming with signed URLs.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="animate-fade-in-up hover:shadow-popover transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-state-info/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-state-info" />
                </div>
                <CardTitle>Team Collaboration</CardTitle>
                <CardDescription>
                  Structured courses with quizzes and certificates. 
                  Track progress, assign content, and measure training effectiveness.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              How It Works
            </h2>
            <p className="text-lg text-text-secondary">
              Get started in minutes with our simple 3-step process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in-up">
              <div className="w-16 h-16 bg-brand-primary text-state-text-on-colored rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-4">Record or Upload</h3>
              <p className="text-text-secondary">
                Capture machine operations with your device camera or upload existing training videos. 
                Our AI automatically generates transcripts and suggests tags.
              </p>
            </div>

            <div className="text-center animate-fade-in-up">
              <div className="w-16 h-16 bg-brand-primary text-state-text-on-colored rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-4">Organize & Share</h3>
              <p className="text-text-secondary">
                Organize clips into structured courses with quizzes. 
                Assign content to specific teams or customers with role-based access.
              </p>
            </div>

            <div className="text-center animate-fade-in-up">
              <div className="w-16 h-16 bg-brand-primary text-state-text-on-colored rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-4">Track & Improve</h3>
              <p className="text-text-secondary">
                Monitor training progress with detailed analytics. 
                Generate certificates and reports to measure training effectiveness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-sunken">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-text-secondary">
              Choose the plan that fits your organization's needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="animate-fade-in-up">
              <CardHeader>
                <CardTitle>Basic</CardTitle>
                <CardDescription>Perfect for small teams</CardDescription>
                <div className="text-3xl font-bold text-text-primary">$29<span className="text-lg text-text-secondary">/month</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-state-success mr-3" />
                    Up to 10 users
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-state-success mr-3" />
                    100 video clips
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-state-success mr-3" />
                    Basic analytics
                  </li>
                </ul>
                <Button className="w-full mt-6">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="animate-fade-in-up border-brand-primary relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-brand-primary text-state-text-on-colored px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <CardHeader>
                <CardTitle>Professional</CardTitle>
                <CardDescription>For growing organizations</CardDescription>
                <div className="text-3xl font-bold text-text-primary">$99<span className="text-lg text-text-secondary">/month</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-state-success mr-3" />
                    Up to 50 users
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-state-success mr-3" />
                    Unlimited video clips
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-state-success mr-3" />
                    Advanced analytics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-state-success mr-3" />
                    Course builder
                  </li>
                </ul>
                <Button className="w-full mt-6">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="animate-fade-in-up">
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>For large organizations</CardDescription>
                <div className="text-3xl font-bold text-text-primary">Custom</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-state-success mr-3" />
                    Unlimited users
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-state-success mr-3" />
                    Unlimited video clips
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-state-success mr-3" />
                    Custom integrations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-state-success mr-3" />
                    Priority support
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-6">Contact Sales</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            Ready to Transform Your Training?
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            Join leading manufacturers who trust Winbro Training Reels for their training needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-sunken border-t border-divider-strong py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-4">Product</h3>
              <ul className="space-y-2 text-text-secondary">
                <li><a href="#" className="hover:text-brand-primary">Features</a></li>
                <li><a href="#" className="hover:text-brand-primary">Pricing</a></li>
                <li><a href="#" className="hover:text-brand-primary">Security</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-4">Company</h3>
              <ul className="space-y-2 text-text-secondary">
                <li><a href="#" className="hover:text-brand-primary">About</a></li>
                <li><a href="#" className="hover:text-brand-primary">Contact</a></li>
                <li><a href="#" className="hover:text-brand-primary">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-4">Support</h3>
              <ul className="space-y-2 text-text-secondary">
                <li><a href="#" className="hover:text-brand-primary">Help Center</a></li>
                <li><a href="#" className="hover:text-brand-primary">Documentation</a></li>
                <li><a href="#" className="hover:text-brand-primary">Status</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-4">Legal</h3>
              <ul className="space-y-2 text-text-secondary">
                <li><a href="#" className="hover:text-brand-primary">Privacy</a></li>
                <li><a href="#" className="hover:text-brand-primary">Terms</a></li>
                <li><a href="#" className="hover:text-brand-primary">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-divider-subtle mt-8 pt-8 text-center text-text-secondary">
            <p>&copy; 2024 Winbro Training Reels. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
