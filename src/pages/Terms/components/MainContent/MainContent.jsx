import React from "react";
import { Typography, Box, Link as MuiLink } from "@mui/material";
import { useTranslation } from "react-i18next";
import Spacer from "../../../../components/Spacer/Spacer";

const MainContent = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {t("terms.title")}
      </Typography>

      <Typography variant="body1">{t("terms.lastUpdated")}</Typography>
      <Spacer size={1} />

      <Typography variant="h6" gutterBottom>
        {t("terms.section1.title")}
      </Typography>
      <Typography variant="body1">{t("terms.section1.content")}</Typography>
      <Spacer size={1} />

      <Typography variant="h6" gutterBottom>
        {t("terms.section2.title")}
      </Typography>
      <Typography variant="body1">{t("terms.section2.content")}</Typography>
      <Spacer size={1} />

      <Typography variant="h6" gutterBottom>
        {t("terms.section3.title")}
      </Typography>
      <Typography variant="body1">{t("terms.section3.content")}</Typography>
      <Spacer size={1} />

      <Typography variant="h6" gutterBottom>
        {t("terms.section4.title")}
      </Typography>
      <Typography variant="body1">{t("terms.section4.content")}</Typography>
      <Spacer size={1} />

      <Typography variant="h6" gutterBottom>
        {t("terms.section5.title")}
      </Typography>
      <Typography variant="body1">{t("terms.section5.content")}</Typography>
      <Spacer size={1} />

      <Typography variant="h6" gutterBottom>
        {t("terms.section6.title")}
      </Typography>
      <Typography variant="body1">{t("terms.section6.content")}</Typography>
      <Spacer size={1} />

      <Typography variant="h6" gutterBottom>
        {t("terms.section7.title")}
      </Typography>
      <Typography variant="body1">{t("terms.section7.content")}</Typography>
      <Spacer size={1} />

      <Typography variant="h6" gutterBottom>
        {t("terms.section8.title")}
      </Typography>
      <Typography variant="body1">
        {t("terms.section8.content")}
        <MuiLink href="mailto:info@extintorespanoramica.com">
          info@extintorespanoramica.com
        </MuiLink>
      </Typography>
    </Box>
  );
};

export default MainContent;
