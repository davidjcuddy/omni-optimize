import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "good" | "warning" | "poor" | "valid" | "missing" | "success" | "error" | "info" | "critical" | "pending" | "approved";
  children: React.ReactNode;
}

export function StatusBadge({ status, children }: StatusBadgeProps) {
  const styles: Record<string, string> = {
    good: "bg-success/15 text-success",
    valid: "bg-success/15 text-success",
    success: "bg-success/15 text-success",
    approved: "bg-success/15 text-success",
    warning: "bg-warning/15 text-warning",
    pending: "bg-warning/15 text-warning",
    poor: "bg-danger/15 text-danger",
    missing: "bg-danger/15 text-danger",
    error: "bg-danger/15 text-danger",
    critical: "bg-danger/15 text-danger",
    info: "bg-accent text-muted-foreground",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
        styles[status] ?? styles.info
      )}
    >
      {children}
    </span>
  );
}
