"use client";
import { useDebounceValue } from "@/hooks/use-debounce";
import { Box, TextField } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export const InvoicesFilter = () => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const defaultSearch = searchParams.get("search") || "";
  const [debouncedSearch, setDebouncedSearch] = useDebounceValue(
    defaultSearch,
    1000,
  );

  // biome-ignore lint/correctness/useExhaustiveDependencies: `pathname` and `replace` are unnecessary dependencies
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (debouncedSearch.length > 0) {
      params.set("search", debouncedSearch);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  }, [debouncedSearch, searchParams]);

  return (
    <Box>
      <TextField
        size="small"
        placeholder="Search"
        onChange={e => setDebouncedSearch(e.target.value)}
      />
    </Box>
  );
};
