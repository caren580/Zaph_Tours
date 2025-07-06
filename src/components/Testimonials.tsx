import {
  Box,
  Card,
  CardContent,
  Typography,
  Container,
  Rating,
} from "@mui/material";
import { testimonials } from "../Data/Testimonials";

function Testimonials() {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Hear From Our Happy Clients
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap", 
          justifyContent: "center",
          gap: 4,
          mt: 4,
        }}
      >
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            sx={{
              backgroundColor: "#f9f9f9",
              width: 300,
              p: 3,
              textAlign: "center",
              boxShadow: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardContent>
              <Rating
                name={`rating-${index}`}
                value={testimonial.rating}
                readOnly
                size="medium"
              />
              <Typography
                variant="body1"
                color="primary"
                sx={{ fontStyle: "italic", mt: 2 }}
              >
                "{testimonial.quote}"
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                fontWeight="bold"
                sx={{ mt: 2 }}
              >
                - {testimonial.name}
              </Typography>
              <Typography variant="caption" color="success.main">
                {testimonial.location}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
}

export default Testimonials;
