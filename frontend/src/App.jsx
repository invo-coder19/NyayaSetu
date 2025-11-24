import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/components/theme-provider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Transparency from "./pages/Transparency";
import Grievances from "./pages/Grievances";
import VictimPortal from "./pages/VictimPortal";
import OfficerPortal from "./pages/OfficerPortal";
import FinancialPortal from "./pages/FinancialPortal";
import MinistryDashboard from "./pages/MinistryDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/transparency" element={<Transparency />} />
            <Route path="/grievances" element={<Grievances />} />
            <Route path="/victim" element={<VictimPortal />} />
            <Route path="/officer" element={<OfficerPortal />} />
            <Route path="/financial" element={<FinancialPortal />} />
            <Route path="/ministry" element={<MinistryDashboard />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
