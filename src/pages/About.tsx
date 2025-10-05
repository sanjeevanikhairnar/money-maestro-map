import { Navbar } from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, TrendingUp, Lock, Globe, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "Your financial data is encrypted with industry-standard 256-bit encryption and protected by advanced security protocols."
    },
    {
      icon: Zap,
      title: "Real-Time Sync",
      description: "Instant updates across all your devices. Your financial data is always current, wherever you are."
    },
    {
      icon: TrendingUp,
      title: "Smart Insights",
      description: "AI-powered analytics help you understand spending patterns and make better financial decisions."
    },
    {
      icon: Lock,
      title: "Privacy First",
      description: "We never sell your data. Your financial information stays private and is used only to serve you."
    },
    {
      icon: Globe,
      title: "Multi-Currency",
      description: "Support for multiple currencies with real-time exchange rates for international transactions."
    },
    {
      icon: Users,
      title: "Family Sharing",
      description: "Collaborate on budgets and goals with family members while maintaining individual privacy."
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <h1 className="text-5xl font-bold">
            About{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              FinanceFlow
            </span>
          </h1>
          <p className="text-xl text-muted-foreground text-balance">
            Empowering individuals to take control of their financial future through intelligent tools and insights
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="border-border/50 max-w-4xl mx-auto mb-16">
          <CardContent className="pt-8 pb-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Our Mission</h2>
            <p className="text-lg text-muted-foreground text-center text-balance leading-relaxed">
              We believe everyone deserves access to powerful financial tools. FinanceFlow was built to democratize 
              personal finance management, making it simple, secure, and accessible for everyone—from students 
              managing their first budget to families planning for their future.
            </p>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose FinanceFlow?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/30 transition-all">
                <CardContent className="pt-8 pb-6 space-y-4">
                  <div className="p-3 rounded-xl bg-primary/10 w-fit">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          <div className="text-center space-y-2">
            <p className="text-4xl font-bold text-primary">500K+</p>
            <p className="text-muted-foreground">Active Users</p>
          </div>
          <div className="text-center space-y-2">
            <p className="text-4xl font-bold text-success">$2B+</p>
            <p className="text-muted-foreground">Transactions Tracked</p>
          </div>
          <div className="text-center space-y-2">
            <p className="text-4xl font-bold text-accent">99.9%</p>
            <p className="text-muted-foreground">Uptime</p>
          </div>
        </div>

        {/* Story Section */}
        <Card className="border-border/50 max-w-4xl mx-auto gradient-primary">
          <CardContent className="pt-8 pb-8 text-white">
            <h2 className="text-2xl font-bold mb-4 text-center">Our Story</h2>
            <div className="space-y-4 text-white/90 leading-relaxed">
              <p>
                FinanceFlow was born from a simple frustration: existing personal finance tools were either 
                too complex for everyday users or too basic to provide meaningful insights.
              </p>
              <p>
                Founded in 2020 by a team of fintech experts and UX designers, we set out to create something 
                different—a platform that combines powerful financial analytics with an intuitive, beautiful 
                interface that anyone can use.
              </p>
              <p>
                Today, we're proud to serve hundreds of thousands of users worldwide, helping them save more, 
                spend smarter, and achieve their financial goals.
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default About;
