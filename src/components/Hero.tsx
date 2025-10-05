import { ArrowRight, TrendingUp, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-fintech.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Financial Dashboard"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/90 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Smart Financial Management</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
            Take Control of Your{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Financial Future
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Track expenses, manage budgets, and achieve your financial goals with our intuitive dashboard
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="gradient-primary text-lg px-8 group">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              View Demo
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors">
              <div className="p-3 rounded-xl bg-primary/10">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Real-time Insights</h3>
              <p className="text-sm text-muted-foreground text-center">
                Monitor your finances with live data visualization
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/50 transition-colors">
              <div className="p-3 rounded-xl bg-accent/10">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg">Bank-level Security</h3>
              <p className="text-sm text-muted-foreground text-center">
                Your financial data is encrypted and protected
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors">
              <div className="p-3 rounded-xl bg-primary/10">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Smart Automation</h3>
              <p className="text-sm text-muted-foreground text-center">
                Automated budgeting and expense categorization
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
