export const avatarImageCode = `import React from 'react';
import { Avatar, Card, Stack, Typography } from "@mui/material"

const App : React.FC = () => {
  return (
    <Card component="section">
      <Typography variant="subtitle1" fontWeight={"semiBold"} mb={1}>
        Avatar Image
      </Typography>
      <Stack direction="row" spacing={2}>
        <Avatar src="https://i.pinimg.com/564x/dc/f2/55/dcf2552a4150988f92f7d5ca1c2d7c7e.jpg" />
        <Avatar src="https://i.pinimg.com/564x/87/2f/b2/872fb29d50657c88487be1e736974737.jpg" />
        <Avatar src="https://i.pinimg.com/564x/7e/24/7c/7e247c5bf0e7996c21ba6ca93c6ea74c.jpg" />
      </Stack>
    </Card>
  )
}
`
