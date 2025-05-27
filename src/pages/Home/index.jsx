import { useEffect } from "react";
import { Container, Box } from "@mui/material";
import NavBar from "../../components/NavBar/NavBar";
import CssBaseline from "@mui/material/CssBaseline";
import Spacer from "../../components/Spacer/Spacer";
import MainContent from "./components/MainContent/MainContent";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url('https://www.transparenttextures.com/patterns/binding-dark.png')`,
          backgroundColor: "#000000",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          opacity: 0.9,
          zIndex: -1,
        },
      }}
      /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
    >
      {/* Aquí van tus <GithubProjectsGridFixed /> o el contenido */}
      <Box sx={{ minHeight: "100vh" }}>
        <NavBar />
        <CssBaseline enableColorScheme />

        <Container
          maxWidth="lg"
          component="main"
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Spacer size={7} />

          <MainContent />
          <Spacer size={2} />
        </Container>
        <Footer showSubscribe={false} />
      </Box>
    </Box>
  );
}
