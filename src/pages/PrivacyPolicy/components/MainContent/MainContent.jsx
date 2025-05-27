import React from "react";
import i18n from "i18next";
import { Typography, Box, Link as MuiLink } from "@mui/material";
import { useTranslation } from "react-i18next";

const MainContent = () => {
  const { t: translate } = useTranslation();

  return (
    <>
      <Typography variant="h4" gutterBottom>
        {translate("privacy_policy_title")}
      </Typography>

      <Typography variant="body1">{translate("intro")}</Typography>

      <Box mt={2}>
        <Typography variant="h6" gutterBottom>
          {translate("responsible")}
        </Typography>
        <Typography variant="body1">
          <strong>{translate("responsible_name")}</strong> Extintores Panorámica
          AJ, S.L
          <br />
          <strong>{translate("responsible_nif")}</strong> B75727412
          <br />
          <strong>{translate("responsible_address")}</strong> Av. Castellón 3,
          Es: L, Pl: 0, Pt: 9 - 12320 Sant Jordi, Castellón
          <br />
          <strong>{translate("responsible_email")}</strong>{" "}
          <MuiLink href="mailto:info@extintorespanoramica.com">
            info@extintorespanoramica.com
          </MuiLink>
        </Typography>
      </Box>

      <Box mt={2}>
        <Typography variant="h6" gutterBottom>
          {translate("purpose")}
        </Typography>
        <Typography variant="body1">{translate("purpose_content")}</Typography>
      </Box>

      <Box mt={2}>
        <Typography variant="h6" gutterBottom>
          {translate("legal")}
        </Typography>
        <Typography variant="body1">{translate("legal_content")}</Typography>
      </Box>

      <Box mt={2}>
        <Typography variant="h6" gutterBottom>
          {translate("data")}
        </Typography>
        <Typography variant="body1">{translate("data_content")}</Typography>
      </Box>

      <Box mt={2}>
        <Typography variant="h6" gutterBottom>
          {translate("recipients")}
        </Typography>
        <Typography variant="body1">
          {translate("recipients_content_1")}
        </Typography>
        <Typography variant="body1">
          {translate("recipients_content_2")}
          <br />
          {translate("recipients_content_3")}
          <br />
          {translate("recipients_content_4")}{" "}
          <a
            href="https://www.emailjs.com/legal/privacy-policy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.emailjs.com/legal/privacy-policy/
          </a>
        </Typography>
      </Box>

      <Box mt={2}>
        <Typography variant="h6" gutterBottom>
          {translate("retention")}
        </Typography>
        <Typography variant="body1">
          {translate("retention_content")}
        </Typography>
      </Box>

      <Box mt={2}>
        <Typography variant="h6" gutterBottom>
          {translate("rights")}
        </Typography>
        <Typography variant="body1">
          {translate("rights_content")}{" "}
          <a
            href="https://www.aepd.es"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.aepd.es
          </a>
        </Typography>
      </Box>

      <Box mt={2}>
        <Typography variant="h6" gutterBottom>
          {translate("security")}
        </Typography>
        <Typography variant="body1">{translate("security_content")}</Typography>
      </Box>

      <Box mt={2}>
        <Typography variant="h6" gutterBottom>
          {translate("changes")}
        </Typography>
        <Typography variant="body1">
          {translate("changes_content_1")}
          <br />
          {translate("changes_content_2")}
          {new Date("2025", 4, 22)
            .toLocaleDateString(i18n.language, {
              month: "short",
              day: "2-digit",
              year: "numeric",
            })
            .replace(/,/g, "")}
        </Typography>
      </Box>
    </>
  );
};

export default MainContent;
