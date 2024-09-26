import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

export default function Header({title,subtitle}) {
  const theme = useTheme();
  return (
    <Box sx={{mb:2}}>
      <Typography
        sx={{
          color: theme.palette.info.light,
          fontWeight: "bold",
        }}
        variant="h5"
      >
        {title}
      </Typography>

          <Typography variant="body1">{ subtitle}</Typography>
    </Box>
  );
}
