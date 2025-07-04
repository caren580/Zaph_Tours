import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { BsGlobeEuropeAfrica } from "react-icons/bs";

function Header() {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#090040" }}>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit">
          <BsGlobeEuropeAfrica />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Zaph Tours
        </Typography>

        {/* NavLinks */}
        <Stack direction="row" spacing={2}>
          <Button color="inherit"  component={RouterLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/destinations">
            Destination
          </Button>
          <Button color="inherit" component={RouterLink} to="/triptypes">
            Trip types
          </Button>
          <Button color="inherit" component={RouterLink} to="/contactus">
            Contact us
          </Button>
          
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Header;