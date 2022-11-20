const loginBackground = document.getElementById('login-background');
const loginWindow = document.getElementById('login-window');
const signupWindow = document.getElementById('signup-window');
document.getElementById("login").onclick = function() {
  loginBackground.style.display = "block";
  loginWindow.style.display = "block";
  setTimeout(function(){
    loginBackground.style.opacity="1";
    loginWindow.style.opacity="1"
  }, 50);
}
document.getElementById("signup").onclick = function() {
  loginBackground.style.display = "block";
  signupWindow.style.display = "block";
  setTimeout(function(){
    loginBackground.style.opacity="1";
    signupWindow.style.opacity="1"
  }, 50);
}

loginBackground.onclick = function() {
  loginBackground.style.opacity = "0";
  loginWindow.style.opacity = "0";
  signupWindow.style.opacity = "0";
  setTimeout(function(){
    loginBackground.style.display = "none";
    loginWindow.style.display = "none";
    signupWindow.style.display = "none";
  }, 200);
}
