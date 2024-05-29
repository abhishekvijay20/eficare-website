import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Grid, Typography, Box, CircularProgress } from '@mui/material';
import { CheckCircleOutline as CheckCircleOutlineIcon } from '@mui/icons-material';
import { styled } from '@mui/system';
import '../../src/global.css';

const FormContainer = styled('div')({
  backgroundColor: '#F7F7F7',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  marginBottom: '20px',
  position: 'relative',
  transition: 'all 0.3s ease',
});

const SubmitButton = styled(Button)({
  backgroundColor: '#2C3342',
  color: 'white',
  '&:hover': {
    backgroundColor: '#1e222d',
  },
});

const LoadingOverlay = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  zIndex: 999,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '10px',
});

const SuccessMessage = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderRadius: '10px',
  backgroundColor: '#F7F7F7',
  transition: 'all 0.3s ease',
});

const EmployerForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    contactNumber: '',
    website: '',
    description: ''
  });
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    if (!validateEmail(formData.email)) {
      setEmailError(true);
      return;
    }
    setEmailError(false);

    setLoading(true);
    
    try {
      await axios.post('http://www.eficare.net/api/v1/submit-employer-form', formData);
      setEmailSent(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit the form');
    } finally {
      setLoading(false);
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <FormContainer>
      {loading && (
        <LoadingOverlay>
          <CircularProgress />
        </LoadingOverlay>
      )}
      {!emailSent ? (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Company Name"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                error={emailError}
                helperText={emailError ? "Please enter a valid email address" : ""}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Contact Number"
                name="contactNumber"
                type="tel"
                value={formData.contactNumber}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Website Link"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                name="description"
                multiline
                rows={4}
                value={formData.description}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="center">
                <SubmitButton variant="contained" size="large" type="submit">
                  Submit
                </SubmitButton>
              </Box>
            </Grid>
          </Grid>
        </form>
      ) : (
        <SuccessMessage>
          <h1 align="center">
            Application sent successfully!
          </h1>
          <p variant="h5" align="center">
            Our Team will contact you soon. 

          </p>
          <CheckCircleOutlineIcon style={{ fontSize: '48px', marginBottom: '16px', color: '#5EC0DF' }} />
        </SuccessMessage>
      )}
    </FormContainer>
  );
};

export default EmployerForm;
