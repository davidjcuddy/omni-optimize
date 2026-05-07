import { createFileRoute } from "@tanstack/react-router";
import { aeoChecklist } from "@/lib/mock-data";
import { CheckCircle2, XCircle, BrainCircuit, FileText } from "lucide-react";

export const Route = createFileRoute("/aeo")({
  component: AeoPage,
  head: () => ({
    meta: [
      { title: "AEO — AEM Omni-Optimizer" },
      { name: "description", content: "Answer Engine Optimization and AI readiness checks." },
    ],
  }),
});

function AeoPage() {
  return (
    <div className="p-6 space-y-6 max-w-7xl">
      <h1 className="text-xl font-bold text-foreground">AEO & AI Search Readiness</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Inverted Pyramid */}
        <div className="rounded-lg border border-border bg-card p-6">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="h-4 w-4 text-primary" />
            <h2 className="text-sm font-semibold text-foreground">Answer Architecture</h2>
          </div>
          <div className="flex flex-col items-center gap-1 py-4">
            <div className="w-full max-w-xs rounded-t-md bg-success/20 border border-success/30 px-4 py-3 text-center">
              <p className="text-xs font-semibold text-success">Citable Answer</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">52 words · Lead paragraph</p>
            </div>
            <div className="w-4/5 max-w-[280px] bg-warning/15 border border-warning/20 px-4 py-3 text-center">
              <p className="text-xs font-semibold text-warning">Supporting Detail</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">Evidence, data, examples</p>
            </div>
            <div className="w-3/5 max-w-[220px] rounded-b-md bg-accent border border-border px-4 py-3 text-center">
              <p className="text-xs font-semibold text-muted-foreground">Background Context</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">History, methodology</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-2">
            ✓ Page leads with a 40–60 word citable answer in the first paragraph.
          </p>
        </div>

        {/* Entity & NLP Checklist */}
        <div className="rounded-lg border border-border bg-card p-6">
          <div className="flex items-center gap-2 mb-4">
            <BrainCircuit className="h-4 w-4 text-primary" />
            <h2 className="text-sm font-semibold text-foreground">Entity & NLP Checklist</h2>
          </div>
          <div className="space-y-3">
            {aeoChecklist.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-md bg-surface px-3 py-2.5">
                {item.status ? (
                  <CheckCircle2 className="h-4 w-4 text-success mt-0.5 shrink-0" />
                ) : (
                  <XCircle className="h-4 w-4 text-danger mt-0.5 shrink-0" />
                )}
                <div>
                  <p className="text-sm font-medium text-foreground">{item.check}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
