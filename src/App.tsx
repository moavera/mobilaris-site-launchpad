import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import SiteProduct from "./pages/SiteProduct";
import DemoStart from "./pages/DemoStart";
import WhyMobilarisSite from "./pages/WhyMobilarisSite";
import ProductPage from "./pages/ProductPage";
import NotFound from "./pages/NotFound";
import MessagingPage from "./pages/MessagingPage";
import FeaturePage, { features } from "./pages/FeaturePage";

const queryClient = new QueryClient();

// Client-side navigation does not follow URL fragments on its own, and the page
// is still growing while images load, so a link to /#key-features has to put
// that section at the top and then re-check the spot until it stops moving.
const HashScroll = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = decodeURIComponent(hash.slice(1));
    let raf = 0;
    let checks = 0;
    const place = () => {
      checks += 1;
      const target = document.getElementById(id);
      if (!target) {
        if (checks < 120) raf = window.requestAnimationFrame(place);
        return;
      }
      target.scrollIntoView();
      const settled = Math.abs(target.getBoundingClientRect().top) <= 2;
      const atBottom =
        window.scrollY >= document.documentElement.scrollHeight - window.innerHeight - 1;
      if (!settled && !atBottom && checks < 120) raf = window.requestAnimationFrame(place);
    };
    const timer = window.setTimeout(place, 40);
    return () => {
      window.clearTimeout(timer);
      window.cancelAnimationFrame(raf);
    };
  }, [pathname, hash]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <HashScroll />
        <Routes>
          <Route path="/" element={<SiteProduct />} />
          <Route path="/demo-start" element={<DemoStart />} />
          <Route path="/platform" element={<WhyMobilarisSite />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/messaging" element={<MessagingPage />} />
          <Route path="/people-workgroup-location" element={<FeaturePage feature={features.people} />} />
          <Route path="/emergency-support" element={<FeaturePage feature={features.emergency} />} />
          <Route path="/asset-tracking" element={<FeaturePage feature={features.assets} />} />
          <Route path="/sensor-integration" element={<FeaturePage feature={features.sensors} />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
