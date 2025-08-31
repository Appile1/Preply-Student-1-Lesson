import { Box, Typography } from "@mui/material";

export default function ShoppingCart() {
  return (
    <Box sx={{ flex: 1, p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Settings
      </Typography>
      <Typography>Application settings will be available here</Typography>
    </Box>
  );
}
