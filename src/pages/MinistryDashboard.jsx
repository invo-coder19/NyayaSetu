import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  LayoutDashboard, 
  Users, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle2,
  Activity,
  FileText,
  Settings,
  BarChart3,
  Shield,
  Download,
  Search,
  Filter
} from "lucide-react";

const MinistryDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <LayoutDashboard className="w-10 h-10 text-primary" />
            <h1 className="text-4xl font-bold">Ministry Dashboard</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Comprehensive oversight and monitoring of the Justice with Dignity system
          </p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-8 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Cases</CardTitle>
                <FileText className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12,847</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+12.5%</span> from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Active Officers</CardTitle>
                <Users className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,243</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">98.2%</span> system adoption
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">System Health</CardTitle>
                <Activity className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">99.8%</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">Excellent</span> uptime
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Funds Disbursed</CardTitle>
                <TrendingUp className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹845.2Cr</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">87.3%</span> of allocated budget
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 py-12 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
              <TabsTrigger value="policy">Policy</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>System Performance Summary</CardTitle>
                    <CardDescription>Last 30 days overview</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">Case Processing Rate</span>
                        <span className="text-sm font-medium">92%</span>
                      </div>
                      <Progress value={92} />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">Officer Efficiency</span>
                        <span className="text-sm font-medium">88%</span>
                      </div>
                      <Progress value={88} />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">Fund Utilization</span>
                        <span className="text-sm font-medium">87%</span>
                      </div>
                      <Progress value={87} />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">Victim Satisfaction</span>
                        <span className="text-sm font-medium">94%</span>
                      </div>
                      <Progress value={94} />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recent Alerts</CardTitle>
                    <CardDescription>System notifications and warnings</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-green-50 dark:bg-green-950/20">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">System Update Completed</p>
                        <p className="text-xs text-muted-foreground">v2.4.1 deployed successfully - 2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-yellow-50 dark:bg-yellow-950/20">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">High Case Load Alert</p>
                        <p className="text-xs text-muted-foreground">District: Mumbai - 340 pending cases - 5 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/20">
                      <Activity className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Budget Milestone Reached</p>
                        <p className="text-xs text-muted-foreground">80% of Q1 budget utilized - 1 day ago</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>District Performance Overview</CardTitle>
                  <CardDescription>Comparative analysis across regions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { district: "Mumbai", cases: 2847, efficiency: 94, budget: 89 },
                      { district: "Delhi", cases: 2156, efficiency: 91, budget: 85 },
                      { district: "Bangalore", cases: 1893, efficiency: 88, budget: 92 },
                      { district: "Chennai", cases: 1654, efficiency: 86, budget: 87 },
                      { district: "Kolkata", cases: 1432, efficiency: 89, budget: 83 }
                    ].map((item) => (
                      <div key={item.district} className="flex items-center gap-4">
                        <div className="w-32 font-medium">{item.district}</div>
                        <div className="flex-1 grid grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Cases: </span>
                            <span className="font-medium">{item.cases}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Efficiency: </span>
                            <span className="font-medium">{item.efficiency}%</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Budget: </span>
                            <span className="font-medium">{item.budget}%</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
           {/* Performance Tab */}
            <TabsContent value="performance" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Avg. Case Processing Time</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">14.2 days</div>
                    <p className="text-sm text-muted-foreground mt-1">
                      <span className="text-green-600">-2.3 days</span> improvement
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Officer Productivity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">10.3 cases/day</div>
                    <p className="text-sm text-muted-foreground mt-1">
                      <span className="text-green-600">+8.4%</span> vs target
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">AI Accuracy Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">96.8%</div>
                    <p className="text-sm text-muted-foreground mt-1">
                      <span className="text-green-600">+1.2%</span> this quarter
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Performance Trends</CardTitle>
                  <CardDescription>Month-over-month analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center border-2 border-dashed rounded-lg">
                    <div className="text-center text-muted-foreground">
                      <BarChart3 className="w-12 h-12 mx-auto mb-2 opacity-50" />
                      <p>Performance charts visualization</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Performing Officers</CardTitle>
                  <CardDescription>Based on case resolution and quality metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { name: "Rajesh Kumar", cases: 487, score: 98, district: "Mumbai" },
                      { name: "Priya Sharma", cases: 456, score: 97, district: "Delhi" },
                      { name: "Amit Patel", cases: 445, score: 96, district: "Bangalore" },
                      { name: "Sneha Reddy", cases: 432, score: 95, district: "Hyderabad" },
                      { name: "Vikram Singh", cases: 428, score: 95, district: "Chennai" }
                    ].map((officer, index) => (
                      <div key={officer.name} className="flex items-center gap-4 p-3 rounded-lg border">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">{officer.name}</div>
                          <div className="text-sm text-muted-foreground">{officer.district}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">{officer.cases} cases</div>
                          <Badge variant="secondary">{officer.score}% score</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Monitoring Tab */}
            <TabsContent value="monitoring" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Real-Time System Status</CardTitle>
                    <CardDescription>Current operational metrics</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>API Response Time</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        145ms
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Database Load</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        32%
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Active Sessions</span>
                      <Badge variant="secondary">1,847 users</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Error Rate</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        0.02%
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Uptime (30d)</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        99.97%
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Security Monitoring</CardTitle>
                    <CardDescription>Access and threat detection</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Failed Login Attempts</span>
                      <Badge variant="secondary">23 (24h)</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Suspicious Activities</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        0 detected
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Data Encryption</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                        <Shield className="w-3 h-3 mr-1" />
                        Active
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Backup Status</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        Current
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Last Security Audit</span>
                      <Badge variant="secondary">2 days ago</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Active Incidents</CardTitle>
                  <CardDescription>Current issues and resolutions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8 text-muted-foreground">
                    <CheckCircle2 className="w-12 h-12 mx-auto mb-2 text-green-600" />
                    <p className="font-medium">No Active Incidents</p>
                    <p className="text-sm">All systems operational</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Resource Utilization</CardTitle>
                  <CardDescription>Infrastructure usage metrics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Server CPU Usage</span>
                      <span className="text-sm font-medium">34%</span>
                    </div>
                    <Progress value={34} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Memory Usage</span>
                      <span className="text-sm font-medium">58%</span>
                    </div>
                    <Progress value={58} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Storage Used</span>
                      <span className="text-sm font-medium">67%</span>
                    </div>
                    <Progress value={67} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Bandwidth Usage</span>
                      <span className="text-sm font-medium">42%</span>
                    </div>
                    <Progress value={42} />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Policy Tab */}
            <TabsContent value="policy" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Active Policies & Guidelines</CardTitle>
                  <CardDescription>Current operational policies and compliance requirements</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { name: "Case Prioritization Policy", version: "v2.3", updated: "2024-01-15", status: "Active" },
                      { name: "Fund Disbursement Guidelines", version: "v1.8", updated: "2024-01-10", status: "Active" },
                      { name: "Data Privacy Protocol", version: "v3.1", updated: "2023-12-20", status: "Active" },
                      { name: "Officer Code of Conduct", version: "v2.0", updated: "2023-12-15", status: "Active" },
                      { name: "AI Ethics Framework", version: "v1.5", updated: "2023-11-28", status: "Under Review" }
                    ].map((policy) => (
                      <div key={policy.name} className="flex items-center justify-between p-4 rounded-lg border">
                        <div className="flex-1">
                          <div className="font-medium">{policy.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {policy.version} • Updated: {policy.updated}
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant={policy.status === "Active" ? "secondary" : "outline"}>
                            {policy.status}
                          </Badge>
                          <Button variant="ghost" size="sm">
                            <FileText className="w-4 h-4 mr-1" />
                            View
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Compliance Status</CardTitle>
                    <CardDescription>Adherence to policies and regulations</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">Data Protection Compliance</span>
                        <span className="text-sm font-medium">100%</span>
                      </div>
                      <Progress value={100} />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">Fund Utilization Compliance</span>
                        <span className="text-sm font-medium">98%</span>
                      </div>
                      <Progress value={98} />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">Officer Training Completion</span>
                        <span className="text-sm font-medium">94%</span>
                      </div>
                      <Progress value={94} />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">Audit Trail Completeness</span>
                        <span className="text-sm font-medium">100%</span>
                      </div>
                      <Progress value={100} />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Policy Violations</CardTitle>
                    <CardDescription>Last 30 days</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Minor Violations</span>
                        <Badge variant="outline">7</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Major Violations</span>
                        <Badge variant="outline" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100">
                          2
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Critical Violations</span>
                        <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                          0
                        </Badge>
                      </div>
                      <div className="pt-4 border-t">
                        <Button variant="outline" className="w-full">
                          View Detailed Report
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Policy Updates & Amendments</CardTitle>
                  <CardDescription>Proposed changes and drafts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { title: "Amendment: AI Verification Threshold Update", stage: "Draft", date: "2024-02-01" },
                      { title: "New Policy: Cross-State Case Coordination", stage: "Review", date: "2024-01-28" },
                      { title: "Revision: Fund Allocation Criteria", stage: "Approval Pending", date: "2024-01-25" }
                    ].map((update) => (
                      <div key={update.title} className="flex items-center justify-between p-3 rounded-lg border">
                        <div className="flex-1">
                          <div className="font-medium text-sm">{update.title}</div>
                          <div className="text-xs text-muted-foreground">Proposed: {update.date}</div>
                        </div>
                        <Badge variant="outline">{update.stage}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Reports Tab */}
            <TabsContent value="reports" className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search reports..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button variant="outline">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Monthly Executive Summary",
                    description: "Comprehensive overview of all operations",
                    icon: FileText,
                    lastGenerated: "2024-01-31"
                  },
                  {
                    title: "Performance Analytics",
                    description: "Detailed performance metrics and trends",
                    icon: BarChart3,
                    lastGenerated: "2024-02-01"
                  },
                  {
                    title: "Financial Statement",
                    description: "Budget utilization and fund disbursement",
                    icon: TrendingUp,
                    lastGenerated: "2024-01-31"
                  },
                  {
                    title: "Compliance Audit Report",
                    description: "Policy adherence and violations",
                    icon: Shield,
                    lastGenerated: "2024-01-28"
                  },
                  {
                    title: "District Comparison Analysis",
                    description: "Comparative performance across regions",
                    icon: BarChart3,
                    lastGenerated: "2024-01-30"
                  },
                  {
                    title: "System Health Report",
                    description: "Infrastructure and technical metrics",
                    icon: Activity,
                    lastGenerated: "2024-02-01"
                  }
                ].map((report) => (
                  <Card key={report.title} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <report.icon className="w-8 h-8 text-primary mb-2" />
                        <Button variant="ghost" size="sm">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                      <CardTitle className="text-base">{report.title}</CardTitle>
                      <CardDescription>{report.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          Last: {report.lastGenerated}
                        </span>
                        <Button size="sm">Generate</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Custom Report Builder</CardTitle>
                  <CardDescription>Create customized reports with specific parameters</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Report Type</label>
                      <select className="w-full px-3 py-2 rounded-md border bg-background">
                        <option>Performance Analysis</option>
                        <option>Financial Summary</option>
                        <option>Compliance Report</option>
                        <option>Custom Query</option>
                      </select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Date Range</label>
                        <select className="w-full px-3 py-2 rounded-md border bg-background">
                          <option>Last 7 days</option>
                          <option>Last 30 days</option>
                          <option>Last 90 days</option>
                          <option>Custom Range</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Region</label>
                        <select className="w-full px-3 py-2 rounded-md border bg-background">
                          <option>All Districts</option>
                          <option>Mumbai</option>
                          <option>Delhi</option>
                          <option>Bangalore</option>
                        </select>
                      </div>
                    </div>
                    <Button className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Generate Custom Report
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-8 px-4 bg-muted/50">
        <div className="container mx-auto text-center">
          <h3 className="text-lg font-semibold mb-2">Need Technical Support?</h3>
          <p className="text-muted-foreground mb-4">
            Contact the system administration team for dashboard access or technical issues
          </p>
          <Button variant="outline">
            <Settings className="w-4 h-4 mr-2" />
            System Settings
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MinistryDashboard;
