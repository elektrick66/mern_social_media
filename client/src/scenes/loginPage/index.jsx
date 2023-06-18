import { Box, IconButton, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

import { DarkMode, LightMode } from "@mui/icons-material";
import { setMode } from "state";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const theme = useTheme();

  const dispatch = useDispatch();
  const dark = theme.palette.neutral.dark;


  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Box></Box>
        <Typography alignSelf= "center" fontWeight="bold" fontSize="32px" color="primary">
          Sociopedia
        </Typography>

        <IconButton onClick={()=> dispatch(setMode())}>
          {theme.palette.mode === "dark" ? (
            <DarkMode sx={{ fontsize: "25px" }} />
          ) : (
            <LightMode sx={{ color: dark, fontSize: "25px" }} />
          )}
        </IconButton>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to Socipedia, the Social Media for Sociopaths!
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;