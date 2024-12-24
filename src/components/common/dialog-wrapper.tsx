import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTrigger,
} from "@/components/ui/dialog";
import * as React from "react";

const DialogWrapper = ({
  children,
  isOpen,
  onClose,
  triggerText,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  triggerText?: string;
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={undefined}>
      {triggerText && (
        <DialogTrigger>{triggerText || "Open Dialog"}</DialogTrigger>
      )}
      <DialogOverlay>
        <DialogContent className="bg-white min-w-[600px] p-2">
          {children}
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
};

export default DialogWrapper;
