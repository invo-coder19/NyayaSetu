import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Shield,
  Upload,
  FileText,
  Clock,
  CheckCircle2,
  AlertCircle,
  Phone,
  Mail,
  Globe,
  Fingerprint,
  Lock,
  Eye,
  Download,
  HelpCircle,
  Wallet,
  CreditCard,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const VictimPortal = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("register");
  const [incidentDate, setIncidentDate] = useState("");
  const [firDate, setFirDate] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [confirmAccountNumber, setConfirmAccountNumber] = useState("");
  const [needsEmergencySupport, setNeedsEmergencySupport] = useState(false);
  const [emergencySupports, setEmergencySupports] = useState({
    medical: false,
    shelter: false,
    police: false,
    counselling: false,
    foodTravel: false,
  });
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [utrId, setUtrId] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [verificationError, setVerificationError] = useState("");

  // Dummy officer transaction ID for frontend verification
  const officerTransactionId = "TXN123456789";

  // Officer Queries State
  const [officerQueries, setOfficerQueries] = useState([
    {
      id: 1,
      type: "Missing document",
      message: "Please upload a clear scan of your Caste Certificate.",
      status: "Action Required", // "Action Required", "Waiting for Officer Review", "Resolved"
      raisedOn: "24 Nov 2025",
    },
    {
      id: 2,
      type: "Clarification on incident",
      message: "Please clarify the exact time of incident.",
      status: "Resolved",
      raisedOn: "20 Nov 2025",
    },
  ]);
  const [showResponseModal, setShowResponseModal] = useState(false);
  const [selectedQuery, setSelectedQuery] = useState(null);
  const [responseText, setResponseText] = useState("");
  const [responseFile, setResponseFile] = useState(null);
  const [responseError, setResponseError] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    setShowReviewModal(true);
  };

  const handleConfirmSubmit = () => {
    console.log("Form submitted");
    const dummyCaseId = `DBT-2024-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    setShowReviewModal(false);
    toast({
      title: "Application Submitted Successfully! ✓",
      description: `Your case has been registered. Your Case ID is: #${dummyCaseId}`,
    });
  };

  const handleVerifyUTR = () => {
    if (utrId.trim() === officerTransactionId) {
      setIsVerified(true);
      setVerificationError("");
      toast({
        title: "Transaction Verified Successfully! ✓",
        description: "Relief amount confirmed. Your case is now closed.",
      });
    } else {
      setVerificationError("The Transaction/UTR ID does not match our records. Please check the bank SMS and try again.");
    }
  };


  // Helper function to check if FIR was delayed
  const isFirDelayed = () => {
    if (!incidentDate || !firDate) return false;
    const incident = new Date(incidentDate);
    const fir = new Date(firDate);
    const diffTime = Math.abs(fir - incident);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 2;
  };

  // Helper function to check if account numbers match
  const accountNumbersMatch = () => {
    if (!accountNumber || !confirmAccountNumber) return true;
    return accountNumber === confirmAccountNumber;
  };

  // Officer Queries Event Handlers
  const handleRespondToQuery = (query) => {
    setSelectedQuery(query);
    setShowResponseModal(true);
    setResponseText("");
    setResponseFile(null);
    setResponseError("");
  };

  const handleCloseResponseModal = () => {
    setShowResponseModal(false);
    setSelectedQuery(null);
    setResponseText("");
    setResponseFile(null);
    setResponseError("");
  };

  const handleResponseFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setResponseError("File size must be less than 5MB");
        return;
      }
      setResponseFile(file);
      setResponseError("");
    }
  };

  const handleSubmitResponse = () => {
    // Validation
    if (selectedQuery.type === "Missing document") {
      if (!responseFile) {
        setResponseError("Please upload the required document");
        return;
      }
    } else {
      if (!responseText.trim()) {
        setResponseError("Please enter your response");
        return;
      }
    }

    // Update query status
    setOfficerQueries(queries =>
      queries.map(q =>
        q.id === selectedQuery.id
          ? { ...q, status: "Waiting for Officer Review" }
          : q
      )
    );

    // Close modal
    handleCloseResponseModal();

    // Show success toast
    toast({
      title: "Response Submitted",
      description: "Your response has been submitted. The officer will review it shortly.",
    });
  };

  // Helper to get query status message
  const getQueryStatusMessage = () => {
    const hasActionRequired = officerQueries.some(q => q.status === "Action Required");
    const allResolved = officerQueries.every(q => q.status === "Resolved");
    const allWaiting = officerQueries.every(q => q.status === "Waiting for Officer Review" || q.status === "Resolved");

    if (hasActionRequired) {
      return { text: "Officer query raised – action required from you.", color: "text-orange-600" };
    } else if (allResolved) {
      return { text: "Officer review completed.", color: "text-green-600" };
    } else if (allWaiting) {
      return { text: "Your response has been submitted. Awaiting officer review.", color: "text-blue-600" };
    }
    return null;
  };




  const caseStages = [
    { stage: "Application Filed", status: "completed", date: "2024-01-15" },
    { stage: "Document Verification", status: "completed", date: "2024-01-16" },
    {
      stage: "Officer Review",
      status: officerQueries.every(q => q.status === "Resolved") ? "completed" : "in-progress",
      date: officerQueries.every(q => q.status === "Resolved") ? "2024-01-17" : "In Progress"
    },
    {
      stage: "Relief Sanctioned",
      status: officerQueries.every(q => q.status === "Resolved") ? "completed" : "pending",
      date: officerQueries.every(q => q.status === "Resolved") ? "2024-01-18" : "Pending"
    },
    {
      stage: "DBT to Bank Account",
      status: officerQueries.every(q => q.status === "Resolved") ? "completed" : "pending",
      date: officerQueries.every(q => q.status === "Resolved") ? "2024-01-19" : "Pending"
    },
    {
      stage: "Victim Confirmation",
      status: officerQueries.every(q => q.status === "Resolved") ? (isVerified ? "completed" : "in-progress") : "pending",
      date: officerQueries.every(q => q.status === "Resolved") ? (isVerified ? new Date().toISOString().split('T')[0] : "Awaiting Confirmation") : "Pending"
    },
    {
      stage: "Case Closed",
      status: isVerified ? "completed" : "pending",
      date: isVerified ? new Date().toISOString().split('T')[0] : "Pending"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="gradient-hero text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
              <Shield className="h-4 w-4" />
              <span>Your Safety & Privacy Matter</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Victim Relief Portal
            </h1>

            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              A safe, secure, and compassionate platform to access immediate relief and justice.
              You are not alone—we are here to support you every step of the way.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4 text-sm">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Lock className="h-4 w-4" />
                <span>100% Privacy Protected</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Clock className="h-4 w-4" />
                <span>48-Hour Emergency Relief</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Globe className="h-4 w-4" />
                <span>Multilingual Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Portal Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="register" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span className="hidden sm:inline">Apply for Relief</span>
                  <span className="sm:hidden">Apply</span>
                </TabsTrigger>
                <TabsTrigger value="track" className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  <span className="hidden sm:inline">Track Status</span>
                  <span className="sm:hidden">Track</span>
                </TabsTrigger>
                <TabsTrigger value="emergency" className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span className="hidden sm:inline">Emergency Relief</span>
                  <span className="sm:hidden">Emergency</span>
                </TabsTrigger>
              </TabsList>

              {/* Apply for Relief Tab */}
              <TabsContent value="register" className="space-y-6">
                <Card className="p-6 md:p-8">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Register Your Case</h2>
                      <p className="text-muted-foreground">
                        All information is encrypted and handled with strict confidentiality.
                        You will be identified by your Case ID only.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Personal Information */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <Fingerprint className="h-5 w-5 text-accent" />
                          Personal Information
                        </h3>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="aadhaar">Aadhaar Number *</Label>
                            <Input
                              id="aadhaar"
                              placeholder="XXXX-XXXX-XXXX"
                              required
                              maxLength={14}
                            />
                            <p className="text-xs text-muted-foreground">
                              Used only for verification, not stored permanently
                            </p>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="mobile">Mobile Number *</Label>
                            <Input
                              id="mobile"
                              type="tel"
                              placeholder="+91 XXXXX XXXXX"
                              required
                            />
                          </div>

                          <div className="space-y-2 md:col-span-2">
                            <Label htmlFor="email">Email Address (Optional)</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="your.email@example.com"
                            />
                          </div>
                        </div>
                      </div>
                      {/* Case Information */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <FileText className="h-5 w-5 text-accent" />
                          Case Details
                        </h3>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="fir">FIR/Case Number *</Label>
                            <Input
                              id="fir"
                              placeholder="Enter FIR/Case Number"
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="police-station">Police Station *</Label>
                            <Input
                              id="police-station"
                              placeholder="Name of Police Station"
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="district">District *</Label>
                            <Input
                              id="district"
                              placeholder="Your District"
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="state">State *</Label>
                            <select
                              id="state"
                              className="w-full h-10 px-3 rounded-md border border-input bg-background"
                              required
                            >
                              <option value="">Select State</option>
                              <option value="andhra-pradesh">Andhra Pradesh</option>
                              <option value="bihar">Bihar</option>
                              <option value="delhi">Delhi</option>
                              <option value="gujarat">Gujarat</option>
                              <option value="maharashtra">Maharashtra</option>
                              <option value="tamil-nadu">Tamil Nadu</option>
                              <option value="uttar-pradesh">Uttar Pradesh</option>
                            </select>
                          </div>

                          <div className="space-y-2 md:col-span-2">
                            <Label htmlFor="incident-date">Date of Incident *</Label>
                            <Input
                              id="incident-date"
                              type="date"
                              required
                              value={incidentDate}
                              onChange={(e) => setIncidentDate(e.target.value)}
                            />
                          </div>

                          <div className="space-y-2 md:col-span-2">
                            <Label htmlFor="fir-date">Date of FIR Registration *</Label>
                            <Input
                              id="fir-date"
                              type="date"
                              required
                              value={firDate}
                              onChange={(e) => setFirDate(e.target.value)}
                            />
                          </div>

                          {isFirDelayed() && (
                            <div className="space-y-2 md:col-span-2">
                              <Label htmlFor="delay-reason">Reason for Delay (if FIR registered after 2 days of incident)</Label>
                              <textarea
                                id="delay-reason"
                                rows={3}
                                className="w-full px-3 py-2 rounded-md border border-input bg-background"
                                placeholder="Please explain why the FIR was not registered within 2 days of the incident..."
                              />
                              <p className="text-xs text-muted-foreground">
                                This information helps us understand your situation better.
                              </p>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Caste & Identity Verification */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <Shield className="h-5 w-5 text-accent" />
                          Caste & Identity Verification
                        </h3>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="caste-category">Caste Category *</Label>
                            <select
                              id="caste-category"
                              className="w-full h-10 px-3 rounded-md border border-input bg-background"
                              required
                            >
                              <option value="">Select</option>
                              <option value="sc">Scheduled Caste (SC)</option>
                              <option value="st">Scheduled Tribe (ST)</option>
                            </select>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="caste-certificate">Caste Certificate Number *</Label>
                            <Input
                              id="caste-certificate"
                              placeholder="Enter your caste certificate number"
                              required
                            />
                            <p className="text-xs text-muted-foreground">
                              This is used only for eligibility verification under PCR/PoA schemes.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <Button type="button" size="sm" variant="outline">
                            <Lock className="mr-2 h-4 w-4" />
                            Fetch from DigiLocker
                          </Button>
                          <span className="text-sm text-muted-foreground">
                            or upload manually below
                          </span>
                        </div>

                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <FileText className="h-5 w-5 text-muted-foreground" />
                            <div>
                              <p className="font-medium text-sm">Caste Certificate (PDF/JPG)</p>
                              <p className="text-xs text-muted-foreground">Max 5MB</p>
                            </div>
                          </div>
                          <Button type="button" size="sm" variant="outline">
                            Upload
                          </Button>
                        </div>
                      </div>

                      {/* Nature of Atrocity & Incident Details */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <AlertCircle className="h-5 w-5 text-accent" />
                          Nature of Atrocity & Incident Details
                        </h3>

                        <div className="space-y-2">
                          <Label htmlFor="atrocity-type">Type of Atrocity / Offence *</Label>
                          <select
                            id="atrocity-type"
                            className="w-full h-10 px-3 rounded-md border border-input bg-background"
                            required
                          >
                            <option value="">Select type of atrocity</option>
                            <option value="verbal-abuse">Caste-based verbal abuse / humiliation</option>
                            <option value="physical-assault">Physical assault</option>
                            <option value="sexual-assault">Sexual assault / harassment</option>
                            <option value="rape">Rape / Attempt to rape</option>
                            <option value="property-damage">Damage or burning of house/property</option>
                            <option value="social-boycott">Social boycott</option>
                            <option value="land-occupation">Wrongful land occupation</option>
                            <option value="threats">Threats / Intimidation</option>
                            <option value="other">Other (specify)</option>
                          </select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="incident-description">Brief Description of Incident</Label>
                          <textarea
                            id="incident-description"
                            rows={4}
                            className="w-full px-3 py-2 rounded-md border border-input bg-background"
                            placeholder="Describe what happened in your own words."
                          />
                          <p className="text-xs text-muted-foreground">
                            Do not include sensitive personal details that you are uncomfortable sharing.
                          </p>
                        </div>

                        <div className="space-y-4">
                          <h4 className="font-medium">Location of Incident</h4>

                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="village">Village/Locality</Label>
                              <Input
                                id="village"
                                placeholder="Enter village or locality name"
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="pincode">Pincode</Label>
                              <Input
                                id="pincode"
                                placeholder="Enter 6-digit pincode"
                                maxLength={6}
                              />
                            </div>
                          </div>

                        </div>

                        {/* Witness Details */}
                        <div className="border border-border rounded-lg p-4 space-y-4">
                          <h4 className="font-medium">Witness Details (Optional)</h4>

                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="witness-name">Witness Name</Label>
                              <Input
                                id="witness-name"
                                placeholder="Enter witness name"
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="witness-contact">Witness Contact Number</Label>
                              <Input
                                id="witness-contact"
                                type="tel"
                                placeholder="+91 XXXXX XXXXX"
                              />
                            </div>
                          </div>

                          <Button
                            type="button"
                            size="sm"
                            variant="link"
                            className="text-accent p-0"
                            onClick={() => {
                              console.log('Add another witness clicked');
                              toast({
                                title: "Feature Notice",
                                description: "Multiple witness support will be available soon.",
                              });
                            }}
                          >
                            + Add another witness
                          </Button>
                        </div>
                      </div>

                      {/* Bank & Payment Details */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <CreditCard className="h-5 w-5 text-accent" />
                          Bank & Payment Details (For Direct Benefit Transfer)
                        </h3>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="account-holder-name">Account Holder Name *</Label>
                            <Input
                              id="account-holder-name"
                              placeholder="Enter account holder name"
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="bank-name">Bank Name</Label>
                            <Input
                              id="bank-name"
                              placeholder="Enter bank name"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="account-number">Bank Account Number *</Label>
                            <Input
                              id="account-number"
                              placeholder="Enter bank account number"
                              required
                              value={accountNumber}
                              onChange={(e) => setAccountNumber(e.target.value)}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="confirm-account-number">Confirm Account Number *</Label>
                            <Input
                              id="confirm-account-number"
                              placeholder="Re-enter bank account number"
                              required
                              value={confirmAccountNumber}
                              onChange={(e) => setConfirmAccountNumber(e.target.value)}
                              className={!accountNumbersMatch() ? "border-red-500" : ""}
                            />
                            {!accountNumbersMatch() && (
                              <p className="text-xs text-red-500">
                                Account numbers do not match
                              </p>
                            )}
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="ifsc-code">IFSC Code *</Label>
                            <Input
                              id="ifsc-code"
                              placeholder="Enter IFSC code"
                              required
                              className="uppercase"
                              onChange={(e) => {
                                e.target.value = e.target.value.toUpperCase();
                              }}
                            />
                          </div>
                        </div>

                        <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-4 flex gap-3">
                          <Wallet className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                          <div className="text-sm">
                            <p className="text-muted-foreground">
                              Your bank details are used only for Direct Benefit Transfer (DBT) of approved relief amounts.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Document Upload */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <Upload className="h-5 w-5 text-accent" />
                          Document Upload
                        </h3>

                        <div className="space-y-4">
                          <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                            <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                            <p className="font-medium mb-2">Upload via DigiLocker</p>
                            <p className="text-sm text-muted-foreground mb-4">
                              Securely fetch documents from your DigiLocker account
                            </p>
                            <Button type="button" variant="outline" className="mb-2">
                              <Lock className="mr-2 h-4 w-4" />
                              Connect DigiLocker
                            </Button>
                            <p className="text-xs text-muted-foreground">or</p>
                          </div>

                          <div className="space-y-3">
                            <div className="flex items-center justify-between p-4 border rounded-lg">
                              <div className="flex items-center gap-3">
                                <FileText className="h-5 w-5 text-muted-foreground" />
                                <div>
                                  <p className="font-medium text-sm">FIR Copy</p>
                                  <p className="text-xs text-muted-foreground">PDF, JPG (Max 5MB)</p>
                                </div>
                              </div>
                              <Button type="button" size="sm" variant="outline">
                                Upload
                              </Button>
                            </div>

                            <div className="flex items-center justify-between p-4 border rounded-lg">
                              <div className="flex items-center gap-3">
                                <FileText className="h-5 w-5 text-muted-foreground" />
                                <div>
                                  <p className="font-medium text-sm">Medical Report (if applicable)</p>
                                  <p className="text-xs text-muted-foreground">PDF, JPG (Max 5MB)</p>
                                </div>
                              </div>
                              <Button type="button" size="sm" variant="outline">
                                Upload
                              </Button>
                            </div>

                            <div className="flex items-center justify-between p-4 border rounded-lg">
                              <div className="flex items-center gap-3">
                                <FileText className="h-5 w-5 text-muted-foreground" />
                                <div>
                                  <p className="font-medium text-sm">Other Supporting Documents</p>
                                  <p className="text-xs text-muted-foreground">PDF, JPG (Max 5MB each)</p>
                                </div>
                              </div>
                              <Button type="button" size="sm" variant="outline">
                                Upload
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Emergency Support Needs */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            id="emergency-support"
                            className="h-4 w-4 rounded border-input"
                            checked={needsEmergencySupport}
                            onChange={(e) => setNeedsEmergencySupport(e.target.checked)}
                          />
                          <Label htmlFor="emergency-support" className="font-semibold cursor-pointer">
                            I need immediate emergency support
                          </Label>
                        </div>

                        {needsEmergencySupport && (
                          <div className="ml-7 space-y-2 p-4 bg-accent/5 border border-accent/20 rounded-lg">
                            <p className="text-sm font-medium mb-3">Select support needed:</p>
                            <div className="grid md:grid-cols-2 gap-3">
                              <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-input"
                                  checked={emergencySupports.medical}
                                  onChange={(e) =>
                                    setEmergencySupports({ ...emergencySupports, medical: e.target.checked })
                                  }
                                />
                                <span className="text-sm">Medical assistance</span>
                              </label>

                              <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-input"
                                  checked={emergencySupports.shelter}
                                  onChange={(e) =>
                                    setEmergencySupports({ ...emergencySupports, shelter: e.target.checked })
                                  }
                                />
                                <span className="text-sm">Temporary shelter</span>
                              </label>

                              <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-input"
                                  checked={emergencySupports.police}
                                  onChange={(e) =>
                                    setEmergencySupports({ ...emergencySupports, police: e.target.checked })
                                  }
                                />
                                <span className="text-sm">Police protection</span>
                              </label>

                              <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-input"
                                  checked={emergencySupports.counselling}
                                  onChange={(e) =>
                                    setEmergencySupports({ ...emergencySupports, counselling: e.target.checked })
                                  }
                                />
                                <span className="text-sm">Psychological counselling</span>
                              </label>

                              <label className="flex items-center gap-2 cursor-pointer md:col-span-2">
                                <input
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-input"
                                  checked={emergencySupports.foodTravel}
                                  onChange={(e) =>
                                    setEmergencySupports({ ...emergencySupports, foodTravel: e.target.checked })
                                  }
                                />
                                <span className="text-sm">Food and travel support</span>
                              </label>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Privacy Notice */}
                      <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 flex gap-3">
                        <Shield className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <div className="text-sm">
                          <p className="font-medium mb-1">Your Privacy is Protected</p>
                          <p className="text-muted-foreground">
                            All data is encrypted end-to-end. You will be identified by a unique Case ID,
                            not your name. Your personal details are visible only to authorized officers
                            handling your case.
                          </p>
                        </div>
                      </div>

                      <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent-hover">
                        Review Application
                      </Button>
                    </form>

                    {/* Review Modal */}
                    {showReviewModal && (
                      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                        <div className="bg-background rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
                          <div className="p-6 border-b">
                            <h2 className="text-2xl font-bold">Review Your Details</h2>
                            <p className="text-sm text-muted-foreground mt-1">
                              Please verify all information before submitting
                            </p>
                          </div>

                          <div className="p-6 overflow-y-auto max-h-[60vh] space-y-6">
                            {/* Personal Information Summary */}
                            <div>
                              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                <Fingerprint className="h-5 w-5 text-accent" />
                                Personal Information
                              </h3>
                              <div className="grid md:grid-cols-2 gap-3 text-sm">
                                <div>
                                  <p className="text-muted-foreground">Aadhaar Number</p>
                                  <p className="font-medium">XXXX-XXXX-1234</p>
                                </div>
                                <div>
                                  <p className="text-muted-foreground">Mobile Number</p>
                                  <p className="font-medium">+91 XXXXX-67890</p>
                                </div>
                                <div>
                                  <p className="text-muted-foreground">Preferred Language</p>
                                  <p className="font-medium">English</p>
                                </div>
                              </div>
                            </div>

                            {/* Case Details Summary */}
                            <div className="border-t pt-4">
                              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                <FileText className="h-5 w-5 text-accent" />
                                Case Details
                              </h3>
                              <div className="grid md:grid-cols-2 gap-3 text-sm">
                                <div>
                                  <p className="text-muted-foreground">FIR/Case Number</p>
                                  <p className="font-medium">FIR-2024-XXXX</p>
                                </div>
                                <div>
                                  <p className="text-muted-foreground">Police Station</p>
                                  <p className="font-medium">Example PS</p>
                                </div>
                                <div>
                                  <p className="text-muted-foreground">District</p>
                                  <p className="font-medium">Example District</p>
                                </div>
                                <div>
                                  <p className="text-muted-foreground">State</p>
                                  <p className="font-medium">Maharashtra</p>
                                </div>
                                <div>
                                  <p className="text-muted-foreground">Date of Incident</p>
                                  <p className="font-medium">{incidentDate || "Not specified"}</p>
                                </div>
                                <div>
                                  <p className="text-muted-foreground">Date of FIR Registration</p>
                                  <p className="font-medium">{firDate || "Not specified"}</p>
                                </div>
                              </div>
                            </div>

                            {/* Caste & Identity */}
                            <div className="border-t pt-4">
                              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                <Shield className="h-5 w-5 text-accent" />
                                Caste & Identity Verification
                              </h3>
                              <div className="grid md:grid-cols-2 gap-3 text-sm">
                                <div>
                                  <p className="text-muted-foreground">Caste Category</p>
                                  <p className="font-medium">SC/ST</p>
                                </div>
                                <div>
                                  <p className="text-muted-foreground">Certificate Number</p>
                                  <p className="font-medium">CERT-XXXX-XXXX</p>
                                </div>
                              </div>
                            </div>

                            {/* Incident Details */}
                            <div className="border-t pt-4">
                              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                <AlertCircle className="h-5 w-5 text-accent" />
                                Incident Details
                              </h3>
                              <div className="space-y-3 text-sm">
                                <div>
                                  <p className="text-muted-foreground">Type of Atrocity</p>
                                  <p className="font-medium">Physical assault</p>
                                </div>
                                <div>
                                  <p className="text-muted-foreground">Location</p>
                                  <p className="font-medium">Village/Locality, Pincode</p>
                                </div>
                              </div>
                            </div>

                            {/* Bank Details */}
                            <div className="border-t pt-4">
                              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                <CreditCard className="h-5 w-5 text-accent" />
                                Bank Details
                              </h3>
                              <div className="grid md:grid-cols-2 gap-3 text-sm">
                                <div>
                                  <p className="text-muted-foreground">Account Holder Name</p>
                                  <p className="font-medium">Example Name</p>
                                </div>
                                <div>
                                  <p className="text-muted-foreground">Account Number</p>
                                  <p className="font-medium">
                                    XXXXXXX{accountNumber.slice(-4) || "XXXX"}
                                  </p>
                                </div>
                                <div>
                                  <p className="text-muted-foreground">IFSC Code</p>
                                  <p className="font-medium">XXXX0000XXX</p>
                                </div>
                              </div>
                            </div>

                            {/* Emergency Support */}
                            {needsEmergencySupport && (
                              <div className="border-t pt-4">
                                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                  <Clock className="h-5 w-5 text-accent" />
                                  Emergency Support Requested
                                </h3>
                                <div className="space-y-1 text-sm">
                                  {emergencySupports.medical && <p>• Medical assistance</p>}
                                  {emergencySupports.shelter && <p>• Temporary shelter</p>}
                                  {emergencySupports.police && <p>• Police protection</p>}
                                  {emergencySupports.counselling && <p>• Psychological counselling</p>}
                                  {emergencySupports.foodTravel && <p>• Food and travel support</p>}
                                </div>
                              </div>
                            )}
                          </div>

                          <div className="p-6 border-t flex gap-3">
                            <Button
                              type="button"
                              variant="outline"
                              className="flex-1"
                              onClick={() => setShowReviewModal(false)}
                            >
                              Edit Details
                            </Button>
                            <Button
                              type="button"
                              className="flex-1 bg-accent hover:bg-accent-hover"
                              onClick={handleConfirmSubmit}
                            >
                              Confirm & Submit
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              </TabsContent>

              {/* Track Status Tab */}
              <TabsContent value="track" className="space-y-6">
                <Card className="p-6 md:p-8">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Track Your Case Status</h2>
                      <p className="text-muted-foreground">
                        Enter your Case ID or Aadhaar number to view your application status
                      </p>
                    </div>

                    <div className="flex gap-4">
                      <Input placeholder="Enter Case ID or Aadhaar" className="flex-1" />
                      <Button className="bg-primary hover:bg-primary-hover">
                        <Eye className="mr-2 h-4 w-4" />
                        Track
                      </Button>
                    </div>

                    {/* Sample Status Display */}
                    <div className="space-y-6 pt-6">
                      <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                        <div>
                          <p className="text-sm text-muted-foreground">Case ID</p>
                          <p className="font-bold text-lg">DBT-2024-MH-00123</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">Applied On</p>
                          <p className="font-semibold">15 Jan 2024</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {caseStages.map((stage, index) => (
                          <div key={index} className="flex gap-4">
                            <div className="flex flex-col items-center">
                              <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center ${stage.status === "completed"
                                  ? "bg-secondary text-white"
                                  : stage.status === "in-progress"
                                    ? "bg-accent text-white"
                                    : "bg-muted text-muted-foreground"
                                  }`}
                              >
                                {stage.status === "completed" ? (
                                  <CheckCircle2 className="h-5 w-5" />
                                ) : stage.status === "in-progress" ? (
                                  <Clock className="h-5 w-5" />
                                ) : (
                                  <AlertCircle className="h-5 w-5" />
                                )}
                              </div>
                              {index < caseStages.length - 1 && (
                                <div
                                  className={`w-0.5 h-12 ${stage.status === "completed"
                                    ? "bg-secondary"
                                    : "bg-muted"
                                    }`}
                                />
                              )}
                            </div>
                            <div className="flex-1 pb-8">
                              <p className="font-semibold">{stage.stage}</p>
                              <p className="text-sm text-muted-foreground">{stage.date}</p>
                              {stage.status === "in-progress" && (
                                <p className="text-sm text-accent mt-1">Currently processing...</p>
                              )}

                              {/* Officer Review - Status Message */}
                              {stage.stage === "Officer Review" && getQueryStatusMessage() && (
                                <p className={`text-sm mt-1 ${getQueryStatusMessage().color}`}>
                                  {getQueryStatusMessage().text}
                                </p>
                              )}

                              {/* Officer Queries & Clarifications - Show under Officer Review step */}
                              {stage.stage === "Officer Review" && (
                                <div className="mt-4 bg-muted/20 border border-muted rounded-lg p-4 space-y-4">
                                  <h4 className="font-semibold text-sm">Officer Queries & Clarifications</h4>

                                  {officerQueries.length === 0 ? (
                                    <p className="text-sm text-muted-foreground">
                                      No queries have been raised by the officer for this case.
                                    </p>
                                  ) : (
                                    <div className="space-y-3">
                                      {officerQueries.map((query) => (
                                        <div key={query.id} className="border border-muted rounded-lg p-3 bg-background space-y-2">
                                          <div className="flex items-start justify-between gap-3">
                                            <div className="flex-1 space-y-1">
                                              <div className="flex items-center gap-2">
                                                <span className="font-medium text-sm">{query.type}</span>
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
                                              <p className="text-sm text-muted-foreground">{query.message}</p>
                                              <p className="text-xs text-muted-foreground">Raised on: {query.raisedOn}</p>
                                            </div>
                                            {query.status === "Action Required" && (
                                              <Button
                                                size="sm"
                                                onClick={() => handleRespondToQuery(query)}
                                                className="bg-primary hover:bg-primary-hover flex-shrink-0"
                                              >
                                                Respond / Upload
                                              </Button>
                                            )}
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              )}

                              {/* UTR Verification Card - Show under Victim Confirmation step */}
                              {stage.stage === "Victim Confirmation" && stage.status === "in-progress" && !isVerified && (
                                <div className="mt-4 bg-accent/5 border border-accent/20 rounded-lg p-4 space-y-3">
                                  <p className="font-medium text-sm">Verify Transaction / UTR ID</p>
                                  <p className="text-xs text-muted-foreground">
                                    After you receive the amount in your bank account, enter the Transaction/UTR ID mentioned in the SMS from your bank to confirm receipt.
                                  </p>
                                  <div className="space-y-2">
                                    <Input
                                      placeholder="Enter Transaction / UTR ID"
                                      value={utrId}
                                      onChange={(e) => {
                                        setUtrId(e.target.value);
                                        setVerificationError("");
                                      }}
                                      className={verificationError ? "border-red-500" : ""}
                                    />
                                    {verificationError && (
                                      <p className="text-xs text-red-500">{verificationError}</p>
                                    )}
                                    <Button
                                      onClick={handleVerifyUTR}
                                      className="w-full bg-primary hover:bg-primary-hover"
                                      disabled={!utrId.trim()}
                                    >
                                      Verify Receipt
                                    </Button>
                                    <p className="text-xs text-muted-foreground">
                                      Hint: Use <code className="bg-muted px-1 py-0.5 rounded text-xs">TXN123456789</code> for this demo
                                    </p>
                                  </div>
                                </div>
                              )}

                              {/* Success Message - Show when verified */}
                              {stage.stage === "Victim Confirmation" && isVerified && (
                                <div className="mt-4 bg-secondary/5 border border-secondary/20 rounded-lg p-4 space-y-2">
                                  <p className="text-sm font-medium text-secondary">
                                    ✅ Relief amount received and verified
                                  </p>
                                  <p className="text-xs text-muted-foreground">
                                    Thank you. Your case is now closed.
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-4">
                        <p className="font-medium text-secondary mb-2">Estimated Completion</p>
                        <p className="text-sm text-muted-foreground">
                          Your case is on track. Expected disbursement by: <strong>25 Jan 2024</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              {/* Emergency Relief Tab */}
              <TabsContent value="emergency" className="space-y-6">
                <Card className="p-6 md:p-8">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Emergency Relief Wallet</h2>
                      <p className="text-muted-foreground">
                        Apply for immediate partial disbursement if you're facing critical financial hardship
                      </p>
                    </div>

                    <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 space-y-4">
                      <div className="flex items-start gap-3">
                        <Clock className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold text-lg mb-2">48-Hour Relief Promise</h3>
                          <p className="text-sm text-muted-foreground">
                            In critical situations, you can receive up to 30% of your sanctioned amount
                            within 48 hours after basic AI verification. This helps cover immediate needs
                            like medical expenses, temporary shelter, or legal assistance.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-semibold">Eligibility Criteria</h3>
                      <ul className="space-y-2">
                        <li className="flex gap-3">
                          <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Valid FIR registered under PCR/PoA Acts</span>
                        </li>
                        <li className="flex gap-3">
                          <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Case registered within last 30 days</span>
                        </li>
                        <li className="flex gap-3">
                          <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Valid Aadhaar linked bank account</span>
                        </li>
                        <li className="flex gap-3">
                          <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">No previous emergency relief claimed for same case</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="emergency-case-id">Enter Your Case ID</Label>
                      <Input
                        id="emergency-case-id"
                        placeholder="DBT-2024-XX-XXXXX"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="emergency-reason">Reason for Emergency Relief</Label>
                      <textarea
                        id="emergency-reason"
                        rows={4}
                        className="w-full px-3 py-2 rounded-md border border-input bg-background"
                        placeholder="Please describe your urgent need (e.g., medical emergency, temporary shelter, legal fees)"
                      />
                    </div>

                    <Button size="lg" className="w-full bg-accent hover:bg-accent-hover">
                      Apply for Emergency Relief
                    </Button>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Help & Support Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Need Help?</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center space-y-3">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Call Us</h3>
                <p className="text-sm text-muted-foreground">24/7 Helpline</p>
                <p className="font-bold text-primary">1800-XXX-XXXX</p>
              </Card>

              <Card className="p-6 text-center space-y-3">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Email Support</h3>
                <p className="text-sm text-muted-foreground">Response within 24 hours</p>
                <p className="font-bold text-primary">support@dbt.gov.in</p>
              </Card>

              <Card className="p-6 text-center space-y-3">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                  <HelpCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">FAQs</h3>
                <p className="text-sm text-muted-foreground">Quick answers</p>
                <Button variant="link" className="text-primary p-0 h-auto">
                  View FAQs
                </Button>
              </Card>
            </div>

            <div className="mt-8 flex justify-center">
              <Button
                variant="outline"
                asChild
                className="w-full max-w-4xl h-14 bg-white border-gray-300 text-[#1e3a8a] hover:bg-orange-500 hover:text-white hover:border-orange-500 rounded-lg transition-all"
              >
                <a href="/grievances" className="flex items-center justify-center">
                  <AlertCircle className="mr-2 h-4 w-4" />
                  File a Grievance
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Offline Access */}
      <section className="py-12 bg-gradient-dashboard">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-bold">Don't Have Internet Access?</h2>
            <p className="text-muted-foreground">
              You can still apply for relief through alternative channels
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="p-6 space-y-3">
                <Phone className="h-8 w-8 mx-auto text-accent" />
                <h3 className="font-semibold">SMS Application</h3>
                <p className="text-sm text-muted-foreground">
                  Send SMS to <strong>9XXXX-XXXXX</strong> with format:
                  <br />
                  <code className="text-xs bg-muted px-2 py-1 rounded mt-2 inline-block">
                    APPLY &lt;Aadhaar&gt; &lt;FIR&gt;
                  </code>
                </p>
              </Card>

              <Card className="p-6 space-y-3">
                <Phone className="h-8 w-8 mx-auto text-accent" />
                <h3 className="font-semibold">IVR System</h3>
                <p className="text-sm text-muted-foreground">
                  Call <strong>1800-XXX-XXXX</strong>
                  <br />
                  Follow voice instructions in your language
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Respond to Officer Query Modal */}
      {showResponseModal && selectedQuery && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={handleCloseResponseModal}>
          <div
            className="bg-background rounded-lg shadow-xl max-w-xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b">
              <h2 className="text-2xl font-bold">Respond to Officer Query</h2>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4">
              {/* Read-only Query Details */}
              <div className="bg-muted/30 rounded-lg p-4 space-y-2">
                <div>
                  <p className="text-xs text-muted-foreground">Case ID</p>
                  <p className="font-semibold">DBT-2024-MH-00123</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Query Type</p>
                  <p className="font-semibold">{selectedQuery.type}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Officer's Message</p>
                  <p className="text-sm">{selectedQuery.message}</p>
                </div>
              </div>

              {/* Conditional Response Input */}
              {selectedQuery.type === "Missing document" ? (
                <div className="space-y-2">
                  <label htmlFor="response-file" className="text-sm font-medium">
                    Upload required document <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="response-file"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleResponseFileChange}
                  />
                  <p className="text-xs text-muted-foreground">PDF/JPG/PNG, Max 5MB</p>
                  {responseFile && (
                    <p className="text-xs text-green-600">✓ {responseFile.name}</p>
                  )}
                  {responseError && (
                    <p className="text-xs text-red-500">{responseError}</p>
                  )}
                </div>
              ) : (
                <div className="space-y-2">
                  <label htmlFor="response-text" className="text-sm font-medium">
                    Your response <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="response-text"
                    rows={4}
                    className="w-full px-3 py-2 rounded-md border border-input bg-background"
                    placeholder="Write your clarification for the officer here."
                    value={responseText}
                    onChange={(e) => {
                      setResponseText(e.target.value);
                      setResponseError("");
                    }}
                  />
                  {responseError && (
                    <p className="text-xs text-red-500">{responseError}</p>
                  )}
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t bg-muted/20 flex justify-end gap-3">
              <Button variant="ghost" onClick={handleCloseResponseModal}>
                Cancel
              </Button>
              <Button className="bg-primary hover:bg-primary-hover" onClick={handleSubmitResponse}>
                Submit Response
              </Button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default VictimPortal;
