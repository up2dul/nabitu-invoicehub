import {
  ChatOutlined,
  ExpandMore,
  NotificationsOutlined,
} from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Box,
  IconButton,
  Switch,
  Typography,
} from "@mui/material";

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
        paddingX: "30px",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: "28px",
      }}
    >
      <Switch />

      <Box
        sx={{
          display: {
            xs: "none",
            md: "flex",
          },
          alignItems: "center",
          gap: "15px",
        }}
      >
        <IconButton
          aria-label="notifications"
          sx={{
            bgcolor: "#EFF4FB",
            color: "#64748B",
            border: "1px solid #E2E8F0",
          }}
        >
          <NotificationsOutlined />
        </IconButton>
        <IconButton
          aria-label="chat"
          sx={{
            bgcolor: "#EFF4FB",
            color: "#64748B",
            border: "1px solid #E2E8F0",
          }}
        >
          <Badge color="error" variant="dot">
            <ChatOutlined />
          </Badge>
        </IconButton>
      </Box>

      <Box sx={{ display: "flex", gap: "15px" }}>
        <Box
          sx={{
            textAlign: "right",
            display: {
              xs: "none",
              md: "block",
            },
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: "#212B36", fontWeight: 600 }}
          >
            John Doe
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: "#637381", fontWeight: 600 }}
          >
            Verified Member
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <Avatar alt="John Doe" src="" />
          <IconButton aria-label="settings">
            <ExpandMore />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};
