import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed email:", email);
    setEmail("");
  };

  return (
    <Box sx={{ backgroundColor: "#f0f4ff", py: 6 }}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Stay in the Loop
        </Typography>
        <Typography align="center" sx={{ mb: 3 }}>
          Sign up for weekly safari and adventure updates.
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            gap: 2,
            maxWidth: 600,
            mx: "auto",
          }}
        >
          <TextField
            label="Email Address"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ px: 4, backgroundColor: "#FFCC00", color: "white" }}
          >
            Subscribe
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Newsletter;
