import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import SO1 from "./pages/SO1";
import SO2 from "./pages/SO2";
import SO3 from "./pages/SO3";
import SO4 from "./pages/SO4";
import SO5 from "./pages/SO5";
import SO6 from "./pages/SO6";
import SO7 from "./pages/SO7";
import PDFViewer from "./pages/PDFViewer";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/so1" element={<SO1 />} />
          <Route path="/so2" element={<SO2 />} />
          <Route path="/so3" element={<SO3 />} />
          <Route path="/so4" element={<SO4 />} />
          <Route path="/so5" element={<SO5 />} />
          <Route path="/so6" element={<SO6 />} />
          <Route path="/so7" element={<SO7 />} />
          <Route path="/pdf-viewer" element={<PDFViewer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
