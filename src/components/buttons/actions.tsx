// Assets
import { cn } from "@/lib/utils";
import Button from "./button";

interface Props {
  onView: () => void;
  title: string;
  isRed?: boolean;
}

const Actions = ({ onView, isRed, title }: Props) => {
  return (
    <div className="">
      <Button
        text={title}
        onClick={onView}
        className={cn(
          "justify-center",
          "h-[30px] w-[64px]",
          isRed ? "bg-red" : "bg-primary"
        )}
      />
    </div>
  );
};

export default Actions;
