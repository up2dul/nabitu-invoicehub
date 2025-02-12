"use client";
import { useDebounceValue } from "@/hooks/use-debounce";
import { Search } from "@mui/icons-material";
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
    600,
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
        color="primary"
        slotProps={{
          input: {
            startAdornment: <Search sx={{ color: "#7E7E7E" }} />,
          },
        }}
        sx={{
          "& .MuiInputBase-input": {
            paddingLeft: "0.8rem",
          },
          "& .MuiInputBase-root": {
            bgcolor: "white",
          },
          borderRadius: "10px",
        }}
        onChange={e => setDebouncedSearch(e.target.value)}
      />
    </Box>
  );
};
