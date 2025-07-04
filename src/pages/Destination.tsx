import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Paper,
} from "@mui/material";
import { destinations } from "../Data/Destination";

function Destinations() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ color: "#090040", fontWeight: "bold" }}
      >
        Explore Our Destinations
      </Typography>

      <Paper sx={{ p: 5, backgroundColor: "#f5f0ff" }} variant="outlined">
        <Typography
          variant="h5"
          align="center"
          sx={{ color: "#471396", fontWeight: "bold", mb: 2 }}
        >
          Travel is the only thing you can buy that makes you richer.
        </Typography>
        <Typography align="center" sx={{ color: "#090040" }}>
          This is more than just a trip; it's a sensory feast, a cultural
          immersion, and an adventure for the soul. Discover the hidden riads,
          savor the delicious tagines, and experience the magic of this
          enchanting city. Are you ready to create unforgettable memories?
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#B13BFF", color: "white", px: 4 }}
          >
            Let's Go!
          </Button>
        </Box>
      </Paper>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          justifyContent: "center",
          mt: 6,
        }}
      >
        {destinations.map((dest, index) => (
          <Card key={index} sx={{
             width: 300,
              boxShadow: 4,
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                }, }}>
            <CardMedia
              component="img"
              height="180"
              image={dest.image}
              alt={dest.name}
            />
            <CardContent>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ color: "#471396", fontWeight: "bold" }}
              >
                {dest.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                {dest.description}
              </Typography>

              <Typography fontWeight="bold">
                <Box component="span" sx={{ color: "#090040" }}>
                  Group Price:{" "}
                </Box>
                <Box component="span" sx={{ color: "#FFCC00" }}>
                  {dest.groupPrice}
                </Box>
              </Typography>

              <Typography fontWeight="bold">
                <Box component="span" sx={{ color: "#090040" }}>
                  Individual Price:{" "}
                </Box>
                <Box component="span" sx={{ color: "#B13BFF" }}>
                  {dest.individualPrice}
                </Box>
              </Typography>

              <Button
                variant="outlined"
                size="small"
                href={dest.link}
                sx={{
                  mt: 2,
                  color: "#471396",
                  borderColor: "#471396",
                  "&:hover": {
                    backgroundColor: "#471396",
                    color: "white",
                  },
                }}
              >
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
}

export default Destinations;
