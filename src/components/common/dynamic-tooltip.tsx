import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ReactNode } from "react";

interface DynamicTooltipProps {
  trigger: ReactNode;
  content: ReactNode;
}

export function DynamicTooltip({ trigger, content }: DynamicTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{trigger}</TooltipTrigger>
        <TooltipContent className="bg-white text-gray-600 text-xs text-wrap max-w-96">
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
