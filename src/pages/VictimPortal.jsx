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
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const VictimPortal = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("register");

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Application Submitted",
      description: "Your case has been registered successfully. You will receive updates via SMS and email.",
    });
  };

  const caseStages = [
    { stage: "Application Filed", status: "completed", date: "2024-01-15" },
    { stage: "Document Verification", status: "completed", date: "2024-01-16" },
    { stage: "AI Verification", status: "in-progress", date: "In Progress" },
    { stage: "Officer Review", status: "pending", date: "Pending" },
    { stage: "Fund Sanction", status: "pending", date: "Pending" },
    { stage: "Disbursement", status: "pending", date: "Pending" },
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

                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address (Optional)</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="your.email@example.com"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="language">Preferred Language *</Label>
                            <select
                              id="language"
                              className="w-full h-10 px-3 rounded-md border border-input bg-background"
                              required
                            >
                              <option value="english">English</option>
                              <option value="hindi">हिन्दी (Hindi)</option>
                              <option value="bengali">বাংলা (Bengali)</option>
                              <option value="tamil">தமிழ் (Tamil)</option>
                              <option value="telugu">తెలుగు (Telugu)</option>
                              <option value="marathi">मराठी (Marathi)</option>
                            </select>
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
                            />
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
                        Submit Application
                      </Button>
                    </form>
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
                                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                  stage.status === "completed"
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
                                  className={`w-0.5 h-12 ${
                                    stage.status === "completed"
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

            <div className="mt-8 text-center">
              <Button variant="outline" asChild>
                <a href="/grievances">
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

      <Footer />
    </div>
  );
};

export default VictimPortal;
