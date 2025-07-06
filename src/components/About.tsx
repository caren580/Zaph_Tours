import { Typography, Box } from "@mui/material";

function About() {
  return (
    <Box sx={{ textAlign: "center", px: 2 }}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body2">
        Zaph Tours is your premier guide to unforgettable adventures in Kenya.
        We are passionate about crafting personalized journeys that immerse you
        in the heart of Kenya's culture and natural beauty. Our expert guides,
        with years of experience, will lead you on thrilling wildlife safaris in
        Tsavo National Park, or help you discover the hidden gems of Coastal
        Kenya. We pride ourselves on creating unique, authentic experiences,
        tailored to your individual interests and preferences. From the moment
        you book with us, you'll experience our commitment to exceptional
        customer service, 24/7 support, and transparent pricing. Let us help you
        create your dream trip!
      </Typography>
    </Box>
  );
}

export default About;
