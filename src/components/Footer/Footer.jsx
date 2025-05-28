import * as React from "react";

import {
  Box,
  Container,
  IconButton,
  Typography,
  Stack,
  Link as MuiLink,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/X";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

// import SitemarkIcon from "./SitemarkIcon";

function Copyright() {
  return (
    <Typography variant="body2" sx={{ mt: 1, color: "white" }}>
      {"Copyright © Javier López Villanueva - "}
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();

  return (
    <React.Fragment>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 5 },
          py: { xs: 2 },
          textAlign: { sm: "center", md: "left" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            pt: { xs: 4, sm: 4 },
            width: "100%",
            borderTop: "1px solid",
            borderColor: "divider",
          }}
        >
          <div>
            <MuiLink
              color="text.secondary"
              variant="body2"
              onClick={() => navigate("/privacy-policy")}
              sx={{ color: "white" }}
            >
              {translate("privacy_policy_title")}
            </MuiLink>
            <Typography
              sx={{ display: "inline", mx: 0.5, opacity: 0.5, color: "white" }}
            >
              &nbsp;•&nbsp;
            </Typography>
            <MuiLink
              color="text.secondary"
              variant="body2"
              onClick={() => navigate("/terms-of-service")}
              sx={{ color: "white" }}
            >
              {translate("terms.title")}
            </MuiLink>
            <Copyright />
          </div>
          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            sx={{ justifyContent: "left", color: "text.secondary" }}
          >
            <IconButton
              color="default"
              size="small"
              href="https://github.com/JaviLopezV"
              aria-label="GitHub"
              sx={{ alignSelf: "center", backgroundColor: "white" }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              color="default"
              size="small"
              href="https://x.com/MaterialUI"
              aria-label="X"
              sx={{ alignSelf: "center", backgroundColor: "white" }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              color="default"
              size="small"
              href="https://www.linkedin.com/company/mui/"
              aria-label="LinkedIn"
              sx={{ alignSelf: "center", backgroundColor: "white" }}
            >
              <LinkedInIcon />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </React.Fragment>
  );
}
