import { Box, Typography, Button } from "@mui/material";

function HeroSection() {
  return (
    <Box
      sx={{
        backgroundImage: "url(/assets/safari.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#fff",
        position: "relative",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          padding: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: "bold" }}>
          Best Safaris and Adventures
        </Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>
          Explore Kenya with Zaph Tours
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 4, backgroundColor: "#471396", color: "white" }}
        >
          Explore Packages
        </Button>
      </Box>
    </Box>
  );
}

export default HeroSection;
