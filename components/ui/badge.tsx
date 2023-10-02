import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        imposter: "border-transparent bg-imposter text-white hover:bg-imposter/80",
        neutral: "border-transparent bg-neutral text-white hover:bg-neutral/80",
        innocent: "border-transparent bg-innocent text-white hover:bg-innocent/80",
        both: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  if (variant === 'both') return <div className={cn(badgeVariants({ variant }), className)} {...props}>イノセント/インポスター</div>
  if (variant === 'imposter') return <div className={cn(badgeVariants({ variant }), className)} {...props}>インポスター</div>
  if (variant === 'innocent') return <div className={cn(badgeVariants({ variant }), className)} {...props}>イノセント</div>
  if (variant === 'neutral') return <div className={cn(badgeVariants({ variant }), className)} {...props}>ニュートラル</div>

  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
