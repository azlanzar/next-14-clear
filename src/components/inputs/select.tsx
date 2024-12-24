// Shadcn UI Select component
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

// Formik Types
import { FormikFormProps, FormikHelpers } from "formik";

interface SelectScrollableProps {
  options: { value: string; label: string }[] | undefined;
  label: string;
  name: string;
  title?: string;
  error?: string;
  touched?: boolean;
  value: string;
  setFieldValue: FormikHelpers<FormikFormProps>["setFieldError"];
}

export function SelectScrollable({
  options,
  title,
  label,
  name,
  error,
  touched,
  setFieldValue,
  value,
}: SelectScrollableProps) {
  const isError = error && touched;
  return (
    <>
      <label>
        <p className="text-text-primary font-medium text-sm mb-1">{label}</p>
        <Select
          value={value}
          onValueChange={(value: string) => setFieldValue(name, value)}
        >
          <SelectTrigger
            className={cn(
              "w-full text-base text-gray-500 font-normal !outline-none !ring-0",
              isError && "!border-red"
            )}
          >
            <SelectValue placeholder={label.toLowerCase()} />
          </SelectTrigger>
          <SelectContent className="max-h-48 ">
            <SelectGroup>
              {options?.map((op) => (
                <SelectItem
                  className="bg-white border font-normal text-base cursor-pointer"
                  key={op.value}
                  value={op.value}
                >
                  {op.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        {isError && <p className="text-error text-red text-xs my-1">{error}</p>}
      </label>
    </>
  );
}
