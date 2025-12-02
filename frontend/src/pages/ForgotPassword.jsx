import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const ForgotPassword = () => {
    const [emailOrId, setEmailOrId] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ emailOrId });
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-gradient-dashboard flex flex-col">
            <Navbar />
            <div className="flex-1 flex items-center justify-center px-4">
                <div className="w-full max-w-md">
                    <Card className="p-8 shadow-elevated">
                        <div className="text-center mb-8">
                            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Shield className="h-8 w-8 text-primary-foreground" />
                            </div>
                            <h2 className="text-2xl font-bold mb-2">Reset Your Password</h2>
                            <p className="text-muted-foreground text-sm">
                                Enter your email or user ID to receive a password reset link
                            </p>
                        </div>

                        {!submitted ? (
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="space-y-2">
                                    <Label htmlFor="emailOrId">Email / User ID</Label>
                                    <Input
                                        id="emailOrId"
                                        type="text"
                                        placeholder="Enter your email or user ID"
                                        className="transition-base"
                                        value={emailOrId}
                                        onChange={(e) => setEmailOrId(e.target.value)}
                                        required
                                    />
                                </div>

                                <Button className="w-full bg-primary hover:opacity-90 transition-base">
                                    Send Reset Link
                                </Button>
                            </form>
                        ) : (
                            <div className="text-center py-4">
                                <p className="text-sm text-muted-foreground">
                                    If this account exists, a reset link has been sent.
                                </p>
                            </div>
                        )}

                        <div className="mt-6 pt-6 border-t text-center">
                            <Link to="/login">
                                <Button variant="ghost" size="sm" className="text-muted-foreground">
                                    ← Back to Login
                                </Button>
                            </Link>
                        </div>
                    </Card>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-muted-foreground">
                            Need help? Call our 24/7 helpline:{" "}
                            <span className="font-semibold text-foreground">18002021989</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
