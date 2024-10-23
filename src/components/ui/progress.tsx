import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "../../lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-[12px] w-full overflow-hidden rounded-full bg-transparent border border-yellowAccent",
      className,
    )}
    {...props}
    style={{
      boxShadow: "0px 4px 44px rgba(245, 169, 0, 0.75)",
    }}
  >
    <ProgressPrimitive.Indicator
      className={`flex-1 w-full h-full transition-all rounded-full bg-gradient-to-r from-yellowAccent to-pinkAccent ${(value ?? 0) >= 100 && "bg-gradient-to-r from-greenDark to-greenLight"}`}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
