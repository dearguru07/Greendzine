import React from 'react';

function ResendOTP({ onResend }) {
  const handleResend = () => {
    alert('A new OTP has been sent.');
    onResend();
  };

  return (
    <div>
      <h1>OTP Expired</h1>
      <p>Click below to resend the OTP:</p>
      <button onClick={handleResend}>Resend OTP</button>
    </div>
  );
}

export default ResendOTP;