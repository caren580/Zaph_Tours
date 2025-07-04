import { Grid, Card, CardMedia, CardContent, Typography, Container } from "@mui/material";
import { featuredDestinations } from "../Data/FeaturedDestinations";

function FeaturedDestinations() {
  return (
    <Container
    maxWidth="lg"
    sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        py: 6,
    }}>
        <Typography variant="h4" align="center" gutterBottom>
           Featured Destinations
        </Typography>
    <Grid container spacing={3} justifyContent="center">
      {featuredDestinations.map((dest, index) => (
        <Grid key={index} sx={{ display:'flex'}} >
          <Card sx={{
             width: "35rem",
             height: "100%",
             display:"flex",
             flexDirection:"column" ,
             justifyContent:"space-between",
            }}>
            <CardMedia
              component="img"
              height="200"
              image={dest.image}
              alt={dest.name}
            />
            <CardContent>
              <Typography variant="h5"sx={{color:"#471396"}}>{dest.name}</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1, mb: 1 }}>{dest.description}</Typography>
              <Typography variant="subtitle1"sx={{color:"#FFCC00"}} fontWeight="bold">{dest.price}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    </Container>
  );
}

export default FeaturedDestinations;
