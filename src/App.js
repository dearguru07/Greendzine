import React, { useState } from 'react';
import Login from './login';
import Dashboard from './dashboard';
import ResendOTP from './resendOtp';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showResend, setShowResend] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowResend(false);
  };

  const handleLoginFailure = () => {
    setShowResend(true);
  };

  return (
    <div>
      {!isLoggedIn && !showResend && (
        <Login onSuccess={handleLoginSuccess} onFailure={handleLoginFailure} />
      )}
      {isLoggedIn && <Dashboard />}
      {showResend && <ResendOTP onResend={() => setShowResend(false)} />}
    </div>
  );
}

export default App;