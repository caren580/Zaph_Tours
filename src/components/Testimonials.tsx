import { Grid, Card, CardContent, Typography, Container, Rating } from "@mui/material";
import { testimonials } from "../Data/Testimonials";

function Testimonials() {
  return (
    <Container sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
            Hear From Our Happy Clients
        </Typography>

    <Grid container spacing={3} justifyContent="center">
      {testimonials.map((testimonial, index) => (
        <Grid  key={index}>
          <Card sx={{ 
            backgroundColor: "#f9f9f9",
            height: "100%",
            p: 3,
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
            boxShadow:3,
             }}>
            <CardContent>
                 <Rating
                  name={`rating-${index}`}
                  value={testimonial.rating}
                  readOnly
                  size="medium"
                />
              <Typography variant="body1" color="primary" sx={{ fontStyle: "italic" }}>
                "{testimonial.quote}"
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" fontWeight="bold" sx={{ mt: 2 }}>
                - {testimonial.name}
              </Typography>
              <Typography variant="caption" color="success.main">
                {testimonial.location}
              </Typography>
             
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    </Container>
  );
}

export default Testimonials;
