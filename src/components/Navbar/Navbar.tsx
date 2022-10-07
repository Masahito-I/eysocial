import { Search } from "@mui/icons-material";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import { FC } from "react";

interface Props {
    
}

const Navbar: FC<Props> = (props) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" position="static" sx={{ borderBottom: 1, bgcolor:'#282c34;' }}>
        <Container maxWidth="xl">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              EySocial
            </Typography>
            <Search/>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default Navbar;