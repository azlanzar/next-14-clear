"use client";

import { Calendar as CalendarIcon, Info } from "lucide-react";
import moment from "moment"; // Import Moment.js
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { DateRangePicker, Range, RangeKeyDict } from "react-date-range";

// Extend HTMLDivElement attributes with className
interface DatePickerWithRangeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  dateRange: Range | undefined;
  applyFilters: () => void;
  handleDateRangePicker: (date: Range) => void;
  maxDate?: boolean;
  label?: string;
}

export function DatePickerWithRange({
  dateRange,
  handleDateRangePicker,
  applyFilters,
  maxDate,
  className,
  label,
}: DatePickerWithRangeProps) {
  const rangeColors = ["#21AB70"];
  return (
    <div className={cn("w-full md:w-auto grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "md:w-[300px] w-full justify-start text-left font-normal",
              !dateRange && "text-muted-foreground"
            )}
          >
            <CalendarIcon />
            {dateRange?.startDate ? (
              dateRange.endDate ? (
                <>
                  {moment(dateRange.startDate).format("MMM DD, YYYY")} -{" "}
                  {moment(dateRange.endDate).format("MMM DD, YYYY")}
                </>
              ) : (
                moment(dateRange.startDate).format("MMM DD, YYYY")
              )
            ) : (
              <span className="text-base">{label ?? "Pick a date"}</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto  bg-white flex flex-col gap-2"
          align="start"
        >
          <div className="text-slate-500 mb-2 flex gap-2 items-center text-sm">
            <Info size={20} />{" "}
            <span>
              Please Select a date or date range and hit apply button.
            </span>
          </div>
          <DateRangePicker
            ranges={[
              {
                startDate: dateRange?.startDate || new Date(),
                endDate: dateRange?.endDate || new Date(),
                key: "selection",
              },
            ]}
            rangeColors={rangeColors}
            // calendarFocus="backwards"
            months={2}
            direction="horizontal"
            inputRanges={[]}
            maxDate={maxDate ? new Date() : undefined}
            onChange={(range: RangeKeyDict) => {
              const start = range?.selection.startDate;
              const end = range?.selection.endDate;
              if (start) start.setHours(0, 0, 0, 0);
              if (end) end.setHours(23, 59, 59, 999);
              handleDateRangePicker({
                startDate: start,
                endDate: end,
              });
            }}
          />
          {dateRange?.startDate && dateRange?.endDate && (
            <div className="flex justify-end">
              <Button
                size="sm"
                className="w-fit text-white"
                onClick={applyFilters}
              >
                Apply Filter
              </Button>
            </div>
          )}
        </PopoverContent>
      </Popover>
    </div>
  );
}
