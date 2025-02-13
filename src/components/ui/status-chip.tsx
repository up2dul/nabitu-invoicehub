import type { InvoiceSchema } from "@/lib/schemas";
import { getStatusColor } from "@/lib/utils";
import { Chip } from "@mui/material";

export const StatusChip = ({ status }: { status: InvoiceSchema["status"] }) => {
  const { bgColor, color } = getStatusColor(status);

  return (
    <Chip
      label={status}
      sx={{
        borderRadius: "30px",
        fontWeight: 600,
        color: color,
        backgroundColor: bgColor,
      }}
    />
  );
};
