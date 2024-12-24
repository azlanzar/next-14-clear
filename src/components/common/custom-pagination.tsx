import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface PaginationProps {
  metaData: { limit: number };
  currentPage: number;
  totalPages: number;
  handleNext: () => void;
  handlePrevious: () => void;
  handleRowsPerPageChange: (value: string) => void;
}

const CustomPagination = ({
  metaData,
  currentPage,
  totalPages,
  handleNext,
  handlePrevious,
  handleRowsPerPageChange,
}: PaginationProps) => {
  return (
    <Pagination className="flex justify-end  border-t-slate-200 py-2">
      <PaginationContent>
        <PaginationItem>
          <Select
            value={metaData.limit.toString()}
            onValueChange={(value) => handleRowsPerPageChange(value)}
          >
            <SelectTrigger className="text-sm w-fit min-w-[60px] h-7 focus:ring-0">
              <SelectValue placeholder="Rows per page" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="25">25</SelectItem>
                <SelectItem value="50">50</SelectItem>
                <SelectItem value="100">100</SelectItem>
                <SelectItem value="150">150</SelectItem>
                <SelectItem value="200">200</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </PaginationItem>
        <PaginationItem
          className={cn(
            "cursor-pointer",
            currentPage === 1 && "text-gray-500 cursor-not-allowed"
          )}
          onClick={handlePrevious}
        >
          <PaginationPrevious />
        </PaginationItem>
        <PaginationItem>
          {currentPage} of {totalPages}
        </PaginationItem>
        <PaginationItem
          onClick={handleNext}
          className={cn(
            "cursor-pointer",
            currentPage === totalPages && "text-gray-500 cursor-not-allowed"
          )}
        >
          <PaginationNext />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default CustomPagination;
