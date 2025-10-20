import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  DollarSign, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle, 
  Clock,
  Download,
  Search,
  Filter,
  FileText,
  BarChart3,
  Wallet,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";

const FinancialPortal = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data
  const stats = [
    { label: "Total Budget", value: "₹50,00,000", change: "+12%", trend: "up", icon: Wallet },
    { label: "Disbursed", value: "₹35,50,000", change: "71%", trend: "up", icon: TrendingUp },
    { label: "Pending", value: "₹14,50,000", change: "29%", trend: "down", icon: Clock },
    { label: "Cases Funded", value: "142", change: "+8", trend: "up", icon: CheckCircle },
  ];

  const recentDisbursements = [
    { id: "DS001", caseId: "JWD-2024-001", amount: "₹50,000", date: "2024-01-15", status: "Completed", officer: "R. Kumar" },
    { id: "DS002", caseId: "JWD-2024-002", amount: "₹75,000", date: "2024-01-14", status: "Completed", officer: "S. Sharma" },
    { id: "DS003", caseId: "JWD-2024-003", amount: "₹45,000", date: "2024-01-13", status: "Pending", officer: "M. Gupta" },
    { id: "DS004", caseId: "JWD-2024-004", amount: "₹60,000", date: "2024-01-12", status: "In Process", officer: "A. Patel" },
    { id: "DS005", caseId: "JWD-2024-005", amount: "₹55,000", date: "2024-01-11", status: "Completed", officer: "R. Kumar" },
  ];

  const budgetAllocations = [
    { category: "Emergency Relief", allocated: "₹15,00,000", spent: "₹10,50,000", percentage: 70 },
    { category: "Medical Assistance", allocated: "₹12,00,000", spent: "₹8,40,000", percentage: 70 },
    { category: "Legal Support", allocated: "₹10,00,000", spent: "₹7,00,000", percentage: 70 },
    { category: "Rehabilitation", allocated: "₹8,00,000", spent: "₹5,60,000", percentage: 70 },
    { category: "Education Support", allocated: "₹5,00,000", spent: "₹4,00,000", percentage: 80 },
  ];

  const auditLogs = [
    { id: "AL001", action: "Fund Transfer", user: "Finance Officer A", timestamp: "2024-01-15 14:30", details: "₹50,000 to JWD-2024-001" },
    { id: "AL002", action: "Budget Approval", user: "Director Finance", timestamp: "2024-01-15 12:00", details: "Q1 2024 Budget Approved" },
    { id: "AL003", action: "Document Verification", user: "Auditor B", timestamp: "2024-01-15 10:15", details: "Case JWD-2024-002 verified" },
    { id: "AL004", action: "Report Generated", user: "System", timestamp: "2024-01-15 09:00", details: "Monthly Financial Report" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-12 border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl font-bold mb-4 text-foreground">Financial Management Portal</h1>
              <p className="text-lg text-muted-foreground">
                Transparent fund tracking, budget allocation, and comprehensive financial oversight
              </p>
            </div>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="py-8 border-b bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <Card key={stat.label}>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                        <p className="text-2xl font-bold">{stat.value}</p>
                        <div className="flex items-center gap-1 mt-2">
                          {stat.trend === "up" ? (
                            <ArrowUpRight className="h-4 w-4 text-green-500" />
                          ) : (
                            <ArrowDownRight className="h-4 w-4 text-red-500" />
                          )}
                          <span className={`text-sm ${stat.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                            {stat.change}
                          </span>
                        </div>
                      </div>
                      <stat.icon className="h-10 w-10 text-primary/60" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content Tabs */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="disbursements" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
                <TabsTrigger value="disbursements">Disbursements</TabsTrigger>
                <TabsTrigger value="budget">Budget Allocation</TabsTrigger>
                <TabsTrigger value="audit">Audit Trail</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
              </TabsList>

              {/* Disbursements Tab */}
              <TabsContent value="disbursements" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Disbursements</CardTitle>
                    <CardDescription>Track all fund transfers and payment statuses</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-4">
                      <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="Search by case ID or disbursement ID..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                      <Button variant="outline">
                        <Filter className="h-4 w-4 mr-2" />
                        Filter
                      </Button>
                      <Button>
                        <Download className="h-4 w-4 mr-2" />
                        Export
                      </Button>
                    </div>

                    <div className="rounded-md border">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Disbursement ID</TableHead>
                            <TableHead>Case ID</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Officer</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {recentDisbursements.map((disbursement) => (
                            <TableRow key={disbursement.id}>
                              <TableCell className="font-medium">{disbursement.id}</TableCell>
                              <TableCell>{disbursement.caseId}</TableCell>
                              <TableCell className="font-semibold">{disbursement.amount}</TableCell>
                              <TableCell>{disbursement.date}</TableCell>
                              <TableCell>{disbursement.officer}</TableCell>
                              <TableCell>
                                <Badge 
                                  variant={
                                    disbursement.status === "Completed" ? "default" : 
                                    disbursement.status === "Pending" ? "secondary" : 
                                    "outline"
                                  }
                                >
                                  {disbursement.status}
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <Button variant="ghost" size="sm">View</Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Budget Allocation Tab */}
              <TabsContent value="budget" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Budget Allocation by Category</CardTitle>
                    <CardDescription>Monitor spending across different relief categories</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {budgetAllocations.map((item) => (
                      <div key={item.category} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">{item.category}</p>
                            <p className="text-sm text-muted-foreground">
                              {item.spent} of {item.allocated}
                            </p>
                          </div>
                          <Badge variant="outline">{item.percentage}%</Badge>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div 
                            className="bg-primary rounded-full h-2 transition-all"
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                    <div className="pt-6 border-t">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Card>
                          <CardContent className="pt-6">
                            <div className="flex items-center gap-3">
                              <DollarSign className="h-8 w-8 text-primary" />
                              <div>
                                <p className="text-sm text-muted-foreground">Utilization Rate</p>
                                <p className="text-2xl font-bold">71%</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="pt-6">
                            <div className="flex items-center gap-3">
                              <TrendingUp className="h-8 w-8 text-green-500" />
                              <div>
                                <p className="text-sm text-muted-foreground">Avg. Processing Time</p>
                                <p className="text-2xl font-bold">2.5 days</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="pt-6">
                            <div className="flex items-center gap-3">
                              <CheckCircle className="h-8 w-8 text-blue-500" />
                              <div>
                                <p className="text-sm text-muted-foreground">Success Rate</p>
                                <p className="text-2xl font-bold">98.5%</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Audit Trail Tab */}
              <TabsContent value="audit" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Audit Trail</CardTitle>
                    <CardDescription>Complete log of all financial transactions and activities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {auditLogs.map((log) => (
                        <div key={log.id} className="flex items-start gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                          <div className="mt-1">
                            <FileText className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <p className="font-medium">{log.action}</p>
                              <Badge variant="outline">{log.id}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-1">{log.details}</p>
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                              <span>{log.user}</span>
                              <span>•</span>
                              <span>{log.timestamp}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center justify-between p-4 bg-muted/30 rounded-lg border-l-4 border-primary">
                      <div className="flex items-center gap-3">
                        <AlertCircle className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">Audit Compliance</p>
                          <p className="text-sm text-muted-foreground">All transactions are logged and verified</p>
                        </div>
                      </div>
                      <Button variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        Export Logs
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Reports Tab */}
              <TabsContent value="reports" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <BarChart3 className="h-10 w-10 text-primary mb-2" />
                      <CardTitle className="text-lg">Monthly Financial Report</CardTitle>
                      <CardDescription>Comprehensive overview of monthly transactions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full">Generate Report</Button>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <FileText className="h-10 w-10 text-primary mb-2" />
                      <CardTitle className="text-lg">Disbursement Summary</CardTitle>
                      <CardDescription>Detailed breakdown of all disbursements</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full">Generate Report</Button>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <TrendingUp className="h-10 w-10 text-primary mb-2" />
                      <CardTitle className="text-lg">Budget Utilization</CardTitle>
                      <CardDescription>Analysis of budget spending patterns</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full">Generate Report</Button>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <CheckCircle className="h-10 w-10 text-primary mb-2" />
                      <CardTitle className="text-lg">Compliance Report</CardTitle>
                      <CardDescription>Audit and compliance status overview</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full">Generate Report</Button>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <DollarSign className="h-10 w-10 text-primary mb-2" />
                      <CardTitle className="text-lg">Fund Performance</CardTitle>
                      <CardDescription>Efficiency and impact metrics</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full">Generate Report</Button>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <AlertCircle className="h-10 w-10 text-primary mb-2" />
                      <CardTitle className="text-lg">Anomaly Detection</CardTitle>
                      <CardDescription>Unusual patterns and alerts</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full">Generate Report</Button>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <FileText className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">Custom Report Builder</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Create custom reports with specific parameters and date ranges
                        </p>
                        <Button>Build Custom Report</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Help Section */}
        <section className="py-12 bg-muted/30 border-t">
          <div className="container mx-auto px-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Need Assistance?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      For financial queries, budget approvals, or technical support, contact the Finance Department
                    </p>
                    <div className="flex gap-4">
                      <Button>Contact Support</Button>
                      <Button variant="outline">View Documentation</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FinancialPortal;
