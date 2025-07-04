import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Pagination,
} from "@mui/material";
import { tripPackages } from "../Data/TripTypes";

function TripTypes() {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 2;
  const totalPages = Math.ceil(tripPackages.length / cardsPerPage);

  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentTrips = tripPackages.slice(startIndex, startIndex + cardsPerPage);

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f4f6f8", paddingTop: "64px" }}>
      
      <Paper
        sx={{
          backgroundColor: "#090040",
          color: "white",
          py: 6,
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ fontWeight: "bold" }} gutterBottom>
            Discover Your Perfect Trip
          </Typography>
          <Typography variant="h6">
            From romantic getaways to thrilling adventures  find your ideal escape
          </Typography>
        </Container>
      </Paper>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 4,
          }}
        >
          {currentTrips.map((trip, index) => (
            <Card
              key={index}
              sx={{
                height: 600,
                display: "flex",
                flexDirection: "column",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: 4,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="250"
                image={trip.images}
                alt={trip.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", color: "#471396", mb: 1 }}
                >
                  {trip.title}
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {trip.description}
                </Typography>

                <Box sx={{ mb: 2 }}>
                  <Chip
                    label={`Price: ${trip.price}`}
                    sx={{
                      backgroundColor: "#B13BFF",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  />
                  {trip.offer && (
                    <Chip
                      label={trip.offer}
                      sx={{
                        ml: 2,
                        backgroundColor: "#FFCC00",
                        color: "#090040",
                        fontWeight: "bold",
                      }}
                    />
                  )}
                </Box>

                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#471396",
                    color: "white",
                    borderRadius: "30px",
                    mt: 2,
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "#090040",
                    },
                  }}
                >
                  View Gallery
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>

  
        <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            size="large"
            sx={{
              "& .MuiPaginationItem-root": {
                "&.Mui-selected": {
                  backgroundColor: "#B13BFF",
                  color: "white",
                },
              },
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}

export default TripTypes;
