import { Box, Container, Typography, Link, IconButton } from "@mui/material";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { BsGlobeEuropeAfrica } from "react-icons/bs";
function Footer() {
  return (
    <Box sx={{ backgroundColor: "#090040", color: "#fff", py: 4, mt: 6 }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            gap: 4,
            mb: 4,
          }}
        >
          <Box>
            <Typography variant="h6" gutterBottom sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <BsGlobeEuropeAfrica />
              Zaph Tours
            </Typography>
            <Typography variant="body2">
              Best Safaris and Adventures across Kenya.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link href="#" color="inherit" underline="hover">Home</Link>
              <Link href="#" color="inherit" underline="hover">Destinations</Link>
              <Link href="#" color="inherit" underline="hover">Trip Types</Link>
              <Link href="#" color="inherit" underline="hover">Contact Us</Link>
            </Box>
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2"  sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <MdEmail /> info@zaphtours.com</Typography>
            <Typography variant="body2" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
               <FaPhoneAlt /> +254 712 345 678</Typography>

            <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
              <IconButton color="inherit" size="small">
                <FaFacebook />
              </IconButton>
              <IconButton color="inherit" size="small">
                <FaInstagram />
              </IconButton>
              <IconButton color="inherit" size="small">
                <FaSquareXTwitter />
              </IconButton>
            </Box>
          </Box>
        </Box>

        
        <Box sx={{ textAlign: "center", pt: 2, borderTop: "1px solid #444" }}>
          <Typography variant="body2" color="grey.500">
            &copy; {new Date().getFullYear()} Zaph Tours. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
