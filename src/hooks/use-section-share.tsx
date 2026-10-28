import { useEffect } from "react";
import { toast } from "sonner";

export const useSectionShare = () => {
  // Handle smooth scrolling on page load with hash
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (!element) return;
        // offsetTop is measured against the nearest positioned ancestor, which is
        // not the top of the page, so use the element's real distance from the top.
        const top = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top, behavior: "smooth" });
      }, 100);
    }
  }, []);

  const copyLinkToSection = (sectionId: string, sectionName: string) => {
    const url = `${window.location.origin}${window.location.pathname}#${sectionId}`;
    
    navigator.clipboard.writeText(url).then(() => {
      toast.success(`Link to "${sectionName}" copied!`);
      window.history.pushState(null, "", `#${sectionId}`);
    }).catch(() => {
      toast.error("Failed to copy link");
    });
  };

  return { copyLinkToSection };
};
