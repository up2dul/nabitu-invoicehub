"use client";
import { useDebounceValue } from "@/hooks/use-debounce";
import { Search } from "@mui/icons-material";
import {
  Box,
  MenuItem,
  Select,
  type SelectChangeEvent,
  TextField,
} from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export const InvoicesFilter = () => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const defaultSearch = searchParams.get("search") || "";
  const defaultStatus = searchParams.get("status") || "";
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

  const handleStatusChange = (event: SelectChangeEvent) => {
    const params = new URLSearchParams(searchParams);
    if (event.target.value === "") {
      params.delete("status");
    } else {
      params.set("status", event.target.value);
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Box sx={{ display: "flex", gap: { xs: "10px", lg: "25px" } }}>
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
            borderRadius: "10px",
          },
        }}
        onChange={e => setDebouncedSearch(e.target.value)}
      />

      <Select
        size="small"
        displayEmpty
        value={defaultStatus || ""}
        sx={{
          "& .MuiInputBase-root, & .MuiSelect-select": {
            color: "#7E7E7E",
            bgcolor: "white",
            borderRadius: "10px",
          },
          borderRadius: "10px",
        }}
        onChange={handleStatusChange}
      >
        <MenuItem value="" selected>
          All Status
        </MenuItem>
        <MenuItem value="paid">Paid</MenuItem>
        <MenuItem value="unpaid">Unpaid</MenuItem>
        <MenuItem value="pending">Pending</MenuItem>
      </Select>
    </Box>
  );
};
