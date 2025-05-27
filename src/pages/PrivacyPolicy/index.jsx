import { useEffect } from "react";
import { CssBaseline, Container, Box } from "@mui/material";
import NavBar from "../../components/NavBar/NavBar";
import Spacer from "../../components/Spacer/Spacer";
import MainContent from "./components/MainContent/MainContent";
import Footer from "../../components/Footer/Footer";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Box
      sx={{
        background:
          "linear-gradient(135deg,rgb(255, 255, 255) 0%,rgb(226, 230, 236) 100%)",
        minHeight: "100vh",
      }}
    >
      <NavBar />
      <CssBaseline enableColorScheme />
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Spacer size={5} />

        <MainContent />
        <Spacer size={1} />
      </Container>
      <Footer showSubscribe={false} />
    </Box>
  );
};

export default PrivacyPolicy;
