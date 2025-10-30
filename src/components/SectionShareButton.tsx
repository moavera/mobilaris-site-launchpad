import { Link } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSectionShare } from "@/hooks/use-section-share";

interface SectionShareButtonProps {
  sectionId: string;
  sectionName: string;
}

export const SectionShareButton = ({ sectionId, sectionName }: SectionShareButtonProps) => {
  const { copyLinkToSection } = useSectionShare();

  return (
    <Button
      variant="ghost"
      size="sm"
      className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      onClick={() => copyLinkToSection(sectionId, sectionName)}
      aria-label={`Copy link to ${sectionName} section`}
    >
      <Link className="h-4 w-4" />
    </Button>
  );
};
