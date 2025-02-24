import React from "react";

const AppLayOut=()=>{
  function generateOTP() {
    const otp = generateOTP();
    alert(`Your OTP is: ${otp}`);
    return Math.floor(100000 + Math.random() * 900000);
  }
  // generateOTP()
  function validateOTP(enteredOTP) {
    const storedOTP = localStorage.getItem('otp');
    return enteredOTP === storedOTP;
  }
  setTimeout(() => {
    localStorage.removeItem('otp');
    alert('OTP expired. Please request a new one.');
  }, 30000);
  return <div>
    <div id="login">
  <input type="text" id="otpInput" placeholder="Enter OTP" />
  <button onClick={validateOTP}>Submit</button>
</div>
  </div>
}
export default AppLayOut;