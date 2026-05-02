import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const cardVariants = cva("rounded-2xl p-6 transition-all duration-300", {
  variants: {
    elevation: {
      ground: "border border-border-subtle bg-surface",
      elevated:
        "border border-border-default bg-surface-glass backdrop-blur-sm shadow-[0_2px_8px_-1px_rgba(0,0,0,0.3)] hover:border-border-hover hover:bg-white/[0.05] hover:shadow-[0_4px_16px_-2px_rgba(0,0,0,0.4)]",
      floating:
        "border border-border-hover bg-white/[0.06] backdrop-blur-lg shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.6)]",
    },
  },
  defaultVariants: { elevation: "elevated" },
});

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, elevation, ...props }, ref) => (
    <div ref={ref} className={cn(cardVariants({ elevation }), className)} {...props} />
  )
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 pb-4", className)} {...props} />
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("font-[family-name:var(--font-barlow)] text-xl font-semibold leading-none tracking-tight text-white", className)}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("", className)} {...props} />
);
CardContent.displayName = "CardContent";

export { Card, CardHeader, CardTitle, CardContent, cardVariants };
