import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

export default function Products() {
  const { id } = useParams<{ id: string }>();

  return (
    <Box sx={{ flex: 1, p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {id} Products
      </Typography>
      <Typography>{id} Products will be shown here</Typography>
    </Box>
  );
}
