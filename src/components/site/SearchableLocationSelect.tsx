import { useMemo, useState } from "react";
import { Check, ChevronDown, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import type { LocationOption } from "@/lib/location-data.types";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const triggerClass =
  "flex h-auto w-full items-center justify-between gap-2 rounded-none border-0 border-b border-border bg-transparent py-2.5 text-left text-base shadow-none focus:border-accent focus:outline-none disabled:cursor-not-allowed disabled:opacity-50";

type SearchableLocationSelectProps = {
  value: string;
  onValueChange: (value: string) => void;
  options: LocationOption[];
  placeholder: string;
  disabled?: boolean;
  searchPlaceholder?: string;
};

export function SearchableLocationSelect({
  value,
  onValueChange,
  options,
  placeholder,
  disabled = false,
  searchPlaceholder = "Search...",
}: SearchableLocationSelectProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const selectedLabel = options.find((option) => option.value === value)?.label;

  const filteredOptions = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return options;
    return options.filter((option) => option.label.toLowerCase().includes(query));
  }, [options, search]);

  return (
    <Popover
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (!next) setSearch("");
      }}
    >
      <PopoverTrigger asChild disabled={disabled}>
        <button type="button" className={triggerClass}>
          <span className={cn("truncate", !selectedLabel && "text-muted-foreground")}>
            {selectedLabel ?? placeholder}
          </span>
          <ChevronDown className="size-4 shrink-0 opacity-50" />
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[var(--radix-popover-trigger-width)] p-0"
        align="start"
      >
        <div className="flex items-center border-b px-3">
          <Search className="mr-2 size-4 shrink-0 opacity-50" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={searchPlaceholder}
            className="h-10 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>
        <div className="max-h-[280px] overflow-y-auto p-1">
          {filteredOptions.length === 0 ? (
            <p className="py-6 text-center text-sm text-muted-foreground">No results found.</p>
          ) : (
            filteredOptions.map((option) => (
              <button
                key={`${option.value}-${option.label}`}
                type="button"
                className={cn(
                  "flex w-full items-center gap-2 rounded-sm px-2 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground",
                  value === option.value && "bg-accent/10",
                )}
                onClick={() => {
                  onValueChange(option.value);
                  setOpen(false);
                  setSearch("");
                }}
              >
                <Check
                  className={cn("size-4 shrink-0", value === option.value ? "opacity-100" : "opacity-0")}
                />
                <span className="truncate">{option.label}</span>
              </button>
            ))
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
