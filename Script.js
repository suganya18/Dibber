let timeLeft = 3 * 60; 
let timerInterval;
function handleSubmit(event) {
  debugger
  event.preventDefault();
  alert("submitted successfully!");
}
function SendOTP(){
  timeLeft = 3 * 60;
  document.getElementById('SendOTP_Btn').disabled = true;
  if(document.getElementById('SendOTP_Btn').value == "Resend OTP"){
  
  }
  else{
    document.getElementById('SendOTP_Btn').value = "Resend OTP";
    document.getElementById("sendotp-time").style.display ='block'; 
  }
  timerInterval = setInterval(updateCountdown, 1000);
}

function ValidateOTP(){
  if(document.getElementById("otp").value == 1234){ 
    document.getElementById("submit").disabled = false;
    document.getElementById("submit").style.backgroundColor = '#064D00';
    document.getElementById("submit").style.color = '#ffff';
    document.getElementById("sendotp-failure").style.display ='none';
    document.getElementById("sendotp-time").style.display ='none';
    document.getElementById("tickMark").style.display = 'inline';
    document.getElementById('SendOTP_Btn').value = "Send OTP";
  }else{
    document.getElementById("sendotp-failure").style.display ='block';
    document.getElementById("submit").disabled = true;
    document.getElementById("tickMark").style.display = 'none';
  }
}

function updateCountdown() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  document.getElementById("sendotp-time").textContent = `resend in ${formattedTime}`;
  timeLeft--;
  if (timeLeft < 0) {
      clearInterval(timerInterval);
      document.getElementById('SendOTP_Btn').disabled = false;
      document.getElementById("sendotp-time").textContent = "Time's up!";
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const otpInput = document.getElementById('otp');
  
  otpInput.addEventListener('input', () => {
      otpInput.value = otpInput.value.replace(/\D/g, '');
  });
});
