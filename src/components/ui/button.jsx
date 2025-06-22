import { forwardRef } from "react"
import { cn } from "@/lib/utils"

const Button = forwardRef(({ className, variant = "default", ...props }, ref) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none",
        variant === "default" ? "bg-black text-white hover:bg-gray-900" : "",
        variant === "outline" ? "border border-gray-300 text-black hover:bg-gray-100" : "",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button }
