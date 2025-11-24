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
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const MinistryDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Performance trend data
  const performanceData = [
    { month: "Jan", avgProcessingDays: 16.5 },
    { month: "Feb", avgProcessingDays: 15.2 },
    { month: "Mar", avgProcessingDays: 14.8 },
    { month: "Apr", avgProcessingDays: 14.0 },
    { month: "May", avgProcessingDays: 13.5 },
    { month: "Jun", avgProcessingDays: 14.2 },
  ];

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
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
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

              {/* Performance Trends Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Performance Trends</CardTitle>
                  <CardDescription>Month-over-month analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={performanceData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                        <XAxis
                          dataKey="month"
                          className="text-sm"
                          tick={{ fill: 'hsl(var(--muted-foreground))' }}
                        />
                        <YAxis
                          label={{ value: 'Avg. Processing Days', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: 'hsl(var(--muted-foreground))' } }}
                          className="text-sm"
                          tick={{ fill: 'hsl(var(--muted-foreground))' }}
                        />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: 'hsl(var(--background))',
                            border: '1px solid hsl(var(--border))',
                            borderRadius: '0.5rem'
                          }}
                          labelStyle={{ color: 'hsl(var(--foreground))' }}
                        />
                        <Line
                          type="monotone"
                          dataKey="avgProcessingDays"
                          stroke="hsl(var(--primary))"
                          strokeWidth={2}
                          dot={{ fill: 'hsl(var(--primary))', r: 4 }}
                          activeDot={{ r: 6 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
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
