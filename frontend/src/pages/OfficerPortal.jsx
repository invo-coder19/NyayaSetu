import { useState, useRef, useEffect } from "react";
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
  Upload,
  X,
} from "lucide-react";

const OfficerPortal = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCase, setSelectedCase] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  // Raise Query Modal State
  const [showQueryModal, setShowQueryModal] = useState(false);
  const [queryCase, setQueryCase] = useState(null);
  const [queryType, setQueryType] = useState("");
  const [queryMessage, setQueryMessage] = useState("");
  const [queryFile, setQueryFile] = useState(null);
  const [highPriority, setHighPriority] = useState(false);
  const [queryErrors, setQueryErrors] = useState({});

  // Transaction/Disbursement Modal State
  const [showTransactionModal, setShowTransactionModal] = useState(false);
  const [disbursementCase, setDisbursementCase] = useState(null);
  const [transactionId, setTransactionId] = useState("");
  const [transactionError, setTransactionError] = useState("");

  // Officer Queries & Victim Responses State
  const [officerQueriesForCase, setOfficerQueriesForCase] = useState([
    {
      id: 1,
      type: "Missing Document",
      message: "Please upload a clear scan of your Caste Certificate.",
      status: "Waiting for Officer Review",
      raisedOn: "24 Nov 2025",
      response: {
        type: "document",
        fileName: "caste_certificate.pdf"
      }
    },
    {
      id: 2,
      type: "Clarification on incident",
      message: "Please clarify the exact time of incident.",
      status: "Resolved",
      raisedOn: "20 Nov 2025",
      response: {
        type: "text",
        content: "The incident happened at 8:30 PM near the market road."
      }
    }
  ]);

  // Grievances State
  const [grievances, setGrievances] = useState([
    {
      id: "GZ-2024-001",
      caseId: "JWD-2024-001",
      victimName: "Anita Devi",
      district: "Mumbai",
      state: "Maharashtra",
      contact: "+91-XXXXX-56789",
      category: "Didn't receive funds",
      status: "Open",
      createdOn: "2025-11-24",
      subject: "Relief amount not credited",
      description: "I was approved for relief on 20th Nov but the amount has not been credited to my bank account. My account details are correct as per the application. Please help.",
      attachments: ["passbook_photo.jpg"],
      timeline: [
        { by: "Victim", at: "2025-11-24 10:15", message: "I have not received the relief amount in my bank account even after 4 days of approval." },
        { by: "Officer", at: "2025-11-25 11:05", message: "We are checking your bank transaction status. Please wait 24 hours." }
      ]
    },
    {
      id: "GZ-2024-002",
      caseId: "JWD-2024-005",
      victimName: "Ramesh Kumar",
      district: "Delhi",
      state: "Delhi",
      contact: "+91-XXXXX-12345",
      category: "Case status not updated",
      status: "Under Review",
      createdOn: "2025-11-22",
      subject: "Portal showing wrong status",
      description: "My case was approved by the officer but the portal still shows 'Under Review'. This is causing confusion and delay in receiving funds.",
      attachments: [],
      timeline: [
        { by: "Victim", at: "2025-11-22 14:30", message: "My case status is not updated on the portal." },
        { by: "Officer", at: "2025-11-23 09:15", message: "Looking into the system sync issue." },
        { by: "Victim", at: "2025-11-23 16:45", message: "Still showing wrong status. Please fix urgently." }
      ]
    },
    {
      id: "GZ-2024-003",
      caseId: "JWD-2024-008",
      victimName: "Sunita Sharma",
      district: "Bangalore",
      state: "Karnataka",
      contact: "+91-XXXXX-98765",
      category: "Portal technical issue",
      status: "Resolved",
      createdOn: "2025-11-20",
      subject: "Cannot upload documents",
      description: "I am unable to upload my medical certificate. The upload button is not working on the portal.",
      attachments: ["error_screenshot.png"],
      timeline: [
        { by: "Victim", at: "2025-11-20 11:00", message: "Upload button not working for medical certificate." },
        { by: "Officer", at: "2025-11-20 14:30", message: "Please try clearing browser cache and using Chrome browser." },
        { by: "Victim", at: "2025-11-21 10:00", message: "It worked! Thank you for the help." }
      ]
    }
  ]);
  const [selectedGrievance, setSelectedGrievance] = useState(null);
  const [showGrievanceModal, setShowGrievanceModal] = useState(false);
  const [grievanceSearchQuery, setGrievanceSearchQuery] = useState("");
  const [officerResponse, setOfficerResponse] = useState("");
  const [responseProof, setResponseProof] = useState(null);
  const [updatedStatus, setUpdatedStatus] = useState("");
  const [responseError, setResponseError] = useState("");
  const timelineEndRef = useRef(null);

  // Auto-scroll to bottom of timeline when it updates
  useEffect(() => {
    if (showGrievanceModal && selectedGrievance?.timeline) {
      timelineEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedGrievance?.timeline, showGrievanceModal]);


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
      firNumber: "FIR-123/2024",
      policeStation: "Andheri Police Station",
      firDate: "2024-01-16",
      incidentDate: "2024-01-15",
      sections: "IPC 323, 354; PoA 3(1)(r), 3(1)(s)",
      incidentDescription: "The victim was subjected to physical assault and caste-based abuse by a group of individuals in a public place. The incident occurred on January 15, 2024, and resulted in injuries requiring medical attention. The victim has submitted medical reports and witness statements as supporting evidence.",
      reliefCategory: "Category B – Physical Assault",
      bankMasked: "A/C ending 1234",
      ifsc: "SBIN0001234",
      bankName: "State Bank of India",
      documents: [
        { type: "FIR Copy", status: "verified" },
        { type: "Medical Report", status: "verified" },
        { type: "Other Supporting Documents", status: "pending" },
      ],
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
      firNumber: "FIR-456/2024",
      policeStation: "Connaught Place Police Station",
      firDate: "2024-01-20",
      incidentDate: "2024-01-18",
      sections: "IPC 506; PoA 3(1)(w)",
      incidentDescription: "The victim faced economic discrimination and threats when denied services at a local establishment based on caste identity. Documentation includes witness statements and establishment records.",
      reliefCategory: "Category C – Economic Discrimination",
      bankMasked: "A/C ending 5678",
      ifsc: "HDFC0002345",
      bankName: "HDFC Bank",
      documents: [
        { type: "FIR Copy", status: "verified" },
        { type: "Medical Report", status: "not_applicable" },
        { type: "Other Supporting Documents", status: "verified" },
      ],
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
      firNumber: "FIR-789/2024",
      policeStation: "Whitefield Police Station",
      firDate: "2024-02-05",
      incidentDate: "2024-02-01",
      sections: "IPC 153A; PoA 3(1)(u)",
      incidentDescription: "The victim and family were subjected to social boycott by the village community, preventing access to common resources and public spaces. Multiple witnesses have corroborated the incident.",
      reliefCategory: "Category A – Social Boycott",
      bankMasked: "A/C ending 9012",
      ifsc: "ICIC0003456",
      bankName: "ICICI Bank",
      documents: [
        { type: "FIR Copy", status: "verified" },
        { type: "Medical Report", status: "not_applicable" },
        { type: "Other Supporting Documents", status: "verified" },
      ],
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

  // Event handlers for View Details modal
  const handleViewDetails = (caseItem) => {
    setSelectedCase(caseItem);
    setShowDetailsModal(true);
  };

  const handleCloseModal = () => {
    setShowDetailsModal(false);
    setSelectedCase(null);
  };

  const handlePutOnHold = () => {
    console.log("Case put on hold (demo)", selectedCase?.id);
    handleCloseModal();
  };

  const handleReject = () => {
    console.log("Case rejected (demo)", selectedCase?.id);
    handleCloseModal();
  };

  const handleApprove = () => {
    // Open transaction modal instead of directly approving
    setDisbursementCase(selectedCase);
    setShowTransactionModal(true);
    setTransactionId("");
    setTransactionError("");
    handleCloseModal(); // Close View Details modal if open
  };

  // Event handlers for Transaction/Disbursement modal
  const handleOpenTransactionModal = (caseItem) => {
    setDisbursementCase(caseItem);
    setShowTransactionModal(true);
    setTransactionId("");
    setTransactionError("");
  };

  const handleCloseTransactionModal = () => {
    setShowTransactionModal(false);
    setDisbursementCase(null);
    setTransactionId("");
    setTransactionError("");
  };

  const handleSaveDisbursement = () => {
    // Validation
    if (!transactionId.trim()) {
      setTransactionError("Transaction/UTR ID is required.");
      return;
    }

    // Log transaction data
    console.log("Transaction saved (demo)", {
      caseId: disbursementCase?.id,
      transactionId: transactionId.trim(),
    });

    // Close modal
    handleCloseTransactionModal();

    // Show confirmation
    alert("Transaction ID saved. Case marked as disbursed (demo).");
  };


  // Event handlers for Raise Query modal
  const handleRaiseQuery = (caseItem) => {
    setQueryCase(caseItem);
    setShowQueryModal(true);
    // Reset form
    setQueryType("");
    setQueryMessage("");
    setQueryFile(null);
    setHighPriority(false);
    setQueryErrors({});
  };

  const handleCloseQueryModal = () => {
    setShowQueryModal(false);
    setQueryCase(null);
    setQueryType("");
    setQueryMessage("");
    setQueryFile(null);
    setHighPriority(false);
    setQueryErrors({});
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        setQueryErrors({ ...queryErrors, file: "File size must be less than 5MB" });
        return;
      }
      setQueryFile(file);
      setQueryErrors({ ...queryErrors, file: "" });
    }
  };

  const handleSendQuery = () => {
    const errors = {};

    // Validation
    if (!queryType) {
      errors.queryType = "Please select a query type";
    }
    if (!queryMessage.trim()) {
      errors.queryMessage = "Please enter your query message";
    }

    if (Object.keys(errors).length > 0) {
      setQueryErrors(errors);
      return;
    }

    // Log query data
    console.log("Query submitted (demo)", {
      caseId: queryCase?.id,
      queryType,
      message: queryMessage,
      highPriority,
      fileName: queryFile?.name || null,
    });

    // Close modal
    handleCloseQueryModal();

    // Optional: Show toast (you can add toast UI if needed)
    alert("Query sent to applicant (demo).");
  };

  // Handler for marking query as resolved
  const handleMarkQueryResolved = (queryId) => {
    console.log("Marked as resolved (demo)", queryId);
    setOfficerQueriesForCase(queries =>
      queries.map(q =>
        q.id === queryId ? { ...q, status: "Resolved" } : q
      )
    );
  };

  // Grievances Event Handlers
  const handleViewGrievance = (grievance) => {
    setSelectedGrievance(grievance);
    setUpdatedStatus(grievance.status);
    setOfficerResponse("");
    setResponseProof(null);
    setResponseError("");
    setShowGrievanceModal(true);
  };

  const handleCloseGrievanceModal = () => {
    setShowGrievanceModal(false);
    setSelectedGrievance(null);
    setOfficerResponse("");
    setResponseProof(null);
    setUpdatedStatus("");
    setResponseError("");
  };

  const handleResponseFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        setResponseError("File size must be less than 5MB");
        return;
      }
      setResponseProof(file);
      setResponseError("");
    }
  };

  const handleSubmitResponse = () => {
    // Validation
    if (!officerResponse.trim()) {
      setResponseError("Please enter a response message");
      return;
    }

    // Log to console (demo)
    console.log("Officer response submitted (demo)", {
      grievanceId: selectedGrievance.id,
      caseId: selectedGrievance.caseId,
      status: updatedStatus,
      message: officerResponse,
      hasProof: responseProof !== null,
      proofFileName: responseProof?.name || null
    });

    // Update grievance status in state
    setGrievances(prev => prev.map(g =>
      g.id === selectedGrievance.id
        ? { ...g, status: updatedStatus, timeline: [...g.timeline, { by: "Officer", at: new Date().toLocaleString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }), message: officerResponse }] }
        : g
    ));

    // Show success message
    alert(`Response saved and grievance status updated to "${updatedStatus}" (demo).`);

    // Close modal
    handleCloseGrievanceModal();
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
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
                <TabsTrigger value="disbursement">
                  <IndianRupee className="h-4 w-4 mr-2" />
                  Fund Tracking
                </TabsTrigger>
                <TabsTrigger value="analytics">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Analytics
                </TabsTrigger>
                <TabsTrigger value="grievances">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Grievances
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
                                <Button size="sm" onClick={() => handleViewDetails(caseItem)}>
                                  <Eye className="h-4 w-4 mr-2" />
                                  View Details
                                </Button>
                                <Button size="sm" variant="outline" onClick={() => handleRaiseQuery(caseItem)}>
                                  <MessageSquare className="h-4 w-4 mr-2" />
                                  Raise Query
                                </Button>
                                <Button size="sm" variant="default" onClick={() => handleOpenTransactionModal(caseItem)}>
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

              {/* Grievances Tab */}
              <TabsContent value="grievances">
                <Card>
                  <CardHeader>
                    <CardTitle>Grievance Desk – Review & Respond</CardTitle>
                    <CardDescription>Manage grievances submitted by victims related to DBT and case processing</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-4 mb-6">
                      <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="Search by Grievance ID, Case ID, or Victim Name..."
                          className="pl-10"
                          value={grievanceSearchQuery}
                          onChange={(e) => setGrievanceSearchQuery(e.target.value)}
                        />
                      </div>
                      <Button variant="outline" onClick={() => console.log("Filter clicked (demo)")}>
                        <Filter className="h-4 w-4 mr-2" />
                        Filter
                      </Button>
                    </div>

                    <div className="rounded-md border">
                      <table className="w-full text-sm text-left">
                        <thead className="bg-muted/50 text-muted-foreground font-medium">
                          <tr>
                            <th className="p-4">Grievance ID</th>
                            <th className="p-4">Case ID</th>
                            <th className="p-4">Victim Name</th>
                            <th className="p-4">Category</th>
                            <th className="p-4">Status</th>
                            <th className="p-4">Created On</th>
                            <th className="p-4 text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {grievances
                            .filter(g =>
                              g.id.toLowerCase().includes(grievanceSearchQuery.toLowerCase()) ||
                              g.caseId.toLowerCase().includes(grievanceSearchQuery.toLowerCase()) ||
                              g.victimName.toLowerCase().includes(grievanceSearchQuery.toLowerCase())
                            )
                            .map((grievance) => (
                              <tr key={grievance.id} className="border-t hover:bg-muted/50">
                                <td className="p-4 font-medium">{grievance.id}</td>
                                <td className="p-4 text-muted-foreground">{grievance.caseId}</td>
                                <td className="p-4">{grievance.victimName}</td>
                                <td className="p-4">
                                  <Badge variant="outline" className="font-normal">
                                    {grievance.category}
                                  </Badge>
                                </td>
                                <td className="p-4">
                                  <Badge className={
                                    grievance.status === "Open" ? "bg-blue-100 text-blue-800 hover:bg-blue-100" :
                                      grievance.status === "Under Review" ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100" :
                                        grievance.status === "Resolved" ? "bg-green-100 text-green-800 hover:bg-green-100" :
                                          "bg-red-100 text-red-800 hover:bg-red-100"
                                  }>
                                    {grievance.status}
                                  </Badge>
                                </td>
                                <td className="p-4 text-muted-foreground">{grievance.createdOn}</td>
                                <td className="p-4 text-right">
                                  <Button size="sm" variant="outline" onClick={() => handleViewGrievance(grievance)}>
                                    <Eye className="h-4 w-4 mr-2" />
                                    View
                                  </Button>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Help Section */}
      </main>

      {/* View Details Modal */}
      {showDetailsModal && selectedCase && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={handleCloseModal}>
          <div
            className="bg-background rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b bg-gradient-to-r from-primary/5 to-secondary/5">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{selectedCase.id}</h2>
                  <div className="flex items-center gap-2">
                    {getStatusBadge(selectedCase.status)}
                    {getPriorityBadge(selectedCase.priority)}
                  </div>
                </div>
                <Button variant="ghost" size="icon" onClick={handleCloseModal}>
                  <AlertCircle className="h-5 w-5" />
                </Button>
              </div>

              <div className="mt-4">
                <div className="flex items-center gap-2 mb-1">
                  <Brain className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">AI Verification Score: {selectedCase.aiScore}%</span>
                </div>
                <Progress value={selectedCase.aiScore} className="h-2" />
              </div>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="p-6 overflow-y-auto max-h-[60vh] space-y-6">
              {/* Victim Summary */}
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Victim Summary
                </h3>
                <div className="grid md:grid-cols-2 gap-4 bg-muted/30 rounded-lg p-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Applicant Name</p>
                    <p className="font-medium">{selectedCase.victimName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">{selectedCase.district}, {selectedCase.state}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Type of Atrocity</p>
                    <p className="font-medium">{selectedCase.caseType}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Date of Incident</p>
                    <p className="font-medium">{selectedCase.incidentDate}</p>
                  </div>
                </div>
              </div>

              {/* Case & FIR Details */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Case & FIR Details
                </h3>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">FIR / Case Number</p>
                      <p className="font-medium">{selectedCase.firNumber}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Police Station</p>
                      <p className="font-medium">{selectedCase.policeStation}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Date of FIR</p>
                      <p className="font-medium">{selectedCase.firDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Sections (IPC/PoA)</p>
                      <p className="font-medium text-sm">{selectedCase.sections}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Incident Description</p>
                    <p className="text-sm leading-relaxed bg-muted/30 rounded-lg p-4">
                      {selectedCase.incidentDescription}
                    </p>
                  </div>
                </div>
              </div>

              {/* Submitted Documents */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <FileCheck className="h-5 w-5 text-primary" />
                  Submitted Documents
                </h3>
                <div className="space-y-3">
                  {selectedCase.documents.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/30 transition-colors">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium text-sm">{doc.type}</p>
                          <p className="text-xs text-muted-foreground capitalize">{doc.status.replace('_', ' ')}</p>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => console.log("Open document:", doc.type)}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Officer Queries & Victim Responses */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  Officer Queries & Victim Responses
                </h3>

                {/* Query Summary */}
                <div className="mb-4">
                  {officerQueriesForCase.filter(q => q.status !== "Resolved").length > 0 ? (
                    <p className="text-sm font-medium text-orange-600">
                      Queries pending: {officerQueriesForCase.filter(q => q.status !== "Resolved").length}
                    </p>
                  ) : (
                    <p className="text-sm font-medium text-green-600">
                      All queries have been resolved
                    </p>
                  )}
                </div>

                {/* Queries List */}
                <div className="space-y-4">
                  {officerQueriesForCase.map((query) => (
                    <div key={query.id} className="border rounded-lg p-4 bg-muted/20 space-y-3">
                      {/* Query Header */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-semibold text-sm">{query.type}</span>
                            <span
                              className={`text-xs px-2 py-0.5 rounded-full ${query.status === "Action Required"
                                ? "bg-orange-100 text-orange-700"
                                : query.status === "Waiting for Officer Review"
                                  ? "bg-blue-100 text-blue-700"
                                  : "bg-green-100 text-green-700"
                                }`}
                            >
                              {query.status}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground">Raised on: {query.raisedOn}</p>
                        </div>
                        {query.status === "Waiting for Officer Review" && (
                          <Button
                            size="sm"
                            onClick={() => handleMarkQueryResolved(query.id)}
                            className="bg-primary hover:bg-primary-hover"
                          >
                            Mark as Resolved
                          </Button>
                        )}
                      </div>

                      {/* Officer's Message */}
                      <div>
                        <p className="text-xs text-muted-foreground font-medium mb-1">Officer's Message:</p>
                        <p className="text-sm">{query.message}</p>
                      </div>

                      {/* Victim Response */}
                      {query.response && (
                        <div>
                          <p className="text-xs text-muted-foreground font-medium mb-1">Victim Response:</p>
                          {query.response.type === "document" ? (
                            <div className="flex items-center gap-2">
                              <FileText className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">{query.response.fileName}</span>
                              <Button
                                size="sm"
                                variant="link"
                                className="h-auto p-0 text-primary"
                                onClick={() => console.log("View document:", query.response.fileName)}
                              >
                                View
                              </Button>
                            </div>
                          ) : (
                            <p className="text-sm bg-background rounded p-2">{query.response.content}</p>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Relief & DBT Information */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <IndianRupee className="h-5 w-5 text-primary" />
                  Relief & DBT Information
                </h3>
                <div className="grid md:grid-cols-2 gap-4 bg-muted/30 rounded-lg p-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Proposed Relief Amount</p>
                    <p className="font-bold text-lg text-primary">₹{selectedCase.amount}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Category</p>
                    <p className="font-medium">{selectedCase.reliefCategory}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Bank Account</p>
                    <p className="font-medium">{selectedCase.bankMasked}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">IFSC Code</p>
                    <p className="font-medium">{selectedCase.ifsc}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm text-muted-foreground">Bank Name</p>
                    <p className="font-medium">{selectedCase.bankName}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer - Action Buttons */}
            <div className="p-6 border-t bg-muted/20 flex justify-end gap-3">
              <Button variant="secondary" onClick={handlePutOnHold}>
                <Clock className="h-4 w-4 mr-2" />
                Put On Hold
              </Button>
              <Button variant="outline" onClick={handleReject}>
                <AlertCircle className="h-4 w-4 mr-2" />
                Reject
              </Button>
              <Button className="bg-primary hover:bg-primary-hover" onClick={handleApprove}>
                <CheckCircle className="h-4 w-4 mr-2" />
                Approve
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Raise Query Modal */}
      {showQueryModal && queryCase && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={handleCloseQueryModal}>
          <div
            className="bg-background rounded-lg shadow-xl max-w-2xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b">
              <h2 className="text-2xl font-bold mb-2">Raise Query for This Case</h2>
              <p className="text-sm text-muted-foreground">
                Case ID: <span className="font-semibold">{queryCase.id}</span>
              </p>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4">
              {/* Query Type */}
              <div className="space-y-2">
                <label htmlFor="query-type" className="text-sm font-medium">
                  Query Type <span className="text-red-500">*</span>
                </label>
                <select
                  id="query-type"
                  className="w-full h-10 px-3 rounded-md border border-input bg-background"
                  value={queryType}
                  onChange={(e) => {
                    setQueryType(e.target.value);
                    setQueryErrors({ ...queryErrors, queryType: "" });
                  }}
                >
                  <option value="">Select query type</option>
                  <option value="missing_document">Missing document</option>
                  <option value="clarification">Clarification on incident</option>
                  <option value="">Select query type...</option>
                  <option value="Missing Document">Missing Document</option>
                  <option value="Clarification Required">Clarification Required</option>
                  <option value="Incorrect Information">Incorrect Information</option>
                  <option value="Other">Other</option>
                </select>
                {queryErrors.type && <p className="text-xs text-red-500 mt-1">{queryErrors.type}</p>}
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block">Message to Victim</label>
                <textarea
                  className="w-full p-2 border rounded-md bg-background min-h-[100px]"
                  placeholder="Explain clearly what is needed..."
                  value={queryMessage}
                  onChange={(e) => setQueryMessage(e.target.value)}
                />
                {queryErrors.message && <p className="text-xs text-red-500 mt-1">{queryErrors.message}</p>}
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block">Attach Reference (Optional)</label>
                <div className="border-2 border-dashed rounded-lg p-4 text-center hover:bg-muted/50 transition-colors cursor-pointer relative">
                  <input
                    type="file"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    onChange={(e) => setQueryFile(e.target.files[0])}
                  />
                  <div className="flex flex-col items-center gap-2">
                    <Upload className="h-8 w-8 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {queryFile ? queryFile.name : "Click to upload reference document"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="highPriority"
                  checked={highPriority}
                  onChange={(e) => setHighPriority(e.target.checked)}
                  className="rounded border-gray-300"
                />
                <label htmlFor="highPriority" className="text-sm font-medium">Mark as High Priority</label>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <Button variant="outline" onClick={handleCloseQueryModal}>Cancel</Button>
              <Button onClick={handleSendQuery}>Send Query</Button>
            </div>
          </div>
        </div>
      )}

      {/* Grievance Details Modal */}
      {showGrievanceModal && selectedGrievance && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto" onClick={handleCloseGrievanceModal}>
          <div
            className="bg-background rounded-lg shadow-lg w-full max-w-4xl my-8 animate-in fade-in zoom-in duration-200 flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b flex justify-between items-center sticky top-0 bg-background rounded-t-lg z-10">
              <div>
                <h2 className="text-xl font-bold">Grievance Details</h2>
                <p className="text-muted-foreground">Grievance ID: {selectedGrievance.id}</p>
              </div>
              <div className="flex items-center gap-3">
                <Badge className={
                  selectedGrievance.status === "Open" ? "bg-blue-100 text-blue-800" :
                    selectedGrievance.status === "Under Review" ? "bg-yellow-100 text-yellow-800" :
                      selectedGrievance.status === "Resolved" ? "bg-green-100 text-green-800" :
                        "bg-red-100 text-red-800"
                }>
                  {selectedGrievance.status}
                </Badge>
                <Button variant="ghost" size="icon" onClick={handleCloseGrievanceModal}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="p-6 overflow-y-auto flex-1 space-y-6">

              {/* Victim & Case Summary */}
              <div className="bg-muted/30 p-4 rounded-lg grid md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Victim Name</p>
                  <p className="font-medium">{selectedGrievance.victimName}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Case ID</p>
                  <p className="font-medium">{selectedGrievance.caseId}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Contact</p>
                  <p className="font-medium">{selectedGrievance.contact}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">District/State</p>
                  <p className="font-medium">{selectedGrievance.district}, {selectedGrievance.state}</p>
                </div>
              </div>

              {/* Original Grievance */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Victim's Grievance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <span className="text-xs font-semibold uppercase text-muted-foreground tracking-wider">Category</span>
                    <p className="font-medium mt-1">{selectedGrievance.category}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase text-muted-foreground tracking-wider">Subject</span>
                    <p className="font-medium mt-1">{selectedGrievance.subject}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase text-muted-foreground tracking-wider">Description</span>
                    <p className="mt-1 text-sm leading-relaxed">{selectedGrievance.description}</p>
                  </div>
                  {selectedGrievance.attachments?.length > 0 && (
                    <div>
                      <span className="text-xs font-semibold uppercase text-muted-foreground tracking-wider">Attachments</span>
                      <div className="mt-2 flex gap-2">
                        {selectedGrievance.attachments.map((file, idx) => (
                          <Button key={idx} variant="outline" size="sm" onClick={() => console.log("Open attachment:", file)}>
                            <FileText className="h-3 w-3 mr-2" />
                            {file}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Communication Timeline */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Communication Timeline</h3>
                <div className="space-y-4 pl-4 border-l-2 border-muted">
                  {selectedGrievance.timeline?.map((item, idx) => (
                    <div key={idx} className="relative pl-4 pb-2">
                      <div className={`absolute -left-[21px] top-0 w-3 h-3 rounded-full ${item.by === 'Officer' ? 'bg-primary' : 'bg-orange-500'}`} />
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant={item.by === 'Officer' ? "default" : "secondary"}>{item.by}</Badge>
                        <span className="text-xs text-muted-foreground">{item.at}</span>
                      </div>
                      <div className="bg-muted/30 p-3 rounded-lg text-sm">
                        {item.message}
                      </div>
                    </div>
                  ))}
                  <div ref={timelineEndRef} />
                </div>
              </div>

              {/* Officer Response Area */}
              <Card className="border-primary/20 bg-primary/5">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Officer Response & Status Update</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Officer Response / Warning</label>
                    <textarea
                      className="w-full p-3 border rounded-md bg-background min-h-[100px] focus:ring-2 focus:ring-primary/20 outline-none"
                      placeholder="Write your response to the victim, or add a warning note if this appears to be a false claim."
                      value={officerResponse}
                      onChange={(e) => setOfficerResponse(e.target.value)}
                    />
                    {responseError && <p className="text-xs text-red-500 mt-1">{responseError}</p>}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1 block">Attach proof (optional)</label>
                      <div className="border border-dashed rounded-lg p-3 bg-background hover:bg-muted/50 transition-colors cursor-pointer relative">
                        <input
                          type="file"
                          className="absolute inset-0 opacity-0 cursor-pointer"
                          onChange={handleResponseFileChange}
                          accept=".pdf,.jpg,.jpeg,.png"
                        />
                        <div className="flex items-center gap-2 justify-center">
                          <Upload className="h-4 w-4 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground truncate max-w-[200px]">
                            {responseProof ? responseProof.name : "Upload receipt/document (Max 5MB)"}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1 block">Update Status</label>
                      <select
                        className="w-full p-2.5 border rounded-md bg-background"
                        value={updatedStatus}
                        onChange={(e) => setUpdatedStatus(e.target.value)}
                      >
                        <option value="Open">Open</option>
                        <option value="Under Review">Under Review</option>
                        <option value="Resolved">Resolved</option>
                        <option value="False Claim">False Claim / Misuse</option>
                      </select>
                    </div>
                  </div>
                </CardContent>
                <div className="p-4 border-t bg-background/50 flex justify-end gap-3 rounded-b-lg">
                  <Button variant="outline" onClick={handleCloseGrievanceModal}>Cancel</Button>
                  <Button onClick={handleSubmitResponse}>Submit Response</Button>
                </div>
              </Card>

            </div>
          </div>
        </div>
      )}

      {/* Transaction/Disbursement Confirmation Modal */}
      {showTransactionModal && disbursementCase && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={handleCloseTransactionModal}>
          <div
            className="bg-background rounded-lg shadow-xl max-w-xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b">
              <h2 className="text-2xl font-bold">Confirm Fund Disbursement</h2>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Case Summary */}
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-3">Case Summary</h3>
                <div className="bg-muted/30 rounded-lg p-4 space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-xs text-muted-foreground">Case ID</p>
                      <p className="font-semibold">{disbursementCase.id}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Applicant Name</p>
                      <p className="font-semibold">{disbursementCase.victimName}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-xs text-muted-foreground">Location</p>
                      <p className="font-semibold">{disbursementCase.district}, {disbursementCase.state}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Relief Amount</p>
                      <p className="font-bold text-lg text-primary">₹{disbursementCase.amount}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Bank Account (masked)</p>
                    <p className="font-semibold">{disbursementCase.bankMasked}</p>
                  </div>
                </div>
              </div>

              {/* Transaction ID Input */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold mb-2">Bank Transaction / UTR ID</h3>
                <label htmlFor="transaction-id" className="text-sm font-medium">
                  Enter Bank Transaction / UTR ID <span className="text-red-500">*</span>
                </label>
                <Input
                  id="transaction-id"
                  type="text"
                  placeholder="e.g. TXN1234567890"
                  value={transactionId}
                  onChange={(e) => {
                    setTransactionId(e.target.value);
                    setTransactionError("");
                  }}
                  className={transactionError ? "border-red-500" : ""}
                />
                <p className="text-xs text-muted-foreground">
                  Enter the exact Transaction/UTR ID from the government bank transfer to the beneficiary's account.
                </p>
                {transactionError && (
                  <p className="text-xs text-red-500">{transactionError}</p>
                )}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t bg-muted/20 flex justify-end gap-3">
              <Button variant="ghost" onClick={handleCloseTransactionModal}>
                Cancel
              </Button>
              <Button className="bg-primary hover:bg-primary-hover" onClick={handleSaveDisbursement}>
                <CheckCircle className="h-4 w-4 mr-2" />
                Save & Mark as Disbursed
              </Button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};


export default OfficerPortal;
