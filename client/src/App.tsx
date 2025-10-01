import { Switch, Route, Router as WouterRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import PrivacyPage from "@/pages/PrivacyPage";
import TermsPage from "@/pages/TermsPage";
import AnalyticsDashboard from "@/pages/AnalyticsDashboard";
import SEO from "@/components/SEO";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ThemeToggle from "@/components/ThemeToggle";
import { useAnalytics } from "@/hooks/useAnalytics";

// Base path for custom domain (no subdirectory needed)
const basePath = "";

function Router() {
  // Initialize analytics tracking
  useAnalytics();
  
  return (
    <WouterRouter base={basePath}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/privacidad" component={PrivacyPage} />
        <Route path="/terminos" component={TermsPage} />
        <Route path="/dashboard" component={AnalyticsDashboard} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <SEO />
          <Toaster />
          <Router />
          <WhatsAppButton />
          <ThemeToggle />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
