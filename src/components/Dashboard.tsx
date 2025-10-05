import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, TrendingUp, TrendingDown, Wallet, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export const Dashboard = () => {
  const stats = [
    {
      title: "Total Balance",
      value: "$24,580.00",
      change: "+12.5%",
      trend: "up",
      icon: Wallet,
      color: "text-primary",
    },
    {
      title: "Monthly Income",
      value: "$8,250.00",
      change: "+5.2%",
      trend: "up",
      icon: TrendingUp,
      color: "text-success",
    },
    {
      title: "Monthly Expenses",
      value: "$4,120.00",
      change: "-8.1%",
      trend: "down",
      icon: TrendingDown,
      color: "text-expense",
    },
    {
      title: "Savings Goal",
      value: "$15,000.00",
      change: "78% complete",
      trend: "up",
      icon: DollarSign,
      color: "text-accent",
    },
  ];

  const budgets = [
    { category: "Food & Dining", spent: 620, budget: 800, color: "bg-chart-3" },
    { category: "Transportation", spent: 280, budget: 400, color: "bg-chart-1" },
    { category: "Entertainment", spent: 145, budget: 300, color: "bg-chart-4" },
    { category: "Shopping", spent: 890, budget: 1000, color: "bg-chart-5" },
  ];

  const transactions = [
    { name: "Salary Deposit", amount: 8250, type: "income", date: "Today", category: "Income" },
    { name: "Grocery Store", amount: -125.50, type: "expense", date: "Today", category: "Food" },
    { name: "Netflix Subscription", amount: -15.99, type: "expense", date: "Yesterday", category: "Entertainment" },
    { name: "Uber Ride", amount: -24.30, type: "expense", date: "Yesterday", category: "Transportation" },
    { name: "Freelance Project", amount: 1500, type: "income", date: "2 days ago", category: "Income" },
  ];

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="container mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold">Financial Overview</h2>
          <p className="text-muted-foreground text-lg">Track your spending, income, and savings all in one place</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card key={stat.title} className="border-border/50 hover:border-primary/30 transition-colors">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className={`text-xs flex items-center gap-1 mt-1 ${
                  stat.trend === "up" ? "text-success" : "text-muted-foreground"
                }`}>
                  {stat.trend === "up" ? (
                    <ArrowUpRight className="w-3 h-3" />
                  ) : (
                    <ArrowDownRight className="w-3 h-3" />
                  )}
                  {stat.change}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Budget Progress */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Budget Overview</CardTitle>
              <CardDescription>Your spending vs. budget for this month</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {budgets.map((budget) => {
                const percentage = (budget.spent / budget.budget) * 100;
                return (
                  <div key={budget.category} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{budget.category}</span>
                      <span className="text-muted-foreground">
                        ${budget.spent} / ${budget.budget}
                      </span>
                    </div>
                    <Progress value={percentage} className="h-2" />
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Recent Transactions */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Your latest financial activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {transactions.map((transaction, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-border/50 last:border-0">
                    <div className="space-y-1">
                      <p className="font-medium text-sm">{transaction.name}</p>
                      <p className="text-xs text-muted-foreground">{transaction.date} • {transaction.category}</p>
                    </div>
                    <span className={`font-semibold ${
                      transaction.type === "income" ? "text-success" : "text-foreground"
                    }`}>
                      {transaction.type === "income" ? "+" : ""}{transaction.amount.toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
