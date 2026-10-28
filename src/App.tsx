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
// is still growing while the new route paints, so a link to /#key-features has
// to place that section at the top and repeat the placement a few times until
// the page has reached its full height.
const HashScroll = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = decodeURIComponent(hash.slice(1));
    const delays = [0, 60, 150, 300, 600, 1000];
    const timers: number[] = [];
    let settled = 0;
    const place = (index: number) => {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView();
        if (Math.abs(target.getBoundingClientRect().top) <= 2) {
          settled += 1;
          if (settled >= 2) {
            timers.forEach((timer) => window.clearTimeout(timer));
            return;
          }
        } else {
          settled = 0;
        }
      }
      if (index + 1 < delays.length) {
        timers.push(window.setTimeout(() => place(index + 1), delays[index + 1] - delays[index]));
      }
    };
    place(0);
    return () => timers.forEach((timer) => window.clearTimeout(timer));
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
