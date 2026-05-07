import { createFileRoute } from "@tanstack/react-router";
import { StatusBadge } from "@/components/StatusBadge";
import { radarData, schemaTable } from "@/lib/mock-data";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { FileSearch, ShieldCheck, Smartphone } from "lucide-react";

export const Route = createFileRoute("/core-seo")({
  component: CoreSeoPage,
  head: () => ({
    meta: [
      { title: "Core SEO — AEM Omni-Optimizer" },
      { name: "description", content: "E-E-A-T analysis and schema markup validation." },
    ],
  }),
});

function CoreSeoPage() {
  return (
    <div className="p-6 space-y-6 max-w-7xl">
      <h1 className="text-xl font-bold text-foreground">Core Ranking & E-E-A-T</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Radar Chart */}
        <div className="rounded-lg border border-border bg-card p-6">
          <h2 className="text-sm font-semibold text-foreground mb-4">Content Quality Radar</h2>
          <ResponsiveContainer width="100%" height={280}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="var(--border)" />
              <PolarAngleAxis
                dataKey="metric"
                tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
              />
              <PolarRadiusAxis
                angle={30}
                domain={[0, 100]}
                tick={{ fill: "var(--muted-foreground)", fontSize: 10 }}
              />
              <Radar
                name="Score"
                dataKey="score"
                stroke="var(--primary)"
                fill="var(--primary)"
                fillOpacity={0.2}
                strokeWidth={2}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Quick Stats */}
        <div className="space-y-4">
          <div className="rounded-lg border border-border bg-card p-5 flex items-center gap-4">
            <div className="rounded-md bg-success/10 p-2.5">
              <ShieldCheck className="h-5 w-5 text-success" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Backlink Health</p>
              <p className="text-xs text-muted-foreground">142 referring domains · DA 58 · 3 toxic links flagged</p>
            </div>
          </div>
          <div className="rounded-lg border border-border bg-card p-5 flex items-center gap-4">
            <div className="rounded-md bg-success/10 p-2.5">
              <Smartphone className="h-5 w-5 text-success" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Mobile-First Ready</p>
              <p className="text-xs text-muted-foreground">Responsive viewport · Touch targets pass · Font size legible</p>
            </div>
          </div>
        </div>
      </div>

      {/* Schema Table */}
      <div className="rounded-lg border border-border bg-card p-6">
        <div className="flex items-center gap-2 mb-4">
          <FileSearch className="h-4 w-4 text-primary" />
          <h2 className="text-sm font-semibold text-foreground">Schema Markup Validation</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-xs text-muted-foreground">
                <th className="pb-2 pr-4 font-medium">Type</th>
                <th className="pb-2 pr-4 font-medium">Page</th>
                <th className="pb-2 pr-4 font-medium">Format</th>
                <th className="pb-2 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {schemaTable.map((row, i) => (
                <tr key={i} className="border-b border-border/50 last:border-0">
                  <td className="py-2.5 pr-4 font-medium text-foreground">{row.type}</td>
                  <td className="py-2.5 pr-4 font-mono text-xs text-muted-foreground">{row.page}</td>
                  <td className="py-2.5 pr-4 text-muted-foreground">{row.format}</td>
                  <td className="py-2.5">
                    <StatusBadge status={row.status as any}>{row.status}</StatusBadge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
