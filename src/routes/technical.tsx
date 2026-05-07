import { createFileRoute } from "@tanstack/react-router";
import { StatusBadge } from "@/components/StatusBadge";
import { technicalIssues } from "@/lib/mock-data";
import { AlertTriangle, AlertCircle, Info } from "lucide-react";

export const Route = createFileRoute("/technical")({
  component: TechnicalPage,
  head: () => ({
    meta: [
      { title: "Technical Health — AEM Omni-Optimizer" },
      { name: "description", content: "Technical issues, crawl errors, and accessibility." },
    ],
  }),
});

function TechnicalPage() {
  const iconMap = {
    critical: <AlertCircle className="h-4 w-4 text-danger shrink-0" />,
    warning: <AlertTriangle className="h-4 w-4 text-warning shrink-0" />,
    info: <Info className="h-4 w-4 text-muted-foreground shrink-0" />,
  };

  return (
    <div className="p-6 space-y-6 max-w-5xl">
      <h1 className="text-xl font-bold text-foreground">Technical Health Feed</h1>

      <div className="flex gap-3 text-xs text-muted-foreground">
        <span>{technicalIssues.filter((i) => i.severity === "critical").length} critical</span>
        <span>·</span>
        <span>{technicalIssues.filter((i) => i.severity === "warning").length} warnings</span>
        <span>·</span>
        <span>{technicalIssues.filter((i) => i.severity === "info").length} info</span>
      </div>

      <div className="space-y-2">
        {technicalIssues.map((issue, i) => (
          <div
            key={i}
            className="flex items-start gap-3 rounded-lg border border-border bg-card px-4 py-3"
          >
            {iconMap[issue.severity]}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground">{issue.message}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="font-mono text-xs text-muted-foreground">{issue.page}</span>
                <StatusBadge status={issue.severity}>{issue.category}</StatusBadge>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
