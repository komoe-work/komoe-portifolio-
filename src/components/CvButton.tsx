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

  const handleDownloadCv = async (e: React.MouseEvent) => {
    e.preventDefault();
    setDownloading(true);
    const cvUrl = "/ko-moe-summary-cv.html";
    const fileName = "Aung-Zaw-Moe-Ko-Moe-Summary-CV.html";

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
      const a = document.createElement("a");
      a.href = cvUrl;
      a.download = fileName;
      a.target = "_blank";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
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
        onClick={handleDownloadCv}
        disabled={downloading}
        className={`inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all active:scale-[0.98] cursor-pointer disabled:opacity-70 min-h-[44px] ${getVariantStyles()}`}
        aria-label="Download Aung Zaw Moe (Ko Moe) Professional CV"
      >
        <Download className="w-4 h-4 shrink-0" aria-hidden="true" />
        <span>{downloading ? "Downloading..." : "Download CV"}</span>
      </button>

      {showViewButton && (
        <a
          href="/ko-moe-summary-cv.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-bold text-xs uppercase tracking-wider bg-primary text-white hover:bg-slate-800 shadow-md transition-all active:scale-[0.98] min-h-[44px]"
          aria-label="View Aung Zaw Moe (Ko Moe) Professional CV in browser"
        >
          <FileText className="w-4 h-4 shrink-0" aria-hidden="true" />
          <span>View CV</span>
        </a>
      )}
    </div>
  );
}
