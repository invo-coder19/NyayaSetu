import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, Users, Building2, BarChart3, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Login = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  const roles = [
    {
      id: "victim",
      title: "Victim/Applicant",
      description: "Apply for relief and track your case",
      icon: Users,
      color: "bg-accent",
    },
    {
      id: "officer",
      title: "District/State Officer",
      description: "Verify and process applications",
      icon: FileText,
      color: "bg-primary",
    },
    {
      id: "financial",
      title: "Financial Institution",
      description: "Manage fund disbursements",
      icon: Building2,
      color: "bg-secondary",
    },
    {
      id: "ministry",
      title: "Central Ministry",
      description: "Monitor and analyze operations",
      icon: BarChart3,
      color: "bg-info",
    },
  ];

  if (!selectedRole) {
    return (
      <div className="min-h-screen bg-gradient-dashboard">
        <Navbar />
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-4">
                <Shield className="h-8 w-8 text-primary-foreground" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Select Your Role
              </h1>
              <p className="text-muted-foreground">
                Choose the portal appropriate for your access level
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {roles.map((role) => (
                <Card
                  key={role.id}
                  className="p-6 cursor-pointer hover:shadow-elevated transition-smooth hover:scale-105 group"
                  onClick={() => setSelectedRole(role.id)}
                >
                  <div className={`${role.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth`}>
                    <role.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{role.title}</h3>
                  <p className="text-muted-foreground text-sm">{role.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentRole = roles.find(r => r.id === selectedRole);

  return (
    <div className="min-h-screen bg-gradient-dashboard">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <Card className="p-8 shadow-elevated">
            <div className="text-center mb-8">
              <div className={`${currentRole.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <currentRole.icon className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-2">{currentRole.title} Login</h2>
              <p className="text-muted-foreground text-sm">{currentRole.description}</p>
            </div>

            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="userId">User ID / Email</Label>
                <Input
                  id="userId"
                  placeholder="Enter your credentials"
                  className="transition-base"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="transition-base"
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  <span className="text-muted-foreground">Remember me</span>
                </label>
                <Link to="/forgot-password" className="text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>

              <Button className={`w-full ${currentRole.color} hover:opacity-90 transition-base`}>
                Login Securely
              </Button>

              {selectedRole === "victim" && (
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">
                    New applicant?
                  </p>
                  <Link to="/register">
                    <Button variant="outline" className="w-full">
                      Register for Relief
                    </Button>
                  </Link>
                </div>
              )}
            </form>

            <div className="mt-6 pt-6 border-t text-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedRole(null)}
                className="text-muted-foreground"
              >
                ← Change Role
              </Button>
            </div>
          </Card>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Need help? Call our 24/7 helpline:{" "}
              <span className="font-semibold text-foreground">1800-XXX-XXXX</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
