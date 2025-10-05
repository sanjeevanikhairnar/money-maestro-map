import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Plus, Target, Calendar, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const Goals = () => {
  const goals = [
    {
      id: 1,
      name: "Emergency Fund",
      target: 15000,
      current: 11700,
      deadline: "Dec 2024",
      icon: "🛡️",
      color: "from-chart-1 to-chart-2",
      monthlyContribution: 500
    },
    {
      id: 2,
      name: "Vacation to Europe",
      target: 5000,
      current: 3200,
      deadline: "Jun 2024",
      icon: "✈️",
      color: "from-chart-3 to-chart-4",
      monthlyContribution: 400
    },
    {
      id: 3,
      name: "New Laptop",
      target: 2500,
      current: 1850,
      deadline: "Mar 2024",
      icon: "💻",
      color: "from-chart-4 to-chart-5",
      monthlyContribution: 250
    },
    {
      id: 4,
      name: "Investment Portfolio",
      target: 25000,
      current: 8500,
      deadline: "Dec 2025",
      icon: "📈",
      color: "from-success to-chart-2",
      monthlyContribution: 750
    },
    {
      id: 5,
      name: "Home Down Payment",
      target: 50000,
      current: 22000,
      deadline: "Dec 2026",
      icon: "🏡",
      color: "from-primary to-accent",
      monthlyContribution: 1000
    },
  ];

  const totalTarget = goals.reduce((sum, g) => sum + g.target, 0);
  const totalSaved = goals.reduce((sum, g) => sum + g.current, 0);
  const totalProgress = (totalSaved / totalTarget) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">Savings Goals</h1>
            <p className="text-muted-foreground text-lg">Track progress towards your financial objectives</p>
          </div>
          <Button className="gradient-primary gap-2">
            <Plus className="w-4 h-4" />
            New Goal
          </Button>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-border/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Saved</CardTitle>
              <Target className="h-5 w-5 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">${totalSaved.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Across {goals.length} goals
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Target</CardTitle>
              <TrendingUp className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalTarget.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {totalProgress.toFixed(1)}% complete
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Remaining</CardTitle>
              <Calendar className="h-5 w-5 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${(totalTarget - totalSaved).toLocaleString()}</div>
              <p className="text-xs text-muted-foreground mt-1">
                To reach all goals
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Goals List */}
        <div className="space-y-6">
          {goals.map((goal) => {
            const percentage = (goal.current / goal.target) * 100;
            const remaining = goal.target - goal.current;
            
            return (
              <Card key={goal.id} className="border-border/50 hover:border-primary/30 transition-all overflow-hidden">
                <div className={cn("h-2 bg-gradient-to-r", goal.color)} style={{ width: `${percentage}%` }} />
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <span className="text-4xl">{goal.icon}</span>
                      <div>
                        <CardTitle className="text-xl">{goal.name}</CardTitle>
                        <CardDescription className="flex items-center gap-2 mt-1">
                          <Calendar className="w-3 h-3" />
                          Target: {goal.deadline}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-success">${goal.current.toLocaleString()}</p>
                      <p className="text-sm text-muted-foreground">of ${goal.target.toLocaleString()}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-semibold">{percentage.toFixed(1)}%</span>
                    </div>
                    <Progress value={percentage} className="h-2" />
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Remaining</p>
                      <p className="font-semibold">${remaining.toLocaleString()}</p>
                    </div>
                    <div className="space-y-1 text-right">
                      <p className="text-sm text-muted-foreground">Monthly Contribution</p>
                      <p className="font-semibold text-primary">${goal.monthlyContribution}</p>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" className="flex-1">
                      Add Funds
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Edit Goal
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Goals;
