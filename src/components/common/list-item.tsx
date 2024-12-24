import { cn } from "@/lib/utils";

export const ListItem = ({
  label,
  value,
  divider,
}: {
  label: string;
  value: string | undefined;
  divider?: boolean;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-3",
        divider ? "border-b" : "border-none",
        "border-divider",
        "py-4"
      )}
    >
      <p className="font-normal text-sm text-text-secondary col-span-1 px-6">
        {label}
      </p>
      {label !== "Task Status" && (
        <p className="font-medium text-sm text-text-primary col-span-2">
          {value}
        </p>
      )}
      {label === "Task Status" && (
        <div
          className={cn(
            "flex items-center gap-1 flex-wrap ",
          )}
        >
          <p
            className={cn(
              "border border-borderGray rounded-lg",
              "py-1 px-2 h-[26px] min-w-[120px]",
              "flex justify-center items-center gap-2",
              "text-center text-[13px] font-medium leading-[18px]"
            )}
          >
            <img
              src={
                value == "in_progress"
                  ? "/assets/icons/in-progress.png"
                  : value == "in_review"
                    ? "/assets/icons/completed.png"
                    : value == "pending"
                      ? "/assets/icons/pending.png"
                      : "/assets/icons/posted.png"
              }
              alt="icon"
              className="w-6 h-6"
            />
            {value}
          </p>
        </div>
      )}
    </div>
  );
};
