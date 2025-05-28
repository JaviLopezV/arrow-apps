import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Link,
  Box,
  Link as MuiLink,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const projects = [
  {
    title: "Proyecto 1",
    description:
      "Descripción breve del Proyecto 3. Aplicación móvil con React Native Native Native Native.",
    image:
      "https://cdn.prod.website-files.com/5f5a53e153805db840dae2db/64e79ca5aff2fb7295bfddf9_github-que-es.jpg",
    url: "https://github.com/JaviLopezV/empresa-pci",
    website: "https://empresa-pci.vercel.app/",
  },
  {
    title: "Proyecto 2",
    description:
      "Descripción breve del Proyecto 3. Aplicación móvil con React Native Native Native Native.",
    image:
      "https://cdn.prod.website-files.com/5f5a53e153805db840dae2db/64e79ca5aff2fb7295bfddf9_github-que-es.jpg",
    url: "https://github.com/JaviLopezV/empresa-pci",
    website: "https://empresa-pci.vercel.app/",
  },
  {
    title: "Proyecto 3",
    description:
      "Descripción breve del Proyecto 3. Aplicación móvil con React Native Native Native Native.",
    image:
      "https://cdn.prod.website-files.com/5f5a53e153805db840dae2db/64e79ca5aff2fb7295bfddf9_github-que-es.jpg",
    url: "https://github.com/JaviLopezV/empresa-pci",
    website: "https://empresa-pci.vercel.app/",
  },
  {
    title: "Proyecto 4",
    description:
      "Descripción breve del Proyecto 3. Aplicación móvil con React Native Native Native Native.",
    image:
      "https://cdn.prod.website-files.com/5f5a53e153805db840dae2db/64e79ca5aff2fb7295bfddf9_github-que-es.jpg",
    url: "https://github.com/JaviLopezV/empresa-pci",
    website: "https://empresa-pci.vercel.app/",
  },
];

const StyledCard = styled(Card)(({ theme }) => ({
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: theme.shadows[6],
  },
  height: "100%",
  display: "flex",
  borderRadius: "10%",
  flexDirection: "column",
}));

export default function GithubProjects() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          py: 3,
          px: 2,
        }}
      >
        <Grid container spacing={4} columns={12}>
          {projects.map((project, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <Box height="100%" display="flex">
                <Link
                  href={project.url}
                  underline="none"
                  target="_blank"
                  rel="noopener"
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <StyledCard>
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.image}
                      alt={project.title}
                    />
                    <CardContent style={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="div">
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {project.description}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <MuiLink
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.website}
                        </MuiLink>
                      </Typography>
                    </CardContent>
                  </StyledCard>
                </Link>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
