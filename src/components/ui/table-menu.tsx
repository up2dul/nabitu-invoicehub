import { Menu as MenuIcon } from "@mui/icons-material";
import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

type TableMenuProps = {
  onUpdate: () => void;
  onDelete: () => void;
};

export const TableMenu = ({ onUpdate, onDelete }: TableMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={isOpen ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={isOpen ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon color="action" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={onUpdate}>Update</MenuItem>
        <MenuItem onClick={onDelete}>Delete</MenuItem>
      </Menu>
    </>
  );
};
