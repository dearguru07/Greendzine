import React, { useState, useEffect } from 'react';

function Login({ onSuccess, onFailure }) {
  const [otp, setOtp] = useState('');
  const [generatedOTP, setGeneratedOTP] = useState('');
  const [timeLeft, setTimeLeft] = useState(30);

  // Generate OTP on component mount
  useEffect(() => {
    const newOTP = Math.floor(100000 + Math.random() * 900000);
    setGeneratedOTP(newOTP.toString());
    alert(`Your OTP is: ${newOTP}`); // Simulate OTP delivery
  }, []);

  // Timer for OTP expiry
  useEffect(() => {
    if (timeLeft === 0) {
      onFailure();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, onFailure]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp === generatedOTP) {
      onSuccess();
    } else {
      alert('Invalid OTP');
      onFailure();
    }
  };

  return (
    <div>
      <h1>OTP Login</h1>
      <p>Time remaining: {timeLeft} seconds</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;