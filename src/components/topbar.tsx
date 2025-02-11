import { Box } from "@mui/material";

export const Topbar = () => {
  return (
    <Box
      component="header"
      sx={{
        bgcolor: "white",
        width: "100%",
        height: "80px",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1,
      }}
    />
  );
};
