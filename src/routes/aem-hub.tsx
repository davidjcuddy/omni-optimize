import { createFileRoute } from "@tanstack/react-router";
import { StatusBadge } from "@/components/StatusBadge";
import { remediationItems } from "@/lib/mock-data";
import { useState } from "react";
import { Check, Pencil, Trash2, GitMerge } from "lucide-react";

export const Route = createFileRoute("/aem-hub")({
  component: AemHubPage,
  head: () => ({
    meta: [
      { title: "AEM Integration Hub — AEM Omni-Optimizer" },
      { name: "description", content: "Review and push optimized content to AEM." },
    ],
  }),
});

function AemHubPage() {
  const [items, setItems] = useState(remediationItems);

  return (
    <div className="p-6 space-y-6 max-w-7xl">
      <div className="flex items-center gap-2">
        <GitMerge className="h-5 w-5 text-primary" />
        <h1 className="text-xl font-bold text-foreground">AEM Remediation Hub</h1>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-lg border border-border bg-card overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-foreground">{item.element}</span>
                <span className="font-mono text-xs text-muted-foreground">{item.page}</span>
              </div>
              <StatusBadge status={item.status}>{item.status}</StatusBadge>
            </div>

            {/* Diff View */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
              <div className="p-4">
                <p className="text-xs font-medium text-danger mb-2">Current</p>
                <pre className="text-xs text-muted-foreground bg-surface rounded-md p-3 overflow-x-auto whitespace-pre-wrap font-mono">
                  {item.current}
                </pre>
              </div>
              <div className="p-4">
                <p className="text-xs font-medium text-success mb-2">Suggested</p>
                <pre className="text-xs text-muted-foreground bg-surface rounded-md p-3 overflow-x-auto whitespace-pre-wrap font-mono">
                  {item.suggested}
                </pre>
              </div>
            </div>

            {/* Reason & Actions */}
            <div className="flex items-center justify-between px-4 py-3 border-t border-border bg-surface/50">
              <p className="text-xs text-muted-foreground flex-1 mr-4">{item.reason}</p>
              <div className="flex items-center gap-2 shrink-0">
                <button className="flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                  <Check className="h-3 w-3" />
                  Approve & Push
                </button>
                <button className="flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">
                  <Pencil className="h-3 w-3" />
                  Edit
                </button>
                <button className="flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-danger transition-colors">
                  <Trash2 className="h-3 w-3" />
                  Discard
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
