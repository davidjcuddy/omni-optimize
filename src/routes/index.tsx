import { createFileRoute } from "@tanstack/react-router";
import { ScoreGauge } from "@/components/ScoreGauge";
import { StatusBadge } from "@/components/StatusBadge";
import { scores, webVitals, aemSyncStatus } from "@/lib/mock-data";
import {
  Gauge,
  Wifi,
  WifiOff,
  Clock,
  ArrowUpRight,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: DashboardPage,
  head: () => ({
    meta: [
      { title: "Dashboard — AEM Omni-Optimizer" },
      { name: "description", content: "At-a-glance view of your site optimization scores." },
    ],
  }),
});

function DashboardPage() {
  return (
    <div className="p-6 space-y-6 max-w-7xl">
      <h1 className="text-xl font-bold text-foreground">At-a-Glance Dashboard</h1>

      {/* Score Gauges */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="rounded-lg border border-border bg-card p-6 animate-fade-up">
          <ScoreGauge score={scores.seo} label="Core E-E-A-T & SEO" sublabel="Content quality & authority" />
        </div>
        <div className="rounded-lg border border-border bg-card p-6 animate-fade-up animate-fade-up-delay-1">
          <ScoreGauge score={scores.aeo} label="AEO & AI Readiness" sublabel="Answer engine optimization" />
        </div>
        <div className="rounded-lg border border-border bg-card p-6 animate-fade-up animate-fade-up-delay-2">
          <ScoreGauge score={scores.technical} label="Technical & Web Vitals" sublabel="Performance & accessibility" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Core Web Vitals */}
        <div className="rounded-lg border border-border bg-card p-6 animate-fade-up animate-fade-up-delay-1">
          <div className="flex items-center gap-2 mb-4">
            <Gauge className="h-4 w-4 text-primary" />
            <h2 className="text-sm font-semibold text-foreground">Core Web Vitals</h2>
          </div>
          <div className="space-y-4">
            {Object.entries(webVitals).map(([key, v]) => (
              <div key={key} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground uppercase">{key}</p>
                  <p className="text-xs text-muted-foreground">
                    Threshold: {v.threshold}
                    {v.unit}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg font-bold text-foreground tabular-nums">
                    {v.value}
                    {v.unit}
                  </span>
                  <StatusBadge status={v.status === "good" ? "good" : "poor"}>
                    {v.status === "good" ? "Pass" : "Fail"}
                  </StatusBadge>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AEM Sync Status */}
        <div className="rounded-lg border border-border bg-card p-6 animate-fade-up animate-fade-up-delay-2">
          <div className="flex items-center gap-2 mb-4">
            {aemSyncStatus.connected ? (
              <Wifi className="h-4 w-4 text-success" />
            ) : (
              <WifiOff className="h-4 w-4 text-danger" />
            )}
            <h2 className="text-sm font-semibold text-foreground">AEM Sync Status</h2>
            <StatusBadge status={aemSyncStatus.connected ? "good" : "error"}>
              {aemSyncStatus.connected ? "Connected" : "Disconnected"}
            </StatusBadge>
          </div>

          <div className="flex items-center gap-4 mb-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              Last sync: {aemSyncStatus.lastSync}
            </span>
            <span className="flex items-center gap-1">
              <ArrowUpRight className="h-3 w-3" />
              {aemSyncStatus.pendingUpdates} pending
            </span>
          </div>

          <div className="space-y-2">
            {aemSyncStatus.logs.map((log, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-md bg-surface px-3 py-2 text-xs"
              >
                <div className="flex items-center gap-2">
                  {log.status === "success" ? (
                    <CheckCircle2 className="h-3.5 w-3.5 text-success" />
                  ) : (
                    <AlertCircle className="h-3.5 w-3.5 text-danger" />
                  )}
                  <span className="text-surface-foreground">{log.action}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <span className="font-mono">{log.page}</span>
                  <span>{log.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
