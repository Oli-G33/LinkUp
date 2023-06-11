import React, { useState } from 'react';
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Alert,
  Snackbar
} from '@mui/material';
import Form from './Form';

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');
  const [showAlert, setShowAlert] = useState(true);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <Box position="relative">
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          LinkUp
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? '50%' : '93%'}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: '1.5rem' }}>
          Link up with friends and the world!
        </Typography>

        <Snackbar
          open={showAlert}
          autoHideDuration={10000}
          onClose={handleCloseAlert}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert onClose={handleCloseAlert} severity="error">
            Due to current hosting settings, please allow approx. 30 seconds for
            the backend server to start. Thank you for your patience!
          </Alert>
        </Snackbar>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
