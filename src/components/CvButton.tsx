import React from "react";
import { Download, FileText } from "lucide-react";

interface CvButtonProps {
  variant?: "primary" | "secondary" | "outline" | "compact";
  className?: string;
  showViewButton?: boolean;
}

export function CvButton({
  variant = "primary",
  className = "",
  showViewButton = false,
}: CvButtonProps) {
  const [downloading, setDownloading] = React.useState(false);

  const handleCvAction = (e: React.MouseEvent) => {
    e.preventDefault();
    const cvSection = document.getElementById("cvs");
    if (cvSection) {
      const offset = 80;
      const elementPosition = cvSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    } else {
      handleDirectDownload();
    }
  };

  const handleDirectDownload = async () => {
    setDownloading(true);
    const cvUrl = "/Aung-Zaw-Moe-Professional-Profile.html";
    const fileName = "Aung-Zaw-Moe-Professional-Profile.html";

    try {
      const response = await fetch(cvUrl);
      if (!response.ok) throw new Error("Failed to fetch CV file");
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(blobUrl);
    } catch (err) {
      console.error("Direct download fallback active:", err);
      window.open(cvUrl, "_blank");
    } finally {
      setTimeout(() => setDownloading(false), 600);
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "secondary":
        return "bg-slate-800 text-white hover:bg-slate-900 border border-slate-700 shadow-md";
      case "outline":
        return "bg-white text-primary hover:bg-slate-50 border border-border-subtle shadow-sm";
      case "compact":
        return "bg-accent text-white py-2 px-3 text-xs font-bold rounded-lg shadow hover:bg-accent/90";
      case "primary":
      default:
        return "bg-accent text-white hover:bg-accent/90 shadow-md shadow-accent/20";
    }
  };

  return (
    <div className={`inline-flex flex-wrap items-center gap-2.5 ${className}`}>
      <button
        onClick={handleCvAction}
        disabled={downloading}
        className={`inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all active:scale-[0.98] cursor-pointer disabled:opacity-70 min-h-[44px] ${getVariantStyles()}`}
        aria-label="Select and Download Aung Zaw Moe (Ko Moe) Professional CV"
      >
        <Download className="w-4 h-4 shrink-0" aria-hidden="true" />
        <span>{downloading ? "Downloading..." : "Select & Download CV"}</span>
      </button>

      {showViewButton && (
        <a
          href="#cvs"
          onClick={handleCvAction}
          className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-bold text-xs uppercase tracking-wider bg-primary text-white hover:bg-slate-800 shadow-md transition-all active:scale-[0.98] min-h-[44px]"
          aria-label="View Aung Zaw Moe (Ko Moe) Professional CV options"
        >
          <FileText className="w-4 h-4 shrink-0" aria-hidden="true" />
          <span>View CV Options</span>
        </a>
      )}
    </div>
  );
}
