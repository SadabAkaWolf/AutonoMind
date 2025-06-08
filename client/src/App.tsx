import { useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");

    const moveCursor = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    const handleClick = () => {
      cursor?.classList.add("clicked");
    };

    const handleRelease = () => {
      cursor?.classList.remove("clicked");
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleClick);
    window.addEventListener("mouseup", handleRelease);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleClick);
      window.removeEventListener("mouseup", handleRelease);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        {/* Custom Cursor Element */}
        <div id="custom-cursor" className="custom-cursor"></div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
