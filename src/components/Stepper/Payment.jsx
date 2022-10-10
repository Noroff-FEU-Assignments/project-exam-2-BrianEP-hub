import React, { useState } from 'react'
import { Container, Paper, Stepper } from '@mui/material';

const Payment = () => {

  const [checkoutStep, setCheckoutStep] = useState()

  return (
    <div className="checkout">
      <Container>
        <Paper elevation={3}>
          <Typography align="center" variant="h5" gutterBottom>
            Checkout
          </Typography>
          {checkoutStep !== 'confirmation' && (
            <Stepper
             activeStep={steps.indexOf(checkoutStep)}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
             </Stepper>
          )}
        </Paper>
      </Container>
    </div>
  )
}

export default Payment