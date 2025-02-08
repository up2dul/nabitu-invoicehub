"use client";
import { Add, FormatListBulleted } from "@mui/icons-material";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  const isMdScreen = useMediaQuery("(min-width:900px)");
  const pathname = usePathname();
  const addPathnameColor =
    pathname === "/invoices/add" ? "primary.light" : "#9D9D9D";
  const listPathnameColor =
    pathname === "/invoices/list" ? "primary.light" : "#9D9D9D";

  return (
    <Box
      sx={{
        bgcolor: "primary.dark",
        width: { xs: "90px", md: "280px" },
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 2,
        pt: "30px",
        px: { xs: "10px", md: "38px" },
      }}
    >
      {/* desktop image */}
      <Box
        sx={{
          position: "relative",
          width: "166px",
          height: "44px",
          display: isMdScreen ? "block" : "none",
        }}
      >
        <Image
          src="/invoicehub-text-logo.webp"
          alt="InvoiceHub Logo"
          objectFit="cover"
          layout="fill"
        />
      </Box>

      {/* mobile image */}
      <Box
        sx={{
          position: "relative",
          width: "42px",
          height: "44px",
          display: isMdScreen ? "none" : "block",
          marginX: "auto",
        }}
      >
        <Image
          src="/invoicehub-logo.webp"
          alt="InvoiceHub Logo"
          objectFit="cover"
          layout="fill"
        />
      </Box>

      {/* list menu */}
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        sx={{
          bgcolor: "primary.dark",
          marginTop: "30px",
        }}
        subheader={
          isMdScreen && (
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              sx={{ bgcolor: "primary.dark", color: "#9D9D9D" }}
            >
              MENU
            </ListSubheader>
          )
        }
      >
        <ListItemButton component={Link} href="/invoices/add">
          <ListItemIcon>
            <Add sx={{ color: addPathnameColor }} />
          </ListItemIcon>
          <ListItemText
            primary={isMdScreen && "Add Invoice"}
            sx={{ color: addPathnameColor }}
          />
        </ListItemButton>
        <ListItemButton component={Link} href="/invoices/list">
          <ListItemIcon>
            <FormatListBulleted sx={{ color: listPathnameColor }} />
          </ListItemIcon>
          <ListItemText
            primary={isMdScreen && "My Invoices"}
            sx={{ color: listPathnameColor }}
          />
        </ListItemButton>
      </List>
    </Box>
  );
};
