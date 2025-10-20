import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Shield,
  FileCheck,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  Clock,
  Search,
  Filter,
  Download,
  Eye,
  MessageSquare,
  BarChart3,
  Users,
  IndianRupee,
  FileText,
  Brain,
  Verified,
} from "lucide-react";

const OfficerPortal = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const mockCases = [
    {
      id: "CASE-2024-001",
      victimName: "Applicant A",
      aadhaar: "XXXX-XXXX-1234",
      district: "Mumbai",
      state: "Maharashtra",
      caseType: "Physical Assault",
      amount: "50,000",
      status: "pending_verification",
      aiScore: 94,
      submittedDate: "2024-03-15",
      priority: "high",
    },
    {
      id: "CASE-2024-002",
      victimName: "Applicant B",
      aadhaar: "XXXX-XXXX-5678",
      district: "Delhi Central",
      state: "Delhi",
      caseType: "Economic Discrimination",
      amount: "35,000",
      status: "verified",
      aiScore: 88,
      submittedDate: "2024-03-14",
      priority: "medium",
    },
    {
      id: "CASE-2024-003",
      victimName: "Applicant C",
      aadhaar: "XXXX-XXXX-9012",
      district: "Bangalore Urban",
      state: "Karnataka",
      caseType: "Social Boycott",
      amount: "75,000",
      status: "query_raised",
      aiScore: 76,
      submittedDate: "2024-03-13",
      priority: "medium",
    },
  ];

  const getStatusBadge = (status) => {
    const statusConfig = {
      pending_verification: { label: "Pending Verification", variant: "outline" },
      verified: { label: "Verified", variant: "default" },
      query_raised: { label: "Query Raised", variant: "secondary" },
      approved: { label: "Approved", variant: "default" },
    };
    const config = statusConfig[status] || { label: status, variant: "outline" };
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  const getPriorityBadge = (priority) => {
    const config = {
      high: { variant: "destructive" },
      medium: { variant: "secondary" },
      low: { variant: "default" },
    };
    return <Badge variant={config[priority]?.variant || "default"}>{priority.toUpperCase()}</Badge>;
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        <section className="py-12 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Shield className="h-10 w-10 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-2">Officer Dashboard</h1>
                <p className="text-xl text-muted-foreground">
                  Review, verify, and process relief applications with AI-powered insights
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-4 gap-4 mt-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Pending Cases</p>
                      <p className="text-3xl font-bold">24</p>
                    </div>
                    <Clock className="h-10 w-10 text-muted-foreground opacity-20" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Verified Today</p>
                      <p className="text-3xl font-bold">12</p>
                    </div>
                    <CheckCircle className="h-10 w-10 text-green-500 opacity-20" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Avg. AI Score</p>
                      <p className="text-3xl font-bold">86%</p>
                    </div>
                    <Brain className="h-10 w-10 text-primary opacity-20" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Funds Processed</p>
                      <p className="text-3xl font-bold">₹8.2L</p>
                    </div>
                    <IndianRupee className="h-10 w-10 text-green-500 opacity-20" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="cases" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="cases">
                  <FileCheck className="h-4 w-4 mr-2" />
                  Case Review
                </TabsTrigger>
                <TabsTrigger value="verification">
                  <Brain className="h-4 w-4 mr-2" />
                  AI Verification
                </TabsTrigger>
                <TabsTrigger value="disbursement">
                  <IndianRupee className="h-4 w-4 mr-2" />
                  Fund Tracking
                </TabsTrigger>
                <TabsTrigger value="analytics">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Analytics
                </TabsTrigger>
              </TabsList>

              <TabsContent value="cases">
                <Card>
                  <CardHeader>
                    <CardTitle>Submitted Cases - Review & Process</CardTitle>
                    <CardDescription>
                      Manage relief applications with intelligent prioritization and verification tools
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-4 mb-6">
                      <div className="flex-1 relative">
                        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="Search by Case ID, Aadhaar, or Victim Name..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-9"
                        />
                      </div>
                      <Button variant="outline">
                        <Filter className="h-4 w-4 mr-2" />
                        Filter
                      </Button>
                      <Button variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        Export
                      </Button>
                    </div>

                    {/* Cases List */}
                    <div className="space-y-4">
                      {mockCases.map((caseItem) => (
                        <Card key={caseItem.id} className="border-l-4 border-l-primary">
                          <CardContent className="pt-6">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <h3 className="text-lg font-semibold">{caseItem.id}</h3>
                                  {getStatusBadge(caseItem.status)}
                                  {getPriorityBadge(caseItem.priority)}
                                </div>
                                
                                <div className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                                  <div className="flex items-center gap-2">
                                    <Users className="h-4 w-4" />
                                    <span>{caseItem.victimName}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <FileText className="h-4 w-4" />
                                    <span>{caseItem.caseType}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Shield className="h-4 w-4" />
                                    <span>{caseItem.district}, {caseItem.state}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <IndianRupee className="h-4 w-4" />
                                    <span>₹{caseItem.amount}</span>
                                  </div>
                                </div>

                                <div className="mt-3">
                                  <div className="flex items-center gap-2 mb-1">
                                    <Brain className="h-4 w-4 text-primary" />
                                    <span className="text-sm font-medium">AI Verification Score: {caseItem.aiScore}%</span>
                                  </div>
                                  <Progress value={caseItem.aiScore} className="h-2" />
                                </div>
                              </div>

                              <div className="flex flex-col gap-2 min-w-[160px]">
                                <Button size="sm">
                                  <Eye className="h-4 w-4 mr-2" />
                                  View Details
                                </Button>
                                <Button size="sm" variant="outline">
                                  <MessageSquare className="h-4 w-4 mr-2" />
                                  Raise Query
                                </Button>
                                <Button size="sm" variant="default">
                                  <CheckCircle className="h-4 w-4 mr-2" />
                                  Approve
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* AI Verification Tab */}
              <TabsContent value="verification">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Brain className="h-5 w-5 text-primary" />
                        AI-Based Verification Insights
                      </CardTitle>
                      <CardDescription>
                        Machine learning models analyze case authenticity and documentation
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="p-4 bg-primary/5 rounded-lg">
                          <div className="flex items-center gap-3 mb-2">
                            <Verified className="h-5 w-5 text-primary" />
                            <h4 className="font-semibold">Document Authenticity Check</h4>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">
                            AI scans FIR copies, medical certificates, and income proofs for tampering, anomalies, or forgery.
                          </p>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-green-500"></div>
                              <span>Real documents: 89%</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                              <span>Needs review: 8%</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-red-500"></div>
                              <span>Flagged: 3%</span>
                            </div>
                          </div>
                        </div>

                        <div className="p-4 bg-secondary/5 rounded-lg">
                          <div className="flex items-center gap-3 mb-2">
                            <AlertCircle className="h-5 w-5 text-secondary" />
                            <h4 className="font-semibold">Cross-Verification Alerts</h4>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Automatic checks against NCRB data, court records, and existing claims to prevent duplicates.
                          </p>
                        </div>

                        <div className="p-4 bg-accent/5 rounded-lg">
                          <div className="flex items-center gap-3 mb-2">
                            <TrendingUp className="h-5 w-5 text-accent" />
                            <h4 className="font-semibold">Pattern Recognition</h4>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Identifies unusual patterns in submissions (location, time, claim amounts) to detect fraud.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileCheck className="h-5 w-5 text-primary" />
                        Document Validation Reports
                      </CardTitle>
                      <CardDescription>
                        Comprehensive validation status of submitted documents
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="border rounded-lg p-4">
                          <div className="flex items-center justify-between mb-3">
                            <span className="font-medium">FIR Copy</span>
                            <Badge variant="default">Verified</Badge>
                          </div>
                          <Progress value={100} className="h-2 mb-2" />
                          <p className="text-sm text-muted-foreground">
                            ✓ Police station verified ✓ Date valid ✓ Signature authentic
                          </p>
                        </div>

                        <div className="border rounded-lg p-4">
                          <div className="flex items-center justify-between mb-3">
                            <span className="font-medium">Medical Certificate</span>
                            <Badge variant="default">Verified</Badge>
                          </div>
                          <Progress value={95} className="h-2 mb-2" />
                          <p className="text-sm text-muted-foreground">
                            ✓ Hospital verified ✓ Doctor signature matched ✓ Date consistent
                          </p>
                        </div>

                        <div className="border rounded-lg p-4">
                          <div className="flex items-center justify-between mb-3">
                            <span className="font-medium">Income Certificate</span>
                            <Badge variant="secondary">Under Review</Badge>
                          </div>
                          <Progress value={70} className="h-2 mb-2" />
                          <p className="text-sm text-muted-foreground">
                            ⚠ Awaiting Tehsildar office confirmation
                          </p>
                        </div>

                        <div className="border rounded-lg p-4">
                          <div className="flex items-center justify-between mb-3">
                            <span className="font-medium">Caste Certificate</span>
                            <Badge variant="default">Verified</Badge>
                          </div>
                          <Progress value={100} className="h-2 mb-2" />
                          <p className="text-sm text-muted-foreground">
                            ✓ Government database matched ✓ Digitally signed
                          </p>
                        </div>
                      </div>

                      <Button className="w-full mt-4">
                        <Download className="h-4 w-4 mr-2" />
                        Download Full Validation Report
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Fund Tracking Tab */}
              <TabsContent value="disbursement">
                <Card>
                  <CardHeader>
                    <CardTitle>Fund Disbursal Progress Tracking</CardTitle>
                    <CardDescription>
                      Real-time coordination with financial institutions and DBT status monitoring
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="p-4 bg-primary/10 rounded-lg">
                          <p className="text-sm text-muted-foreground mb-1">Sanctioned This Month</p>
                          <p className="text-2xl font-bold">₹24.5 Lakhs</p>
                        </div>
                        <div className="p-4 bg-green-500/10 rounded-lg">
                          <p className="text-sm text-muted-foreground mb-1">Disbursed Successfully</p>
                          <p className="text-2xl font-bold">₹18.2 Lakhs</p>
                        </div>
                        <div className="p-4 bg-yellow-500/10 rounded-lg">
                          <p className="text-sm text-muted-foreground mb-1">Pending Transfer</p>
                          <p className="text-2xl font-bold">₹6.3 Lakhs</p>
                        </div>
                      </div>

                      <div className="border rounded-lg p-6">
                        <h4 className="font-semibold mb-4 flex items-center gap-2">
                          <IndianRupee className="h-5 w-5" />
                          Recent Fund Transfers
                        </h4>
                        <div className="space-y-3">
                          {[
                            { case: "CASE-2024-001", amount: "50,000", status: "Completed", bank: "State Bank of India" },
                            { case: "CASE-2024-005", amount: "35,000", status: "In Progress", bank: "Punjab National Bank" },
                            { case: "CASE-2024-012", amount: "75,000", status: "Pending", bank: "Bank of Baroda" },
                          ].map((transfer, idx) => (
                            <div key={idx} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                              <div>
                                <p className="font-medium">{transfer.case}</p>
                                <p className="text-sm text-muted-foreground">{transfer.bank}</p>
                              </div>
                              <div className="text-right">
                                <p className="font-semibold">₹{transfer.amount}</p>
                                <Badge variant={transfer.status === "Completed" ? "default" : "outline"}>
                                  {transfer.status}
                                </Badge>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Card className="border-primary/50">
                        <CardHeader>
                          <CardTitle className="text-base">Bank Coordination Interface</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-4">
                            Direct communication channel with financial institutions for sanction confirmation and ledger reconciliation.
                          </p>
                          <div className="flex gap-2">
                            <Button variant="outline" className="flex-1">
                              <MessageSquare className="h-4 w-4 mr-2" />
                              Send to Bank
                            </Button>
                            <Button variant="outline" className="flex-1">
                              <FileCheck className="h-4 w-4 mr-2" />
                              Request Confirmation
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Analytics Tab */}
              <TabsContent value="analytics">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Data-Driven Insights</CardTitle>
                      <CardDescription>Performance metrics and trends</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="p-4 bg-muted/50 rounded-lg">
                          <p className="text-sm text-muted-foreground mb-2">Average Processing Time</p>
                          <p className="text-3xl font-bold">36 hours</p>
                          <p className="text-sm text-green-600 mt-1">↓ 22% from last month</p>
                        </div>

                        <div className="p-4 bg-muted/50 rounded-lg">
                          <p className="text-sm text-muted-foreground mb-2">Approval Rate</p>
                          <p className="text-3xl font-bold">87%</p>
                          <p className="text-sm text-green-600 mt-1">↑ 5% improvement</p>
                        </div>

                        <div className="p-4 bg-muted/50 rounded-lg">
                          <p className="text-sm text-muted-foreground mb-2">Query Resolution Time</p>
                          <p className="text-3xl font-bold">12 hours</p>
                          <p className="text-sm text-green-600 mt-1">Within target SLA</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Case Prioritization Matrix</CardTitle>
                      <CardDescription>AI-powered priority scoring</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="p-3 border-l-4 border-l-red-500 bg-red-500/5 rounded">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold text-sm">Critical Priority</span>
                            <Badge variant="destructive">5 Cases</Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Serious injury cases, vulnerable victims, time-sensitive
                          </p>
                        </div>

                        <div className="p-3 border-l-4 border-l-yellow-500 bg-yellow-500/5 rounded">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold text-sm">High Priority</span>
                            <Badge variant="secondary">12 Cases</Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Complete documentation, awaiting final verification
                          </p>
                        </div>

                        <div className="p-3 border-l-4 border-l-blue-500 bg-blue-500/5 rounded">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold text-sm">Medium Priority</span>
                            <Badge variant="outline">18 Cases</Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Standard processing queue, documents under review
                          </p>
                        </div>

                        <div className="p-3 border-l-4 border-l-gray-500 bg-gray-500/5 rounded">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold text-sm">Low Priority</span>
                            <Badge variant="outline">7 Cases</Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Awaiting additional documents from applicants
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>District-wise Performance</CardTitle>
                    <CardDescription>Compare processing efficiency across regions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { district: "Mumbai", processed: 45, pending: 8, efficiency: 85 },
                        { district: "Pune", processed: 38, pending: 12, efficiency: 76 },
                        { district: "Nagpur", processed: 29, pending: 6, efficiency: 83 },
                        { district: "Thane", processed: 52, pending: 15, efficiency: 78 },
                      ].map((dist, idx) => (
                        <div key={idx}>
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium">{dist.district}</span>
                            <span className="text-sm text-muted-foreground">
                              {dist.processed} processed | {dist.pending} pending
                            </span>
                          </div>
                          <Progress value={dist.efficiency} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Help Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Need Technical Support?</h2>
              <p className="text-muted-foreground mb-6">
                Our dedicated team is here to assist you with case processing, verification queries, or technical issues.
              </p>
              <div className="flex gap-4 justify-center">
                <Button>
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Contact Support
                </Button>
                <Button variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  Documentation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OfficerPortal;
