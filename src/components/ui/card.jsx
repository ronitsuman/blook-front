import { cn } from "@/lib/utils"

export function Card({ className, ...props }) {
  return <div className={cn("rounded-xl border bg-white text-card-foreground shadow", className)} {...props} />
}

export function CardContent({ className, ...props }) {
  return <div className={cn("p-4", className)} {...props} />
}
