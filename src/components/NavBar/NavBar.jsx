import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: "blur(24px)",
  border: "1px solid",
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: "8px 12px",
}));

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const { i18n, t: translate } = useTranslation();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: "calc(var(--template-frame-height, 0px) + 28px)",
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box
            sx={{ flexGrow: 1, display: "flex", alignItems: "center", px: 0 }}
          >
            <Box
              component="img"
              src="/logo.jpg"
              alt="Logo"
              sx={{
                height: 100,
                width: "auto",
                borderRadius: 2,
                mr: 2, // margin-right
                display: { xs: "none", md: "flex" },
              }}
              onClick={() => navigate("/")}
            />
            <Box
              component="img"
              src="/logo2.png"
              alt="Logo"
              sx={{
                height: 55,
                width: "auto",
                mr: 2, // margin-right
                display: { xs: "flex", md: "none" },
              }}
              onClick={() => navigate("/")}
            />
            <Box sx={{ display: { xs: "none", md: "flex", gap: 8 } }}>
              <Button
                sx={{ textTransform: "none" }}
                variant="text"
                color="error"
                size="small"
                onClick={() => navigate("/")}
              >
                {translate("home")}
              </Button>
            </Box>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1,
              alignItems: "center",
            }}
          >
            <Button
              sx={{ textTransform: "none", fontSize: 10 }}
              color="error"
              variant={i18n.language === "en" ? "contained" : "text"}
              size="small"
              onClick={() => changeLanguage("en")}
            >
              EN
            </Button>
            <Button
              sx={{ textTransform: "none", fontSize: 10 }}
              color="error"
              variant={i18n.language === "ca" ? "contained" : "text"}
              size="small"
              onClick={() => changeLanguage("ca")}
            >
              CA
            </Button>
            <Button
              sx={{ textTransform: "none", fontSize: 10 }}
              color="error"
              variant={i18n.language === "es" ? "contained" : "text"}
              size="small"
              onClick={() => changeLanguage("es")}
            >
              ES
            </Button>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" }, gap: 1 }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: "var(--template-frame-height, 0px)",
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: "background.default" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <MenuItem onClick={() => navigate("/")}>
                  {translate("home")}
                </MenuItem>

                <Divider sx={{ my: 3 }} />
                <MenuItem>
                  <Button
                    sx={{ textTransform: "none" }}
                    color="error"
                    variant={i18n.language === "en" ? "contained" : "outlined"}
                    fullWidth
                    onClick={() => changeLanguage("en")}
                  >
                    EN
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button
                    sx={{ textTransform: "none" }}
                    color="error"
                    variant={i18n.language === "es" ? "contained" : "outlined"}
                    fullWidth
                    onClick={() => changeLanguage("es")}
                  >
                    ES
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button
                    sx={{ textTransform: "none" }}
                    color="error"
                    variant={i18n.language === "ca" ? "contained" : "outlined"}
                    fullWidth
                    onClick={() => changeLanguage("ca")}
                  >
                    CA
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
