import React from "react";
import {
  Grid,
  Container,
  Box,
  FormLabel,
  OutlinedInput,
  CssBaseline,
  Typography,
  TextField,
} from "@mui/material";
import Spacer from "../../../../components/Spacer/Spacer";
import { useTranslation } from "react-i18next";

import { styled } from "@mui/material/styles";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export default function setPassword({ password, handleChange }) {
  const { t: translate } = useTranslation();

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#121212", // fondo oscuro
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 2,
        }}
      >
        <CssBaseline enableColorScheme />

        <Typography variant="h5" color="white" gutterBottom>
          {translate("enter_password")}
        </Typography>

        <TextField
          type="password"
          value={password}
          onChange={handleChange}
          placeholder={translate("password")}
          variant="outlined"
          sx={{
            input: { color: "#e0e0e0" },
            label: { color: "#aaa" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#555",
              },
              "&:hover fieldset": {
                borderColor: "#888",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#90caf9",
              },
            },
            backgroundColor: "#1e1e1e",
            borderRadius: 1,
            width: "300px",
          }}
        />
      </Box>
    </>
  );
}
