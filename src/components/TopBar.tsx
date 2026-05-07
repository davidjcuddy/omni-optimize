import { useState } from "react";
import { Search, CloudUpload, ChevronDown } from "lucide-react";

export function TopBar() {
  const [env, setEnv] = useState<"Production" | "Staging">("Production");
  const [url, setUrl] = useState("https://www.example.com/products/cloud");

  return (
    <header className="flex items-center gap-3 h-14 px-4 border-b border-border bg-card shrink-0">
      <div className="flex items-center gap-2 flex-1 max-w-xl">
        <Search className="h-4 w-4 text-muted-foreground shrink-0" />
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL to audit…"
          className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
        />
      </div>

      <button
        onClick={() => setEnv(env === "Production" ? "Staging" : "Production")}
        className="flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
      >
        <span
          className={`h-2 w-2 rounded-full ${env === "Production" ? "bg-success" : "bg-warning"}`}
        />
        {env}
        <ChevronDown className="h-3 w-3" />
      </button>

      <button className="flex items-center gap-2 rounded-md bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
        <CloudUpload className="h-4 w-4" />
        Push to AEM
      </button>
    </header>
  );
}
