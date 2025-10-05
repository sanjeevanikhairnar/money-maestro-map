import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Plus, TrendingUp, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const Budget = () => {
  const budgets = [
    { 
      id: 1, 
      category: "Food & Dining", 
      spent: 620, 
      budget: 800, 
      icon: "🍔",
      color: "bg-chart-3",
      transactions: 24
    },
    { 
      id: 2, 
      category: "Transportation", 
      spent: 280, 
      budget: 400, 
      icon: "🚗",
      color: "bg-chart-1",
      transactions: 12
    },
    { 
      id: 3, 
      category: "Entertainment", 
      spent: 145, 
      budget: 300, 
      icon: "🎬",
      color: "bg-chart-4",
      transactions: 8
    },
    { 
      id: 4, 
      category: "Shopping", 
      spent: 890, 
      budget: 1000, 
      icon: "🛍️",
      color: "bg-chart-5",
      transactions: 15
    },
    { 
      id: 5, 
      category: "Health & Fitness", 
      spent: 180, 
      budget: 250, 
      icon: "💪",
      color: "bg-success",
      transactions: 6
    },
    { 
      id: 6, 
      category: "Utilities", 
      spent: 320, 
      budget: 350, 
      icon: "⚡",
      color: "bg-chart-2",
      transactions: 4
    },
  ];

  const totalBudget = budgets.reduce((sum, b) => sum + b.budget, 0);
  const totalSpent = budgets.reduce((sum, b) => sum + b.spent, 0);
  const totalPercentage = (totalSpent / totalBudget) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">Budget Management</h1>
            <p className="text-muted-foreground text-lg">Track your spending across categories</p>
          </div>
          <Button className="gradient-primary gap-2">
            <Plus className="w-4 h-4" />
            Add Category
          </Button>
        </div>

        {/* Overview Card */}
        <Card className="border-border/50 gradient-primary">
          <CardContent className="pt-6 text-white">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80">Total Monthly Budget</p>
                  <p className="text-3xl font-bold mt-1">${totalBudget.toFixed(2)}</p>
                </div>
                <div className="text-right">
                  <p className="text-white/80">Spent</p>
                  <p className="text-3xl font-bold mt-1">${totalSpent.toFixed(2)}</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white/80">Overall Progress</span>
                  <span className="font-semibold">{totalPercentage.toFixed(1)}%</span>
                </div>
                <Progress value={totalPercentage} className="h-3 bg-white/20" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Budget Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {budgets.map((budget) => {
            const percentage = (budget.spent / budget.budget) * 100;
            const isOverBudget = percentage > 90;
            
            return (
              <Card key={budget.id} className={cn(
                "border-border/50 hover:border-primary/30 transition-all cursor-pointer",
                isOverBudget && "border-expense/50"
              )}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{budget.icon}</span>
                      <div>
                        <CardTitle className="text-lg">{budget.category}</CardTitle>
                        <CardDescription>{budget.transactions} transactions</CardDescription>
                      </div>
                    </div>
                    {isOverBudget && (
                      <AlertCircle className="w-5 h-5 text-expense" />
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <p className="text-2xl font-bold">${budget.spent.toFixed(2)}</p>
                      <p className="text-sm text-muted-foreground">of ${budget.budget.toFixed(2)}</p>
                    </div>
                    <div className="text-right">
                      <p className={cn(
                        "text-lg font-semibold",
                        isOverBudget ? "text-expense" : "text-success"
                      )}>
                        {percentage.toFixed(0)}%
                      </p>
                      <p className="text-xs text-muted-foreground">
                        ${(budget.budget - budget.spent).toFixed(2)} left
                      </p>
                    </div>
                  </div>
                  <Progress 
                    value={percentage} 
                    className={cn("h-2", isOverBudget && "bg-expense/20")}
                  />
                  <Button variant="outline" className="w-full gap-2">
                    <TrendingUp className="w-4 h-4" />
                    View Details
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Budget;
