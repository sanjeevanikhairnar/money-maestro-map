import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Download, Filter, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { cn } from "@/lib/utils";

const Transactions = () => {
  const transactions = [
    { id: 1, name: "Salary Deposit", amount: 8250, type: "income", date: "2024-01-15", category: "Income", status: "completed" },
    { id: 2, name: "Rent Payment", amount: -2100, type: "expense", date: "2024-01-14", category: "Housing", status: "completed" },
    { id: 3, name: "Grocery Store", amount: -125.50, type: "expense", date: "2024-01-14", category: "Food", status: "completed" },
    { id: 4, name: "Netflix Subscription", amount: -15.99, type: "expense", date: "2024-01-13", category: "Entertainment", status: "completed" },
    { id: 5, name: "Uber Ride", amount: -24.30, type: "expense", date: "2024-01-13", category: "Transportation", status: "completed" },
    { id: 6, name: "Freelance Project", amount: 1500, type: "income", date: "2024-01-12", category: "Income", status: "completed" },
    { id: 7, name: "Electric Bill", amount: -89.50, type: "expense", date: "2024-01-11", category: "Utilities", status: "completed" },
    { id: 8, name: "Restaurant", amount: -67.80, type: "expense", date: "2024-01-10", category: "Food", status: "completed" },
    { id: 9, name: "Gym Membership", amount: -49.99, type: "expense", date: "2024-01-09", category: "Health", status: "pending" },
    { id: 10, name: "Online Course", amount: -199, type: "expense", date: "2024-01-08", category: "Education", status: "completed" },
    { id: 11, name: "Refund - Amazon", amount: 45.20, type: "income", date: "2024-01-07", category: "Shopping", status: "completed" },
    { id: 12, name: "Coffee Shop", amount: -12.50, type: "expense", date: "2024-01-06", category: "Food", status: "completed" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Transactions</h1>
          <p className="text-muted-foreground text-lg">View and manage all your financial transactions</p>
        </div>

        {/* Filters & Actions */}
        <Card className="border-border/50">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Search transactions..." className="pl-10" />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="gap-2">
                  <Filter className="w-4 h-4" />
                  Filter
                </Button>
                <Button variant="outline" className="gap-2">
                  <Download className="w-4 h-4" />
                  Export
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Transactions List */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>All your transactions in chronological order</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {transactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between p-4 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-muted/30 transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "p-2 rounded-lg",
                      transaction.type === "income" ? "bg-success/10" : "bg-muted"
                    )}>
                      {transaction.type === "income" ? (
                        <ArrowDownRight className="w-5 h-5 text-success" />
                      ) : (
                        <ArrowUpRight className="w-5 h-5 text-foreground" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{transaction.name}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <p className="text-sm text-muted-foreground">{transaction.date}</p>
                        <span className="text-muted-foreground">•</span>
                        <Badge variant="outline" className="text-xs">
                          {transaction.category}
                        </Badge>
                        {transaction.status === "pending" && (
                          <Badge variant="secondary" className="text-xs">
                            Pending
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  <span className={cn(
                    "font-semibold text-lg",
                    transaction.type === "income" ? "text-success" : "text-foreground"
                  )}>
                    {transaction.type === "income" ? "+" : "-"}${Math.abs(transaction.amount).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Transactions;
