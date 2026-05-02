import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "border-accent-blue/30 bg-accent-blue/10 text-accent-blue",
        secondary: "border-brand-blue/30 bg-brand-blue/10 text-[#33A1D6]",
        destructive: "border-red-500/30 bg-red-500/10 text-red-400",
        success: "border-green-500/30 bg-green-500/10 text-green-400",
        outline: "border-border-default bg-surface-glass text-text-secondary",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
