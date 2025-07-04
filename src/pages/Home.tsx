import { Box } from "@mui/material";
import HeroSection from '../components/Herosection';
import About from "../components/About";
import FeaturedDestinations from "../components/FeaturedDestinations";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/NewsLetter";
function Home() {
  return (
    <Box>
      <HeroSection />
      <About />
      <FeaturedDestinations />
      <Testimonials />
      <Newsletter />
    </Box>
  );
}
export default Home;