import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageSquare, Upload, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Grievances = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    caseId: "",
    category: "",
    subject: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Grievance Submitted",
      description: "Your grievance has been registered. Ticket ID: GRV-2025-" + Math.floor(Math.random() * 10000),
    });
    setFormData({ caseId: "", category: "", subject: "", description: "" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 bg-gradient-dashboard">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-2xl mb-4">
                <MessageSquare className="h-8 w-8 text-accent-foreground" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                File a Grievance
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're here to help. Submit your complaint or concern and track its resolution status.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Form */}
              <Card className="lg:col-span-2 p-8 shadow-card">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="caseId">Case ID (Optional)</Label>
                    <Input
                      id="caseId"
                      placeholder="Enter your case ID if applicable"
                      value={formData.caseId}
                      onChange={(e) => setFormData({ ...formData, caseId: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Grievance Category</Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) => setFormData({ ...formData, category: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="delay">Delay in Processing</SelectItem>
                        <SelectItem value="verification">Verification Issues</SelectItem>
                        <SelectItem value="disbursement">Disbursement Problems</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="document">Document Related</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="Brief description of your issue"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Detailed Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Please provide detailed information about your grievance"
                      rows={6}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="attachment">Attachment (Optional)</Label>
                    <div className="flex items-center gap-2">
                      <Input id="attachment" type="file" className="flex-1" />
                      <Button type="button" variant="outline" size="icon">
                        <Upload className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Accepted formats: PDF, JPG, PNG (Max 5MB)
                    </p>
                  </div>

                  <Button type="submit" className="w-full bg-accent hover:bg-accent-hover">
                    Submit Grievance
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </Card>

              {/* Support Info */}
              <div className="space-y-6">
                <Card className="p-6 shadow-card">
                  <h3 className="font-semibold mb-4">Need Immediate Help?</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="font-medium mb-1">Helpline (24/7)</div>
                      <div className="text-muted-foreground">18002021989</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Email Support</div>
                      <div className="text-muted-foreground">support@dbt-pcr.gov.in</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Response Time</div>
                      <div className="text-muted-foreground">Within 48 hours</div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 shadow-card bg-muted">
                  <h3 className="font-semibold mb-3">Track Your Grievance</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Once submitted, you'll receive a ticket ID to track your grievance status.
                  </p>
                  <Button variant="outline" className="w-full">
                    Check Status
                  </Button>
                </Card>

                <Card className="p-6 shadow-card">
                  <h3 className="font-semibold mb-3">Common Issues</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Document verification delays</li>
                    <li>• Fund disbursement queries</li>
                    <li>• Case status updates</li>
                    <li>• Technical login issues</li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Grievances;
