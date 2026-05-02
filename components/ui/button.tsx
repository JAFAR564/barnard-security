import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

function Slot({
  children,
  ...props
}: React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode }) {
  if (React.isValidElement(children)) {
    const childProps = children.props as Record<string, unknown>;
    const mergedProps = {
      ...props,
      ...childProps,
      className: cn(
        (props as Record<string, unknown>).className as string | undefined,
        childProps.className as string | undefined
      ),
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return React.cloneElement(children, mergedProps as any);
  }
  return <>{children}</>;
}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#0066AA] text-white shadow-[0_2px_12px_rgba(0,102,170,0.45),0_1px_2px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:bg-[#0077BF] hover:shadow-[0_4px_20px_rgba(0,119,191,0.5),0_2px_4px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.25)] active:translate-y-[2px] active:shadow-[0_1px_4px_rgba(0,102,170,0.3)] focus-visible:ring-[#0066AA]",
        secondary:
          "bg-brand-blue text-white shadow-[0_2px_12px_rgba(0,84,142,0.25),0_1px_2px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] hover:bg-[#1a6faf] hover:shadow-[0_4px_20px_rgba(0,84,142,0.35)] active:translate-y-[2px] focus-visible:ring-brand-blue",
        outline:
          "border border-border-default bg-transparent text-white shadow-[0_1px_2px_rgba(0,0,0,0.2)] hover:bg-white/[0.04] hover:border-border-hover focus-visible:ring-white/30",
        ghost:
          "text-[#A8AABB] hover:text-white hover:bg-white/[0.04]",
        whatsapp:
          "bg-[#1D7A3E] text-white shadow-[0_2px_12px_rgba(29,122,62,0.4),inset_0_1px_0_rgba(255,255,255,0.15)] hover:bg-[#186833] hover:shadow-[0_4px_20px_rgba(29,122,62,0.5)] active:translate-y-[2px] focus-visible:ring-[#1D7A3E]",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-8 text-base",
        xl: "h-16 px-10 text-lg rounded-2xl",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    if (asChild) {
      return (
        <Slot
          className={cn(buttonVariants({ variant, size, className }))}
          {...(props as React.HTMLAttributes<HTMLElement>)}
        >
          {props.children}
        </Slot>
      );
    }
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
