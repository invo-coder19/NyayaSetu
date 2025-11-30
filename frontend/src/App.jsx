import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/components/theme-provider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ScrollToTop from "@/components/ScrollToTop";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Transparency from "./pages/Transparency";
import Grievances from "./pages/Grievances";
import VictimPortal from "./pages/VictimPortal";
import OfficerPortal from "./pages/OfficerPortal";
import ForgotPassword from "./pages/ForgotPassword";
import VictimRegistration from "./pages/VictimRegistration";
import OfficerRegistration from "./pages/OfficerRegistration";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AuthProvider>
          <BrowserRouter>
            <ScrollToTop behavior="smooth" />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/login/:role" element={<Login />} />
              <Route path="/transparency" element={<Transparency />} />
              <Route path="/grievances" element={<Grievances />} />
              <Route
                path="/victim-portal"
                element={
                  <ProtectedRoute requiredRole="victim">
                    <VictimPortal />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/officer-portal"
                element={
                  <ProtectedRoute requiredRole="officer">
                    <OfficerPortal />
                  </ProtectedRoute>
                }
              />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/register/victim" element={<VictimRegistration />} />
              <Route path="/register/officer" element={<OfficerRegistration />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
