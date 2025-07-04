import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Link,
} from "@mui/material";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdAccessTimeFilled } from "react-icons/md";

function ContactPage() {
  return (
    <Box sx={{ py: 8, backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom sx={{ color: "#471396", fontWeight: "bold" }}>
          Contact Us
        </Typography>

        <Typography align="center" sx={{ mb: 4 }}>
          We'd love to hear from you! Reach out with any questions or feedback.
        </Typography>

        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 4 }}>
          
    
          <Paper sx={{ p: 4, flex: 1 }}>
            <Typography variant="h6" gutterBottom sx={{ color: "#090040" }}>
              Send a Message
            </Typography>
            <Box component="form">
              <TextField fullWidth label="Name" margin="normal" required />
              <TextField fullWidth label="Email" type="email" margin="normal" required />
              <TextField fullWidth label="Subject" margin="normal" required />
              <TextField
                fullWidth
                label="Message"
                margin="normal"
                required
                multiline
                rows={4}
              />
              <Button
                variant="contained"
                sx={{ mt: 2, backgroundColor: "#B13BFF", color: "white" }}
                type="submit"
              >
                Send Message
              </Button>
            </Box>
          </Paper>


          <Paper sx={{ p: 4, flex: 1, backgroundColor: "#fff" }}>
            <Typography variant="h6" gutterBottom sx={{ color: "#090040" }}>
              Contact Information
            </Typography>

            <Box display="flex" alignItems="center" mb={1}>
              <MdEmail />
              <Typography>info@zaphtours.com</Typography>
            </Box>

            <Box display="flex" alignItems="center" mb={1}>
              <FaPhoneAlt  />
              <Typography>+254 712 345 678</Typography>
            </Box>

            <Box display="flex" alignItems="center" mb={3}>
              <IoLocation  />
              <Typography>Upperhill, Nairobi, Kenya</Typography>
            </Box>

            <Typography variant="h6" gutterBottom sx={{ color: "#090040" }}>
              Office Hours
            </Typography>

            <Box display="flex" alignItems="center" mb={3}>
              <MdAccessTimeFilled />
              <Typography>Mon - Fri: 9am - 5pm</Typography>
            </Box>

            <Typography variant="h6" gutterBottom sx={{ color: "#090040" }}>
              Follow Us
            </Typography>

            <Box display="flex" gap={2}>
              <Link href="#" color="inherit">< FaFacebook /></Link>
              <Link href="#" color="inherit"><FaInstagram  /></Link>
              <Link href="#" color="inherit"><FaSquareXTwitter  /></Link>
              <Link href="#" color="inherit"><FaLinkedin  /></Link>
            </Box>
          </Paper>
        </Box>


        <Box sx={{ mt: 6 }}>
          <Paper sx={{ height: 400 }}>
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.865274432428!2d36.81212151432352!3d-1.2920655990558394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10dc0b6b6abf%3A0x33f56e36fba14df!2sUpperhill%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1628962637123!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}

export default ContactPage;
