import Checkbox from "@/components/Checkbox";
import { Box, Card, Typography } from "@mui/material";
import React from "react";

const CheckboxGuide: React.FC = () => {
  return (
    <Box>
      <Typography variant="h6">Checkbox Guide</Typography>
      <Card sx={{ mt: 4 }}>
        <Typography variant="subtitle1">Checkboxes</Typography>
        <Checkbox label="Remember Me" />
        <Checkbox label="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti itaque voluptatem reiciendis unde quam quae ratione, natus magnam officia amet eum porro et est, a, veritatis provident vel cumque ex. " />
        <Checkbox
          align="center"
          label="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti itaque voluptatem reiciendis unde quam quae ratione, natus magnam officia amet eum porro et est, a, veritatis provident vel cumque ex.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti itaque voluptatem reiciendis unde quam quae ratione, natus magnam officia amet eum porro et est, a, veritatis provident vel cumque ex. "
        />
      </Card>
    </Box>
  );
};

export default CheckboxGuide;