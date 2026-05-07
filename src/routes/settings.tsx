import { createFileRoute } from "@tanstack/react-router";
import { Settings as SettingsIcon } from "lucide-react";

export const Route = createFileRoute("/settings")({
  component: SettingsPage,
  head: () => ({
    meta: [
      { title: "Settings — AEM Omni-Optimizer" },
      { name: "description", content: "Configure your AEM Omni-Optimizer instance." },
    ],
  }),
});

function SettingsPage() {
  return (
    <div className="p-6 space-y-6 max-w-3xl">
      <div className="flex items-center gap-2">
        <SettingsIcon className="h-5 w-5 text-primary" />
        <h1 className="text-xl font-bold text-foreground">Settings</h1>
      </div>

      <div className="space-y-4">
        {[
          { label: "AEM Server URL", value: "https://aem-prod.example.com", type: "text" },
          { label: "API Key", value: "••••••••••••••••", type: "password" },
          { label: "Default Environment", value: "Production", type: "select" },
          { label: "Auto-push approved changes", value: "", type: "toggle" },
        ].map((setting, i) => (
          <div key={i} className="flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3">
            <span className="text-sm font-medium text-foreground">{setting.label}</span>
            {setting.type === "toggle" ? (
              <div className="h-5 w-9 rounded-full bg-primary/30 relative cursor-pointer">
                <div className="absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-primary transition-transform" />
              </div>
            ) : (
              <span className="text-sm text-muted-foreground font-mono">{setting.value}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
